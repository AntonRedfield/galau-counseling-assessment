/**
 * Data Soal Asesmen GALAU (Guidance, Assessment of Life-distress, Anxiety & Utility)
 * Diambil langsung dari Questions List GALAU.md
 * Total 126 Soal terintegrasi DASS & DCM terdistribusi ke dalam 6 Domain Kehidupan
 */

export const ASSESSMENT_DOMAINS = [
  {
    id: 'akademik',
    title: 'Domain Akademik & Belajar',
    icon: 'GraduationCap',
    scaleType: 'Tingkat Kesulitan',
    options: [
      { value: 0, label: 'Sangat Mudah Diatasi', desc: '0 Hari / Tidak mengganggu' },
      { value: 1, label: 'Kadang Menjadi Beban', desc: '1 - 2 Hari dalam seminggu' },
      { value: 2, label: 'Sangat Menyulitkan Saya', desc: '3 - 5 Hari, mengganggu' },
      { value: 3, label: 'Membuat Saya Menyerah', desc: '6 - 7 Hari, hampir setiap waktu' }
    ]
  },
  {
    id: 'sosial',
    title: 'Domain Sosial & Interpersonal',
    icon: 'Users',
    scaleType: 'Intensitas Perasaan',
    options: [
      { value: 0, label: 'Tidak Pernah Terasa', desc: '0 Hari / Tidak ada masalah' },
      { value: 1, label: 'Sesekali Terasa', desc: '1 - 2 Hari dalam seminggu' },
      { value: 2, label: 'Mengganggu Pikiran', desc: '3 - 5 Hari, cukup berat' },
      { value: 3, label: 'Sangat Menyakitkan', desc: '6 - 7 Hari, sangat intens' }
    ]
  },
  {
    id: 'keluarga',
    title: 'Domain Dinamika Keluarga',
    icon: 'Home',
    scaleType: 'Intensitas Perasaan',
    options: [
      { value: 0, label: 'Tidak Pernah Terasa', desc: '0 Hari / Harmonis' },
      { value: 1, label: 'Sesekali Terasa', desc: '1 - 2 Hari dalam seminggu' },
      { value: 2, label: 'Mengganggu Pikiran', desc: '3 - 5 Hari, membebani' },
      { value: 3, label: 'Sangat Menyakitkan', desc: '6 - 7 Hari, terus menerus' }
    ]
  },
  {
    id: 'fisik',
    title: 'Domain Perkembangan Fisik & Psikoseksual',
    icon: 'HeartPulse',
    scaleType: 'Frekuensi Baku',
    options: [
      { value: 0, label: '0 Hari (Tidak Pernah)', desc: 'Sama sekali tidak dialami' },
      { value: 1, label: '1 - 2 Hari (Kadang-kadang)', desc: 'Sesekali muncul' },
      { value: 2, label: '3 - 5 Hari (Sering)', desc: 'Sering dan mengganggu' },
      { value: 3, label: '6 - 7 Hari (Hampir Selalu)', desc: 'Terus-menerus dialami' }
    ]
  },
  {
    id: 'karier',
    title: 'Domain Karier & Kemandirian Masa Depan',
    icon: 'Compass',
    scaleType: 'Tingkat Kesulitan',
    options: [
      { value: 0, label: 'Sangat Mudah Diatasi', desc: 'Yakin & percaya diri' },
      { value: 1, label: 'Kadang Menjadi Beban', desc: 'Sedikit ragu namun aman' },
      { value: 2, label: 'Sangat Menyulitkan Saya', desc: 'Sering bingung & tertekan' },
      { value: 3, label: 'Membuat Saya Menyerah', desc: 'Merasa buntu & putus asa' }
    ]
  },
  {
    id: 'spiritual',
    title: 'Domain Nilai Spiritual, Moral & Adiksi',
    icon: 'Sparkles',
    scaleType: 'Frekuensi Baku',
    options: [
      { value: 0, label: '0 Hari (Tidak Pernah)', desc: 'Tidak pernah dialami' },
      { value: 1, label: '1 - 2 Hari (Kadang-kadang)', desc: 'Kadang terasa' },
      { value: 2, label: '3 - 5 Hari (Sering)', desc: 'Sering mengganggu batin' },
      { value: 3, label: '6 - 7 Hari (Hampir Selalu)', desc: 'Sangat mengikat & berat' }
    ]
  }
];

