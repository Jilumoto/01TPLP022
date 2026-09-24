# 🎓 Website Resmi Kelas 01TPLP022

Website informasi dan aktivitas kelas yang modern, clean, interaktif, dan responsif. Dibangun murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript (ES6+)** tanpa ketergantungan framework eksternal (Tanpa React, Vue, Bootstrap, dsb.).

---

## 🌟 Fitur Utama

1. **Class Roulette (Wheel of Names)**:
   - Roda interaktif berbasis **HTML5 Canvas 60fps** dengan animasi putaran deselerasi halus (*cubic-bezier easing*).
   - Efek suara putaran (*tick sound*) dan nada kemenangan (*victory fanfare*) menggunakan **Web Audio API** sintetis (100% offline tanpa perlu file audio eksternal).
   - Efek perayaan **Confetti Particle System** murni dengan JavaScript.
   - Tombol toggle suara (Mute / Unmute).

2. **Random Group Generator (Bagi Kelompok Belajar)**:
   - Pengaturan jumlah siswa per kelompok dengan tombol *stepper* (+ / -).
   - Animasi pengacakan bertahap (*staggered card reveal*).
   - Tombol **Shuffle Again** (Acak Ulang), **Reset**, **Copy Groups** (salin rapi ke clipboard), dan **Download Groups** (unduh file `.txt` otomatis via JavaScript Blob API).

3. **Direktori Anggota Kelas & Profil Modal**:
   - Pencarian real-time berdasarkan Nama atau NIM siswa.
   - Filter peran: Semua, Pengurus Kelas, dan Anggota.
   - Modal detail profil interaktif saat kartu siswa diklik (menampilkan Bio, Email, No. HP, Keahlian, Hobi, dan tautan sosial media).

4. **Mata Kuliah & Jadwal Kuliah Pintar**:
   - Filter mata kuliah: Semua, Teori, dan Praktikum/Lab.
   - Tabel jadwal kuliah mingguan dengan **deteksi otomatis hari ini (TODAY highlight)** dengan badge glowing `⚡ HARI INI`.
   - Otomatis beralih menjadi mode kartu (*card layout*) yang rapi dan nyaman dibaca saat dibuka di layar smartphone.

5. **Galeri Kenangan Kelas & Lightbox**:
   - Grid foto kegiatan kelas dengan efek *hover zoom* dan overlay gradient.
   - Lightbox modal dengan navigasi lengkap (tombol Prev/Next, tombol Close, dan navigasi keyboard: `Panah Kiri`, `Panah Kanan`, serta tombol `Esc`).

6. **Pengumuman Kelas (Announcements)**:
   - Menampilkan pengumuman bertipe *Assignment* (Tugas), *Event* (Kegiatan), dan *Reminder* (Pengingat).

7. **Desain Modern & Dark Mode**:
   - Skema warna modern (Indigo/Purple dengan aksen gradient halus).
   - Glassmorphism (*backdrop-filter blur*), kartu dengan *rounded corners* dan bayangan halus.
   - Tombol toggle **Dark Mode / Light Mode** di navbar yang otomatis tersimpan di `localStorage` pengguna.
   - Navbar sticky dengan efek blur dan perubahan bayangan saat di-scroll.
   - Hamburger menu mobile dengan animasi transisi menjadi ikon 'X'.
   - Efek ripple saat tombol diklik dan tombol floating *Back to Top*.
   - Notifikasi Toast modern di pojok kanan bawah.

---

## 📁 Struktur Folder Project

```text
web/
│
├── index.html              # Struktur semantic HTML halaman web utama
├── style.css               # Seluruh styling, CSS Variables, animasi, dan responsive queries
├── script.js               # Logika interaktif & seluruh data konfigurasi yang dapat diedit
├── README.md               # Dokumentasi dan panduan penggunaan
│
└── assets/
    ├── images/
    │   ├── students/       # Foto/Avatar anggota kelas (student-01.svg s/d student-27.svg)
    │   ├── gallery/        # Foto dokumentasi kegiatan kelas (class-1.svg s/d class-6.svg)
    │   └── courses/        # Folder aset gambar mata kuliah (opsional)
    └── icons/              # Folder aset ikon tambahan (opsional)
```

> **Catatan Penting**: Website ini sudah dilengkapi aset placeholder vektor SVG lokal berkualitas tinggi di folder `assets/images/`, sehingga Anda dapat langsung membukanya di browser tanpa ada gambar yang rusak / *broken image* meskipun komputer sedang offline!

---

## 🚀 Cara Menjalankan Website

Tidak memerlukan instalasi Node.js, server khusus, ataupun proses build/compile:

1. **Cara Langsung**:
   - Cukup **klik dua kali (*double-click*)** file `index.html` pada File Explorer Anda, atau klik kanan lalu pilih **Open with > Google Chrome / Microsoft Edge / Mozilla Firefox**.
2. **Menggunakan VS Code Live Server (Opsional)**:
   - Buka folder `web` di VS Code.
   - Klik kanan pada `index.html` dan pilih **Open with Live Server**.

---

## ✏️ Panduan Mengganti & Menyesuaikan Data

