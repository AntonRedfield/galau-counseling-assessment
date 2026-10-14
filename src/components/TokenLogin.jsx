import React, { useState } from 'react';
import { KeyRound, ArrowRight, ShieldAlert, Lock, User, ArrowLeft, HeartHandshake } from 'lucide-react';
import { validateToken, validateAdminCredentials } from '../services/storageService';

export function TokenLogin({ onLoginSuccess }) {
  const [step, setStep] = useState('token');
  const [tokenInput, setTokenInput] = useState('');
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTokenSubmit = async (e) => {
    e.preventDefault();
    const cleanToken = tokenInput.trim();
    if (!cleanToken) {
      setErrorMessage('Silakan isi kolom token terlebih dahulu.');
      return;
    }
    if (cleanToken.toUpperCase() === 'MASTER') {
      setErrorMessage('');
      setStep('admin_login');
      return;
    }
    setLoading(true);
    setErrorMessage('');
    try {
      const res = await validateToken(cleanToken.toLowerCase());
      if (res.success) {
        onLoginSuccess(res.data);
      } else {
        setErrorMessage(res.message);
      }
    } catch {
      setErrorMessage('Gagal memvalidasi token. Silakan coba kembali.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdminAuthSubmit = async (e) => {
    e.preventDefault();
    if (!adminId.trim() || !adminPassword.trim()) {
      setErrorMessage('Silakan isi ID dan kata sandi admin.');
      return;
    }
    setLoading(true);
    setErrorMessage('');
    try {
      const res = await validateAdminCredentials(adminId, adminPassword);
      if (res.success) {
        onLoginSuccess(res.data);
      } else {
        setErrorMessage(res.message);
      }
    } catch {
      setErrorMessage('Terjadi kendala saat memverifikasi kredensial admin.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickToken = (code) => {
    setTokenInput(code);
    setErrorMessage('');
    if (code.toUpperCase() === 'MASTER') {
      setStep('admin_login');
    }
  };

  return (
    <div style={{ maxWidth: '480px', margin: '2rem auto' }}>
      <div className="glass-card" style={{ padding: '2rem 1.5rem' }}>

        {errorMessage && (
          <div style={{
            background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#B91C1C',
            borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.85rem', marginBottom: '1.25rem',
            fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <ShieldAlert size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* TOKEN INPUT */}
        {step === 'token' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '48px', height: '48px', background: 'var(--primary-light)', color: 'var(--primary)',
              borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <KeyRound size={24} />
            </div>

            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.3rem', fontWeight: 800 }}>
              Masuk dengan Token
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Masukkan token yang diberikan oleh Guru BK untuk memulai asesmen.
            </p>

            <form onSubmit={handleTokenSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label className="form-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'left', display: 'block' }}>
                  KODE TOKEN AKSES
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={tokenInput}
                  onChange={(e) => { setTokenInput(e.target.value); setErrorMessage(''); }}
                  placeholder="Masukkan token..."
                  style={{
                    fontSize: '1.3rem', letterSpacing: '0.12em', textAlign: 'center',
                    fontWeight: 700, fontFamily: 'monospace', padding: '0.75rem'
                  }}
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading || !tokenInput.trim()}
                style={{ width: '100%', marginBottom: '1.25rem' }}
              >
                {loading ? 'Memvalidasi...' : <><span>Lanjutkan</span><ArrowRight size={16} /></>}
              </button>
            </form>

            {/* Quick tokens */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', textAlign: 'left' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                TOKEN UJI COBA:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <span className="token-chip" onClick={() => handleQuickToken('a7b3x9')}>a7b3x9</span>
                <span className="token-chip" onClick={() => handleQuickToken('k4m8z1')}>k4m8z1</span>
                <span className="token-chip" onClick={() => handleQuickToken('r2t9w5')}>r2t9w5</span>
                <span className="token-chip" onClick={() => handleQuickToken('MASTER')}
                  style={{ background: '#FFFBEB', borderColor: '#F59E0B', color: '#92400E' }}>
                  MASTER
                </span>
              </div>
              <div style={{
                background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.65rem',
                fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem'
              }}>
                <HeartHandshake size={13} color="var(--accent)" />
                <span>Token <code>MASTER</code> untuk akses panel konselor.</span>
              </div>
            </div>
          </div>
        )}

        {/* ADMIN LOGIN */}
        {step === 'admin_login' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div style={{
                width: '48px', height: '48px', background: '#FEF3C7', color: '#D97706',
                borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '0.75rem'
              }}>
                <Lock size={24} />
              </div>

              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                Masuk Administrator
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                Masukkan ID dan kata sandi untuk mengakses panel konseling.
              </p>
            </div>

            <form onSubmit={handleAdminAuthSubmit}>
              <div className="form-group">
                <label className="form-label">ID ADMIN</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text" className="form-input" value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    placeholder="admin" style={{ paddingLeft: '2.2rem' }} autoFocus
                  />
                  <User size={15} style={{ position: 'absolute', left: '10px', top: '12px', color: 'var(--text-muted)' }} />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                <label className="form-label">KATA SANDI</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="password" className="form-input" value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="••••••••" style={{ paddingLeft: '2.2rem' }}
                  />
                  <Lock size={15} style={{ position: 'absolute', left: '10px', top: '12px', color: 'var(--text-muted)' }} />
                </div>
                <span className="form-hint">Default: <code>admin</code> / <code>admin123</code></span>
              </div>

              <button
                type="submit" className="btn btn-primary btn-lg"
                disabled={loading || !adminId.trim() || !adminPassword.trim()}
                style={{ width: '100%', marginBottom: '0.75rem' }}
              >
                {loading ? 'Memverifikasi...' : <><span>Buka Panel Konselor</span><ArrowRight size={16} /></>}
              </button>

              <button
                type="button" className="btn btn-secondary"
                onClick={() => { setStep('token'); setTokenInput(''); setErrorMessage(''); }}
                style={{ width: '100%' }}
              >
                <ArrowLeft size={14} /> <span>Kembali</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