export const RAW_QUESTIONS = [
  // BAB I: AKADEMIK & BELAJAR
  // Depresi (1 - 7)
  {
    id: 1,
    domainId: 'akademik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Kehilangan Minat & Putus Asa)',
    text: 'Saya merasa tidak ada gunanya mengerjakan tugas sekolah karena nilai saya pasti jelek.',
    isScreeningCore: true
  },
  {
    id: 2,
    domainId: 'akademik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Kehilangan Minat & Putus Asa)',
    text: 'Saya kehilangan semangat untuk masuk ke kelas dan mengikuti pelajaran.'
  },
  {
    id: 3,
    domainId: 'akademik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Kehilangan Minat & Putus Asa)',
    text: 'Saya merasa bodoh dan tidak berharga saat membandingkan kemampuan belajar saya dengan teman lain.'
  },
  {
    id: 4,
    domainId: 'akademik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Kehilangan Minat & Putus Asa)',
    text: 'Saya tidak lagi menikmati mata pelajaran yang dulunya sangat saya sukai.'
  },
  {
    id: 5,
    domainId: 'akademik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Kehilangan Minat & Putus Asa)',
    text: 'Saya merasa masa depan saya hancur karena kesulitan mengikuti pelajaran di sekolah.'
  },
  {
    id: 6,
    domainId: 'akademik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Kehilangan Minat & Putus Asa)',
    text: 'Saya merasa lelah secara mental dan tidak punya energi untuk membuka buku pelajaran.'
  },
  {
    id: 7,
    domainId: 'akademik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Kehilangan Minat & Putus Asa)',
    text: 'Saya merasa sangat sedih saat menerima hasil ujian, terlepas dari berapapun nilainya.'
  },

  // Kecemasan (8 - 14)
  {
    id: 8,
    domainId: 'akademik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Fisik & Gugup)',
    text: 'Jantung saya berdebar kencang setiap kali guru memanggil nama saya atau memberi pertanyaan.'
  },
  {
    id: 9,
    domainId: 'akademik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Fisik & Gugup)',
    text: 'Saya berkeringat dingin saat memikirkan ujian atau ulangan harian yang akan datang.'
  },
  {
    id: 10,
    domainId: 'akademik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Fisik & Gugup)',
    text: 'Saya merasa sesak napas atau gemetar saat harus presentasi atau maju ke depan kelas.'
  },
  {
    id: 11,
    domainId: 'akademik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Fisik & Gugup)',
    text: 'Saya merasa sangat takut jika tidak bisa menyelesaikan tugas sekolah tepat waktu.'
  },
  {
    id: 12,
    domainId: 'akademik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Fisik & Gugup)',
    text: 'Saya sering merasa perut saya mual saat malam hari sebelum hari sekolah dimulai.'
  },
  {
    id: 13,
    domainId: 'akademik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Fisik & Gugup)',
    text: 'Saya merasa panik saat melihat teman-teman lain sudah selesai mengerjakan ujian sedangkan saya belum.'
  },
  {
    id: 14,
    domainId: 'akademik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Fisik & Gugup)',
    text: 'Saya merasa cemas dan gelisah memikirkan apakah saya bisa naik kelas atau lulus.',
    isScreeningCore: true
  },

  // Stres (15 - 21)
  {
    id: 15,
    domainId: 'akademik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Ketegangan & Iritabilitas)',
    text: 'Saya mudah marah dan membentak jika ada yang mengganggu saya saat sedang mengerjakan tugas.'
  },
  {
    id: 16,
    domainId: 'akademik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Ketegangan & Iritabilitas)',
    text: 'Saya merasa sangat tegang dan kesulitan untuk tidur nyenyak karena memikirkan tugas sekolah.'
  },
  {
    id: 17,
    domainId: 'akademik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Ketegangan & Iritabilitas)',
    text: 'Saya tidak bisa bersantai di rumah karena terus memikirkan pelajaran yang tertinggal.'
  },
  {
    id: 18,
    domainId: 'akademik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Ketegangan & Iritabilitas)',
    text: 'Saya merasa sangat kesal ketika guru memberikan tugas tambahan secara mendadak.'
  },
  {
    id: 19,
    domainId: 'akademik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Ketegangan & Iritabilitas)',
    text: 'Saya sulit untuk bersabar saat mencoba memahami materi pelajaran yang rumit.'
  },
  {
    id: 20,
    domainId: 'akademik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Ketegangan & Iritabilitas)',
    text: 'Saya merasa kepala saya tegang dan berat setelah seharian belajar di sekolah.'
  },
  {
    id: 21,
    domainId: 'akademik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Ketegangan & Iritabilitas)',
    text: 'Saya bereaksi berlebihan atau menangis karena hal kecil saat merasa beban tugas sekolah terlalu banyak.',
    isScreeningCore: true
  },

  // BAB II: SOSIAL & INTERPERSONAL (22 - 42)
  // Depresi (22 - 28)
  {
    id: 22,
    domainId: 'sosial',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Isolasi & Perasaan Ditolak)',
    text: 'Saya merasa tidak ada satu pun teman di sekolah yang benar-benar peduli pada saya.',
    isScreeningCore: true
  },
  {
    id: 23,
    domainId: 'sosial',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Isolasi & Perasaan Ditolak)',
    text: 'Saya merasa diri saya sangat tidak menarik sehingga tidak pantas memiliki teman.'
  },
  {
    id: 24,
    domainId: 'sosial',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Isolasi & Perasaan Ditolak)',
    text: 'Saya memilih untuk menyendiri saat istirahat karena merasa kehadiran saya tidak diinginkan.'
  },
  {
    id: 25,
    domainId: 'sosial',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Isolasi & Perasaan Ditolak)',
    text: 'Saya merasa sangat sedih dan putus asa ketika dijauhi atau didiamkan oleh teman.'
  },
  {
    id: 26,
    domainId: 'sosial',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Isolasi & Perasaan Ditolak)',
    text: 'Saya merasa hidup ini sepi karena tidak punya teman dekat untuk berbagi cerita.'
  },
  {
    id: 27,
    domainId: 'sosial',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Isolasi & Perasaan Ditolak)',
    text: 'Saya kehilangan minat untuk ikut kegiatan ekstrakurikuler atau acara kumpul bersama teman.'
  },
  {
    id: 28,
    domainId: 'sosial',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Isolasi & Perasaan Ditolak)',
    text: 'Saya merasa tidak berguna setelah membaca komentar negatif dari teman secara langsung maupun di media sosial.'
  },

  // Kecemasan (29 - 35)
  {
    id: 29,
    domainId: 'sosial',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kecemasan Sosial & Ketakutan)',
    text: 'Saya merasa gemetar dan takut saat harus memulai obrolan dengan teman baru.'
  },
  {
    id: 30,
    domainId: 'sosial',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kecemasan Sosial & Ketakutan)',
    text: 'Tangan saya berkeringat dingin jika berada di tengah keramaian atau di kantin sekolah.'
  },
  {
    id: 31,
    domainId: 'sosial',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kecemasan Sosial & Ketakutan)',
    text: 'Saya merasa sangat khawatir akan berbuat salah dan ditertawakan oleh teman-teman.'
  },
  {
    id: 32,
    domainId: 'sosial',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kecemasan Sosial & Ketakutan)',
    text: 'Jantung saya berdetak sangat cepat saat berpapasan dengan teman yang pernah merundung (mem-bully) saya.',
    isEmergency: true
  },
  {
    id: 33,
    domainId: 'sosial',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kecemasan Sosial & Ketakutan)',
    text: 'Saya merasa panik memikirkan apa yang orang lain katakan tentang saya di belakang.'
  },
  {
    id: 34,
    domainId: 'sosial',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kecemasan Sosial & Ketakutan)',
    text: 'Saya merasa takut dan cemas saat harus bekerja sama dalam tugas kelompok karena takut menjadi beban.'
  },
  {
    id: 35,
    domainId: 'sosial',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kecemasan Sosial & Ketakutan)',
    text: 'Saya kesulitan menelan atau merasa mual saat harus bergabung dengan kelompok pergaulan yang populer.'
  },

  // Stres (36 - 42)
  {
    id: 36,
    domainId: 'sosial',
    subscale: 'stres',
    subscaleTitle: 'Stres (Konflik & Reaktivitas)',
    text: 'Saya merasa sangat mudah terpancing emosi jika teman bercanda sedikit saja tentang saya.'
  },
  {
    id: 37,
    domainId: 'sosial',
    subscale: 'stres',
    subscaleTitle: 'Stres (Konflik & Reaktivitas)',
    text: 'Saya kesulitan menenangkan diri setelah bertengkar atau berdebat dengan teman.'
  },
  {
    id: 38,
    domainId: 'sosial',
    subscale: 'stres',
    subscaleTitle: 'Stres (Konflik & Reaktivitas)',
    text: 'Saya merasa sangat kesal dan tegang saat berada di lingkungan pergaulan yang tidak saya sukai.'
  },
  {
    id: 39,
    domainId: 'sosial',
    subscale: 'stres',
    subscaleTitle: 'Stres (Konflik & Reaktivitas)',
    text: 'Saya kehilangan kesabaran dan cepat marah ketika teman tidak langsung membalas pesan saya.'
  },
  {
    id: 40,
    domainId: 'sosial',
    subscale: 'stres',
    subscaleTitle: 'Stres (Konflik & Reaktivitas)',
    text: 'Saya bereaksi berlebihan dan berteriak ketika ada teman yang menyinggung perasaan saya.'
  },
  {
    id: 41,
    domainId: 'sosial',
    subscale: 'stres',
    subscaleTitle: 'Stres (Konflik & Reaktivitas)',
    text: 'Saya merasa sulit untuk rileks saat berkumpul dengan teman karena terus berjaga-jaga agar tidak disakiti.'
  },
  {
    id: 42,
    domainId: 'sosial',
    subscale: 'stres',
    subscaleTitle: 'Stres (Konflik & Reaktivitas)',
    text: 'Saya merasa lelah dan tegang setelah seharian berpura-pura bahagia di depan teman-teman.',
    isScreeningCore: true
  },

  // BAB III: DINAMIKA KELUARGA (43 - 63)
  // Depresi (43 - 49)
  {
    id: 43,
    domainId: 'keluarga',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Dis-fungsi Keluarga & Kesepian)',
    text: 'Saya merasa sedih dan tidak berharga karena merasa orang tua lebih menyayangi saudara saya.'
  },
  {
    id: 44,
    domainId: 'keluarga',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Dis-fungsi Keluarga & Kesepian)',
    text: 'Saya merasa putus asa karena suasana di rumah selalu penuh pertengkaran dan tidak harmonis.',
    isScreeningCore: true
  },
  {
    id: 45,
    domainId: 'keluarga',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Dis-fungsi Keluarga & Kesepian)',
    text: 'Saya kehilangan harapan bahwa keluarga saya bisa berkumpul dan bahagia bersama lagi.'
  },
  {
    id: 46,
    domainId: 'keluarga',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Dis-fungsi Keluarga & Kesepian)',
    text: 'Saya merasa keberadaan saya di rumah hanya menjadi beban bagi orang tua.'
  },
  {
    id: 47,
    domainId: 'keluarga',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Dis-fungsi Keluarga & Kesepian)',
    text: 'Saya tidak menikmati waktu di rumah karena merasa terus disalahkan oleh orang tua.'
  },
  {
    id: 48,
    domainId: 'keluarga',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Dis-fungsi Keluarga & Kesepian)',
    text: 'Saya merasa hidup saya tidak berarti karena masalah perpisahan atau masalah berat yang dihadapi orang tua saya.'
  },
  {
    id: 49,
    domainId: 'keluarga',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Dis-fungsi Keluarga & Kesepian)',
    text: 'Saya merasa sangat kesepian di rumah meskipun ada anggota keluarga lain di sekitar saya.'
  },

  // Kecemasan (50 - 56)
  {
    id: 50,
    domainId: 'keluarga',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Situasional di Rumah)',
    text: 'Jantung saya berdebar kencang saat mendengar suara langkah kaki atau ketukan pintu dari orang tua yang sedang marah.'
  },
  {
    id: 51,
    domainId: 'keluarga',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Situasional di Rumah)',
    text: 'Saya merasa panik dan takut saat harus menunjukkan nilai rapor atau hasil ujian kepada orang tua.'
  },
  {
    id: 52,
    domainId: 'keluarga',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Situasional di Rumah)',
    text: 'Saya berkeringat dingin jika memikirkan masalah keuangan atau ekonomi keluarga yang sedang sulit.'
  },
  {
    id: 53,
    domainId: 'keluarga',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Situasional di Rumah)',
    text: 'Saya merasa sesak napas ketika orang tua mulai berdebat dengan suara keras di rumah.'
  },
  {
    id: 54,
    domainId: 'keluarga',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Situasional di Rumah)',
    text: 'Saya merasa sangat cemas memikirkan tuntutan dan harapan orang tua terhadap saya yang terlalu tinggi.'
  },
  {
    id: 55,
    domainId: 'keluarga',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Situasional di Rumah)',
    text: 'Saya merasa takut tanpa alasan yang jelas saat jam sekolah berakhir dan saya harus pulang ke rumah.'
  },
  {
    id: 56,
    domainId: 'keluarga',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kepanikan Situasional di Rumah)',
    text: 'Saya merasa gelisah dan gemetar ketika orang tua mulai membanding-bandingkan saya dengan anak lain.'
  },

  // Stres (57 - 63)
  {
    id: 57,
    domainId: 'keluarga',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Kewalahan)',
    text: 'Saya mudah marah dan membanting pintu saat disuruh melakukan sesuatu oleh orang tua saat saya sedang lelah.'
  },
  {
    id: 58,
    domainId: 'keluarga',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Kewalahan)',
    text: 'Saya sangat sulit untuk bersantai di kamar karena selalu ada aturan keluarga yang menekan saya.'
  },
  {
    id: 59,
    domainId: 'keluarga',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Kewalahan)',
    text: 'Saya merasa tegang dan tidak sabar saat orang tua menasehati saya panjang lebar.'
  },
  {
    id: 60,
    domainId: 'keluarga',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Kewalahan)',
    text: 'Saya bereaksi berlebihan dengan nada tinggi jika orang tua bertanya tentang kegiatan privasi saya.'
  },
  {
    id: 61,
    domainId: 'keluarga',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Kewalahan)',
    text: 'Saya merasa sangat kesal jika privasi saya di kamar atau di ponsel dicampuri oleh keluarga tanpa izin.'
  },
  {
    id: 62,
    domainId: 'keluarga',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Kewalahan)',
    text: 'Saya merasa kewalahan dan stres menanggung tugas menggantikan peran orang tua di rumah (misal: terus-menerus mengurus rumah/adik).'
  },
  {
    id: 63,
    domainId: 'keluarga',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Kewalahan)',
    text: 'Saya kesulitan menenangkan pikiran setelah berselisih paham dengan kakak atau adik di rumah.'
  },

  // BAB IV: PERKEMBANGAN FISIK & PSIKOSEKSUAL (64 - 84)
  // Depresi (64 - 70)
  {
    id: 64,
    domainId: 'fisik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Krisis Citra Tubuh & Identitas)',
    text: 'Saya merasa sangat benci dengan bentuk tubuh atau wajah saya sehingga merasa tidak pantas disukai orang lain.',
    isScreeningCore: true
  },
  {
    id: 65,
    domainId: 'fisik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Krisis Citra Tubuh & Identitas)',
    text: 'Saya merasa sedih dan putus asa karena perubahan fisik (jerawat, berat badan) yang membuat saya tidak percaya diri.'
  },
  {
    id: 66,
    domainId: 'fisik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Krisis Citra Tubuh & Identitas)',
    text: 'Saya merasa tidak berharga ketika membandingkan fisik saya dengan standar kecantikan/ketampanan di media sosial.'
  },
  {
    id: 67,
    domainId: 'fisik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Krisis Citra Tubuh & Identitas)',
    text: 'Saya kehilangan minat untuk merawat kebersihan diri karena merasa tidak ada gunanya.'
  },
  {
    id: 68,
    domainId: 'fisik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Krisis Citra Tubuh & Identitas)',
    text: 'Saya merasa sangat murung karena kebingungan mengenai identitas diri atau perubahan peran saya sebagai remaja.'
  },
  {
    id: 69,
    domainId: 'fisik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Krisis Citra Tubuh & Identitas)',
    text: 'Saya menarik diri dari pergaulan luar ruangan karena merasa fisik saya penuh dengan kekurangan.'
  },
  {
    id: 70,
    domainId: 'fisik',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Krisis Citra Tubuh & Identitas)',
    text: 'Saya merasa sedih dan hampa karena merasa tidak ada yang bisa menerima kondisi fisik saya apa adanya.'
  },

  // Kecemasan (71 - 77)
  {
    id: 71,
    domainId: 'fisik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kekhawatiran Fisik Ekstrem)',
    text: 'Saya merasa panik dan berkeringat dingin saat orang lain memperhatikan penampilan atau bentuk tubuh saya.'
  },
  {
    id: 72,
    domainId: 'fisik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kekhawatiran Fisik Ekstrem)',
    text: 'Saya merasa sangat takut jika pakaian yang saya kenakan membuat saya terlihat aneh di mata orang lain.'
  },
  {
    id: 73,
    domainId: 'fisik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kekhawatiran Fisik Ekstrem)',
    text: 'Jantung saya berdebar kencang saat memikirkan tentang perubahan drastis pada tubuh saya di masa pubertas.'
  },
  {
    id: 74,
    domainId: 'fisik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kekhawatiran Fisik Ekstrem)',
    text: 'Saya merasa cemas dan gelisah berlebihan memikirkan apakah saya memiliki kelainan fisik atau penyakit tertentu.'
  },
  {
    id: 75,
    domainId: 'fisik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kekhawatiran Fisik Ekstrem)',
    text: 'Saya merasa takut berada di dekat lawan jenis karena kebingungan tentang bagaimana harus bersikap.'
  },
  {
    id: 76,
    domainId: 'fisik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kekhawatiran Fisik Ekstrem)',
    text: 'Saya merasa mual dan gemetar saat mendengar orang lain berkomentar tentang tinggi atau berat badan saya.'
  },
  {
    id: 77,
    domainId: 'fisik',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Kekhawatiran Fisik Ekstrem)',
    text: 'Saya merasa cemas tentang perasaan ketertarikan emosional saya yang berubah, takut dianggap aneh oleh orang di sekitar.'
  },

  // Stres (78 - 84)
  {
    id: 78,
    domainId: 'fisik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Sensitivitas Tubuh & Defensif)',
    text: 'Saya merasa sangat kesal dan marah jika ada yang menyinggung tentang fisik saya, meskipun tujuannya hanya bercanda.'
  },
  {
    id: 79,
    domainId: 'fisik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Sensitivitas Tubuh & Defensif)',
    text: 'Saya merasa tegang dan menghabiskan banyak energi setiap hari hanya untuk menutupi kekurangan fisik yang saya miliki.'
  },
  {
    id: 80,
    domainId: 'fisik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Sensitivitas Tubuh & Defensif)',
    text: 'Saya mudah terpancing emosi ketika orang tua atau teman mengomentari cara saya berpakaian.'
  },
  {
    id: 81,
    domainId: 'fisik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Sensitivitas Tubuh & Defensif)',
    text: 'Saya merasa sulit bersantai karena otak saya terus-menerus memikirkan cara mengubah penampilan.'
  },
  {
    id: 82,
    domainId: 'fisik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Sensitivitas Tubuh & Defensif)',
    text: 'Saya tidak bisa memaklumi komentar apapun tentang tubuh saya dan langsung bereaksi menyerang balik.'
  },
  {
    id: 83,
    domainId: 'fisik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Sensitivitas Tubuh & Defensif)',
    text: 'Saya merasa sangat frustasi karena tubuh saya tidak bertumbuh seperti yang saya inginkan.'
  },
  {
    id: 84,
    domainId: 'fisik',
    subscale: 'stres',
    subscaleTitle: 'Stres (Sensitivitas Tubuh & Defensif)',
    text: 'Saya kehilangan kesabaran saat harus berdandan atau memilih pakaian karena merasa tidak ada yang cocok di tubuh saya.'
  },

  // BAB V: KARIER & KEMANDIRIAN MASA DEPAN (85 - 105)
  // Depresi (85 - 91)
  {
    id: 85,
    domainId: 'karier',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Ketidakberdayaan Masa Depan)',
    text: 'Saya merasa masa depan saya gelap karena saya tidak tahu sama sekali apa bakat atau minat saya.',
    isScreeningCore: true
  },
  {
    id: 86,
    domainId: 'karier',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Ketidakberdayaan Masa Depan)',
    text: 'Saya merasa tidak memiliki kemampuan apapun yang bisa diandalkan untuk bisa hidup mandiri nanti.'
  },
  {
    id: 87,
    domainId: 'karier',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Ketidakberdayaan Masa Depan)',
    text: 'Saya merasa sedih dan putus asa setiap kali memikirkan harus memilih jurusan untuk sekolah lanjutan atau kuliah.'
  },
  {
    id: 88,
    domainId: 'karier',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Ketidakberdayaan Masa Depan)',
    text: 'Saya merasa tidak ada gunanya belajar mengelola uang jajan karena merasa masa depan saya tetap akan gagal.'
  },
  {
    id: 89,
    domainId: 'karier',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Ketidakberdayaan Masa Depan)',
    text: 'Saya kehilangan semangat mengeksplorasi hobi karena merasa cita-cita saya tidak mungkin tercapai.'
  },
  {
    id: 90,
    domainId: 'karier',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Ketidakberdayaan Masa Depan)',
    text: 'Saya merasa diri saya akan selalu bergantung pada bantuan orang tua dan tidak akan pernah bisa mandiri.'
  },
  {
    id: 91,
    domainId: 'karier',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Ketidakberdayaan Masa Depan)',
    text: 'Saya merasa hampa dan tidak memiliki tujuan hidup yang jelas untuk apa saya bersekolah.'
  },

  // Kecemasan (92 - 98)
  {
    id: 92,
    domainId: 'karier',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Memasuki Kedewasaan)',
    text: 'Saya merasa panik dan sesak napas jika ditanya oleh guru atau keluarga tentang apa cita-cita saya.'
  },
  {
    id: 93,
    domainId: 'karier',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Memasuki Kedewasaan)',
    text: 'Saya merasa sangat khawatir tidak akan diterima di jenjang sekolah lanjutan yang saya impikan.'
  },
  {
    id: 94,
    domainId: 'karier',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Memasuki Kedewasaan)',
    text: 'Tangan saya berkeringat dingin saat memikirkan biaya pendidikan lanjutan yang mungkin akan membebani orang tua.'
  },
  {
    id: 95,
    domainId: 'karier',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Memasuki Kedewasaan)',
    text: 'Saya merasa gelisah dan tidak bisa tidur karena takut salah membuat keputusan tentang jalan hidup saya.'
  },
  {
    id: 96,
    domainId: 'karier',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Memasuki Kedewasaan)',
    text: 'Jantung saya berdebar cepat karena takut gagal secara memalukan saat mengikuti ujian masuk sekolah lanjutan.'
  },
  {
    id: 97,
    domainId: 'karier',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Memasuki Kedewasaan)',
    text: 'Saya merasa sangat cemas memikirkan apakah kelak saya bisa bertahan hidup dan bekerja mencari uang sendiri.'
  },
  {
    id: 98,
    domainId: 'karier',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Memasuki Kedewasaan)',
    text: 'Saya merasa gemetar dan takut menghadapi dunia orang dewasa yang penuh dengan tanggung jawab dan tagihan.'
  },

  // Stres (99 - 105)
  {
    id: 99,
    domainId: 'karier',
    subscale: 'stres',
    subscaleTitle: 'Stres (Tuntutan & Frustrasi Ekspektasi)',
    text: 'Saya merasa mudah marah jika dipaksa memikirkan rencana masa depan ketika otak saya sendiri sedang buntu.'
  },
  {
    id: 100,
    domainId: 'karier',
    subscale: 'stres',
    subscaleTitle: 'Stres (Tuntutan & Frustrasi Ekspektasi)',
    text: 'Saya merasa tegang dan tertekan oleh ambisi sekolah dan keluarga yang terus menuntut saya untuk menjadi sukses.'
  },
  {
    id: 101,
    domainId: 'karier',
    subscale: 'stres',
    subscaleTitle: 'Stres (Tuntutan & Frustrasi Ekspektasi)',
    text: 'Saya kesulitan bersantai karena merasa waktu terus berjalan mengejar saya sementara saya belum tahu ingin jadi apa.'
  },
  {
    id: 102,
    domainId: 'karier',
    subscale: 'stres',
    subscaleTitle: 'Stres (Tuntutan & Frustrasi Ekspektasi)',
    text: 'Saya kehilangan kesabaran saat diminta menyusun rencana berhemat dari uang saku harian.'
  },
  {
    id: 103,
    domainId: 'karier',
    subscale: 'stres',
    subscaleTitle: 'Stres (Tuntutan & Frustrasi Ekspektasi)',
    text: 'Saya merasa kewalahan, pusing, dan frustrasi saat mencari informasi tentang persyaratan sekolah lanjutan atau prospek kerja.'
  },
  {
    id: 104,
    domainId: 'karier',
    subscale: 'stres',
    subscaleTitle: 'Stres (Tuntutan & Frustrasi Ekspektasi)',
    text: 'Saya bereaksi berlebihan dan merasa muak ketika melihat teman-teman lain sudah memiliki rencana masa depan yang sangat matang.'
  },
  {
    id: 105,
    domainId: 'karier',
    subscale: 'stres',
    subscaleTitle: 'Stres (Tuntutan & Frustrasi Ekspektasi)',
    text: 'Saya merasa sangat kesal ketika diberi nasihat tentang masa depan karier yang bertolak belakang dengan keinginan saya.'
  },

  // BAB VI: NILAI SPIRITUAL, MORAL & ADIKSI (106 - 126)
  // Depresi (106 - 112)
  {
    id: 106,
    domainId: 'spiritual',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Rasa Bersalah & Apatis)',
    text: 'Saya merasa hidup ini kosong dan mulai mempertanyakan apakah agama atau doa-doa saya benar-benar berguna.',
    isScreeningCore: true
  },
  {
    id: 107,
    domainId: 'spiritual',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Rasa Bersalah & Apatis)',
    text: 'Saya merasa sangat berdosa, kotor, dan tidak pantas diampuni sehingga saya putus asa untuk berubah menjadi lebih baik.'
  },
  {
    id: 108,
    domainId: 'spiritual',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Rasa Bersalah & Apatis)',
    text: 'Saya kehilangan seluruh minat untuk mengikuti kegiatan ibadah yang dulunya rutin saya kerjakan.'
  },
  {
    id: 109,
    domainId: 'spiritual',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Rasa Bersalah & Apatis)',
    text: 'Saya merasa sedih karena terjebak dalam kecanduan (seperti bermain game berlebihan, media sosial, atau pornografi) dan merasa tidak punya kekuatan untuk berhenti.',
    isEmergency: true
  },
  {
    id: 110,
    domainId: 'spiritual',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Rasa Bersalah & Apatis)',
    text: 'Saya merasa diri saya adalah orang yang buruk karena sering melanggar norma susila atau aturan sekolah.'
  },
  {
    id: 111,
    domainId: 'spiritual',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Rasa Bersalah & Apatis)',
    text: 'Saya merasa tidak memiliki alasan untuk berbuat baik kepada sesama karena merasa dunia ini pada akhirnya egois dan jahat.'
  },
  {
    id: 112,
    domainId: 'spiritual',
    subscale: 'depresi',
    subscaleTitle: 'Depresi (Rasa Bersalah & Apatis)',
    text: 'Saya merasa lelah secara batin dan pasrah membiarkan kebiasaan buruk secara perlahan merusak hidup saya.'
  },

  // Kecemasan (113 - 119)
  {
    id: 113,
    domainId: 'spiritual',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Moral & Karma)',
    text: 'Saya merasa panik dan cemas berlebihan takut mendapat hukuman atau dosa besar atas kesalahan diam-diam yang saya perbuat.'
  },
  {
    id: 114,
    domainId: 'spiritual',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Moral & Karma)',
    text: 'Saya merasa gelisah dan jantung berdebar kencang jika kebiasaan buruk saya (misalnya menyontek, merokok) ketahuan oleh orang lain.'
  },
  {
    id: 115,
    domainId: 'spiritual',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Moral & Karma)',
    text: 'Saya berkeringat dingin saat berada dalam situasi di mana saya terpaksa berbohong untuk menyelamatkan diri dari hukuman.'
  },
  {
    id: 116,
    domainId: 'spiritual',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Moral & Karma)',
    text: 'Saya merasa takut secara tiba-tiba bahwa sesuatu kecelakaan atau nasib buruk akan menimpa saya sebagai karma.'
  },
  {
    id: 117,
    domainId: 'spiritual',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Moral & Karma)',
    text: 'Saya merasa sangat cemas saat harus mengikuti kegiatan keagamaan di sekolah karena merasa gerak-gerik saya diawasi dan dihakimi.'
  },
  {
    id: 118,
    domainId: 'spiritual',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Moral & Karma)',
    text: 'Saya merasa gemetar, gelisah, dan tidak fokus jika tidak bisa mengakses hal yang membuat saya kecanduan (seperti ponsel atau gim).'
  },
  {
    id: 119,
    domainId: 'spiritual',
    subscale: 'kecemasan',
    subscaleTitle: 'Kecemasan (Ketakutan Moral & Karma)',
    text: 'Saya merasa mual memikirkan pandangan orang tua jika mereka sampai tahu rahasia pelanggaran terdalam saya.'
  },

  // Stres (120 - 126)
  {
    id: 120,
    domainId: 'spiritual',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Agresivitas)',
    text: 'Saya merasa sangat kesal dan sinis ketika ada orang yang mencoba menasihati saya tentang agama atau moralitas.'
  },
  {
    id: 121,
    domainId: 'spiritual',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Agresivitas)',
    text: 'Saya mudah terpancing emosi dan sengaja memberontak terhadap aturan ketat yang diterapkan di lingkungan sekolah.'
  },
  {
    id: 122,
    domainId: 'spiritual',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Agresivitas)',
    text: 'Saya merasa tegang dan sulit menahan amarah jika dinasihati tentang tata krama dan sopan santun oleh orang dewasa.'
  },
  {
    id: 123,
    domainId: 'spiritual',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Agresivitas)',
    text: 'Saya kesulitan mengendalikan emosi sehingga dorongan untuk menyakiti diri sendiri atau merusak barang muncul saat saya sedang marah besar.',
    isEmergency: true
  },
  {
    id: 124,
    domainId: 'spiritual',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Agresivitas)',
    text: 'Saya merasa sangat kewalahan menahan dorongan dalam diri saya untuk melakukan hal yang jelas-jelas dilarang.'
  },
  {
    id: 125,
    domainId: 'spiritual',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Agresivitas)',
    text: 'Saya bereaksi dengan sangat agresif (membentak/memukul) saat ditegur karena terlalu banyak menghabiskan waktu bermain gim.',
    isEmergency: true
  },
  {
    id: 126,
    domainId: 'spiritual',
    subscale: 'stres',
    subscaleTitle: 'Stres (Pemberontakan & Agresivitas)',
    text: 'Saya merasa pikiran saya terus-menerus tegang karena kelelahan harus berpura-pura menjadi anak yang "baik dan suci" di depan banyak orang.'
  }
];

