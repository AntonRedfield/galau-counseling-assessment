/**
 * Token Awal / Seed Data untuk Aplikasi GALAU
 * Format Token: 6 Karakter (Kombinasi Huruf & Angka, Seluruhnya Huruf Kecil)
 * Dirancang universal untuk semua kalangan (umum, mahasiswa, profesional, organisasi)
 */

export const INITIAL_TOKENS = [
  {
    token: 'a7b3x9',
    role: 'student',
    label: 'Token Pengguna Umum (Karyawan Swasta)',
    studentName: 'Ahmad Fauzan',
    birthDate: '2001-08-14',
    age: 25,
    occupation: 'Karyawan Swasta',
    status: 'unused', // unused | completed
    createdAt: '2026-10-10T08:00:00Z',
    expiresAt: '2026-12-31T23:59:59Z'
  },
  {
    token: 'k4m8z1',
    role: 'student',
    label: 'Token Mahasiswa & Organisasi',
    studentName: 'Nabila Putri Cahyani',
    birthDate: '2003-03-22',
    age: 23,
    occupation: 'Mahasiswa / Organisasi Kampus',
    status: 'unused',
    createdAt: '2026-10-10T08:00:00Z',
    expiresAt: '2026-12-31T23:59:59Z'
  },
  {
    token: 'r2t9w5',
    role: 'student',
    label: 'Token Uji Coba Cepat (Wiraswasta)',
    studentName: 'Rian Pratama',
    birthDate: '1998-11-05',
    age: 28,
    occupation: 'Wirausaha / Freelancer',
    status: 'unused',
    createdAt: '2026-10-12T00:00:00Z',
    expiresAt: '2026-12-31T23:59:59Z'
  },
  {
    token: 'c3v7b2',
    role: 'student',
    label: 'Token Tenaga Profesional',
    studentName: 'Dimas Setiawan',
    birthDate: '1995-06-19',
    age: 31,
    occupation: 'Tenaga Profesional / ASN',
    status: 'unused',
    createdAt: '2026-10-12T00:00:00Z',
    expiresAt: '2026-12-31T23:59:59Z'
  }
];

