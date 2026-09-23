/**
 * ==============================================================================
 * CLASS WEBSITE SCRIPT - RPL 2026
 * Pure Vanilla JavaScript (ES6+) - No External Libraries/Frameworks
 * ==============================================================================
 */

// Menjalankan kode setelah seluruh dokumen DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initClassInfo();
  initCounters();
  initAnnouncements();
  initMembers();
  initRoulette();
  initGroupGenerator();
  initCoursesAndSchedule();
  initGallery();
  initBackToTop();
  initRippleEffect();
  initScrollReveal();
});

/* ==============================================================================
   DATA UTAMA KELAS (EDITABLE CONTENT)
   Ubah data di bawah ini untuk menyesuaikan isi website kelas Anda.
   ============================================================================== */

/**
 * 1. INFORMASI KELAS (Class Information)
 */
const classInfo = {
  name: "01TPLP022",
  fullName: "Teknik Informatika 01TPLP022",
  major: "Teknik Informatika",
  semester: "Semester 1",
  academicYear: "2026 / 2027",
  leader: "Azkia Azzahra Hafafil",
  totalStudents: 27,
  motto: "Learning together, growing together, creating impact through code.",
  description: "01TPLP022 adalah kelas yang berfokus pada pengembangan kemampuan teknologi rekayasa perangkat lunak, pemrograman modern, dan kerja sama tim. Kami berkomitmen untuk saling mendukung dalam proses perkuliahan, berkolaborasi melalui proyek nyata, dan bertumbuh bersama menyongsong masa depan industri teknologi."
};

/**
 * 2. DATA MAHASISWA / ANGGOTA KELAS (Students Data)
 * Ubah nama, NIM, foto (JPG/PNG/SVG), role, dan info profil di sini.
 */
const students = [
  {
    id: "01",
    name: "Azkia Azzahra Hafafil",
    nim: "261011401041",
    role: "Ketua Kelas",
    roleType: "leader",
    image: "assets/images/students/student-01.svg", /* Ganti dengan assets/images/students/nama-file.jpg */
    bio: "mabar",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://instagram.com" }
  },
  {
    id: "02",
    name: "AQIL BANI FARELLINOV",
    nim: "261011400902",
    role: "Wakil Ketua",
    roleType: "leader",
    image: "assets/images/students/student-02.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://instagram.com" }
  },
  {
    id: "03",
    name: "LUTFIYA NUR HASANAH",
    nim: "261011400922",
    role: "Sekretaris",
    roleType: "leader",
    image: "assets/images/students/student-03.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "04",
    name: "TIAN SAPUTRI HONDRO",
    nim: "261011401724",
    role: "Bendahara",
    roleType: "leader",
    image: "assets/images/students/student-04.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://instagram.com" }
  },
  {
    id: "05",
    name: "ACHMAD BAYU PRASETYO",
    nim: "261011401288",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-05.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://instagram.com" }
  },
  {
    id: "06",
    name: "AKBAR DAFA PANGESTU",
    nim: "261011401445",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-06.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "07",
    name: "EKA MAULANA RIZKI",
    nim: "261011400925",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-07.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "08",
    name: "EZZAR PUTRA PRAMUDYA",
    nim: "261011400914",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-08.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "09",
    name: "FAHD AIMAR AL HAQI",
    nim: "261011401118",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-09.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "10",
    name: "FEBRIYAN MAULANA",
    nim: "261011400911",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-10.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "11",
    name: "GUSTI RAMA YONIAR",
    nim: "261011400896",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-11.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "12",
    name: "IKHSAN NUR ABDILA",
    nim: "261011400899",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-12.svg",
    bio: "",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "13",
    name: "KEYLA PUTRI AZNI",
    nim: "261011400917",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-13.svg",
    bio: "Fokus pada integrasi perangkat keras IoT dan pemrograman mikrokontroler.",
    email: "dedi.hidayat@student.ac.id",
    phone: "+62 812-3456-7813",
    skills: "C, Arduino, IoT Protocols",
    hobby: "Elektronika, Robotika",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "14",
    name: "KURNIA DWI RAHMAN",
    nim: "261011401340",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-14.svg",
    bio: "Kreatif dalam membuat user persona, wireframe, dan prototype interaktif.",
    email: "erina.kusuma@student.ac.id",
    phone: "+62 812-3456-7814",
    skills: "Figma, User Research, Prototyping",
    hobby: "Sketching, Menonton Film",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "15",
    name: "LUT FIAH",
    nim: "261011400905",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-15.png",
    bio: "Mendalami teknologi containerisasi, CI/CD, dan cloud computing.",
    email: "gilang.ramadhan@student.ac.id",
    phone: "+62 812-3456-7815",
    skills: "Docker, Git, Linux Administration",
    hobby: "Gaming, Mendaki Gunung",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "16",
    name: "LUTFIYA NUR HASANAH",
    nim: "261011400922",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-16.svg",
    bio: "Suka membangun game indie sederhana dan logika simulasi visual.",
    email: "hafiz.alamsyah@student.ac.id",
    phone: "+62 812-3456-7816",
    skills: "JavaScript Game Loop, Canvas, C#",
    hobby: "Game Development, Berenang",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "17",
    name: "MARIA OYAKNI JENIA",
    nim: "261011400923",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-17.svg",
    bio: "Menaruh perhatian besar pada tata kelola perangkat lunak dan QA testing.",
    email: "indah.permata@student.ac.id",
    phone: "+62 812-3456-7817",
    skills: "Software Testing, Clean Code, Agile",
    hobby: "Membaca Novel, Masak",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "18",
    name: "MIKHAEL BURA KELEN",
    nim: "261011400924",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-18.svg",
    bio: "Antusias dengan arsitektur microservices dan efisiensi query basis data.",
    email: "joko.widodo@student.ac.id",
    phone: "+62 812-3456-7818",
    skills: "PostgreSQL, Backend API, Redis",
    hobby: "Gowes Sepeda, Membaca Berita",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "19",
    name: "MUAMMAR KHADAFI ABDURRAHMAN",
    nim: "261011401501",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-19.svg",
    bio: "Fokus pada penerapan kecerdasan buatan dasar dan machine learning.",
    email: "kiki.amelia@student.ac.id",
    phone: "+62 812-3456-7819",
    skills: "Python, Scikit-Learn, Pandas",
    hobby: "Fotografi Alam, Musik Akustik",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "20",
    name: "MUHAMMAD ALIF HAMZAH",
    nim: "261011400919",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-20.svg",
    bio: "Senang mendalami protokol routing dan instalasi server Linux.",
    email: "lutfi.hakim@student.ac.id",
    phone: "+62 812-3456-7820",
    skills: "Cisco Packet Tracer, Debian, SSH",
    hobby: "Futsal, Menjelajah Internet",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "21",
    name: "MUHAMMAD HUSNIY ABDILLAH",
    nim: "261011400912",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-21.svg",
    bio: "Menyukai estetika desain web minimalis dan micro-interactions.",
    email: "maya.anggraini@student.ac.id",
    phone: "+62 812-3456-7821",
    skills: "Web Design, CSS Keyframes, SVG",
    hobby: "Melukis, Menulis Puisi",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "22",
    name: "MUHAMMAD RIZKY RAMADHAN",
    nim: "261011401537",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-22.svg",
    bio: "Selalu bersemangat mencoba bahasa pemrograman baru dan framework eksperimental.",
    email: "naufal.zaki@student.ac.id",
    phone: "+62 812-3456-7822",
    skills: "Rust Dasar, JavaScript, Git",
    hobby: "Sepak Bola, Podcast Teknologi",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "23",
    name: "MUHAMMAD RUSTIAN AL-FARIZI",
    nim: "261011400926",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-23.svg",
    bio: "Teliti dalam pengujian fungsionalitas aplikasi dan pelaporan bug.",
    email: "olivia.rahma@student.ac.id",
    phone: "+62 812-3456-7823",
    skills: "Quality Assurance, User Testing",
    hobby: "Menonton Drakor, Masak",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "24",
    name: "RADINKA ARKA PRAMANA",
    nim: "261011401493",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-24.svg",
    bio: "Pecinta opensource software dan optimasi performa web.",
    email: "pandu.w@student.ac.id",
    phone: "+62 812-3456-7824",
    skills: "Web Performance, Vanilla JS, SEO",
    hobby: "Badminton, Ngeblog Tekno",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "25",
    name: "YOGA M RIZKY NUROHMAN",
    nim: "261011401299",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-25.svg",
    bio: "Mempelajari etika teknologi, keamanan data pribadi, dan rekayasa kebutuhan.",
    email: "qonita.syifa@student.ac.id",
    phone: "+62 812-3456-7825",
    skills: "Requirements Engineering, Scrum",
    hobby: "Baking, Traveling",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "26",
    name: "ZAHRA NURAISYAH",
    nim: "261011401606",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-26.svg",
    bio: "Suka membangun otomasi skrip sederhana untuk mempermudah tugas harian.",
    email: "rifqi.aditya@student.ac.id",
    phone: "+62 812-3456-7826",
    skills: "Python Scripting, Web Scraping",
    hobby: "Main Game MOBA, Musik",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  },
  {
    id: "27",
    name: "ZAKI HYLMI AS SAJDAH",
    nim: "261011400906",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/student-27.svg",
    bio: "Tertarik pada human-computer interaction dan kepuasan pengguna aplikasi.",
    email: "siti.nurhaliza@student.ac.id",
    phone: "+62 812-3456-7827",
    skills: "UI/UX, Wireframing, Figma",
    hobby: "Membaca Buku, Menulis",
    socials: { github: "https://github.com", instagram: "https://instagram.com" }
  }
];

