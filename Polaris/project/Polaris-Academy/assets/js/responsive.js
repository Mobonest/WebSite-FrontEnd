// responsive.js - مدیریت ریسپانسیو

document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarToggle = document.getElementById('sidebarToggle');
  
  if (window.innerWidth > 991) {
    if (sidebar) {
      sidebar.classList.remove('mobile-open');
      sidebar.style.transform = '';
      const savedState = localStorage.getItem('sidebarClosed');
      if (savedState === 'true') {
        sidebar.classList.add('closed');
      } else {
        sidebar.classList.remove('closed');
      }
    }
  }
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (sidebar) {
        sidebar.classList.add('mobile-open');
      }
      document.body.style.overflow = 'auto';
    });
  }
  
  function closeMobileMenu() {
    if (sidebar) {
      sidebar.classList.remove('mobile-open');
    }
    document.body.style.overflow = '';
  }
  
  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeMobileMenu);
  }
  
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 991 && sidebar && sidebar.classList.contains('mobile-open')) {
      if (!sidebar.contains(e.target) && !mobileMenuBtn?.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('mobile-open')) {
      closeMobileMenu();
    }
  });
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.innerWidth > 991) {
        sidebar.classList.toggle('closed');
        const isClosed = sidebar.classList.contains('closed');
        localStorage.setItem('sidebarClosed', isClosed);
      }
    });
  }
  
  function handleResize() {
    if (window.innerWidth > 991) {
      if (sidebar) {
        sidebar.classList.remove('mobile-open');
        sidebar.style.transform = '';
      }
      document.body.style.overflow = '';
      
      const savedState = localStorage.getItem('sidebarClosed');
      if (savedState === 'true') {
        sidebar.classList.add('closed');
      } else {
        sidebar.classList.remove('closed');
      }
    }
  }
  
  window.addEventListener('resize', handleResize);
  
  if (window.innerWidth <= 991 && sidebar) {
    sidebar.style.right = '0';
    sidebar.style.left = 'auto';
  }
  
  function fixHeroHeight() {
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth <= 768) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 60;
      hero.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    } else if (hero) {
      hero.style.minHeight = '';
    }
  }
  
  fixHeroHeight();
  window.addEventListener('resize', fixHeroHeight);
  
  function fixGrids() {
    const languagesGrid = document.querySelector('.languages-grid');
    const teachersGrid = document.querySelector('.teachers-grid');
    const coursesGrid = document.querySelector('.courses-grid');
    const testimonialsGrid = document.querySelector('.testimonials-slider');
    
    if (window.innerWidth <= 576) {
      if (languagesGrid) languagesGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
      if (teachersGrid) teachersGrid.style.gridTemplateColumns = '1fr';
      if (coursesGrid) coursesGrid.style.gridTemplateColumns = '1fr';
      if (testimonialsGrid) testimonialsGrid.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth <= 991) {
      if (languagesGrid) languagesGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
      if (teachersGrid) teachersGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
      if (coursesGrid) coursesGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
      if (testimonialsGrid) testimonialsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
      if (languagesGrid) languagesGrid.style.gridTemplateColumns = '';
      if (teachersGrid) teachersGrid.style.gridTemplateColumns = '';
      if (coursesGrid) coursesGrid.style.gridTemplateColumns = '';
      if (testimonialsGrid) testimonialsGrid.style.gridTemplateColumns = '';
    }
  }
  
  fixGrids();
  window.addEventListener('resize', fixGrids);
});