'use strict';

document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initProgressBar();
    initMobileMenu();
    initActiveLinkOnScroll();
    initHeaderScroll();
    initFAQ();
    initContactForm();
    initScrollReveal();
    initSmoothScroll();
    initCounterAnimation();
    initBackToTop();
    initCourseFilter();
    initResultsTabs();
    initHeroParticles();
    initConsoleMessage();
});

/* ==================== LOADER ==================== */
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }, 800);
    });
}

/* ==================== PROGRESS BAR ==================== */
function initProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / docHeight;
        progressBar.style.transform = `scaleX(${progress})`;
    });
}

/* ==================== MOBILE MENU ==================== */
function initMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('nav__overlay');
    document.body.appendChild(overlay);

    function openMenu() {
        navMenu.classList.add('show-menu');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        navMenu.classList.remove('show-menu');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', openMenu);
    }

    if (navClose && navMenu) {
        navClose.addEventListener('click', closeMenu);
    }

    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
            closeMenu();
        }
    });
}

/* ==================== ACTIVE LINK ON SCROLL ==================== */
function initActiveLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    function updateActiveLink() {
        const scrollY = window.pageYOffset + 200;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) link.classList.add('active');
                });
            }
        });
        if (window.pageYOffset < 200) {
            navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === '#home') link.classList.add('active'); });
        }
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/* ==================== HEADER SCROLL EFFECT ==================== */
function initHeaderScroll() {
    const header = document.getElementById('header');
    function toggleHeaderShadow() {
        if (window.scrollY >= 80) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', toggleHeaderShadow, { passive: true });
    toggleHeaderShadow();
}

/* ==================== FAQ ACCORDION ==================== */
function initFAQ() {
    document.querySelectorAll('.faq__question').forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isOpen = faqItem.classList.contains('open');
            document.querySelectorAll('.faq__item').forEach(item => item.classList.remove('open'));
            if (!isOpen) faqItem.classList.add('open');
        });
    });
}

/* ==================== CONTACT FORM ==================== */
function initContactForm() {
    const contactForm = document.querySelector('.contact__form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        requiredFields.forEach(field => {
            if (field.type === 'checkbox') {
                if (!field.checked) { field.parentElement.style.color = '#E74C3C'; isValid = false; }
                else field.parentElement.style.color = '';
            } else if (!field.value.trim()) {
                field.style.borderColor = '#E74C3C';
                isValid = false;
            } else {
                field.style.borderColor = '#4A3520';
            }
        });
        if (!isValid) { showToast('لطفاً تمام فیلدهای ضروری را پر کنید.', 'error'); return; }

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = 'در حال ارسال...';
        submitBtn.disabled = true;
        setTimeout(() => {
            showToast('درخواست شما با موفقیت ارسال شد!', 'success');
            this.reset();
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }, 2000);
    });
}

/* ==================== SCROLL REVEAL ==================== */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.course-card, .champion-card, .team-card, .blog-card, .faq__item, .contact__option-card, .about__feature, .results__table-wrapper, .hero__stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(el);
    });
}

/* ==================== SMOOTH SCROLL ==================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({ top: target.offsetTop - headerHeight - 10, behavior: 'smooth' });
            }
        });
    });
}

/* ==================== COUNTER ANIMATION ==================== */
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.hero__stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                if (isNaN(target)) return;
                const duration = 2000;
                const startTime = performance.now();
                function updateCounter(currentTime) {
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(easeOut * target);
                    const persianNum = current.toString().replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 1728));
                    el.textContent = persianNum;
                    if (progress < 1) requestAnimationFrame(updateCounter);
                    else el.textContent = target.toString().replace(/[0-9]/g, d => String.fromCharCode(d.charCodeAt(0) + 1728));
                }
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    statNumbers.forEach(num => counterObserver.observe(num));
}

/* ==================== BACK TO TOP ==================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 600) backToTopBtn.classList.add('visible');
        else backToTopBtn.classList.remove('visible');
    });
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ==================== COURSE FILTER ==================== */
function initCourseFilter() {
    const filterBtns = document.querySelectorAll('.courses__filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    if (!filterBtns.length || !courseCards.length) return;
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            courseCards.forEach(card => {
                const category = card.getAttribute('data-category');
                card.style.display = (filter === 'all' || category === filter) ? '' : 'none';
            });
        });
    });
}

/* ==================== RESULTS TABS ==================== */
function initResultsTabs() {
    const tabs = document.querySelectorAll('.results__tab');
    const tableRows = document.querySelectorAll('.results__table tbody tr');
    if (!tabs.length || !tableRows.length) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-tab');
            tableRows.forEach(row => {
                const rowLevel = row.querySelector('td:nth-child(4)')?.textContent.trim();
                row.style.display = (filter === 'all' || 
                    (filter === 'beginner' && rowLevel === 'مقدماتی') ||
                    (filter === 'intermediate' && rowLevel === 'متوسط') ||
                    (filter === 'advanced' && (rowLevel === 'پیشرفته' || rowLevel === 'حرفه‌ای'))) ? '' : 'none';
            });
        });
    });
    const searchInput = document.querySelector('.results__search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            tableRows.forEach(row => {
                const name = row.querySelector('.results__name')?.textContent.toLowerCase() || '';
                row.style.display = (!query || name.includes(query)) ? '' : 'none';
            });
        });
    }
}

/* ==================== HERO PARTICLES ==================== */
function initHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        particle.style.cssText = `
            width:${Math.random()*20+10}px;height:${Math.random()*20+10}px;
            left:${Math.random()*100}%;top:${Math.random()*100}%;
            animation-duration:${Math.random()*15+10}s;
            animation-delay:${Math.random()*10}s;
        `;
        container.appendChild(particle);
    }
}

/* ==================== TOAST ==================== */
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.polaris-toast');
    if (existingToast) existingToast.remove();
    const toast = document.createElement('div');
    toast.classList.add('polaris-toast');
    toast.setAttribute('data-type', type);
    toast.textContent = message;
    toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);padding:1rem 2rem;border-radius:1rem;z-index:9999;animation:toastSlideUp 0.4s ease;backdrop-filter:blur(20px);border:1px solid;';
    if (type === 'success') { toast.style.background = 'rgba(46,204,113,0.15)'; toast.style.borderColor = 'rgba(46,204,113,0.4)'; toast.style.color = '#2ecc71'; }
    if (type === 'error') { toast.style.background = 'rgba(231,76,60,0.15)'; toast.style.borderColor = 'rgba(231,76,60,0.4)'; toast.style.color = '#e74c3c'; }
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 5000);
}

/* ==================== CONSOLE MESSAGE ==================== */
function initConsoleMessage() {
    console.log('%c♟️ %cپولاریس آکادمی %cv5.0', 'font-size:20px;', 'font-size:20px;color:#D4A843;font-weight:900;', 'color:#8B4513;');
}
window.showToast = showToast;
console.log('✅ پولاریس آکادمی v5.0 - آماده');