/**
 * 3. DATA MATA KULIAH (Courses Data)
 */
const courses = [
  {
    code: "26TIF0004",
    name: "Logika Informatika",
    sks: 3,
    lecturer: "ZURNAN ALFIAN S.Kom., M.Kom.",
    scheduleDay: "Senin",
    scheduleTime: "12:10 - 13:30 WIB",
    room: "v123",
  },
  {
    code: "26TIF0003",
    name: "Kalkulus",
    sks: 3,
    lecturer: "ELFI FAUZIAH S.Si, M.Pd, M.Si.",
    scheduleDay: "Senin",
    scheduleTime: "10:30 - 12:10 WIB",
    room: "V123",
  },
  {
    code: "26TIF0005",
    name: "Pengantar Teknoligi Informasi",
    sks: 2,
    lecturer: "WIWIN WINARTI S.Si., M.Kom.",
    scheduleDay: "Selasa",
    scheduleTime: "08:50 - 10:30 WIB",
    room: "V123",
  },
  {
    code: "NULL",
    name: "Pancasila",
    sks: 2,
    lecturer: "ANIS SYAMSU RIZAL S.Pd.I., M.Pd., Μ.Μ",
    scheduleDay: "Selasa",
    scheduleTime: "10:30 - 12:10 WIB",
    room: "V123",
  },
  {
    code: "26PAM0010",
    name: "BASIC ENGLISH FOR INTERNATIONAL COMMUNICATION ",
    sks: 2,
    lecturer: "AHMAD ARIFIN S.Pd., M.Pd.",
    scheduleDay: "Senin",
    scheduleTime: "14:40 - 16:10 WIB",
    room: "V123",
  },
  {
    code: "NULL",
    name: "Agama Islam",
    sks: 2,
    lecturer: "ABU BAKAR DJA'FAR S.Ag., M.A",
    scheduleDay: "Rabu",
    scheduleTime: "08:50 - 10:30 WIB",
    room: "V123",
  },
  {
    code: "26TIF0001",
    name: "Algoritma Dan Pemrograman Dasar",
    sks: 3,
    lecturer: "NURHALIMAH S.Kom., M.Kom.",
    scheduleDay: "Jumat",
    scheduleTime: "07:10 - 08:50 WIB",
    room: "V123",
  },
  {
    code: "26TIF0002",
    name: "Arsitektur Dan Organisasi Komputer",
    sks: 3,
    lecturer: "ALVINO OCTAVIANO ST, M.Kom",
    scheduleDay: "Jumat",
    scheduleTime: "08:50 - 10:30 WIB",
    room: "V123",
  }
];