Seluruh data konten utama berada di bagian paling atas file [script.js](file:///c:/Users/THINKPAD/OneDrive/Desktop/web/script.js) (baris 25 ke bawah), sehingga Anda **tidak perlu mengubah struktur HTML**.

### 1. Mengganti Nama & Identitas Kelas
Buka file `script.js` dan cari objek `classInfo`:
```javascript
const classInfo = {
  name: "RPL 2026",                          // Nama singkat kelas
  fullName: "Rekayasa Perangkat Lunak 2026",  // Nama lengkap
  major: "Rekayasa Perangkat Lunak",          // Jurusan / Program Studi
  semester: "Semester 1",                     // Semester saat ini
  academicYear: "2026 / 2027",                // Tahun Akademik
  leader: "Ezzar Putra",                      // Nama Ketua Kelas
  totalStudents: 27,                          // Total siswa
  motto: "Learning together, growing together...", // Motto kelas
  description: "..."                          // Deskripsi tentang kelas
};
```

---

### 2. Mengganti Nama & Data Anggota Kelas
Cari array `students` pada `script.js`:
```javascript
const students = [
  {
    id: "01",
    name: "Ezzar Putra",                      // Ganti dengan nama siswa
    nim: "2601001",                           // Ganti NIM / NIS
    role: "Ketua Kelas",                      // Peran / Jabatan
    roleType: "leader",                       // 'leader' untuk pengurus, 'student' untuk anggota
    image: "assets/images/students/student-01.svg", // Ganti dengan foto siswa (contoh: "assets/images/students/ezzar.jpg")
    bio: "Penggiat web development...",       // Bio profil
    email: "ezzar.putra@student.ac.id",       // Email
    phone: "+62 812-xxxx-xxxx",               // No. HP / WhatsApp
    skills: "JavaScript, TypeScript",         // Keahlian
    hobby: "Coding, Membaca",                 // Hobi
    socials: { 
      github: "https://github.com/username", 
      instagram: "https://instagram.com/username" 
    }
  },
  // ... Tambahkan atau ubah data siswa lainnya
];
```

---

### 3. Mengganti Foto Siswa
1. Masukkan file foto siswa berformat `.jpg` atau `.png` ke dalam folder:
   `assets/images/students/`
2. Buka `script.js` dan ubah nilai properti `image` pada siswa terkait:
   ```javascript
   image: "assets/images/students/nama-teman.jpg"
   ```

---

### 4. Mengganti Foto Galeri Kegiatan
1. Masukkan foto kegiatan kelas ke dalam folder:
   `assets/images/gallery/`
2. Buka `script.js` dan sesuaikan array `galleryPhotos`:
   ```javascript
   const galleryPhotos = [
     {
       id: "1",
       title: "Coding Hackathon 2026",
       tag: "Project",
       desc: "Momen seru saat tim RPL berkolaborasi...",
       image: "assets/images/gallery/foto-kegiatan-1.jpg" // Ganti path foto di sini
     },
     // ...
   ];
   ```

---

### 5. Mengganti Mata Kuliah & Jadwal
- Untuk daftar **Mata Kuliah**, edit array `courses` di `script.js`:
  ```javascript
  {
    code: "IF101",
    name: "Pemrograman Web",
    sks: 3,
    lecturer: "Dr. Hendra Wijaya, M.T.",
    scheduleDay: "Senin",
    scheduleTime: "08:00 - 10:30 WIB",
    room: "Lab Rekayasa 1",
    type: "praktikum", // 'teori' atau 'praktikum'
    icon: "🌐"
  }
  ```
- Untuk **Jadwal Mingguan**, edit array `schedule` di `script.js`:
  ```javascript
  { 
    day: "Senin", 
    time: "08:00 - 10:30 WIB", 
    course: "Pemrograman Web", 
    sks: "3 SKS", 
    lecturer: "Dr. Hendra Wijaya, M.T.", 
    room: "Lab Rekayasa 1" 
  }
  ```
  *(Sistem otomatis mendeteksi hari saat ini dan memberikan label `⚡ HARI INI`)*.

---

### 6. Mengganti Pengumuman Kelas
Sesuaikan array `announcements` di `script.js`:
```javascript
const announcements = [
  {
    type: "assignment", // 'assignment', 'event', atau 'reminder'
    title: "Deadline Tugas Besar Pemrograman Web",
    date: "Jumat, 23:59 WIB",
    badgeText: "Assignment 📢",
    description: "Pengumpulan kode project web kelompok..."
  }
];
```

---

### 7. Mengubah Warna & Tema Website
Skema warna seluruh website diatur menggunakan **CSS Variables** pada file [style.css](file:///c:/Users/THINKPAD/OneDrive/Desktop/web/style.css) di bagian paling atas:

```css
:root {
  /* Ubah warna utama tema Light Mode di sini */
  --primary: #4f46e5;           /* Warna biru/ungu utama */
  --secondary: #8b5cf6;         /* Warna ungu aksen */
  --bg-main: #f8fafc;           /* Warna latar belakang */
  --text-main: #0f172a;         /* Warna teks utama */
}

[data-theme="dark"] {
  /* Ubah warna utama tema Dark Mode di sini */
  --primary: #6366f1;
  --secondary: #a855f7;
  --bg-main: #0b0f19;
  --text-main: #f8fafc;
}
```

---

## 📱 Kompatibilitas Perangkat (Responsive Breakdown)

Website ini telah dirancang dan diuji untuk berbagai ukuran resolusi:
- **Desktop Layar Lebar**: 1920px, 1440px, 1366px (Layout grid luas, visual floating cards, tabel jadwal lengkap).
- **Tablet**: 1024px, 768px (Grid 2 kolom yang proporsional, roda roulette otomatis menyesuaikan ukuran).
- **Mobile Smartphone**: 480px, 390px, 375px (Navigasi slide-in hamburger menu, tabel jadwal bertransformasi menjadi kartu vertikal yang nyaman di-scroll).

---

## 🔒 Lisensi & Hak Cipta
Dibuat untuk kelas **01TPLP022**. Bebas digunakan, dimodifikasi, dan dikembangkan untuk keperluan kegiatan kelas, himpunan, atau perkuliahan.
