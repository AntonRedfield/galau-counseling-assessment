import React from 'react';
import { Brain, Database, UserCheck, LogOut, ShieldCheck } from 'lucide-react';
import { isFirebaseActive } from '../services/firebase';

export function Navbar({ currentToken, onLogout, onOpenFirebaseModal, activeView, setActiveView }) {
  return (
    <header className="navbar">
      <div className="nav-brand" onClick={() => setActiveView('login')}>
        <div className="brand-icon-box">
          <Brain size={20} />
        </div>
        <div>
          <h1 className="brand-title">GALAU</h1>
          <p className="brand-subtitle">Guidance, Assessment of Life-distress, Anxiety & Utility</p>
        </div>
      </div>

      <div className="nav-actions">
        <button
          className="btn btn-secondary btn-sm"
          onClick={onOpenFirebaseModal}
          title="Pengaturan Backend"
        >
          <Database size={14} color={isFirebaseActive ? '#10B981' : '#F59E0B'} />
          <span>{isFirebaseActive ? 'Online' : 'Offline'}</span>
        </button>

        {currentToken && (
          <>
            {(currentToken.role === 'counselor' || currentToken.role === 'admin') && (
              <button
                className={`btn btn-sm ${activeView === 'counselor' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveView('counselor')}
              >
                <ShieldCheck size={14} />
                <span>Konselor</span>
              </button>
            )}

            <span className="badge badge-normal" style={{ fontSize: '0.72rem', textTransform: 'none' }}>
              <UserCheck size={12} /> {currentToken.token}
            </span>

            <button className="btn btn-secondary btn-sm" onClick={onLogout} title="Keluar">
              <LogOut size={14} />
            </button>
          </>
        )}
      </div>
    </header>
  );
}