/**
 * 4. DATA JADWAL KULIAH (Schedule Table)
 */
const schedule = [
  { day: "Senin", time: "10:30 - 12:10 WIB", course: "Kalkulus", sks: "3 SKS", lecturer: "ELFI FAUZIAH S.Si, M.Pd, M.Si.", room: "V123" },
  { day: "Senin", time: "12:10 - 13:30 WIB", course: "Logika Informatika", sks: "3 SKS", lecturer: "ZURNAN ALFIAN S.Kom., M.Kom.", room: "V123" },
  { day: "Senin", time: "14:40 - 16:10 WIB", course: "BASIC ENGLISH FOR INTERNATIONAL COMMUNICATION", sks: "2 SKS", lecturer: "AHMAD ARIFIN S.Pd.,M.Pd.", room: "V123" },
  { day: "Selasa", time: "08:50 - 10:30 WIB", course: "Pengantar Teknologi Informasi", sks: "2 SKS", lecturer: "WIWIN WINARTI S.Si., M.Kom.", room: "V123" },
  { day: "Selasa", time: "10:30 - 12:10 WIB", course: "Pancasila", sks: "2 SKS", lecturer: "ANIS SYAMSU RIZAL S.Pd.I., M.Pd., Μ.Μ.", room: "V123" },
  { day: "Rabu", time: "08:50 - 10:30 WIB", course: "Agama Islam", sks: "2 SKS", lecturer: "ABU BAKAR DJA'FAR S.Ag., M.A.", room: "V123" },
  { day: "Jumat", time: "07:10 - 08:50 WIB", course: "Algoritma Dan Pemrograman Dasar", sks: "3 SKS", lecturer: "NURHALIMAH S.Kom., M.Kom.", room: "V123" },
  { day: "Jumat", time: "08:50 - 10:30 WIB", course: "Arsitektur Dan Organisasi Komputer", sks: "3 SKS", lecturer: "ALVINO OCTAVIANO ST, M.Kom", room: "V123" },
];

/**
 * 5. DATA PENGUMUMAN KELAS (Announcements)
 */
const announcements = [
  {
    type: "assignment",
    title: "Pengantar Teknologi Informasi",
    date: "Jumat, 23:59 WIB",
    badgeText: "Assignment 📢",
    description: "Tugas PTI mencatat/mencari materi tentang osi vs tcp/ip"
  },
  {
    type: "assignment",
    title: "Tugas Logika informatika.",
    date: "Minggu Depan (Senin)",
    badgeText: "Assignment 📢",
    description: "Cerita rakyat",
  },
];

/**
 * 6. DATA GALERI KENANGAN KELAS (Class Memories Gallery)
 */
const galleryPhotos = [
  {
    id: "1",
    title: "",
    tag: "",
    desc: "",
    image: "",
  },
  {
    id: "2",
    title: "",
    tag: "",
    desc: "",
    image: "assets/images/gallery/class-2.svg"
  },
  {
    id: "3",
    title: "",
    tag: "",
    desc: "",
    image: "assets/images/gallery/class-3.svg"
  },
  {
    id: "4",
    title: "",
    tag: "",
    desc: "",
    image: "assets/images/gallery/class-4.svg"
  },
  {
    id: "5",
    title: "",
    tag: "",
    desc: "",
    image: "assets/images/gallery/class-5.svg"
  },
  {
    id: "6",
    title: "",
    tag: "",
    desc: "",
    image: "assets/images/gallery/class-.svg"
  }
];

/* ==============================================================================
   LOGIKA SISTEM & MODUL INTERAKTIF (JAVASCRIPT ARCHITECTURE)
   ============================================================================== */

/**
 * 1. INISIALISASI DARK MODE / THEME SYSTEM
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlElement = document.documentElement;

  // Baca preferensi dari localStorage atau deteksi pengaturan sistem OS
  const savedTheme = localStorage.getItem('rpl2026-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  htmlElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('rpl2026-theme', newTheme);

      showToast(newTheme === 'dark' ? '🌙 Dark Mode diaktifkan' : '☀️ Light Mode diaktifkan', 'info');
    });
  }
}

/**
 * 2. INISIALISASI NAVBAR (Sticky Scroll, Hamburger Menu, Active Scrollspy)
 */
function initNavbar() {
  const header = document.getElementById('header');
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar with blur and height shrink on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile Hamburger Toggle
  if (navToggleBtn && navMenu) {
    const toggleMenu = () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggleBtn.classList.toggle('open');
      navToggleBtn.setAttribute('aria-expanded', isOpen);
      if (navBackdrop) navBackdrop.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
      navMenu.classList.remove('open');
      navToggleBtn.classList.remove('open');
      navToggleBtn.setAttribute('aria-expanded', 'false');
      if (navBackdrop) navBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    };

    navToggleBtn.addEventListener('click', toggleMenu);
    if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);

    // Tutup menu mobile ketika salah satu link diklik
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Active Link Highlighter berdasarkan posisi scroll
  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/**
 * 3. INISIALISASI DATA IDENTITAS KELAS
 */
