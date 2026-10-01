/* =============================================
   ✦ POLARIS ACADEMY - LUXURY GOLD EDITION ✦
   Main JavaScript - Version 5.0 Final
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ==========================================
    // DOM ELEMENTS
    // ==========================================
    const header = document.getElementById('header');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');
    const themeToggle = document.getElementById('themeToggle');
    const accountBtn = document.getElementById('accountBtn');
    const accountModal = document.getElementById('accountModal');
    const advisorModal = document.getElementById('advisorModal');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const preloader = document.getElementById('preloader');

    // ==========================================
    // HELPER FUNCTIONS
    // ==========================================
    
    // تبدیل اعداد به فارسی
    function toPersianNumber(num) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return String(num).replace(/\d/g, d => persianDigits[parseInt(d)]);
    }

    // نمایش پیام Toast
    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `<span>${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-10px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ==========================================
    // CART FUNCTIONS
    // ==========================================
    const coursesData = {
        1: { id: 1, title: 'فارکس جامع', price: 2490000 },
        2: { id: 2, title: 'ارز دیجیتال', price: 1990000 },
        3: { id: 3, title: 'تحلیل تکنیکال', price: 1690000 },
        4: { id: 4, title: 'روانشناسی ترید', price: 1290000 },
        5: { id: 5, title: 'بورس ایران', price: 1490000 }
    };

    function getCart() {
        return JSON.parse(localStorage.getItem('polaris_cart') || '[]');
    }

    function saveCart(cart) {
        localStorage.setItem('polaris_cart', JSON.stringify(cart));
        updateCartBadge();
    }

    function updateCartBadge() {
        const cart = getCart();
        const badge = document.getElementById('cartCountBadge');
        if (badge) {
            const count = cart.length;
            if (count > 0) {
                badge.textContent = toPersianNumber(count);
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    }

    window.addToCart = function(courseId) {
        const cart = getCart();
        const course = coursesData[courseId];
        
        if (!cart.includes(courseId)) {
            cart.push(courseId);
            saveCart(cart);
            showToast(`✅ ${course.title} به سبد خرید اضافه شد`);
        } else {
            showToast(`ℹ️ ${course.title} قبلاً در سبد خرید موجود است`, 'info');
        }
    };

    // ==========================================
    // AUTH FUNCTIONS
    // ==========================================
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('polaris_logged_in') === 'true';
        const user = JSON.parse(localStorage.getItem('polaris_user') || '{}');
        
        const accountBtnEl = document.getElementById('accountBtn');
        const headerActions = document.querySelector('.header__actions');
        
        if (accountBtnEl && isLoggedIn && user.name) {
            // تغییر دکمه حساب کاربری به منوی کاربر
            const authContainer = document.getElementById('authButtonContainer');
            if (authContainer) {
                authContainer.innerHTML = `
                    <div class="header__user-menu">
                        <button class="btn btn--luxury" id="userMenuBtn">
                            <span class="btn__icon"><div class="user-avatar-mini">${user.name.charAt(0)}</div></span>
                            <span class="btn__text">${user.name.split(' ')[0]}<em>حساب من</em></span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 9l6 6 6-6"/></svg>
                        </button>
                        <div class="user-dropdown" id="userDropdown">
                            <div class="user-dropdown__header">
                                <div class="user-avatar-lg">${user.name.charAt(0)}</div>
                                <div><div class="user-dropdown__name">${user.name}</div><div class="user-dropdown__email">${user.email || 'user@polaris.academy'}</div></div>
                            </div>
                            <div class="user-dropdown__divider"></div>
                            <a href="dashboard.html" class="user-dropdown__link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>داشبورد<em>Dashboard</em></span></a>
                            <div class="user-dropdown__divider"></div>
                            <button class="user-dropdown__logout" id="logoutBtn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg><span>خروج<em>Logout</em></span></button>
                        </div>
                    </div>
                `;
                setupUserDropdown();
                document.getElementById('logoutBtn')?.addEventListener('click', logout);
            }
        }
    }

    function setupUserDropdown() {
        const btn = document.getElementById('userMenuBtn');
        const dropdown = document.getElementById('userDropdown');
        if (btn && dropdown) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
            document.addEventListener('click', () => dropdown.classList.remove('active'));
            dropdown.addEventListener('click', (e) => e.stopPropagation());
        }
    }

    function logout() {
        localStorage.removeItem('polaris_logged_in');
        localStorage.removeItem('polaris_user');
        window.location.reload();
    }

    // ==========================================
    // MODAL FUNCTIONS
    // ==========================================
    function openModal(modal) {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    
    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('polaris-theme', newTheme);
        });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal__close').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.closest('.modal-overlay')));
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) closeModal(overlay);
        });
    });

    // Account Modal
    if (accountBtn && accountModal) {
        accountBtn.addEventListener('click', () => openModal(accountModal));
        
        // Modal Tabs
        document.querySelectorAll('#accountModal .modal__tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('#accountModal .modal__tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('#accountModal .modal__form').forEach(f => f.classList.remove('active'));
                document.getElementById(this.getAttribute('data-tab') + 'Form').classList.add('active');
            });
        });
        
        // Login Form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const username = document.getElementById('loginUsername').value.trim();
                const password = document.getElementById('loginPassword').value;
                
                if (username === 'admin' && password === 'admin') {
                    const userData = {
                        name: 'مدیر پولاریس',
                        email: 'admin@polaris.academy',
                        role: 'admin'
                    };
                    localStorage.setItem('polaris_logged_in', 'true');
                    localStorage.setItem('polaris_user', JSON.stringify(userData));
                    closeModal(accountModal);
                    showToast('✅ ورود موفق! در حال انتقال به داشبورد...');
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1500);
                } else {
                    showToast('❌ نام کاربری یا رمز عبور اشتباه است!', 'error');
                }
            });
        }
        
        // Register Form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const fullName = document.getElementById('regFullName').value.trim();
                const email = document.getElementById('regEmail').value.trim();
                const phone = document.getElementById('regPhone').value.trim();
                const password = document.getElementById('regPassword').value;
                
                if (!fullName || !email || !phone || !password) {
                    showToast('❌ لطفاً تمام فیلدها را پر کنید!', 'error');
                    return;
                }
                
                if (password.length < 4) {
                    showToast('❌ رمز عبور باید حداقل 4 کاراکتر باشد!', 'error');
                    return;
                }
                
                const userData = {
                    name: fullName,
                    email: email,
                    phone: phone,
                    role: 'student'
                };
                
                localStorage.setItem('polaris_logged_in', 'true');
                localStorage.setItem('polaris_user', JSON.stringify(userData));
                closeModal(accountModal);
                showToast('✅ ثبت‌نام با موفقیت انجام شد!');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            });
        }
    }

    // Advisor Modal
    document.querySelectorAll('[data-modal="advisor"]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            openModal(advisorModal);
        });
    });

    if (advisorModal) {
        const advisorForm = document.getElementById('advisorForm');
        if (advisorForm) {
            advisorForm.addEventListener('submit', e => {
                e.preventDefault();
                closeModal(advisorModal);
                showToast('درخواست شما ثبت شد. مشاوران ما تماس می‌گیرند.');
                advisorForm.reset();
            });
        }
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            showToast('ایمیل شما با موفقیت ثبت شد!');
            e.target.reset();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            showToast('پیام شما با موفقیت ارسال شد!');
            e.target.reset();
        });
    }

    // ==========================================
    // MOBILE MENU
    // ==========================================
    if (hamburgerBtn && mainNav && mobileOverlay) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileOverlay.addEventListener('click', () => {
            mainNav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // ==========================================
    // HEADER SCROLL
    // ==========================================
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ==========================================
    // PRELOADER
    // ==========================================
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 800);
        });
        
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 5000);
    }

    // ==========================================
    // COUNTER ANIMATION
    // ==========================================
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                let current = 0;
                const timer = setInterval(() => {
                    current += target / 50;
                    if (current >= target) {
                        el.textContent = toPersianNumber(target);
                        clearInterval(timer);
                    } else {
                        el.textContent = toPersianNumber(Math.floor(current));
                    }
                }, 20);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.3 });
    
    counters.forEach(c => counterObserver.observe(c));

    // ==========================================
    // FAQ ACCORDION
    // ==========================================
    document.querySelectorAll('.faq-item__question').forEach(q => {
        q.addEventListener('click', function() {
            const parent = this.parentElement;
            const isActive = parent.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
            if (!isActive) parent.classList.add('active');
        });
    });

    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    if (sections.length) {
        window.addEventListener('scroll', () => {
            let scrollPosition = window.scrollY + 150;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.header__menu-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - (header ? header.offsetHeight : 90),
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // INIT
    // ==========================================
    const savedTheme = localStorage.getItem('polaris-theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
    
    updateCartBadge();
    checkLoginStatus();

    console.log('%c✦ %cپولاریس آکادمی %c| %cPolaris Academy %c✦',
        'color: #FFD700; font-size: 20px;',
        'color: #FFD700; font-size: 20px; font-weight: bold;',
        'color: #fff;',
        'color: #FFA500; font-size: 14px;',
        'color: #FFD700; font-size: 20px;'
    );
});