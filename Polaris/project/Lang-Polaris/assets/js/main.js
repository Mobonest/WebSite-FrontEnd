// ==================== main.js - Polaris (Vanilla JS) ====================
// نسخه کامل و بی‌نقص - هماهنگ با i18n.js و style.css جدید
(function() {

    // ========== LOADER ==========
    function hideLoader() {
        const loader = document.getElementById('loaderWrapper');
        if (!loader) return;
        
        loader.classList.add('hidden');
        setTimeout(function() {
            if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 600);
    }
    
    // لودر رو بعد از ۳.۵ ثانیه به‌اجبار مخفی کن
    setTimeout(hideLoader, 3500);
    
    // اگه صفحه زودتر لود شد، لودر رو مخفی کن
    window.addEventListener('load', function() {
        hideLoader();
    });
        
    // ========== DOM Elements ==========
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const themeLabel = document.getElementById('themeLabel');
    const langToggle = document.getElementById('langToggle');
    const langMenu = document.getElementById('langMenu');
    const navMenu = document.getElementById('navMenu');
    const menuToggler = document.getElementById('menuToggler');
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const loginModal = document.getElementById('loginModal');
    
    // ========== HELPER: تبدیل اعداد فارسی/عربی به انگلیسی ==========
    function convertPersianToEnglishNumber(str) {
        if (str === undefined || str === null) return '';
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        let result = String(str);
        for (let i = 0; i < persianNumbers.length; i++) {
            const regex = new RegExp(persianNumbers[i], 'g');
            result = result.replace(regex, i.toString());
        }
        for (let i = 0; i < arabicNumbers.length; i++) {
            const regex = new RegExp(arabicNumbers[i], 'g');
            result = result.replace(regex, i.toString());
        }
        return result;
    }
    
    // ========== THEME ==========
    const savedTheme = localStorage.getItem('polaris-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    function updateThemeButton(theme) {
        if (themeIcon && themeLabel) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-moon';
                if (window.getTranslation) {
                    themeLabel.textContent = window.getTranslation('nav.theme.dark') || 'تاریک';
                } else {
                    themeLabel.textContent = 'تاریک';
                }
            } else {
                themeIcon.className = 'fas fa-sun';
                if (window.getTranslation) {
                    themeLabel.textContent = window.getTranslation('nav.theme.light') || 'روشن';
                } else {
                    themeLabel.textContent = 'روشن';
                }
            }
        }
    }
    updateThemeButton(savedTheme);
    
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.addEventListener('click', function() {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('polaris-theme', next);
            updateThemeButton(next);
        });
    }
    
    // ========== LANGUAGE DROPDOWN ==========
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (langMenu) langMenu.classList.toggle('show');
        });
    }
    
    document.addEventListener('click', function(e) {
        if (langMenu && !e.target.closest('.lang-dropdown-wrapper')) {
            langMenu.classList.remove('show');
        }
    });
    
    // ========== PAGE SWITCHING ==========
    function showPage(pageName) {
        document.querySelectorAll('.page-content').forEach(function(page) {
            page.classList.remove('active');
        });
        
        const targetPage = document.getElementById('page-' + pageName);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        document.querySelectorAll('.nav-links a').forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) link.classList.add('active');
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        if (window.innerWidth <= 768) {
            if (navMenu) navMenu.classList.remove('open');
            if (menuToggler) menuToggler.classList.remove('active');
            document.body.style.overflow = '';
            const overlay = document.querySelector('.mobile-menu-overlay');
            if (overlay) overlay.classList.remove('active');
        }
        
        // Re-trigger counters
        setTimeout(function() {
            document.querySelectorAll('.num, .stat-num, .stat-big').forEach(function(el) {
                el.removeAttribute('data-counted');
            });
            animateCounters();
        }, 300);
    }
    
    // ========== EVENT DELEGATION ==========
    document.addEventListener('click', function(e) {
        const target = e.target.closest('[data-page]');
        if (target) {
            e.preventDefault();
            const page = target.getAttribute('data-page');
            if (page) showPage(page);
        }
        
        const actionTarget = e.target.closest('[data-action]');
        if (actionTarget) {
            e.preventDefault();
            const action = actionTarget.getAttribute('data-action');
            if (action === 'login') openLoginModal('login');
            if (action === 'register') openLoginModal('register');
        }
    });
    
    // ========== MOBILE MENU ==========
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileOverlay);

    if (menuToggler) {
        menuToggler.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navMenu) {
                navMenu.classList.toggle('open');
                if (navMenu.classList.contains('open')) {
                    document.body.style.overflow = 'hidden';
                    mobileOverlay.classList.add('active');
                } else {
                    document.body.style.overflow = '';
                    mobileOverlay.classList.remove('active');
                }
            }
        });
    }

    mobileOverlay.addEventListener('click', function() {
        if (navMenu) navMenu.classList.remove('open');
        if (menuToggler) menuToggler.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close mobile menu on nav link click
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                if (navMenu) navMenu.classList.remove('open');
                if (menuToggler) menuToggler.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (navMenu && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                if (menuToggler) menuToggler.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (loginModal && loginModal.classList.contains('show')) {
                closeLoginModal();
            }
        }
    });
        
    // ========== BACK TO TOP ==========
    window.addEventListener('scroll', function() {
        const top = window.scrollY;
        if (backToTop) backToTop.classList.toggle('visible', top > 500);
        if (navbar) navbar.classList.toggle('sticky', top > 50);
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ========== AUTH MODAL ==========
    function openLoginModal(tab) {
        if (!loginModal) return;
        loginModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const tabBtns = document.querySelectorAll('.tab-btn');
        
        if (tab === 'register') {
            if (registerForm) registerForm.classList.add('active');
            if (loginForm) loginForm.classList.remove('active');
            tabBtns.forEach(function(btn) {
                btn.classList.remove('active');
                if (btn.getAttribute('data-tab') === 'register') btn.classList.add('active');
            });
        } else {
            if (loginForm) loginForm.classList.add('active');
            if (registerForm) registerForm.classList.remove('active');
            tabBtns.forEach(function(btn) {
                btn.classList.remove('active');
                if (btn.getAttribute('data-tab') === 'login') btn.classList.add('active');
            });
        }
    }
    
    function closeLoginModal() {
        if (!loginModal) return;
        loginModal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) modalClose.addEventListener('click', closeLoginModal);
    
    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) closeLoginModal();
        });
    }
    
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            if (tab === 'login') {
                document.getElementById('loginForm').classList.add('active');
                document.getElementById('registerForm').classList.remove('active');
            } else {
                document.getElementById('registerForm').classList.add('active');
                document.getElementById('loginForm').classList.remove('active');
            }
        });
    });
    
    // ========== PASSWORD TOGGLE ==========
    document.addEventListener('click', function(e) {
        const toggleBtn = e.target.closest('.toggle-pass');
        if (toggleBtn) {
            const input = toggleBtn.parentElement.querySelector('input');
            const icon = toggleBtn.querySelector('i');
            if (input && icon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'fas fa-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'fas fa-eye';
                }
            }
        }
    });
    
    // ========== FAQ ==========
    document.addEventListener('click', function(e) {
        const questionBtn = e.target.closest('.faq-question');
        if (questionBtn) {
            const item = questionBtn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const icon = questionBtn.querySelector('i');
            const wasActive = item.classList.contains('active');
            
            // Close all FAQs in the same grid
            const parentGrid = item.closest('.faq-grid-home');
            if (parentGrid) {
                parentGrid.querySelectorAll('.faq-item').forEach(function(faq) {
                    faq.classList.remove('active');
                    const ans = faq.querySelector('.faq-answer');
                    if (ans) ans.style.maxHeight = '0';
                    const ic = faq.querySelector('.faq-question i');
                    if (ic) ic.style.transform = '';
                });
            }
            
            // Open clicked FAQ if it wasn't active
            if (!wasActive && answer && icon) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        }
    });
    
    // ========== FORMS ==========
    document.addEventListener('submit', function(e) {
        const form = e.target;
        
        // Contact Form
        if (form.classList.contains('contact-form')) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (!btn) return;
            const orig = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            setTimeout(function() {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-check"></i> ✓';
                form.reset();
                setTimeout(() => { btn.innerHTML = orig; }, 3000);
            }, 1500);
        }
        
        // Newsletter Form
        if (form.classList.contains('newsletter-form')) {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            const btn = form.querySelector('button');
            if (!btn) return;
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = 'var(--green)';
            setTimeout(function() {
                btn.innerHTML = orig;
                btn.style.background = '';
                if (input) input.value = '';
            }, 2500);
        }
        
        // CTA Form
        if (form.classList.contains('cta-form')) {
            e.preventDefault();
            openLoginModal('register');
        }
        
        // Login Form
        if (form.closest('#loginForm')) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (!btn) return;
            const orig = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            setTimeout(function() {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-check"></i> ✓';
                setTimeout(() => { 
                    btn.innerHTML = orig;
                    closeLoginModal();
                }, 1500);
            }, 1200);
        }
        
        // Register Form
        if (form.closest('#registerForm')) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (!btn) return;
            const orig = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            setTimeout(function() {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-check"></i> ✓';
                setTimeout(() => { 
                    btn.innerHTML = orig;
                    closeLoginModal();
                }, 1500);
            }, 1200);
        }
    });
    
    // ========== SEARCH ==========
    document.addEventListener('click', function(e) {
        const searchBtn = e.target.closest('.search-field button');
        if (searchBtn) {
            e.preventDefault();
            showPage('courses');
        }
    });
    
    // Allow search with Enter key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const searchInput = e.target.closest('.search-field input');
            if (searchInput) {
                e.preventDefault();
                showPage('courses');
            }
        }
    });
    