function initClassInfo() {
  const setContent = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setContent('navClassTitle', classInfo.name);
  setContent('heroClassName', classInfo.name);
  setContent('aboutDescription', classInfo.description);
  setContent('aboutMotto', `"${classInfo.motto}"`);
  setContent('infoClassName', classInfo.name);
  setContent('infoMajor', classInfo.major);
  setContent('infoLeader', classInfo.leader);
  setContent('infoSemester', classInfo.semester);
  setContent('infoMembers', `${students.length} Mahasiswa`);
  setContent('infoYear', classInfo.academicYear);
  setContent('genTotalStudents', `${students.length} Mahasiswa`);
  setContent('heroStudentCount', `${students.length}+`);

  // Update Footer Title & Document Tab Title
  const footerTitle = document.querySelector('.footer-title');
  if (footerTitle) footerTitle.textContent = classInfo.name;
  document.title = `${classInfo.name} | Website Resmi Kelas`;

  // Update Wheel Center Cap
  const wheelCap = document.querySelector('#wheelCenterCap span');
  if (wheelCap) wheelCap.textContent = classInfo.name.length > 7 ? classInfo.name.substring(0, 6) : classInfo.name;

  // Update Hero Manifesto Preview Code
  const manifestoStr = document.querySelector('.code-preview .c-str');
  if (manifestoStr) manifestoStr.textContent = `"${classInfo.name}"`;

  // Render hero mini avatar cluster (4 siswa pertama)
  const heroAvatarStack = document.getElementById('heroAvatarStack');
  if (heroAvatarStack) {
    heroAvatarStack.innerHTML = students.slice(0, 4).map(s => `
      <img src="${s.image}" alt="${s.name}" title="${s.name}">
    `).join('');
  }
}

/**
 * 4. ANIMASI ANGKA STATISTIK (Animated Counter)
 */
function initCounters() {
  const statsSection = document.getElementById('statsSection');
  if (!statsSection) return;

  const statStudents = document.getElementById('statStudents');
  const statCourses = document.getElementById('statCourses');
  const statGroups = document.getElementById('statGroups');
  const statMemories = document.getElementById('statMemories');

  if (statStudents) statStudents.dataset.target = students.length;
  if (statCourses) statCourses.dataset.target = courses.length;
  if (statMemories) statMemories.dataset.target = galleryPhotos.length;

  let counted = false;

  const runCounter = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1800;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.ceil(current);
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        const numbers = statsSection.querySelectorAll('.stat-number');
        numbers.forEach(num => runCounter(num));
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

/**
 * 5. INISIALISASI PENGUMUMAN KELAS
 */
function initAnnouncements() {
  const container = document.getElementById('announcementsContainer');
  if (!container) return;

  container.innerHTML = announcements.map(item => `
    <div class="notice-card reveal">
      <div class="notice-top">
        <span class="notice-badge ${item.type}">${item.badgeText}</span>
        <span class="notice-date">${item.date}</span>
      </div>
      <h3 class="notice-title">${item.title}</h3>
      <p class="notice-desc">${item.description}</p>
    </div>
  `).join('');
}

/**
 * 6. INISIALISASI ANGGOTA KELAS & MODAL PROFIL
 */
function initMembers() {
  const grid = document.getElementById('membersGrid');
  const searchInput = document.getElementById('memberSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterTabs = document.getElementById('memberFilterTabs');
  const emptyState = document.getElementById('membersEmptyState');
  const resetBtn = document.getElementById('resetMemberSearchBtn');

  // Update total counts
  const countAll = document.getElementById('countAll');
  const countLeader = document.getElementById('countLeader');
  const countStudent = document.getElementById('countStudent');

  if (countAll) countAll.textContent = students.length;
  if (countLeader) countLeader.textContent = students.filter(s => s.roleType === 'leader').length;
  if (countStudent) countStudent.textContent = students.filter(s => s.roleType === 'student').length;

  let currentFilter = 'all';
  let searchQuery = '';

  const renderMembers = () => {
    if (!grid) return;

    const filtered = students.filter(s => {
      const matchFilter = currentFilter === 'all' || s.roleType === currentFilter;
      const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.nim.includes(searchQuery);
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(s => {
      let roleClass = 'student';
      if (s.role.toLowerCase().includes('ketua') && !s.role.toLowerCase().includes('wakil')) roleClass = 'ketua';
      else if (s.role.toLowerCase().includes('wakil')) roleClass = 'wakil';
      else if (s.role.toLowerCase().includes('sekretaris')) roleClass = 'sekretaris';
      else if (s.role.toLowerCase().includes('bendahara')) roleClass = 'bendahara';

      return `
        <div class="member-card reveal active" data-id="${s.id}" tabindex="0" role="button" aria-label="Lihat detail ${s.name}">
          <div class="member-avatar-box">
            <img src="${s.image}" alt="${s.name}" loading="lazy">
          </div>
          <span class="member-role-tag ${roleClass}">${s.role}</span>
          <h3 class="member-name">${s.name}</h3>
          <span class="member-nim">NIM: ${s.nim}</span>
          
          <div class="member-social-row">
            <span class="member-social-icon" title="GitHub">💻</span>
            <span class="member-social-icon" title="Instagram">📸</span>
            <span class="member-social-icon" title="LinkedIn">💼</span>
          </div>
        </div>
      `;
    }).join('');

    // Pasang listener klik untuk membuka modal profil
    grid.querySelectorAll('.member-card').forEach(card => {
      card.addEventListener('click', () => {
        const studentId = card.dataset.id;
        const studentData = students.find(s => s.id === studentId);
        if (studentData) openMemberModal(studentData);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  };

  // Search Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('active', searchQuery.length > 0);
      }
      renderMembers();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.remove('active');
        renderMembers();
        searchInput.focus();
      }
    });
  }

  // Filter Tabs Event
  if (filterTabs) {
    filterTabs.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderMembers();
      });
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      currentFilter = 'all';
      if (filterTabs) {
        filterTabs.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.filter === 'all');
        });
      }
      renderMembers();
    });
  }

  renderMembers();
}