export const SAMPLE_COMPLETED_REPORTS = [
  {
    id: 'REP-2026-001',
    token: 'p4m9k2',
    studentInfo: {
      fullName: 'Muhammad Rizky Ramadhan',
      birthDate: '2000-04-18',
      age: 26,
      occupation: 'Karyawan PT Mega Corpora',
      gender: 'Laki-laki',
      phone: '081234567891',
      initialNotes: 'Sering merasa cemas dan tegang berlebih menghadapi beban kerja dan target perusahaan.'
    },
    scores: {
      dass: {
        depresi: { score: 12, raw: 36, max: 42, severity: { key: 'ringan', label: 'Ringan', color: '#3B82F6', badgeClass: 'badge-mild' } },
        kecemasan: { score: 18, raw: 54, max: 42, severity: { key: 'parah', label: 'Parah', color: '#EF4444', badgeClass: 'badge-severe' } },
        stres: { score: 28, raw: 84, max: 42, severity: { key: 'parah', label: 'Parah', color: '#EF4444', badgeClass: 'badge-severe' } }
      },
      triage: {
        level: 'TINGGI',
        label: 'Tinggi (Butuh Konseling Intensif)',
        color: '#EA580C',
        reasons: [
          'Terdapat subskala Kecemasan dan Stres pada tingkat Parah (Severe).',
          'Terdeteksi beban adaptasi karier dan tekanan target yang tinggi.'
        ],
        emergencyFlags: []
      },
      domainAnalysis: [
        { domainId: 'karier', percentage: 76, problemCount: 14, totalScore: 48 },
        { domainId: 'akademik', percentage: 65, problemCount: 11, totalScore: 41 },
        { domainId: 'sosial', percentage: 38, problemCount: 5, totalScore: 24 },
        { domainId: 'keluarga', percentage: 30, problemCount: 4, totalScore: 19 },
        { domainId: 'fisik', percentage: 22, problemCount: 3, totalScore: 14 },
        { domainId: 'spiritual', percentage: 15, problemCount: 2, totalScore: 10 }
      ],
      recommendations: [
        {
          action: 'Konseling Individu',
          priority: 'Prioritas Tinggi (3 Hari)',
          description: 'Sesi privat tatap muka bersama konselor untuk manajemen stres kerja & teknik relaksasi regulasi emosi.'
        },
        {
          action: 'Konseling Kelompok Teman Sebaya',
          priority: 'Rutin',
          description: 'Kelompok diskusi sebaya dengan tantangan adaptasi dunia profesional serupa.'
        }
      ],
      completedAt: '2026-10-11T14:20:00Z'
    },
    interventions: [
      {
        id: 'INT-01',
        date: '2026-10-12',
        type: 'Konseling Individu',
        notes: 'Klien hadir sesi pertama, menceritakan tekanan kerja. Diberikan latihan teknik pernapasan 4-7-8.',
        counselorName: 'Konselor Pembimbing',
        status: 'Sedang Berjalan'
      }
    ]
  },
  {
    id: 'REP-2026-002',
    token: 'x8n1q7',
    studentInfo: {
      fullName: 'Aurelia Citra Lestari',
      birthDate: '2004-09-12',
      age: 22,
      occupation: 'Mahasiswa / Pekerja Lepas',
      gender: 'Perempuan',
      phone: '081398712345',
      initialNotes: 'Merasa terisolasi dan sangat tertekan dengan dinamika keluarga di rumah.'
    },
    scores: {
      dass: {
        depresi: { score: 29, raw: 87, max: 42, severity: { key: 'sangatParah', label: 'Sangat Parah', color: '#7F1D1D', badgeClass: 'badge-critical' } },
        kecemasan: { score: 22, raw: 66, max: 42, severity: { key: 'sangatParah', label: 'Sangat Parah', color: '#7F1D1D', badgeClass: 'badge-critical' } },
        stres: { score: 35, raw: 105, max: 42, severity: { key: 'sangatParah', label: 'Sangat Parah', color: '#7F1D1D', badgeClass: 'badge-critical' } }
      },
      triage: {
        level: 'KRITIS',
        label: 'Kritis (Perhatian Darurat Segera)',
        color: '#DC2626',
        reasons: [
          'Subskala DASS Depresi, Kecemasan, dan Stres seluruhnya berada pada tingkat Sangat Parah.',
          'Terdeteksi 1 indikator darurat perilaku krisis (dorongan menyakiti diri saat marah besar).'
        ],
        emergencyFlags: [
          {
            id: 123,
            text: 'Saya kesulitan mengendalikan emosi sehingga dorongan untuk menyakiti diri sendiri atau merusak barang muncul saat saya sedang marah besar.',
            score: 3,
            domainId: 'spiritual',
            reason: 'Indikasi Perilaku Menyakiti Diri/Krisis/Adiksi Berat'
          }
        ]
      },
      domainAnalysis: [
        { domainId: 'keluarga', percentage: 92, problemCount: 19, totalScore: 58 },
        { domainId: 'sosial', percentage: 88, problemCount: 17, totalScore: 55 },
        { domainId: 'spiritual', percentage: 80, problemCount: 15, totalScore: 50 },
        { domainId: 'akademik', percentage: 65, problemCount: 12, totalScore: 41 },
        { domainId: 'fisik', percentage: 55, problemCount: 9, totalScore: 35 },
        { domainId: 'karier', percentage: 50, problemCount: 8, totalScore: 31 }
      ],
      recommendations: [
        {
          action: 'Alih Tangan Kasus (Referral)',
          priority: 'Segera (1x24 Jam)',
          description: 'Segera koordinasikan rujukan ke RSUD / Lembaga Psikologi Klinis Mitra.'
        },
        {
          action: 'Pendampingan Krisis Intensif',
          priority: 'Prioritas Utama',
          description: 'Pendampingan suportif tanpa intimidasi untuk memastikan keselamatan klien.'
        }
      ],
      completedAt: '2026-10-11T16:45:00Z'
    },
    interventions: []
  }
];