// Item Pilihan Standard DASS-42 (14 soal Depresi, 14 Kecemasan, 14 Stres)
// Untuk opsi Mode Cepat Standard DASS-42
export const STANDARD_DASS42_QUESTION_IDS = [
  // 14 Depresi
  1, 3, 5, 22, 25, 28, 44, 46, 64, 66, 85, 87, 106, 107,
  // 14 Kecemasan
  8, 10, 14, 29, 31, 32, 50, 53, 71, 74, 92, 96, 113, 114,
  // 14 Stres
  15, 16, 21, 36, 40, 42, 57, 59, 78, 81, 99, 100, 120, 123
];

// Item Fase Skrining Utama (18 Soal: 3 Soal per Domain untuk Logika Percabangan Bersyarat)
export const SCREENING_CORE_QUESTION_IDS = [
  // Akademik (Depresi 1, Kecemasan 8, Stres 15)
  1, 8, 15,
  // Sosial (Depresi 22, Kecemasan 29, Stres 36)
  22, 29, 36,
  // Dinamika Keluarga (Depresi 44, Kecemasan 50, Stres 57)
  44, 50, 57,
  // Fisik & Psikoseksual (Depresi 64, Kecemasan 71, Stres 78)
  64, 71, 78,
  // Karier & Kemandirian (Depresi 85, Kecemasan 92, Stres 99)
  85, 92, 99,
  // Nilai Spiritual, Moral & Adiksi (Depresi 106, Kecemasan 113, Stres/Emergency 123)
  106, 113, 123
];