/**
 * MODAL DETAIL SISWA (Member Profile Modal)
 */
function openMemberModal(student) {
  const modal = document.getElementById('memberModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  document.getElementById('modalStudentImg').src = student.image;
  document.getElementById('modalStudentImg').alt = student.name;
  document.getElementById('modalStudentName').textContent = student.name;
  document.getElementById('modalStudentNim').textContent = `NIM: ${student.nim}`;
  document.getElementById('modalStudentRoleBadge').textContent = student.role;
  document.getElementById('modalStudentBio').textContent = student.bio || "Mahasiswa aktif kelas RPL 2026.";
  document.getElementById('modalStudentEmail').textContent = student.email || "-";
  document.getElementById('modalStudentPhone').textContent = student.phone || "-";
  document.getElementById('modalStudentSkills').textContent = student.skills || "-";
  document.getElementById('modalStudentHobby').textContent = student.hobby || "-";

  const socialsContainer = document.getElementById('modalSocialButtons');
  if (socialsContainer) {
    socialsContainer.innerHTML = `
      <a href="${student.socials?.github || '#'}" target="_blank" rel="noopener" class="modal-social-btn">💻 GitHub</a>
      <a href="${student.socials?.instagram || '#'}" target="_blank" rel="noopener" class="modal-social-btn">📸 Instagram</a>
      <a href="mailto:${student.email}" class="modal-social-btn">✉️ Kirim Email</a>
    `;
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', onKeyDown);
    }
  };
  document.addEventListener('keydown', onKeyDown);
}

/**
 * 7. FITUR UTAMA: CLASS ROULETTE (Canvas Interactive Wheel, Web Audio Sound, & Confetti)
 */
let isSoundEnabled = true;
let audioContext = null;

function getAudioContext() {
  if (!audioContext) {
    const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
    if (AudioCtxClass) {
      audioContext = new AudioCtxClass();
    }
  }
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

// Suara gesekan/klik saat roda berputar melewati sektor
function playTickSound() {
  if (!isSoundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.035);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.035);
  } catch (e) {
    // Ignore audio autoplay restrictions
  }
}

// Suara nada kemenangan saat roda berhenti pada siswa
function playVictoryFanfare() {
  if (!isSoundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = ctx.currentTime + idx * 0.12;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.2, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  } catch (e) {
    // Ignore
  }
}

function initRoulette() {
  const canvas = document.getElementById('rouletteCanvas');
  const spinBtn = document.getElementById('spinBtn');
  const spinBtnText = document.getElementById('spinBtnText');
  const winnerCard = document.getElementById('winnerCard');
  const winnerAvatar = document.getElementById('winnerAvatar');
  const winnerName = document.getElementById('winnerName');
  const winnerId = document.getElementById('winnerId');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const numSlices = students.length;
  const arc = (2 * Math.PI) / numSlices;

  // Warna sektor roda yang harmonis & modern
  const sliceColors = [
    '#6366f1', '#8b5cf6', '#3b82f6', '#06b6d4', 
    '#10b981', '#f59e0b', '#ec4899', '#14b8a6',
    '#4f46e5', '#a855f7', '#0284c7', '#059669'
  ];

  let currentAngle = 0;
  let isSpinning = false;
  let spinVelocity = 0;
  let lastSectorIndex = -1;

  // Render Roda pada Canvas dengan resolusi tinggi
  function drawWheel() {
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = cx - 12;

    ctx.clearRect(0, 0, width, height);

    // Gambar setiap irisan (wedge/sector)
    for (let i = 0; i < numSlices; i++) {
      const angle = currentAngle + i * arc;
      ctx.beginPath();
      ctx.fillStyle = sliceColors[i % sliceColors.length];
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle, angle + arc, false);
      ctx.lineTo(cx, cy);
      ctx.fill();

      // Garis tepi halus antar sektor
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Gambar nama siswa melintang dari luar ke arah pusat roda
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 4;
      
      // Ambil nama panggilan/depan agar rapi di roda
      const studentName = students[i].name;
      const displayName = studentName.length > 14 ? studentName.substring(0, 12) + '...' : studentName;
      ctx.fillText(displayName, radius - 20, 5);
      ctx.restore();
    }

    // Outer ring border roda
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.lineWidth = 8;
    ctx.stroke();
  }

  // Gambar roda awal
  drawWheel();

  // Toggle Suara
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      soundIcon.textContent = isSoundEnabled ? '🔊' : '🔇';
      showToast(isSoundEnabled ? 'Suara Roulette diaktifkan' : 'Suara Roulette dibisukan', 'info');
    });
  }

  // Hitung pemenang berdasarkan pointer panah di posisi puncak (270 derajat atau 3*PI/2)
  function getSelectedStudent(finalAngle) {
    const pointerAngle = (3 * Math.PI) / 2; // Atas (Top)
    const normalizedAngle = (pointerAngle - (finalAngle % (2 * Math.PI)) + 4 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalizedAngle / arc) % numSlices;
    return students[index];
  }

  // Animasi Putaran Roda
  function spin() {
    if (isSpinning) return;
    isSpinning = true;

    // Aktifkan audio context saat tombol diklik user
    getAudioContext();

    if (spinBtn) {
      spinBtn.disabled = true;
      spinBtnText.textContent = 'SPINNING... 🎲';
    }
    if (winnerCard) {
      winnerCard.classList.add('hidden');
    }

    // Parameter Fisika Putaran (4 - 5.5 detik)
    const totalSpinDuration = 4800; // 4.8 detik
    const randomExtraTurns = 6 + Math.random() * 4; // 6 sampai 10 putaran penuh
    const randomTargetAngle = Math.random() * (2 * Math.PI);
    const targetTotalRotation = randomExtraTurns * 2 * Math.PI + randomTargetAngle;
    const startAngle = currentAngle;
    const startTime = performance.now();

    function animateSpin(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalSpinDuration, 1);

      // Cubic Ease Out (Cepat di awal, melambat secara halus di akhir)
      const easeOut = 1 - Math.pow(1 - progress, 3.2);

      currentAngle = startAngle + targetTotalRotation * easeOut;
      drawWheel();

      // Mainkan suara 'tick' setiap kali roda melewati sektor baru
      const currentSector = Math.floor(((currentAngle % (2 * Math.PI)) + 2 * Math.PI) / arc) % numSlices;
      if (currentSector !== lastSectorIndex) {
        playTickSound();
        lastSectorIndex = currentSector;
      }

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        // Roda berhenti berputar
        isSpinning = false;
        if (spinBtn) {
          spinBtn.disabled = false;
          spinBtnText.textContent = 'SPIN THE WHEEL';
        }

        const winner = getSelectedStudent(currentAngle);

        // Bunyikan fanfare
        playVictoryFanfare();

        // Tampilkan kartu pemenang terpilih
        if (winnerCard) {
          winnerAvatar.src = winner.image;
          winnerAvatar.alt = winner.name;
          winnerName.textContent = winner.name;
          winnerId.textContent = `NIM: ${winner.nim} • ${winner.role}`;
          winnerCard.classList.remove('hidden');
        }

        // Tembakkan konfeti perayaan
        launchConfetti();

        // Tampilkan notifikasi toast
        showToast(`🎉 Siswa terpilih: ${winner.name}!`, 'success');
      }
    }

    requestAnimationFrame(animateSpin);
  }

  if (spinBtn) {
    spinBtn.addEventListener('click', spin);
  }
}

