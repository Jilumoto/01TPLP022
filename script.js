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
 * Ubah nama, NIM, foto (JPG/PNG/SVG), role.
 */
const students = [
  {
    id: "01",
    name: "ACHMAD BAYU PRASETYO",
    nim: "261011401288",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: "mabar",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://instagram.com" }
  },
  {
    id: "02",
    name: "AKBAR DAFA PANGESTU",
    nim: "261011401445",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://instagram.com" }
  },
  {
    id: "03",
    name: "AQIL BANI FARELLINOV",
    nim: "261011400902",
    role: "Wakil Ketua",
    roleType: "leader",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "04",
    name: "AZKIA AZZAHRA HAFAFIL",
    nim: "261011401041",
    role: "Ketua Kelas",
    roleType: "leader",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "05",
    name: "EKA MAULANA RIZKI",
    nim: "261011400925",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://instagram.com" }
  },
    {
    id: "06",
    name: "EZZAR PUTRA PRAMUDYA",
    nim: "261011400914",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "Mancing",
    socials: {instagram: "https://www.instagram.com/ezzar.co.id?stkn=MWkzdTBwdnBnbjRkbQ==" }
  },
  {
    id: "07",
    name: "FAHD AIMAR AL HAQI",
    nim: "261011401118",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/atta.jpeg",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: { instagram: "https://www.instagram.com/fahd_aimar?stkn=MXV3NnNkbXJxdnF4Yg==" }
  },
  {
    id: "08",
    name: "FAQIH FAHRIANSYAH",
    nim: "261011400928",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "08",
    name: "FEBRIYAN MAULANA",
    nim: "261011400911",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "09",
    name: "GUSTI RAMA YONIAR",
    nim: "261011400896",
    role: "Sekretaris",
    roleType: "leader",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "10",
    name: "IKHSAN NUR ABDILA",
    nim: "261011400899",
    role: "Mahasiswa",
    roleType: "student",
    image: "",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "" }
  },
  {
    id: "11",
    name: "KEYLA PUTRI AZNI",
    nim: "261011400917",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "12",
    name: "KURNIA DWI RAHMAN",
    nim: "261011401340",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "13",
    name: "LUT FIAH",
    nim: "261011400905",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "14",
    name: "LUTFIYA NUR HASANAH",
    nim: "261011400922",
    role: "Sekretaris",
    roleType: "leader",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "15",
    name: "MARIA OYAKNI JENIA",
    nim: "261011400923",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "17",
    name: "MIKHAEL BURA KELEN",
    nim: "261011400924",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "18",
    name: "MUAMMAR KHADAFI ABDURRAHMAN",
    nim: "261011401501",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "19",
    name: "MUHAMMAD ALIF HAMZAH",
    nim: "261011400919",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "20",
    name: "MUHAMMAD HUSNIY ABDILLAH",
    nim: "261011400912",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "21",
    name: "MUHAMMAD RIZKY RAMADHAN",
    nim: "261011401537",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "22",
    name: "MUHAMMAD RUSTIAN AL-FARIZI",
    nim: "261011400926",
    role: "Bendahara",
    roleType: "leader",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "23",
    name: "RADINKA ARKA PRAMANA",
    nim: "261011401493",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "24",
    name: "TIAN SAPUTRI HONDRO",
    nim: "261011401724",
    role: "Bendahara",
    roleType: "leader",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "25",
    name: "YOGA M RIZKY NUROHMAN",
    nim: "261011401299",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "26",
    name: "ZAHRA NURAISYAH",
    nim: "261011401606",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
  },
  {
    id: "27",
    name: "ZAKI HYLMI AS SAJDAH",
    nim: "261011400906",
    role: "Mahasiswa",
    roleType: "student",
    image: "assets/images/students/",
    bio: ".",
    email: "",
    phone: "",
    skills: "",
    hobby: "",
    socials: {instagram: "https://instagram.com" }
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
    badgeText: "Assignment",
    description: "Tugas PTI mencatat/mencari materi tentang osi vs tcp/ip"
  },
  {
    type: "assignment",
    title: "Tugas Logika informatika.",
    date: "Minggu Depan (Senin)",
    badgeText: "Assignment",
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

      showToast(newTheme === 'dark' ? 'Dark Mode diaktifkan' : 'Light Mode diaktifkan', 'info');
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
    const navCloseBtn = document.getElementById('navCloseBtn');

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
    if (navCloseBtn) navCloseBtn.addEventListener('click', closeMenu);
    if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);

    // Tutup menu mobile ketika salah satu link diklik
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Tutup menu dengan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Reset overflow jika window di-resize ke ukuran desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        closeMenu();
      }
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
  const roleBadge = document.getElementById('modalStudentRoleBadge');
  if (roleBadge) roleBadge.textContent = student.role;
  document.getElementById('modalStudentBio').textContent = student.bio || "Mahasiswa aktif kelas 01TPLP022.";

  const emailEl = document.getElementById('modalStudentEmail');
  if (emailEl) {
    if (student.email && student.email !== '-') {
      emailEl.innerHTML = `<a href="mailto:${student.email}">${student.email}</a>`;
    } else {
      emailEl.textContent = '-';
    }
  }

  const phoneEl = document.getElementById('modalStudentPhone');
  if (phoneEl) {
    if (student.phone && student.phone !== '-') {
      const cleanPhone = student.phone.replace(/[^0-9]/g, '');
      const waPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
      phoneEl.innerHTML = `<a href="https://wa.me/${waPhone}" target="_blank" rel="noopener">${student.phone}</a>`;
    } else {
      phoneEl.textContent = '-';
    }
  }

  document.getElementById('modalStudentSkills').textContent = student.skills || "-";
  document.getElementById('modalStudentHobby').textContent = student.hobby || "-";

  const socialsContainer = document.getElementById('modalSocialButtons');
  if (socialsContainer) {
    let btns = '';
    if (student.socials?.github && student.socials.github !== '#') {
      btns += `<a href="${student.socials.github}" target="_blank" rel="noopener" class="modal-social-btn">GitHub</a>`;
    }
    if (student.socials?.instagram && student.socials.instagram !== '#') {
      btns += `<a href="${student.socials.instagram}" target="_blank" rel="noopener" class="modal-social-btn">Instagram</a>`;
    }
    if (student.email && student.email !== '-') {
      btns += `<a href="mailto:${student.email}" class="modal-social-btn">Email</a>`;
    }
    if (student.phone && student.phone !== '-') {
      const cleanPhone = student.phone.replace(/[^0-9]/g, '');
      const waPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
      btns += `<a href="https://wa.me/${waPhone}" target="_blank" rel="noopener" class="modal-social-btn">WhatsApp</a>`;

    }
    socialsContainer.innerHTML = btns || `<span style="font-size:12px; color:var(--text-muted);">Tidak ada tautan media sosial.</span>`;
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeyDown);
  };

  if (closeBtn) closeBtn.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
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

