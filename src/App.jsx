import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TokenLogin } from './components/TokenLogin';
import { IdentityForm } from './components/IdentityForm';
import { AssessmentRunner } from './components/AssessmentRunner';
import { ReportView } from './components/ReportView';
import { CounselorDashboard } from './components/CounselorDashboard';
import { FirebaseModal } from './components/FirebaseModal';
import { calculateAssessmentScores } from './data/scoringRules';
import { saveAssessmentReport } from './services/storageService';

export function App() {
  const [activeView, setActiveView] = useState('login'); // 'login' | 'identity' | 'assessment' | 'report' | 'counselor'
  const [currentToken, setCurrentToken] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [currentReport, setCurrentReport] = useState(null);
  const [isFirebaseModalOpen, setIsFirebaseModalOpen] = useState(false);

  // 1. Alur Login Token Berhasil
  const handleLoginSuccess = (tokenData) => {
    setCurrentToken(tokenData);

    if (tokenData.role === 'counselor' || tokenData.role === 'admin') {
      setActiveView('counselor');
    } else {
      setActiveView('identity');
    }
  };

  // 2. Alur Pengisian Identitas Selesai
  const handleIdentityProceed = (formData) => {
    setStudentData(formData);
    setActiveView('assessment');
  };

  // 3. Alur Pengisian Asesmen Selesai -> Hitung Skor & Simpan
  const handleCompleteAssessment = async (responses, questions) => {
    const scores = calculateAssessmentScores(responses, questions);

    const reportPayload = {
      id: `REP-${Date.now()}`,
      token: currentToken ? currentToken.token : 'GLU-DIRECT',
      studentInfo: studentData,
      scores,
      interventions: [],
      completedAt: new Date().toISOString()
    };

    // Simpan ke Firestore / LocalStorage
    const saved = await saveAssessmentReport(reportPayload);
    setCurrentReport(saved);
    setActiveView('report');
  };

  // 4. Logout / Reset Sesi
  const handleLogout = () => {
    setCurrentToken(null);
    setStudentData(null);
    setCurrentReport(null);
    setActiveView('login');
  };

  // 5. Konselor memilih laporan untuk dilihat
  const handleSelectReport = (report) => {
    setCurrentReport(report);
    setActiveView('report');
  };

  return (
    <div className="app-container">
      <Navbar
        currentToken={currentToken}
        onLogout={handleLogout}
        onOpenFirebaseModal={() => setIsFirebaseModalOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main>
        {activeView === 'login' && (
          <TokenLogin onLoginSuccess={handleLoginSuccess} />
        )}

        {activeView === 'identity' && currentToken && (
          <IdentityForm
            tokenData={currentToken}
            onProceed={handleIdentityProceed}
          />
        )}

        {activeView === 'assessment' && studentData && (
          <AssessmentRunner
            studentData={studentData}
            onCompleteAssessment={handleCompleteAssessment}
          />
        )}

        {activeView === 'report' && currentReport && (
          <ReportView
            reportData={currentReport}
            userRole={currentToken?.role || 'student'}
            onBackToDashboard={
              currentToken?.role === 'counselor' || currentToken?.role === 'admin'
                ? () => setActiveView('counselor')
                : null
            }
            onRetake={() => {
              setActiveView('identity');
            }}
          />
        )}

        {activeView === 'counselor' && (
          <CounselorDashboard
            onSelectReport={handleSelectReport}
            onOpenFirebaseModal={() => setIsFirebaseModalOpen(true)}
          />
        )}
      </main>

      <FirebaseModal
        isOpen={isFirebaseModalOpen}
        onClose={() => setIsFirebaseModalOpen(false)}
      />

      <footer className="app-footer no-print">
        <p><strong>GALAU</strong> &copy; 2026 - Pusat Bimbingan, Konseling & Kesejahteraan Psikologis. Berlandaskan Norma DASS-42 & Skrining DCM.</p>
        <p className="app-footer-sub">
          Mendukung Kepatuhan UU PDP No. 27/2022 & Standar Kode Etik Layanan Bimbingan & Konseling.
        </p>
      </footer>
    </div>
  );
}
export default App;