/**
 * 8. EFEK PERAYAAN KONFETI (Vanilla JS Confetti Particle System)
 */
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];
  const count = 120;
  const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#8b5cf6', '#ffffff'];

  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 100,
      y: canvas.height / 2 + (Math.random() - 0.5) * 60,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.9) * 18,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationFrame;
  const startTime = performance.now();

  function renderConfetti(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let activeCount = 0;
    confettiPieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // Gravitasi
      p.vx *= 0.98; // Hambatan udara
      p.rotation += p.rotSpeed;

      if (elapsed > 2000) {
        p.opacity = Math.max(0, p.opacity - 0.02);
      }

      if (p.opacity > 0 && p.y < canvas.height + 50) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    });

    if (activeCount > 0 && elapsed < 4000) {
      animationFrame = requestAnimationFrame(renderConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  requestAnimationFrame(renderConfetti);
}

/**
 * 9. FITUR RANDOM GROUP GENERATOR (Bagi Kelompok Acak)
 */
let currentGeneratedGroups = [];

function initGroupGenerator() {
  const studentsPerGroupInput = document.getElementById('studentsPerGroupInput');
  const stepperDec = document.getElementById('stepperDec');
  const stepperInc = document.getElementById('stepperInc');
  const summaryText = document.getElementById('groupSummaryText');
  const generateBtn = document.getElementById('generateGroupsBtn');
  const actionsBar = document.getElementById('groupActionsBar');
  const shuffleAgainBtn = document.getElementById('shuffleAgainBtn');
  const copyGroupsBtn = document.getElementById('copyGroupsBtn');
  const downloadGroupsBtn = document.getElementById('downloadGroupsBtn');
  const resetGroupsBtn = document.getElementById('resetGroupsBtn');
  const indicator = document.getElementById('shufflingIndicator');
  const resultGrid = document.getElementById('groupsResultGrid');
  const placeholderHint = document.getElementById('groupsPlaceholderHint');

  const updateSummary = () => {
    const perGroup = parseInt(studentsPerGroupInput.value, 10) || 5;
    const total = students.length;
    const numGroups = Math.ceil(total / perGroup);
    if (summaryText) {
      summaryText.innerHTML = `Akan menghasilkan <strong>${numGroups} Kelompok</strong> (rata-rata ~${perGroup} siswa per kelompok)`;
    }
  };

  if (studentsPerGroupInput) {
    studentsPerGroupInput.addEventListener('input', () => {
      let val = parseInt(studentsPerGroupInput.value, 10);
      if (isNaN(val) || val < 2) studentsPerGroupInput.value = 2;
      if (val > 15) studentsPerGroupInput.value = 15;
      updateSummary();
    });
  }

  if (stepperDec && studentsPerGroupInput) {
    stepperDec.addEventListener('click', () => {
      let val = parseInt(studentsPerGroupInput.value, 10) || 5;
      if (val > 2) {
        studentsPerGroupInput.value = val - 1;
        updateSummary();
      }
    });
  }

  if (stepperInc && studentsPerGroupInput) {
    stepperInc.addEventListener('click', () => {
      let val = parseInt(studentsPerGroupInput.value, 10) || 5;
      if (val < 15) {
        studentsPerGroupInput.value = val + 1;
        updateSummary();
      }
    });
  }

  updateSummary();

  // Fungsi membuat dan membagi kelompok acak (Fisher-Yates Shuffle)
  const generateGroups = () => {
    const perGroup = parseInt(studentsPerGroupInput.value, 10) || 5;
    
    // Tampilkan animasi indicator shuffling
    if (indicator) indicator.classList.remove('hidden');
    if (placeholderHint) placeholderHint.classList.add('hidden');
    if (resultGrid) resultGrid.innerHTML = '';
    if (generateBtn) generateBtn.disabled = true;

    // Salin dan acak array mahasiswa
    const shuffled = [...students];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Pisahkan ke dalam kelompok
    const groups = [];
    for (let i = 0; i < shuffled.length; i += perGroup) {
      groups.push(shuffled.slice(i, i + perGroup));
    }

    currentGeneratedGroups = groups;

    // Simulasi penundaan acak (stagger effect) agar animasi terasa nyata
    setTimeout(() => {
      if (indicator) indicator.classList.add('hidden');
      if (generateBtn) generateBtn.disabled = false;
      if (actionsBar) actionsBar.classList.remove('hidden');

      if (!resultGrid) return;

      resultGrid.innerHTML = groups.map((grp, gIndex) => {
        const groupNum = String(gIndex + 1).padStart(2, '0');
        const membersHtml = grp.map(s => `
          <li class="group-member-item" title="${s.nim}">${s.name}</li>
        `).join('');

        return `
          <div class="generated-group-card" style="animation-delay: ${gIndex * 0.08}s">
            <div class="group-card-header">
              <h4 class="group-card-title">GROUP ${groupNum}</h4>
              <span class="group-card-badge">${grp.length} Siswa</span>
            </div>
            <ul class="group-member-list">
              ${membersHtml}
            </ul>
          </div>
        `;
      }).join('');

      launchConfetti();
      showToast(`✨ Berhasil membagi ${groups.length} kelompok belajar!`, 'success');
    }, 700);
  };

  if (generateBtn) generateBtn.addEventListener('click', generateGroups);
  if (shuffleAgainBtn) shuffleAgainBtn.addEventListener('click', generateGroups);

  // Reset Kelompok
  if (resetGroupsBtn) {
    resetGroupsBtn.addEventListener('click', () => {
      currentGeneratedGroups = [];
      if (resultGrid) resultGrid.innerHTML = '';
      if (placeholderHint) placeholderHint.classList.remove('hidden');
      if (actionsBar) actionsBar.classList.add('hidden');
      showToast('Hasil kelompok telah di-reset.', 'info');
    });
  }

  // Salin Kelompok ke Clipboard
  if (copyGroupsBtn) {
    copyGroupsBtn.addEventListener('click', () => {
      if (currentGeneratedGroups.length === 0) return;

      let text = `==============================\n`;
      text += `DAFTAR KELOMPOK - ${classInfo.name}\n`;
      text += `Tanggal: ${new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}\n`;
      text += `==============================\n\n`;

      currentGeneratedGroups.forEach((grp, idx) => {
        const num = String(idx + 1).padStart(2, '0');
        text += `KELOMPOK ${num} (${grp.length} Mahasiswa):\n`;
        grp.forEach((s, sIdx) => {
          text += `  ${sIdx + 1}. ${s.name} (${s.nim})\n`;
        });
        text += `\n`;
      });

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('📋 Daftar kelompok berhasil disalin ke clipboard!', 'success');
        }).catch(() => {
          fallbackCopyText(text);
        });
      } else {
        fallbackCopyText(text);
      }
    });
  }

  // Unduh Hasil Kelompok sebagai file TXT via Blob API
  if (downloadGroupsBtn) {
    downloadGroupsBtn.addEventListener('click', () => {
      if (currentGeneratedGroups.length === 0) return;

      let text = `=========================================\n`;
      text += `PEMBAGIAN KELOMPOK KELAS ${classInfo.name}\n`;
      text += `Mata Kuliah / Kegiatan: Kelas ${classInfo.major}\n`;
      text += `Generated at: ${new Date().toLocaleString('id-ID')}\n`;
      text += `=========================================\n\n`;

      currentGeneratedGroups.forEach((grp, idx) => {
        const num = String(idx + 1).padStart(2, '0');
        text += `[ KELOMPOK ${num} ] - Total: ${grp.length} Orang\n`;
        grp.forEach((s, sIdx) => {
          text += `  ${sIdx + 1}. ${s.name.padEnd(24, ' ')} [NIM: ${s.nim}] (${s.role})\n`;
        });
        text += `-----------------------------------------\n\n`;
      });

      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Kelompok_${classInfo.name.replace(/\s+/g, '_')}_${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('💾 File kelompok .TXT berhasil diunduh!', 'success');
    });
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('📋 Daftar kelompok berhasil disalin ke clipboard!', 'success');
    } catch (e) {
      showToast('Gagal menyalin kelompok secara otomatis.', 'error');
    }
    document.body.removeChild(textArea);
  }
}