// ========== COUNTER ANIMATION (FIXED WITH ENGLISH NUMBERS FOR RATINGS) ==========
function animateCounters() {
    document.querySelectorAll('.num, .stat-num, .stat-big').forEach(function(el) {
        if (el.getAttribute('data-counted')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) return;
        el.setAttribute('data-counted', 'true');
        
        // دریافت مقدار target و تبدیل اعداد فارسی/عربی به انگلیسی
        let targetValue = el.getAttribute('data-target');
        if (!targetValue) return;
        
        // تبدیل اعداد فارسی/عربی به انگلیسی
        targetValue = convertPersianToEnglishNumber(targetValue);
        const target = parseFloat(targetValue);
        
        if (isNaN(target)) {
            console.warn('Invalid data-target value:', el.getAttribute('data-target'), 'converted to:', targetValue);
            return;
        }
        
        const isFloat = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();
        const startValue = 0;
        
        // بررسی می‌کنیم که این المنت مربوط به امتیاز کاربران است یا خیر
        const isRating = el.closest('.num-block') && 
                        (el.closest('.num-block').querySelector('.num-label')?.innerText.includes('امتیاز') ||
                         el.closest('.num-block').querySelector('.num-label')?.innerText.includes('Rating'));
        
        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (target - startValue) * eased;
            
            if (progress >= 1) {
                if (isFloat) {
                    if (isRating) {
                        // برای امتیاز کاربران: عدد انگلیسی با نقطه
                        el.textContent = target.toFixed(1);
                    } else {
                        // برای بقیه: عدد فارسی
                        el.textContent = target.toFixed(1).toLocaleString('fa-IR');
                    }
                } else {
                    if (isRating) {
                        // برای امتیاز کاربران: عدد انگلیسی
                        el.textContent = Math.floor(target);
                    } else {
                        // برای بقیه: عدد فارسی
                        el.textContent = Math.floor(target).toLocaleString('fa-IR');
                    }
                }
                return;
            }
            
            if (isFloat) {
                if (isRating) {
                    el.textContent = current.toFixed(1);
                } else {
                    el.textContent = current.toFixed(1);
                }
            } else {
                if (isRating) {
                    el.textContent = Math.floor(current);
                } else {
                    el.textContent = Math.floor(current).toLocaleString('fa-IR');
                }
            }
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    });
}
    
    // Expose animateCounters globally for i18n.js
    window.animateCounters = animateCounters;
    
    // Initial counter animation
    setTimeout(animateCounters, 500);
    
    // Counter animation on scroll
    let scrollTimer;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(animateCounters, 150);
    });
    
    // ========== RESIZE HANDLER ==========
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                if (navMenu) navMenu.classList.remove('open');
                if (menuToggler) menuToggler.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250);
    });
    
    // ========== INIT ==========
    console.log('🚀 Polaris - ستاره قطبی یادگیری شما - Ready!');
    console.log('🎨 Theme: Ocean Blue | 🌐 Languages: FA, EN, AR, TR');
    console.log('🔢 Counter animation fixed - Persian/Arabic numbers supported!');
    
})();