/**
 * Aturan Skoring & Triase Risiko GALAU
 * Berdasarkan Norma Baku DASS-42 (Lovibond & Lovibond) dan Standar Skrining DCM
 */

export const DASS_CUTOFFS = {
  depresi: {
    label: 'Depresi',
    normal: { min: 0, max: 9, label: 'Normal', color: '#10B981', badgeClass: 'badge-normal' },
    ringan: { min: 10, max: 13, label: 'Ringan', color: '#3B82F6', badgeClass: 'badge-mild' },
    sedang: { min: 14, max: 20, label: 'Sedang', color: '#F59E0B', badgeClass: 'badge-moderate' },
    parah: { min: 21, max: 27, label: 'Parah', color: '#EF4444', badgeClass: 'badge-severe' },
    sangatParah: { min: 28, max: 42, label: 'Sangat Parah', color: '#7F1D1D', badgeClass: 'badge-critical' }
  },
  kecemasan: {
    label: 'Kecemasan',
    normal: { min: 0, max: 7, label: 'Normal', color: '#10B981', badgeClass: 'badge-normal' },
    ringan: { min: 8, max: 9, label: 'Ringan', color: '#3B82F6', badgeClass: 'badge-mild' },
    sedang: { min: 10, max: 14, label: 'Sedang', color: '#F59E0B', badgeClass: 'badge-moderate' },
    parah: { min: 15, max: 19, label: 'Parah', color: '#EF4444', badgeClass: 'badge-severe' },
    sangatParah: { min: 20, max: 42, label: 'Sangat Parah', color: '#7F1D1D', badgeClass: 'badge-critical' }
  },
  stres: {
    label: 'Stres',
    normal: { min: 0, max: 14, label: 'Normal', color: '#10B981', badgeClass: 'badge-normal' },
    ringan: { min: 15, max: 18, label: 'Ringan', color: '#3B82F6', badgeClass: 'badge-mild' },
    sedang: { min: 19, max: 25, label: 'Sedang', color: '#F59E0B', badgeClass: 'badge-moderate' },
    parah: { min: 26, max: 33, label: 'Parah', color: '#EF4444', badgeClass: 'badge-severe' },
    sangatParah: { min: 34, max: 42, label: 'Sangat Parah', color: '#7F1D1D', badgeClass: 'badge-critical' }
  }
};

/**
 * Menghitung tingkat keparahan berdasarkan skor DASS
 */
export function getDassSeverity(subscale, score) {
  const cutoffs = DASS_CUTOFFS[subscale];
  if (!cutoffs) return { key: 'normal', ...DASS_CUTOFFS.depresi.normal };

  if (score <= cutoffs.normal.max) return { key: 'normal', ...cutoffs.normal };
  if (score <= cutoffs.ringan.max) return { key: 'ringan', ...cutoffs.ringan };
  if (score <= cutoffs.sedang.max) return { key: 'sedang', ...cutoffs.sedang };
  if (score <= cutoffs.parah.max) return { key: 'parah', ...cutoffs.parah };
  return { key: 'sangatParah', ...cutoffs.sangatParah };
}

/**
 * Menghitung skor total asesmen dan triase risiko
 * @param {Object} responses - Map dari questionId -> score (0-3)
 * @param {Array} questions - Daftar semua soal asesmen
 */