/**
 * 7. FITUR CLASS ROULETTE & RANDOM PICKER (Terintegrasi Pembagian Kelompok)
 */
let rouletteStudents = [...students];
let redrawRouletteWheel = null;

function initRoulette() {
  const canvas = document.getElementById('rouletteCanvas');
  const spinBtn = document.getElementById('spinBtn');
  const spinBtnText = document.getElementById('spinBtnText');
  const resetRouletteBtn = document.getElementById('resetRouletteBtn');
  const winnerCard = document.getElementById('winnerCard');
  const winnerAvatar = document.getElementById('winnerAvatar');
  const winnerName = document.getElementById('winnerName');
  const winnerId = document.getElementById('winnerId');
  const winnerGroupPill = document.getElementById('winnerGroupPill');
  const winnerRemainingPill = document.getElementById('winnerRemainingPill');
  const wheelSubtext = document.getElementById('wheelSubtext');
  const wheelCenterCap = document.getElementById('wheelCenterCap');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Pixel grayscale color palette for wheel sectors
  const sliceColors = [
    '#111111', '#333333', '#555555', '#777777',
    '#888888', '#AAAAAA', '#CCCCCC', '#222222',
    '#444444', '#666666', '#999999', '#BBBBBB'
  ];

  let currentAngle = 0;
  let isSpinning = false;
  let lastSectorIndex = -1;

  function updateWheelSubtext() {
    if (!wheelSubtext) return;
    if (rouletteStudents.length === 0) {
      wheelSubtext.innerHTML = '<strong>Semua mahasiswa telah lengkap terbagi ke kelompok!</strong>';
    } else {
      wheelSubtext.innerHTML = `Putar roda untuk memilih mahasiswa dan otomatis membaginya ke kelompok. (<strong>Sisa: ${rouletteStudents.length} mahasiswa di roda</strong>)`;
    }
  }

  // Render wheel on canvas — pixel style
  function drawWheel() {
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = cx - 12;

    ctx.clearRect(0, 0, width, height);

    const numSlices = rouletteStudents.length;

    if (numSlices === 0) {
      // Tampilan ketika semua mahasiswa telah selesai diundi ke kelompok
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#1a1a1a';
      ctx.fill();
      ctx.strokeStyle = '#ffe21a';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffe21a';
      ctx.font = 'bold 13px "Press Start 2P", monospace';
      ctx.fillText('SEMUA SISWA', cx, cy - 14);
      ctx.fillText('SUDAH TERBAGI!', cx, cy + 14);
      ctx.restore();

      if (wheelCenterCap) {
        wheelCenterCap.classList.add('hidden');
      }
      return;
    }

    if (wheelCenterCap) {
      wheelCenterCap.classList.remove('hidden');
      wheelCenterCap.innerHTML = '<span>SPIN</span>';
    }

    const arc = (2 * Math.PI) / numSlices;

    // Gambar setiap irisan (slice)
    for (let i = 0; i < numSlices; i++) {
      const angle = currentAngle + i * arc;
      const color = sliceColors[i % sliceColors.length];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle, angle + arc, false);
      ctx.lineTo(cx, cy);
      ctx.fill();

      // Border antar sektor
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Nama mahasiswa — kontras otomatis
      const brightness = parseInt(color.slice(1), 16);
      const textColor = brightness > 0x777777 ? '#111111' : '#FFFFFF';

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = textColor;

      const fontSize = numSlices <= 6 ? 12 : (numSlices <= 14 ? 10 : 9);
      ctx.font = `bold ${fontSize}px "Press Start 2P", monospace`;

      const studentName = rouletteStudents[i].name;
      const firstName = studentName.split(' ')[0];
      const maxLen = numSlices > 16 ? 8 : 12;
      const displayName = firstName.length > maxLen ? firstName.substring(0, maxLen - 1) + '.' : firstName;
      ctx.fillText(displayName, radius - 18, 0);
      ctx.restore();
    }

    // Outer border ring — solid pixel frame
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Inner ring accent
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Simpan referensi fungsi agar bisa dipanggil saat reset kelompok
  redrawRouletteWheel = drawWheel;

  // Gambar roda awal
  drawWheel();
  updateWheelSubtext();

  // Toggle Suara
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      soundIcon.setAttribute(
        'data-lucide',
        isSoundEnabled ? 'volume-2' : 'volume-x'
      );
      lucide.createIcons();
      showToast(isSoundEnabled ? 'Suara Roulette diaktifkan' : 'Suara Roulette dibisukan', 'info');
    });
  }

  // Hitung pemenang berdasarkan pointer panah di posisi puncak (270 derajat atau 3*PI/2)
  function getSelectedStudent(finalAngle) {
    if (rouletteStudents.length === 0) return null;
    const numSlices = rouletteStudents.length;
    const arc = (2 * Math.PI) / numSlices;
    const pointerAngle = (3 * Math.PI) / 2; // Atas (Top)
    const normalizedAngle = (pointerAngle - (finalAngle % (2 * Math.PI)) + 4 * Math.PI) % (2 * Math.PI);
    const index = Math.floor(normalizedAngle / arc) % numSlices;
    return { student: rouletteStudents[index], index };
  }

  // Animasi Putaran Roda
  function spin() {
    if (isSpinning) return;

    // Jika seluruh mahasiswa sudah habis terbagi, klik tombol akan mereset roda & kelompok
    if (rouletteStudents.length === 0) {
      if (typeof resetAllRouletteAndGroups === 'function') {
        resetAllRouletteAndGroups();
      }
      return;
    }

    isSpinning = true;

    // Aktifkan audio context saat tombol diklik user
    getAudioContext();

    if (spinBtn) {
      spinBtn.disabled = true;
      spinBtnText.textContent = 'Berputar...';
    }
    if (winnerCard) {
      winnerCard.classList.add('hidden');
    }

    const numSlices = rouletteStudents.length;
    const arc = (2 * Math.PI) / numSlices;

    // Parameter Fisika Putaran
    const totalSpinDuration = 4500;
    const randomExtraTurns = 5 + Math.random() * 4;
    const randomTargetAngle = Math.random() * (2 * Math.PI);
    const targetTotalRotation = randomExtraTurns * 2 * Math.PI + randomTargetAngle;
    const startAngle = currentAngle;
    const startTime = performance.now();

    function animateSpin(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalSpinDuration, 1);

      // Cubic Ease Out
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

        const selection = getSelectedStudent(currentAngle);
        if (!selection) return;

        const winner = selection.student;
        const winnerIdx = selection.index;

        // 1. Otomatis masukkan siswa ke kelompok
        const groupInfo = addStudentToGroup(winner);
        const groupNum = String(groupInfo.groupNumber).padStart(2, '0');

        // 2. Hapus nama siswa dari roulette agar tidak terpilih lagi
        rouletteStudents.splice(winnerIdx, 1);

        // 3. Gambar ulang roda roulette dengan sisa siswa yang ada
        drawWheel();
        updateWheelSubtext();

        // 4. Suara perayaan & konfeti
        playVictoryFanfare();
        launchConfetti();

        // 5. Tampilkan kartu hasil pemenang dengan info kelompok
        if (winnerCard) {
          winnerAvatar.src = winner.image;
          winnerAvatar.alt = winner.name;
          winnerName.textContent = winner.name;
          winnerId.textContent = `NIM: ${winner.nim} • ${winner.role}`;

          if (winnerGroupPill) {
            winnerGroupPill.textContent = `Dimasukkan ke GROUP ${groupNum} (Anggota ke-${groupInfo.groupLength})`;
          }

          if (winnerRemainingPill) {
            winnerRemainingPill.textContent = rouletteStudents.length > 0
              ? `Sisa ${rouletteStudents.length} mahasiswa di roda`
              : 'Semua mahasiswa telah lengkap terbagi!';
          }

          winnerCard.classList.remove('hidden');
        }

        // 6. Cek apakah roda sudah habis
        if (rouletteStudents.length === 0) {
          if (spinBtn) spinBtn.disabled = false;
          if (spinBtnText) spinBtnText.textContent = 'SEMUA TERBAGI (RESET)';
          showToast(` ${winner.name} masuk ke GROUP ${groupNum}! Semua mahasiswa telah selesai dibagi ke kelompok!`, 'success');
        } else {
          if (spinBtn) spinBtn.disabled = false;
          if (spinBtnText) spinBtnText.textContent = 'SPIN THE WHEEL';
          showToast(`${winner.name} masuk ke GROUP ${groupNum}! (Sisa di roda: ${rouletteStudents.length})`, 'success');
        }
      }
    }

    requestAnimationFrame(animateSpin);
  }

  if (spinBtn) {
    spinBtn.addEventListener('click', spin);
  }

  if (resetRouletteBtn) {
    resetRouletteBtn.addEventListener('click', () => {
      if (typeof resetAllRouletteAndGroups === 'function') {
        resetAllRouletteAndGroups();
      }
    });
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
 * 9. FITUR RANDOM GROUP GENERATOR (Terintegrasi dengan Roulette)
 */
let currentGeneratedGroups = [];

// Render kartu-kartu kelompok secara reaktif
function renderGroupsList(highlightStudentNim = null) {
  const resultGrid = document.getElementById('groupsResultGrid');
  const placeholderHint = document.getElementById('groupsPlaceholderHint');
  const actionsBar = document.getElementById('groupActionsBar');
  const shuffleAgainBtn = document.getElementById('shuffleAgainBtn');

  if (!resultGrid) return;

  const assignedStudentCount = currentGeneratedGroups.reduce((total, group) => total + group.length, 0);
  const everyoneAssigned = assignedStudentCount >= students.length;
  if (shuffleAgainBtn) {
    shuffleAgainBtn.disabled = !everyoneAssigned;
    shuffleAgainBtn.title = everyoneAssigned
      ? 'Acak ulang susunan kelompok'
      : 'Acak ulang tersedia setelah semua mahasiswa mendapat kelompok';
  }

  if (currentGeneratedGroups.length === 0) {
    resultGrid.innerHTML = '';
    if (placeholderHint) placeholderHint.classList.remove('hidden');
    if (actionsBar) actionsBar.classList.add('hidden');
    return;
  }

  if (placeholderHint) placeholderHint.classList.add('hidden');
  if (actionsBar) actionsBar.classList.remove('hidden');

  resultGrid.innerHTML = currentGeneratedGroups.map((grp, gIndex) => {
    const groupNum = String(gIndex + 1).padStart(2, '0');
    const membersHtml = grp.map((s, sIdx) => {
      const isNew = s.nim === highlightStudentNim;
      return `
        <li class="group-member-item${isNew ? ' newly-added' : ''}" title="NIM: ${s.nim}">
          <span class="group-member-num">${sIdx + 1}.</span>
          <span class="group-member-name">${s.name}</span>
          ${isNew ? '<span class="group-new-badge">BARU</span>' : ''}
        </li>
      `;
    }).join('');

    return `
      <div class="generated-group-card">
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
}

// Tambahkan 1 siswa hasil putaran roulette ke kelompok secara teratur
function addStudentToGroup(student) {
  const studentsPerGroupInput = document.getElementById('studentsPerGroupInput');
  const perGroup = parseInt(studentsPerGroupInput ? studentsPerGroupInput.value : 5, 10) || 5;

  if (currentGeneratedGroups.length === 0) {
    currentGeneratedGroups.push([student]);
  } else {
    const lastGroup = currentGeneratedGroups[currentGeneratedGroups.length - 1];
    if (lastGroup.length < perGroup) {
      lastGroup.push(student);
    } else {
      currentGeneratedGroups.push([student]);
    }
  }

  const groupIndex = currentGeneratedGroups.findIndex(grp => grp.some(s => s.nim === student.nim));
  const groupNumber = groupIndex + 1;

  renderGroupsList(student.nim);

  return {
    groupNumber,
    groupIndex,
    groupLength: currentGeneratedGroups[groupIndex].length
  };
}

// Reset roda roulette dan kelompok belajar ke kondisi awal
function resetAllRouletteAndGroups() {
  currentGeneratedGroups = [];
  rouletteStudents = [...students];

  renderGroupsList();

  if (typeof redrawRouletteWheel === 'function') {
    redrawRouletteWheel();
  }

  const spinBtn = document.getElementById('spinBtn');
  const spinBtnText = document.getElementById('spinBtnText');
  const winnerCard = document.getElementById('winnerCard');
  if (spinBtn) spinBtn.disabled = false;
  if (spinBtnText) spinBtnText.textContent = 'SPIN THE WHEEL';
  if (winnerCard) winnerCard.classList.add('hidden');

  const wheelSubtext = document.getElementById('wheelSubtext');
  if (wheelSubtext) {
    wheelSubtext.innerHTML = `Putar roda untuk memilih siswa dan otomatis membaginya ke kelompok. (<strong>Sisa: ${rouletteStudents.length} siswa di roda</strong>)`;
  }

  showToast('Roda roulette dan kelompok telah di-reset ke awal.', 'info');
}

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
  const placeholderHint = document.getElementById('groupsPlaceholderHint');

  const updateSummary = () => {
    const perGroup = parseInt(studentsPerGroupInput.value, 10) || 5;
    const total = students.length;
    const numGroups = Math.ceil(total / perGroup);
    if (summaryText) {
      summaryText.innerHTML = `Akan menghasilkan <strong>${numGroups} Kelompok</strong> (kapasitas ~${perGroup} siswa per kelompok)`;
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

  // Fungsi membuat dan membagi seluruh kelompok secara acak sekaligus (Batch Shuffle)
  const generateGroups = () => {
    const perGroup = parseInt(studentsPerGroupInput.value, 10) || 5;
    
    // Tampilkan animasi indicator shuffling
    if (indicator) indicator.classList.remove('hidden');
    if (placeholderHint) placeholderHint.classList.add('hidden');
    const resultGrid = document.getElementById('groupsResultGrid');
    if (resultGrid) resultGrid.innerHTML = '';
    if (generateBtn) generateBtn.disabled = true;

    // Salin dan acak array mahasiswa (Fisher-Yates Shuffle)
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

    // Karena semua sudah dimasukkan ke kelompok, kosongkan roulette
    rouletteStudents = [];

    setTimeout(() => {
      if (indicator) indicator.classList.add('hidden');
      if (generateBtn) generateBtn.disabled = false;
      if (actionsBar) actionsBar.classList.remove('hidden');

      renderGroupsList();

      if (typeof redrawRouletteWheel === 'function') {
        redrawRouletteWheel();
      }

      const wheelSubtext = document.getElementById('wheelSubtext');
      if (wheelSubtext) {
        wheelSubtext.innerHTML = '<strong>Semua mahasiswa telah lengkap terbagi ke kelompok!</strong>';
      }

      const spinBtnText = document.getElementById('spinBtnText');
      if (spinBtnText) {
        spinBtnText.textContent = 'SEMUA TERBAGI (RESET)';
      }

      launchConfetti();
      showToast(`Berhasil membagi ${groups.length} kelompok belajar!`, 'success');
    }, 700);
  };

  if (generateBtn) generateBtn.addEventListener('click', generateGroups);
  if (shuffleAgainBtn) shuffleAgainBtn.addEventListener('click', generateGroups);

  // Reset Kelompok & Roda Roulette
  if (resetGroupsBtn) {
    resetGroupsBtn.addEventListener('click', resetAllRouletteAndGroups);
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
          showToast(' Daftar kelompok berhasil disalin ke clipboard!', 'success');
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

      showToast('File kelompok .TXT berhasil diunduh!', 'success');
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
      showToast('Daftar kelompok berhasil disalin ke clipboard!', 'success');
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
            <span class="course-meta-icon">
           <i data-lucide="user-round"></i>
            </span>
            <span>${c.lecturer}</span>
          </div>
          <div class="course-meta-row">
            <span class="course-meta-icon">
              <i data-lucide="alarm-clock"></i>            
            </span>
            <span>${c.scheduleDay}, ${c.scheduleTime}</span>
          </div>
          <div class="course-meta-row">
            <span class="course-meta-icon">
            <i data-lucide="map-pin"></i>
            </span>
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
          const todayBadge = isToday ? `<span class="today-badge">HARI INI</span>` : '';
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
          const todayBadge = isToday ? `<span class="today-badge">HARI INI</span>` : '';
          const cardClass = isToday ? 'today-highlight' : '';

          return `
            <div class="sched-mobile-card ${cardClass}">
              <div class="sched-mobile-header">
                <span class="sched-mobile-day">${s.day} ${todayBadge}</span>
                <span class="sched-mobile-time">${s.time}</span>
              </div>
              <h4 class="sched-mobile-title">${s.course} (${s.sks})</h4>
              <div class="sched-mobile-info">
                <span class="course-meta-icon"> <i data-lucide="user-round"></i> ${s.lecturer}</span>
                <span class="course-meta-icon"><i data-lucide="map-pin"></i> ${s.room}</span>
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
    success: `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" stroke-width="2">
            <path d="M20 6 9 17l-5-5"></path>
        </svg>
    `,
    warning: `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" stroke-width="2">
            <path d="M10.3 3.9 2.1 18a2 2 0 0 0 1.7 3h16.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
        </svg>
    `,
    error: `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="m15 9-6 6"></path>
            <path d="m9 9 6 6"></path>
        </svg>
    `,
    info: `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 11v5"></path>
            <path d="M12 8h.01"></path>
        </svg>
    `
};

  const icon = iconMap[type] || '💡';

  toast.innerHTML = `
    <div class="toast-msg-wrap">
      <span class="toast-icon">${icon}</span>
      <span>${message}</span>
    </div>
    <button type="button" class="toast-close" title="Tutup" aria-label="Tutup notifikasi"><svg class="pixel-x-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 19H5v-2h2v2Zm12 0h-2v-2h2v2ZM9 15v2H7v-2h2Zm8 2h-2v-2h2v2Zm-6-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-2-2H9V9h2v2Zm4 0h-2V9h2v2ZM9 9H7V7h2v2Zm8 0h-2V7h2v2ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Z"/></svg></button>
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

  lucide.createIcons();

  revealElements.forEach(el => observer.observe(el));
}

/* ==============================================================================
   16. PIXEL SKY SYSTEM — Stars (dark) & Clouds (light)
   ============================================================================== */

/**
 * Generate pixel stars for dark mode
 */
function createPixelStars(container) {
  container.querySelectorAll('.px-star').forEach(s => s.remove());

  const count = 80;
  const twinkleClasses = ['twinkle-a', 'twinkle-b', 'twinkle-c', 'twinkle-d', 'twinkle-e'];
  const sizeClasses = ['s1', 's1', 's1', 's2', 's2', 's3']; // weighted toward small

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = `px-star ${sizeClasses[Math.floor(Math.random() * sizeClasses.length)]} ${twinkleClasses[Math.floor(Math.random() * twinkleClasses.length)]}`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 80}%`;
    star.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
    star.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
    container.appendChild(star);
  }
}

/**
 * Build a pixel cloud using nested divs (CSS box-shadow approach)
 * @param {number} w - base width
 * @param {number} h - base height
 */
function buildPixelCloud(w, h, opacity) {
  const cloud = document.createElement('div');
  cloud.className = 'px-cloud';
  cloud.style.opacity = opacity.toFixed(2);

  // Main body segments to form a chunky cloud shape
  const segments = [
    { x: 0,      y: h * 0.4,  w: w,       hh: h * 0.6 }, // main body
    { x: w * 0.15, y: 0,    w: w * 0.4,  hh: h * 0.6 }, // top bump
    { x: w * 0.45, y: h*0.1, w: w * 0.35, hh: h * 0.55 }, // right bump
    { x: -w*0.05, y: h*0.3, w: w * 0.25, hh: h * 0.5  }, // left edge
  ];

  segments.forEach(seg => {
    const seg_el = document.createElement('div');
    seg_el.className = 'c-seg';
    seg_el.style.left   = `${Math.round(seg.x)}px`;
    seg_el.style.top    = `${Math.round(seg.y)}px`;
    seg_el.style.width  = `${Math.round(seg.w)}px`;
    seg_el.style.height = `${Math.round(seg.hh)}px`;
    cloud.appendChild(seg_el);
  });

  return cloud;
}

/**
 * Generate pixel clouds for light mode
 */
function createPixelClouds(container) {
  container.querySelectorAll('.px-cloud').forEach(c => c.remove());

  const cloudDefs = [
    { w: 120, h: 50, top: '8%',  delay: '0s',   layer: 'layer-1', opacity: 0.90 },
    { w: 180, h: 70, top: '15%', delay: '-12s',  layer: 'layer-2', opacity: 0.75 },
    { w: 80,  h: 35, top: '5%',  delay: '-5s',   layer: 'layer-3', opacity: 0.65 },
    { w: 140, h: 55, top: '22%', delay: '-20s',  layer: 'layer-1', opacity: 0.80 },
    { w: 100, h: 42, top: '30%', delay: '-30s',  layer: 'layer-2', opacity: 0.60 },
    { w: 200, h: 80, top: '10%', delay: '-8s',   layer: 'layer-1', opacity: 0.85 },
    { w: 60,  h: 28, top: '35%', delay: '-18s',  layer: 'layer-3', opacity: 0.55 },
  ];

  cloudDefs.forEach((def, i) => {
    const cloud = buildPixelCloud(def.w, def.h, def.opacity);
    cloud.classList.add(def.layer);
    cloud.style.top = def.top;
    cloud.style.animationDelay = def.delay;
    cloud.style.animationDuration = def.layer === 'layer-2' ? '38s' : (def.layer === 'layer-3' ? '16s' : '25s');
    container.appendChild(cloud);
  });
}

/**
 * Initialize pixel sky
 */
function initPixelSky() {
  const skyLayer = document.getElementById('pixelSkyLayer');
  if (!skyLayer) return;

  const html = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  function renderSky() {
    const theme = html.getAttribute('data-theme');
    if (theme === 'dark') {
      createPixelStars(skyLayer);
      skyLayer.querySelectorAll('.px-cloud').forEach(c => c.remove());
    } else {
      createPixelClouds(skyLayer);
      skyLayer.querySelectorAll('.px-star').forEach(s => s.remove());
    }
  }

  renderSky();

  // Re-render sky on theme change (observe attribute mutation)
  const observer = new MutationObserver(() => renderSky());
  observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
}

// Initialize pixel sky on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initPixelSky();
});
