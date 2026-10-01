/* =============================================
   پولاریس آکادمی - اسکریپت بلاگ پست
   Blog Post Single JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Reading Progress Bar ----------
    const readingProgress = document.getElementById('readingProgress');
    const postContent = document.querySelector('.post-content-wrapper');

    if (readingProgress && postContent) {
        window.addEventListener('scroll', () => {
            const contentTop = postContent.offsetTop;
            const contentHeight = postContent.offsetHeight;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            const scrollStart = contentTop - windowHeight / 2;
            const scrollEnd = contentTop + contentHeight - windowHeight;

            if (scrollY <= scrollStart) {
                readingProgress.style.width = '0%';
            } else if (scrollY >= scrollEnd) {
                readingProgress.style.width = '100%';
            } else {
                const progress = ((scrollY - scrollStart) / (scrollEnd - scrollStart)) * 100;
                readingProgress.style.width = Math.min(100, Math.max(0, progress)) + '%';
            }
        });
    }

    // ---------- Table of Contents Active State ----------
    const tocItems = document.querySelectorAll('.toc-item');
    const sections = document.querySelectorAll('.post-section, .post-intro, .post-conclusion');

    if (tocItems.length && sections.length) {
        window.addEventListener('scroll', () => {
            let currentIndex = 0;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop - 200;
                if (window.scrollY >= sectionTop) {
                    currentIndex = index;
                }
            });

            tocItems.forEach((item, index) => {
                item.classList.remove('active');
                if (index === currentIndex) {
                    item.classList.add('active');
                }
            });
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
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.post-section, .post-tip, .post-color-example').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });

});