export function calculateAssessmentScores(responses, questions) {
  let rawDepresi = 0;
  let rawKecemasan = 0;
  let rawStres = 0;

  let countDepresi = 0;
  let countKecemasan = 0;
  let countStres = 0;

  const domainScores = {
    akademik: { total: 0, count: 0, problemItems: [] },
    sosial: { total: 0, count: 0, problemItems: [] },
    keluarga: { total: 0, count: 0, problemItems: [] },
    fisik: { total: 0, count: 0, problemItems: [] },
    karier: { total: 0, count: 0, problemItems: [] },
    spiritual: { total: 0, count: 0, problemItems: [] }
  };

  const emergencyFlags = [];

  questions.forEach(q => {
    const score = responses[q.id] !== undefined ? Number(responses[q.id]) : 0;

    // Subscale sum
    if (q.subscale === 'depresi') {
      rawDepresi += score;
      countDepresi++;
    } else if (q.subscale === 'kecemasan') {
      rawKecemasan += score;
      countKecemasan++;
    } else if (q.subscale === 'stres') {
      rawStres += score;
      countStres++;
    }

    // Domain tracking
    if (domainScores[q.domainId]) {
      domainScores[q.domainId].total += score;
      domainScores[q.domainId].count++;
      if (score >= 2) {
        domainScores[q.domainId].problemItems.push({
          id: q.id,
          text: q.text,
          score,
          subscale: q.subscale
        });
      }
    }

    // Check emergency indicators (skor >= 2 pada soal darurat)
    if (q.isEmergency && score >= 2) {
      emergencyFlags.push({
        id: q.id,
        text: q.text,
        score,
        domainId: q.domainId,
        reason: 'Indikasi Perilaku Menyakiti Diri/Krisis/Adiksi Berat'
      });
    }
  });

  // Skala DASS-42 baku berdasar 14 item per skala.
  // Jika menggunakan 42 item per skala (126 soal), kita normalisasikan ke standar DASS-42 (skala 14 item)
  const dassDepresi = countDepresi > 14 ? Math.round((rawDepresi / countDepresi) * 14) : rawDepresi;
  const dassKecemasan = countKecemasan > 14 ? Math.round((rawKecemasan / countKecemasan) * 14) : rawKecemasan;
  const dassStres = countStres > 14 ? Math.round((rawStres / countStres) * 14) : rawStres;

  const depresiSeverity = getDassSeverity('depresi', dassDepresi);
  const kecemasanSeverity = getDassSeverity('kecemasan', dassKecemasan);
  const stresSeverity = getDassSeverity('stres', dassStres);

  // Evaluasi Triase Risiko (Lovibond & Lovibond + DCM Emergency Rules)
  let triageLevel = 'NORMAL';
  let triageColor = '#10B981';
  let triageLabel = 'Normal (Resiliensi Baik)';
  const triageReasons = [];

  const hasExtremeDass =
    depresiSeverity.key === 'sangatParah' ||
    kecemasanSeverity.key === 'sangatParah' ||
    stresSeverity.key === 'sangatParah';

  const hasSevereDass =
    depresiSeverity.key === 'parah' ||
    kecemasanSeverity.key === 'parah' ||
    stresSeverity.key === 'parah';

  const moderateCount = [depresiSeverity.key, kecemasanSeverity.key, stresSeverity.key].filter(k => k === 'sedang').length;

  // Triase Level 1: KRITIS
  if (emergencyFlags.length > 0 || hasExtremeDass) {
    triageLevel = 'KRITIS';
    triageColor = '#DC2626';
    triageLabel = 'Kritis (Perhatian Darurat Segera)';
    if (emergencyFlags.length > 0) {
      triageReasons.push(`Terdeteksi ${emergencyFlags.length} indikator darurat krisis (termasuk potensi menyakiti diri/trauma berat/adiksi ekstrem).`);
    }
    if (hasExtremeDass) {
      const extremeScales = [];
      if (depresiSeverity.key === 'sangatParah') extremeScales.push('Depresi');
      if (kecemasanSeverity.key === 'sangatParah') extremeScales.push('Kecemasan');
      if (stresSeverity.key === 'sangatParah') extremeScales.push('Stres');
      triageReasons.push(`Subskala DASS ${extremeScales.join(', ')} berada pada tingkat Sangat Parah.`);
    }
  }
  // Triase Level 2: TINGGI
  else if (hasSevereDass || moderateCount >= 2) {
    triageLevel = 'TINGGI';
    triageColor = '#EA580C';
    triageLabel = 'Tinggi (Butuh Konseling Intensif)';
    if (hasSevereDass) {
      triageReasons.push('Terdapat subskala DASS pada tingkat Parah (Severe).');
    }
    if (moderateCount >= 2) {
      triageReasons.push('Terdapat 2 atau lebih subskala DASS pada tingkat Sedang secara bersamaan.');
    }
  }
  // Triase Level 3: WASPADA
  else if (moderateCount === 1 || depresiSeverity.key === 'ringan' || kecemasanSeverity.key === 'ringan') {
    triageLevel = 'WASPADA';
    triageColor = '#F59E0B';
    triageLabel = 'Waspada (Perlu Pemantauan & Diskusi BK)';
    triageReasons.push('Terdeteksi gejala emosional tingkat Sedang/Ringan yang membutuhkan pendampingan dini.');
  } else {
    triageReasons.push('Skor seluruh dimensi psikologis berada dalam batas aman dan adaptif.');
  }

  // Rekomendasi Tindak Lanjut Berjenjang
  const recommendations = [];
  if (triageLevel === 'KRITIS') {
    recommendations.push({
      action: 'Alih Tangan Kasus (Referral)',
      priority: 'Segera (1x24 Jam)',
      description: 'Lakukan rujukan medis/psikologis ke Faskes, Psikolog Klinis, atau Psikiater terdekat. Siapkan Lembar Rujukan Resmi.'
    });
    recommendations.push({
      action: 'Konseling Krisis & Pendampingan Orang Tua',
      priority: 'Prioritas Utama',
      description: 'Lakukan komunikasi persuasif dan aman bersama konselor BK serta orang tua tanpa memberikan vonis menghakimi.'
    });
  } else if (triageLevel === 'TINGGI') {
    recommendations.push({
      action: 'Konseling Individu',
      priority: 'Prioritas Tinggi (3 Hari)',
      description: 'Jadwalkan sesi tatap muka privat 1-on-1 dengan Guru BK untuk menggali distres emosi dan penyelesaian masalah.'
    });
    if (domainScores.keluarga.problemItems.length >= 3) {
      recommendations.push({
        action: 'Kunjungan Rumah (Home Visit)',
        priority: 'Kondisional',
        description: 'Terdapat indikasi beban dinamika keluarga yang signifikan, koordinasikan kunjungan rumah dengan pihak sekolah.'
      });
    }
  } else if (triageLevel === 'WASPADA') {
    recommendations.push({
      action: 'Bimbingan Personal & Konseling Kelompok',
      priority: 'Mingguan',
      description: 'Ajak siswa mengikuti bimbingan kelompok teman sebaya dengan topik manajemen stres dan regulasi emosi.'
    });
  } else {
    recommendations.push({
      action: 'Bimbingan Klasikal & Penguatan Resiliensi',
      priority: 'Rutin',
      description: 'Pertahankan iklim belajar positif melalui kegiatan pengembangan diri dan literasi kesehatan mental.'
    });
  }

  // Hitung Domain Paling Dominan (Top Problems)
  const domainAnalysis = Object.keys(domainScores).map(key => {
    const data = domainScores[key];
    const avgScore = data.count > 0 ? (data.total / (data.count * 3)) * 100 : 0;
    return {
      domainId: key,
      totalScore: data.total,
      maxPossible: data.count * 3,
      percentage: Math.round(avgScore),
      problemCount: data.problemItems.length,
      problemItems: data.problemItems
    };
  }).sort((a, b) => b.percentage - a.percentage);

  return {
    dass: {
      depresi: { score: dassDepresi, raw: rawDepresi, max: 42, severity: depresiSeverity },
      kecemasan: { score: dassKecemasan, raw: rawKecemasan, max: 42, severity: kecemasanSeverity },
      stres: { score: dassStres, raw: rawStres, max: 42, severity: stresSeverity }
    },
    triage: {
      level: triageLevel,
      label: triageLabel,
      color: triageColor,
      reasons: triageReasons,
      emergencyFlags
    },
    domainAnalysis,
    recommendations,
    completedAt: new Date().toISOString()
  };
}

/**
 * Hotline Krisis Default Terverifikasi di Indonesia
 */
export const DEFAULT_CRISIS_CONTACTS = [
  {
    name: 'Kemenkes Sejiwa Hotline',
    number: '119 (Tekan 8)',
    desc: 'Layanan Darurat Konseling Kesehatan Mental Kementerian Kesehatan RI (24 Jam Bebas Pulsa)'
  },
  {
    name: 'Halo Kemenkes',
    number: '1500-567',
    desc: 'Pusat Kontak dan Bantuan Informasi Kesehatan Nasional'
  },
  {
    name: 'LISA Suicide Prevention Helpline',
    number: '+62 811-3855-472',
    desc: 'Dukungan Krisis Pencegahan Bunuh Diri Bahasa Indonesia & Inggris (24 Jam WhatsApp/Call)'
  },
  {
    name: 'Ruang BK Sahabat Remaja Sekolah',
    number: '+62 821-4321-9988',
    desc: 'Kontak Langsung Ruang Konseling & Guru BK Piket Sekolah'
  }
];