/**
 * 10. INISIALISASI MATA KULIAH & JADWAL KULIAH (Dengan Highlight Otomatis HARI INI)
 */
function initCoursesAndSchedule() {
  const coursesGrid = document.getElementById('coursesGrid');
  const courseFilterTabs = document.getElementById('courseFilterTabs');
  const scheduleTableBody = document.getElementById('scheduleTableBody');
  const scheduleMobileCards = document.getElementById('scheduleMobileCards');
  const scheduleDayTabs = document.getElementById('scheduleDayTabs');

  // Render Courses Cards
  let activeCourseFilter = 'all';

  const renderCourses = () => {
    if (!coursesGrid) return;
    const filtered = courses.filter(c => activeCourseFilter === 'all' || c.type === activeCourseFilter);

    coursesGrid.innerHTML = filtered.map(c => `
      <div class="course-card reveal active">
        <div class="course-card-top">
          <span class="course-sks-badge">${c.sks} SKS</span>
        </div>
        <span class="course-code">${c.code}</span>
        <h3 class="course-name">${c.name}</h3>
        
        <div class="course-meta">
          <div class="course-meta-row">
            <span class="course-meta-icon">👨‍🏫</span>
            <span>${c.lecturer}</span>
          </div>
          <div class="course-meta-row">
            <span class="course-meta-icon">⏰</span>
            <span>${c.scheduleDay}, ${c.scheduleTime}</span>
          </div>
          <div class="course-meta-row">
            <span class="course-meta-icon">📍</span>
            <span>${c.room}</span>
          </div>
        </div>
      </div>
    `).join('');
  };

  if (courseFilterTabs) {
    courseFilterTabs.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        courseFilterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCourseFilter = btn.dataset.filter;
        renderCourses();
      });
    });
  }

  renderCourses();

  // Render Schedule (Desktop Table & Mobile Cards)
  // Menentukan nama hari saat ini untuk highlight otomatis
  const dayNamesIndo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const todayDayName = dayNamesIndo[new Date().getDay()];

  let activeScheduleDay = 'all';

  const renderSchedule = () => {
    const filteredSchedule = schedule.filter(s => activeScheduleDay === 'all' || s.day.toLowerCase() === activeScheduleDay.toLowerCase());

    // Desktop Table
    if (scheduleTableBody) {
      if (filteredSchedule.length === 0) {
        scheduleTableBody.innerHTML = `<tr><td colspan="6" class="text-center" style="padding: 30px;">Tidak ada jadwal perkuliahan pada hari ini.</td></tr>`;
      } else {
        scheduleTableBody.innerHTML = filteredSchedule.map(s => {
          const isToday = s.day.toLowerCase() === todayDayName.toLowerCase();
          const todayBadge = isToday ? `<span class="today-badge">⚡ HARI INI</span>` : '';
          const rowClass = isToday ? 'today-highlight' : '';

          return `
            <tr class="${rowClass}">
              <td><strong>${s.day}</strong> ${todayBadge}</td>
              <td>${s.time}</td>
              <td><strong>${s.course}</strong></td>
              <td>${s.sks}</td>
              <td>${s.lecturer}</td>
              <td>${s.room}</td>
            </tr>
          `;
        }).join('');
      }
    }

    // Mobile Cards
    if (scheduleMobileCards) {
      if (filteredSchedule.length === 0) {
        scheduleMobileCards.innerHTML = `<div class="sched-mobile-card text-center">Tidak ada jadwal perkuliahan.</div>`;
      } else {
        scheduleMobileCards.innerHTML = filteredSchedule.map(s => {
          const isToday = s.day.toLowerCase() === todayDayName.toLowerCase();
          const todayBadge = isToday ? `<span class="today-badge">⚡ HARI INI</span>` : '';
          const cardClass = isToday ? 'today-highlight' : '';

          return `
            <div class="sched-mobile-card ${cardClass}">
              <div class="sched-mobile-header">
                <span class="sched-mobile-day">${s.day} ${todayBadge}</span>
                <span class="sched-mobile-time">${s.time}</span>
              </div>
              <h4 class="sched-mobile-title">${s.course} (${s.sks})</h4>
              <div class="sched-mobile-info">
                <span>👨‍🏫 ${s.lecturer}</span>
                <span>📍 ${s.room}</span>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  };

  if (scheduleDayTabs) {
    scheduleDayTabs.querySelectorAll('.sched-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        scheduleDayTabs.querySelectorAll('.sched-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeScheduleDay = tab.dataset.day;
        renderSchedule();
      });
    });
  }

  renderSchedule();
}

/**
 * 11. INISIALISASI GALERI KENANGAN KELAS & LIGHTBOX INTERAKTIF
 */
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!grid || !lightbox) return;

  let currentIndex = 0;

  // Render Gallery Grid
  grid.innerHTML = galleryPhotos.map((p, idx) => `
    <div class="gallery-card reveal active" data-index="${idx}" tabindex="0" role="button" aria-label="Buka foto ${p.title}">
      <img src="${p.image}" alt="${p.title}" class="gallery-img" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-tag">${p.tag}</span>
        <h4 class="gallery-title">${p.title}</h4>
        <p class="gallery-desc">${p.desc}</p>
      </div>
    </div>
  `).join('');

  const updateLightbox = () => {
    const photo = galleryPhotos[currentIndex];
    if (!photo) return;
    lightboxImg.src = photo.image;
    lightboxImg.alt = photo.title;
    lightboxTitle.textContent = photo.title;
    lightboxDesc.textContent = photo.desc;
    lightboxCounter.textContent = `${currentIndex + 1} / ${galleryPhotos.length}`;
  };

  const openLightbox = (index) => {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % galleryPhotos.length;
    updateLightbox();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    updateLightbox();
  };

  // Event Listeners pada item galeri
  grid.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index, 10);
      openLightbox(idx);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Navigasi Keyboard: Panah Kiri, Panah Kanan, Escape
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'ArrowLeft') showPrev();
    else if (e.key === 'Escape') closeLightbox();
  });
}

/**
 * 12. SISTEM TOAST NOTIFICATION
 */
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: '✅',
    warning: '⚠️',
    error: '❌',
    info: '💡'
  };

  const icon = iconMap[type] || '💡';

  toast.innerHTML = `
    <div class="toast-msg-wrap">
      <span class="toast-icon">${icon}</span>
      <span>${message}</span>
    </div>
    <span class="toast-close" title="Tutup">&times;</span>
  `;

  container.appendChild(toast);

  const closeToast = () => {
    toast.classList.add('hiding');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  };

  toast.querySelector('.toast-close').addEventListener('click', closeToast);

  setTimeout(closeToast, duration);
}

/**
 * 13. TOMBOL BACK TO TOP
 */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 14. EFEK RIPPLE PADA TOMBOL
 */
function initRippleEffect() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.ripple');
    if (!btn) return;

    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-circle');

    const existingCircle = btn.querySelector('.ripple-circle');
    if (existingCircle) {
      existingCircle.remove();
    }

    btn.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
}

/**
 * 15. INTERSECTION OBSERVER SCROLL REVEAL
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!window.IntersectionObserver) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
