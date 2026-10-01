/* =============================================
   پولاریس آکادمی - اسکریپت اصلی
   Main JavaScript - Premium Edition
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Scroll Progress Bar ----------
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    });

    // ---------- Dark/Light Toggle ----------
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Set default dark mode (no light-mode class)
    const savedMode = localStorage.getItem('polaris-mode');
    if (savedMode === 'light') {
        html.classList.add('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('light-mode');
            const isLight = html.classList.contains('light-mode');
            localStorage.setItem('polaris-mode', isLight ? 'light' : 'dark');
        });
    }

    // ---------- Header Scroll Effect ----------
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollY > 700) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---------- Hamburger Menu ----------
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // ---------- Active Nav Link on Scroll ----------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 180;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);

    // ---------- Gallery Filter (Demo) ----------
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ---------- Smooth Scroll ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---------- Course Details Modal ----------
    const courseModal = document.getElementById('courseModal');
    const modalClose = document.getElementById('modalClose');
    const modalCourseTitle = document.getElementById('modalCourseTitle');
    const modalSessions = document.getElementById('modalSessions');
    const modalCapacity = document.getElementById('modalCapacity');
    const modalPrice = document.getElementById('modalPrice');

    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const course = btn.dataset.course;
            const price = btn.dataset.price;
            const sessions = btn.dataset.sessions;
            const capacity = btn.dataset.capacity;

            modalCourseTitle.textContent = course;
            modalSessions.textContent = sessions + ' جلسه';
            modalCapacity.textContent = 'ظرفیت: ' + capacity + ' نفر';
            modalPrice.textContent = price + ' تومان';

            courseModal.classList.add('active');
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            courseModal.classList.remove('active');
        });
    }

    if (courseModal) {
        courseModal.addEventListener('click', (e) => {
            if (e.target === courseModal) {
                courseModal.classList.remove('active');
            }
        });
    }

    // ---------- Signup Modal ----------
    const signupModal = document.getElementById('signupModal');
    const btnSignup = document.getElementById('btnSignup');
    const signupModalClose = document.getElementById('signupModalClose');

    if (btnSignup) {
        btnSignup.addEventListener('click', () => {
            signupModal.classList.add('active');
        });
    }

    if (signupModalClose) {
        signupModalClose.addEventListener('click', () => {
            signupModal.classList.remove('active');
        });
    }

    if (signupModal) {
        signupModal.addEventListener('click', (e) => {
            if (e.target === signupModal) {
                signupModal.classList.remove('active');
            }
        });
    }

    // Auth Tabs
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === (target === 'login' ? 'loginForm' : 'registerForm')) {
                    form.classList.add('active');
                }
            });
        });
    });

    // ---------- Intersection Observer for Animations ----------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger delay
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 80);
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatableElements = document.querySelectorAll([
        'section > .section-header',
        '.course-card',
        '.master-card',
        '.workshop-card',
        '.testimonial-card',
        '.blog-card',
        '.pricing-card',
        '.gallery-item',
        '.value-card',
        '.contact-card'
    ].join(','));

    animatableElements.forEach(el => observer.observe(el));

    // ---------- Parallax Particle Movement ----------
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        particles.forEach((particle, i) => {
            const speed = (i + 1) * 0.015;
            const x = (clientX - centerX) * speed;
            const y = (clientY - centerY) * speed;
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

});