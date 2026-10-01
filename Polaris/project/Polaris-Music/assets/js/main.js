// ============================================
// POLARIS Music Academy - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c⭐ POLARIS Music Academy %c v2.0', 'color: #E11D48; font-size: 18px; font-weight: bold;', 'color: #FB7185;');

    initLoader();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initActiveSection();
    initScrollReveal();
    initFAQ();
    initConsultModal();
    initConsultForm();
    initNewsletterForm();
    initInstrumentCards();
    initThemeToggle();
    initParticles();
});

// ===== LOADER =====
function initLoader() {
    const loader = document.getElementById('loaderOverlay');
    if (!loader) return;
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            setTimeout(() => loader.remove(), 600);
        }, 1500);
    });
    setTimeout(() => {
        if (loader.style.opacity !== '0') {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }
    }, 5000);
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 991) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 100;
                const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: position, behavior: 'smooth' });
            }
        });
    });
}

// ===== ACTIVE SECTION =====
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY + 200;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const elements = document.querySelectorAll('.instrument-card, .feature-card, .course-item, .testimonial-card, .gallery-item, .contact-card, .about-quote, .achievement-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// ===== FAQ =====
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

// ===== CONSULT MODAL =====
function initConsultModal() {
    const btn = document.getElementById('consultBtn');
    const modal = document.getElementById('consultModal');
    const close = document.querySelector('.modal-close');
    if (!btn || !modal) return;

    btn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (close) close.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
}

// ===== CONSULT FORM =====
function initConsultForm() {
    const form = document.getElementById('consultForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('consultName')?.value.trim();
        const phone = document.getElementById('consultPhone')?.value.trim();
        const instrument = document.getElementById('consultInstrument')?.value;
        const messageEl = document.getElementById('consultMessage');
        const modal = document.getElementById('consultModal');

        if (!name || !phone || !instrument) {
            if (messageEl) {
                messageEl.textContent = '❌ لطفاً تمام فیلدها را پر کنید';
                messageEl.style.cssText = 'color:#EF4444;opacity:1;font-weight:700;margin-top:15px;';
            }
            return;
        }

        const consultations = JSON.parse(localStorage.getItem('polarisConsultations') || '[]');
        consultations.push({ name, phone, instrument, date: new Date().toISOString() });
        localStorage.setItem('polarisConsultations', JSON.stringify(consultations));

        if (messageEl) {
            messageEl.textContent = '✅ درخواست شما با موفقیت ثبت شد!';
            messageEl.style.cssText = 'color:#10B981;opacity:1;font-weight:700;margin-top:15px;';
        }
        form.reset();

        setTimeout(() => {
            if (messageEl) messageEl.style.opacity = '0';
            if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
        }, 3000);
    });
}

// ===== NEWSLETTER FORM =====
function initNewsletterForm() {
    const form = document.getElementById('newsletterFormAlt');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsEmailAlt')?.value.trim();
        const messageEl = document.getElementById('newsAltMessage');

        if (!email || !email.includes('@') || !email.includes('.')) {
            if (messageEl) {
                messageEl.textContent = '❌ لطفاً ایمیل معتبر وارد کنید';
                messageEl.style.cssText = 'color:#EF4444;opacity:1;font-weight:700;margin-top:15px;';
            }
            return;
        }

        const subscribers = JSON.parse(localStorage.getItem('polarisSubscribers') || '[]');
        if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('polarisSubscribers', JSON.stringify(subscribers));
        }

        if (messageEl) {
            messageEl.textContent = '✅ عضویت شما با موفقیت انجام شد!';
            messageEl.style.cssText = 'color:#10B981;opacity:1;font-weight:700;margin-top:15px;';
        }
        form.reset();
    });
}

// ===== INSTRUMENT CARDS =====
function initInstrumentCards() {
    document.querySelectorAll('.instrument-card').forEach(card => {
        const cta = card.querySelector('.instrument-cta');
        const handleClick = () => {
            const consultBtn = document.getElementById('consultBtn');
            if (consultBtn) consultBtn.click();
            const instrumentName = card.querySelector('h3')?.textContent.trim();
            setTimeout(() => {
                const select = document.getElementById('consultInstrument');
                if (select && instrumentName) {
                    for (let i = 0; i < select.options.length; i++) {
                        if (select.options[i].textContent.includes(instrumentName)) {
                            select.selectedIndex = i;
                            break;
                        }
                    }
                }
            }, 300);
        };
        if (cta) cta.addEventListener('click', (e) => { e.stopPropagation(); handleClick(); });
        card.addEventListener('click', handleClick);
    });
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;

    const updateIcon = () => {
        const isLight = document.body.classList.contains('light-mode');
        const color = isLight ? '#3A2E24' : '#F5F0E8';
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v1M12 20v1M21 12h-1M4 12H3"/></svg>`;
    };

    if (localStorage.getItem('polarisTheme') === 'light') {
        document.body.classList.add('light-mode');
    }
    updateIcon();

    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('polarisTheme', isLight ? 'light' : 'dark');
        updateIcon();
    });
}

// ===== PARTICLES =====
function initParticles() {
    const hero = document.querySelector('.hero-polaris');
    if (!hero || window.innerWidth < 768) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    function resize() { w = canvas.width = hero.offsetWidth; h = canvas.height = hero.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 30; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3 - 0.2,
            opacity: Math.random() * 0.3 + 0.05
        });
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.opacity -= 0.002;
            if (p.opacity <= 0 || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
                p.x = Math.random() * w;
                p.y = Math.random() * h;
                p.opacity = Math.random() * 0.3 + 0.05;
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(225, 29, 72, ${p.opacity})`;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}