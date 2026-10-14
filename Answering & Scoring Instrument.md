**0\. Instruksi Pengisian:**  
Berikan penilaian pada setiap pernyataan di bawah ini berdasarkan seberapa sering Anda mengalaminya dalam **7 hari terakhir**. Gunakan parameter angka pasti berikut:

1. **0** \= Tidak pernah dialami sama sekali (0 Hari).

2. **1** \= Kadang-kadang dialami (1 \- 2 Hari).

3. **2** \= Sering dialami dan mengganggu aktivitas (3 \- 5 Hari).

4. **3** \= Hampir setiap hari dialami secara terus-menerus (6 \- 7 Hari).

### **1\. Skala Analog Visual (Visual Analogue Scale / VAS) Interaktif**

Daripada menampilkan empat tombol pilihan (radio buttons) yang statis, gunakan elemen antarmuka **Slider (Penggeser)**. Metode ini sangat ramah pengguna pada arsitektur Progressive Web App (PWA) yang diakses melalui ponsel siswa.

Siswa menggeser titik dari ujung kiri ke ujung kanan berdasarkan intensitas yang mereka rasakan. Di sisi *backend* (seperti Supabase), posisi slider (0-100) dikonversi secara otomatis menjadi skor DASS baku (0-3).

* **Tampilan Layar:** Garis horizontal tanpa angka di tengahnya, hanya ada label ekstrem di kedua ujung.

  * Ujung Kiri: "Sama sekali tidak"

  * Ujung Kanan: "Sangat parah / Sepanjang waktu"

* **Pemetaan Data (*Database Mapping*):**

  * Slider 0 \- 25 \= Tersimpan sebagai Skor **0**

  * Slider 26 \- 50 \= Tersimpan sebagai Skor **1**

  * Slider 51 \- 75 \= Tersimpan sebagai Skor **2**

  * Slider 76 \- 100 \= Tersimpan sebagai Skor **3**

### **2\. Rotasi Jangkar Semantik (*Dynamic Context Labels*)**

Menggunakan opsi berbasis "hari" untuk seluruh 126 pertanyaan akan terasa monoton. Validitas psikometri tetap terjaga jika label pilihan disesuaikan dengan *jenis domain* pertanyaannya. Bagi 126 pertanyaan menjadi tiga tahap penyajian dengan skala yang direpresentasikan secara berbeda:

| Kategori Instrumen | Tipe Label Penilaian | Opsi 0 | Opsi 1 | Opsi 2 | Opsi 3 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Domain Akademik & Karier** | **Tingkat Kesulitan** | Sangat Mudah Diatasi | Kadang Menjadi Beban | Sangat Menyulitkan Saya | Membuat Saya Menyerah |
| **Domain Sosial & Keluarga** | **Intensitas Perasaan** | Tidak Pernah Terasa | Sesekali Terasa | Mengganggu Pikiran | Sangat Menyakitkan |
| **Domain Fisik & Moral** | **Frekuensi (Baku)** | 0 Hari | 1-2 Hari | 3-5 Hari | 6-7 Hari |

### 

### **3\. Matriks Simbol Visual (Gamifikasi Skala)**

Siswa SMP merespons visual jauh lebih baik daripada teks panjang. Ganti teks skala (0, 1, 2, 3\) dengan simbol yang secara universal dipahami oleh remaja, tanpa perlu menggunakan istilah teknis yang rumit.

* **Metode Indikator Baterai (Energi Mental):**  
  Siswa ditanya: *"Seberapa banyak energi pikiran yang tersita untuk memikirkan masalah ini?"*

  * \[ 🔋 Penuh \] \= Tidak mengganggu (Skor 0\)

  * \[ 🪫 Berkurang \] \= Sedikit mengganggu (Skor 1\)

  * \[ ⚠️ Lemah \] \= Sangat mengganggu (Skor 2\)

  * \[ 🔴 Habis \] \= Melumpuhkan aktivitas (Skor 3\)

* **Metode Gradasi Warna (Suhu Emosi):**  
  Tombol jawaban menggunakan gradasi warna dari hijau (aman) hingga merah gelap (krisis). Siswa hanya perlu mengetuk warna yang mewakili intensitas masalah mereka.

### **4\. Logika Percabangan Bersyarat (*Conditional Branching*)**

Ini adalah metode paling efektif untuk memangkas kebosanan. Daripada memaksa siswa melihat 126 pertanyaan, gunakan sistem yang hanya memunculkan pertanyaan lanjutan jika siswa terdeteksi memiliki masalah di domain tersebut.

**Cara Kerja Struktur Data:**

1. **Fase Skrining Utama (15 Pertanyaan):** Tampilkan hanya 2-3 pertanyaan paling ekstrem dari setiap domain (misalnya, ambil pertanyaan nomor 1, 22, 43, 64, 85, 106).

2. **Fase Ekspansi (Otomatis):** Jika siswa memilih angka 2 atau 3 pada pertanyaan skrining di Domain Keluarga, sistem secara dinamis memunculkan sisa pertanyaan di bawah Domain Keluarga.

3. **Fase Bypass:** Jika siswa memilih angka 0 pada skrining Domain Akademik, seluruh sisa pertanyaan Akademik di-skip dan langsung diberikan nilai 0 di *database*.

