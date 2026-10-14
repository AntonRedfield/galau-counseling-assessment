import React, { useState } from 'react';
import { UserCheck, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

function calculateAge(birthDateString) {
  if (!birthDateString) return '';
  const birth = new Date(birthDateString);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age > 0 ? age : 0;
}

export function IdentityForm({ tokenData, onProceed }) {
  const [formData, setFormData] = useState({
    fullName: tokenData.studentName || '',
    birthDate: tokenData.birthDate || '2002-01-15',
    age: tokenData.age || 24,
    occupation: tokenData.occupation || tokenData.className || 'Umum',
    gender: 'Laki-laki',
    phone: '',
    initialNotes: '',
    assessmentMode: 'adaptive',
    scaleInterface: 'shuffle',
    consentAgreed: false
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'birthDate') {
      setFormData({ ...formData, birthDate: value, age: calculateAge(value) });
      return;
    }
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) { setErrorMsg('Nama lengkap wajib diisi.'); return; }
    if (!formData.birthDate) { setErrorMsg('Tanggal lahir wajib diisi.'); return; }
    if (!formData.occupation.trim()) { setErrorMsg('Pekerjaan / Instansi wajib diisi.'); return; }
    if (!formData.consentAgreed) { setErrorMsg('Anda harus menyetujui persetujuan sebelum memulai.'); return; }
    setErrorMsg('');
    onProceed({ ...formData, token: tokenData.token });
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="glass-card">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.85rem' }}>
          <div style={{
            width: '38px', height: '38px', background: 'var(--primary-light)', borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
          }}>
            <UserCheck size={20} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.2rem' }}>Identitas & Persetujuan</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
              Token: <strong style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{tokenData.token}</strong>
            </p>
          </div>
        </div>

        {errorMsg && (
          <div style={{
            background: '#FEF2F2', border: '1px solid #F87171', color: '#B91C1C',
            borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.85rem', marginBottom: '1.25rem', fontSize: '0.85rem'
          }}>
            ⚠️ {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Identity Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '0.75rem' }}>
            <div className="form-group">
              <label className="form-label">Nama Lengkap *</label>
              <input type="text" name="fullName" className="form-input" placeholder="Budi Santoso" value={formData.fullName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label">Tanggal Lahir *</label>
              <input type="date" name="birthDate" className="form-input" value={formData.birthDate} onChange={handleChange} required />
              <span className="form-hint">Usia: <strong>{formData.age ? `${formData.age} Tahun` : '-'}</strong></span>
            </div>

            <div className="form-group">
              <label className="form-label">Pekerjaan / Instansi *</label>
              <input type="text" name="occupation" className="form-input" placeholder="Karyawan Swasta, Mahasiswa, dll" value={formData.occupation} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label">Jenis Kelamin</label>
              <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Nomor WhatsApp / HP (Opsional)</label>
            <input type="tel" name="phone" className="form-input" placeholder="08123456789" value={formData.phone} onChange={handleChange} />
            <span className="form-hint">Digunakan jika membutuhkan konseling lanjutan</span>
          </div>

          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label">Keluhan yang Mengganjal (Opsional)</label>
            <textarea
              name="initialNotes" rows={2} className="form-textarea"
              placeholder="Ceritakan singkat hal yang membuat Anda terbebani akhir-akhir ini..."
              value={formData.initialNotes} onChange={handleChange}
            />
          </div>

          {/* Instrument Settings */}
          <div style={{
            background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '1rem',
            border: '1px solid var(--border)', marginBottom: '1.25rem'
          }}>
            <h3 style={{ fontSize: '0.9rem', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FileText size={16} color="var(--primary)" />
              <span>Format Penilaian</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
              <div>
                <label className="form-label">Cakupan Instrumen</label>
                <select name="assessmentMode" className="form-select" value={formData.assessmentMode} onChange={handleChange}>
                  <option value="adaptive">Adaptif Cerdas (18 Skrining + Ekspansi)</option>
                  <option value="comprehensive">Lengkap (126 Butir Soal)</option>
                  <option value="dass42">Standar DASS-42 (42 Butir)</option>
                </select>
                <span className="form-hint">Mode Adaptif hanya memperluas domain bermasalah</span>
              </div>

              <div>
                <label className="form-label">Gaya Antarmuka</label>
                <select name="scaleInterface" className="form-select" value={formData.scaleInterface} onChange={handleChange}>
                  <option value="shuffle">Acak Otomatis (Slider, Semantik & Baterai)</option>
                  <option value="slider">Tetap: Slider VAS (0-100)</option>
                  <option value="semantic">Tetap: Jangkar Semantik</option>
                  <option value="battery">Tetap: Simbol Baterai</option>
                </select>
                <span className="form-hint">Maks. 5 soal berturut-turut dengan format sama (anti-bosan)</span>
              </div>
            </div>
          </div>

          {/* Consent */}
          <div style={{
            background: 'var(--status-normal-bg)', border: '1px solid #BBF7D0',
            borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem', color: '#166534' }}>
              <ShieldCheck size={17} />
              <strong style={{ fontSize: '0.85rem' }}>Persetujuan Pengguna</strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#15803D', lineHeight: 1.5, marginBottom: '0.65rem' }}>
              Instrumen ini adalah alat skrining psikologis terstandar, <strong>bukan diagnosis medis</strong>. Data Anda dienkripsi dan hanya diakses konselor berwenang.
            </p>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.82rem', color: '#166534', fontWeight: 600 }}>
              <input
                type="checkbox" name="consentAgreed" checked={formData.consentAgreed} onChange={handleChange}
                style={{ width: '16px', height: '16px', accentColor: '#16A34A' }}
              />
              <span>Saya memahami dan menyetujui pengisian data secara sadar & sukarela.</span>
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn btn-primary btn-lg">
              <span>Lanjutkan ke Asesmen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
