const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileBtn = document.getElementById('mobileMenuBtn');
const sidebarClose = document.getElementById('sidebarClose');
const notifBtn = document.getElementById('notifyBtn');
const notifDropdown = document.getElementById('notificationDropdown');

function getLang() {
  return localStorage.getItem('linguaLang') || 'fa';
}

// ذخیره وضعیت سایدبار برای دسکتاپ
if (localStorage.getItem('sidebarClosed') === 'true' && window.innerWidth > 992) {
  sidebar.classList.add('closed');
}

// باز و بسته کردن سایدبار در دسکتاپ
sidebarToggle?.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  localStorage.setItem('sidebarClosed', sidebar.classList.contains('closed'));
});

// باز کردن سایدبار در موبایل
mobileBtn?.addEventListener('click', () => {
  sidebar.classList.add('mobile-open');
});

// بستن سایدبار در موبایل با دکمه بستن
sidebarClose?.addEventListener('click', () => {
  sidebar.classList.remove('mobile-open');
});

// بستن سایدبار در موبایل با کلیک خارج از آن
document.addEventListener('click', (e) => {
  if (
    window.innerWidth <= 992 &&
    sidebar.classList.contains('mobile-open') &&
    !sidebar.contains(e.target) &&
    !mobileBtn.contains(e.target)
  ) {
    sidebar.classList.remove('mobile-open');
  }
});

// نوتیفیکیشن
notifBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  notifDropdown.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (notifDropdown && !notifDropdown.contains(e.target) && !notifBtn?.contains(e.target)) {
    notifDropdown.classList.remove('show');
  }
});

// پاک کردن نوتیفیکیشن‌ها
document.getElementById('clearNotifications')?.addEventListener('click', () => {
  const list = document.getElementById('notificationList');
  const lang = getLang();
  const clearedText = lang === 'en' ? 'All cleared' : 'همه پاک شدند';
  if (list) {
    list.innerHTML = `<div class="notify-item"><span>✅</span><div><p>${clearedText}</p></div></div>`;
    document.getElementById('notifyBadge').style.display = 'none';
  }
});

// کلیک روی لینک‌های سایدبار
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-section');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // فعال کردن لینک کلیک شده
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    // بستن سایدبار در موبایل
    if (window.innerWidth <= 992) {
      sidebar.classList.remove('mobile-open');
    }
  });
});

// کلیک روی لینک‌های نوبار بالا
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // فعال کردن لینک کلیک شده
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// اسکرول - فعال کردن لینک متناسب با بخش visible
window.addEventListener('scroll', () => {
  let currentSection = 'home';

  document.querySelectorAll('section[id]').forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  // آپدیت نوبار
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });

  // آپدیت سایدبار
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === currentSection) {
      link.classList.add('active');
    }
  });
});

// بستن مودال لاگین با کلیک خارج از آن
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('loginModal')) {
    e.target.style.display = 'none';
  }
});

// بستن مودال با دکمه close
document.querySelectorAll('.modal-close').forEach(b =>
  b.addEventListener('click', () => b.closest('.modal').style.display = 'none')
);