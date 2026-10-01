// sidebar.js - مدیریت سایدبار

(function() {
  'use strict';

  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const sidebarClose = document.getElementById('sidebarClose');
  const notificationDropdown = document.getElementById('notificationDropdown');
  const notifyBtn = document.getElementById('notifyBtn');
  const clearNotificationsBtn = document.getElementById('clearNotifications');
  const notifyBadge = document.getElementById('notifyBadge');
  const notificationList = document.getElementById('notificationList');
  const loginModal = document.getElementById('loginModal');

  let isSidebarClosed = localStorage.getItem('sidebarClosed') === 'true';

  function isMobile() {
    return window.innerWidth <= 991;
  }

  function getLang() {
    return localStorage.getItem('linguaLang') || 'fa';
  }

  function updateToggleText() {
    if (!sidebarToggle) return;
    const toggleText = sidebarToggle.querySelector('.sidebar-toggle-text');
    if (!toggleText) return;
    const lang = getLang();
    if (isMobile()) {
      toggleText.textContent = lang === 'en' ? 'Close Menu' : 'بستن منو';
    } else {
      if (isSidebarClosed) {
        toggleText.textContent = lang === 'en' ? 'Open Menu' : 'باز کردن منو';
      } else {
        toggleText.textContent = lang === 'en' ? 'Close Menu' : 'بستن منو';
      }
    }
  }

  function applyDesktopState() {
    if (!sidebar) return;
    sidebar.classList.remove('mobile-open');
    document.body.style.overflow = '';
    if (isSidebarClosed) {
      sidebar.classList.add('closed');
    } else {
      sidebar.classList.remove('closed');
    }
    updateToggleText();
  }

  function applyMobileState() {
    if (!sidebar) return;
    sidebar.classList.remove('closed');
    sidebar.classList.remove('mobile-open');
    document.body.style.overflow = '';
    updateToggleText();
  }

  function openMobileMenu() {
    if (!sidebar) return;
    sidebar.classList.add('mobile-open');
    document.body.style.overflow = 'auto';
  }

  function closeMobileMenu() {
    if (!sidebar) return;
    sidebar.classList.remove('mobile-open');
    document.body.style.overflow = '';
  }

  function toggleDesktopSidebar() {
    if (isMobile()) return;
    isSidebarClosed = !isSidebarClosed;
    localStorage.setItem('sidebarClosed', isSidebarClosed);
    applyDesktopState();
  }

  function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function updateActiveLinks(sectionId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
    });
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === sectionId) link.classList.add('active');
    });
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMobile()) {
        closeMobileMenu();
      } else {
        toggleDesktopSidebar();
      }
    });
  }

  if (mobileBtn) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openMobileMenu();
    });
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeMobileMenu);
  }

  document.addEventListener('click', (e) => {
    if (isMobile() && sidebar && sidebar.classList.contains('mobile-open')) {
      if (!sidebar.contains(e.target) && !mobileBtn?.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('mobile-open')) {
      closeMobileMenu();
    }
  });

  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      scrollToSection(sectionId);
      updateActiveLinks(sectionId);
      if (isMobile()) closeMobileMenu();
    });
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').replace('#', '');
      scrollToSection(sectionId);
      updateActiveLinks(sectionId);
    });
  });

  window.addEventListener('scroll', () => {
    let currentSection = 'home';
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
    updateActiveLinks(currentSection);
  });

  if (notifyBtn && notificationDropdown) {
    notifyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationDropdown.classList.toggle('show');
    });
  }

  document.addEventListener('click', (e) => {
    if (notificationDropdown && !notificationDropdown.contains(e.target) && !notifyBtn?.contains(e.target)) {
      notificationDropdown.classList.remove('show');
    }
  });

  if (clearNotificationsBtn && notificationList && notifyBadge) {
    clearNotificationsBtn.addEventListener('click', () => {
      const lang = getLang();
      const clearedText = lang === 'en' ? 'All cleared' : 'همه پاک شدند';
      notificationList.innerHTML = `<div class="notify-item"><span>✅</span><div><p>${clearedText}</p></div></div>`;
      notifyBadge.style.display = 'none';
    });
  }

  if (loginModal) {
    window.addEventListener('click', (e) => {
      if (e.target === loginModal) loginModal.style.display = 'none';
    });
    const modalClose = loginModal.querySelector('.modal-close');
    if (modalClose) modalClose.addEventListener('click', () => loginModal.style.display = 'none');
  }

  window.addEventListener('resize', () => {
    if (isMobile()) {
      applyMobileState();
    } else {
      applyDesktopState();
    }
  });

  if (isMobile()) {
    applyMobileState();
  } else {
    applyDesktopState();
  }

  window.addEventListener('languageChange', updateToggleText);
})();