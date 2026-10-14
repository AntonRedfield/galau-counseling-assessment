# Panduan Konfigurasi Backend Firebase untuk GALAU

Aplikasi **GALAU** telah dirancang secara optimal untuk berjalan di atas ekosistem **Google Firebase** (Cloud Firestore, Authentication, & Firebase Hosting) dengan dukungan fallback offline instan.

---

## 🚀 2 Cara Menghubungkan ke Firebase

### Cara 1: Langsung dari Antarmuka Aplikasi (Paling Mudah)
1. Buka aplikasi GALAU di browser Anda.
2. Di pojok kanan atas navbar, klik tombol **"Status Firebase"** atau **"Pengaturan Firebase"**.
3. Masukkan data konfigurasi proyek Firebase Anda:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
4. Klik **"Simpan & Hubungkan"**. Aplikasi akan otomatis memuat ulang dan tersinkronisasi langsung ke Firestore!

---

### Cara 2: Menggunakan File `.env` (Untuk Pengembang / Production)
Buat file bernama `.env` di folder utama aplikasi dengan variabel berikut:

```env
VITE_FIREBASE_API_KEY=AIzaSyAxxxxxxxxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=proyek-galau.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=proyek-galau
VITE_FIREBASE_STORAGE_BUCKET=proyek-galau.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

---

## 🗄️ Struktur Koleksi Firestore yang Digunakan

Aplikasi secara otomatis membaca dan menulis ke koleksi berikut:

1. **`assessment_tokens`**
   - Dokumen per token siswa:
     ```json
     {
       "token": "GLU-2026-X1A",
       "role": "student",
       "className": "X - IPA 1",
       "status": "unused", // unused | completed
       "createdAt": "2026-10-12T00:00:00Z",
       "expiresAt": "2026-12-31T23:59:59Z"
     }
     ```

2. **`assessments`**
   - Dokumen laporan analitis psikologis lengkap:
     ```json
     {
       "id": "REP-2026-001",
       "token": "GLU-2026-X1A",
       "studentInfo": {
         "fullName": "Ahmad Fauzan",
         "nisn": "0081293841",
         "className": "X - IPA 1",
         "gender": "Laki-laki",
         "age": 16
       },
       "scores": {
         "dass": { "depresi": { "score": 8 }, "kecemasan": { "score": 6 }, "stres": { "score": 11 } },
         "triage": { "level": "NORMAL", "reasons": [] },
         "domainAnalysis": [...]
       },
       "completedAt": "2026-10-12T08:30:00Z"
     }
     ```

3. **`crisis_contacts`**
   - Pengaturan hotline bantuan darurat yang dapat disesuaikan oleh sekolah.

---

## 🔒 Penerapan Aturan Keamanan (Security Rules)

Unggah file `firestore.rules` yang telah disediakan ke Firebase Console di tab **Firestore Database > Rules**, atau jalankan perintah:
```bash
firebase deploy --only firestore:rules
```
