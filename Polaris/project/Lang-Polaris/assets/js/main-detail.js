// ==================== main-detail.js - Polaris Detail Page ====================
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
    setTimeout(hideLoader, 2000);
    window.addEventListener('load', hideLoader);

    // ========== THEME ==========
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('polaris-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    function updateThemeButton(theme) {
        const themeIcon = document.getElementById('themeIcon');
        const themeLabel = document.getElementById('themeLabel');
        if (themeIcon && themeLabel) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-moon';
                themeLabel.textContent = 'تاریک';
            } else {
                themeIcon.className = 'fas fa-sun';
                themeLabel.textContent = 'روشن';
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

    // ========== MOBILE MENU ==========
    const menuToggler = document.getElementById('menuToggler');
    const navMenu = document.getElementById('navMenu');

    if (menuToggler && navMenu) {
        menuToggler.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            if (menuToggler) menuToggler.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ========== FAQ ACCORDION ==========
    document.addEventListener('click', function(e) {
        const questionBtn = e.target.closest('.faq-question');
        if (questionBtn) {
            const item = questionBtn.closest('.faq-item');
            const parentList = item.closest('.faq-list');
            const wasActive = item.classList.contains('active');

            if (parentList) {
                parentList.querySelectorAll('.faq-item').forEach(function(faq) {
                    faq.classList.remove('active');
                });
            }

            if (!wasActive) {
                item.classList.add('active');
            }
        }
    });

    // ========== COURSES SLIDER ==========
    const sliderTrack = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (sliderTrack && prevBtn && nextBtn) {
        let currentSlide = 0;
        let cardsPerView = 3;

        function updateSlider() {
            if (window.innerWidth <= 576) cardsPerView = 1;
            else if (window.innerWidth <= 992) cardsPerView = 2;
            else cardsPerView = 3;

            const cardWidth = sliderTrack.querySelector('.course-card')?.offsetWidth + 24 || 304;
            const maxSlide = Math.max(0, sliderTrack.children.length - cardsPerView);
            if (currentSlide > maxSlide) currentSlide = maxSlide;

            sliderTrack.style.transform = `translateX(${currentSlide * cardWidth}px)`;

            prevBtn.style.opacity = currentSlide === 0 ? '0.4' : '1';
            prevBtn.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
            nextBtn.style.opacity = currentSlide >= maxSlide ? '0.4' : '1';
            nextBtn.style.pointerEvents = currentSlide >= maxSlide ? 'none' : 'auto';
        }

        nextBtn.addEventListener('click', function() {
            const maxSlide = Math.max(0, sliderTrack.children.length - cardsPerView);
            if (currentSlide < maxSlide) {
                currentSlide++;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', function() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });

        window.addEventListener('resize', function() {
            currentSlide = 0;
            updateSlider();
        });

        setTimeout(updateSlider, 100);
    }

    // ========== BACK TO TOP & NAVBAR ==========
    const backToTop = document.getElementById('backToTop');
    const navbar = document.getElementById('navbar');

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

    // ========== NEWSLETTER ==========
    document.querySelectorAll('.newsletter-form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            const btn = form.querySelector('button');
            if (!btn) return;
            const originalHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = '#10b981';
            setTimeout(function() {
                btn.innerHTML = originalHtml;
                btn.style.background = '';
                if (input) input.value = '';
            }, 2000);
        });
    });

    // ========== MODAL LOGIN/REGISTER ==========
    const modal = document.getElementById('authModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const enrollBtn = document.getElementById('enrollBtn');
    const closeModal = document.getElementById('closeModal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Open modal functions
    function openModal() {
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModalFunc() {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    // Switch between login and register tabs
    function switchTab(tabId) {
        if (tabId === 'login') {
            loginForm?.classList.add('active');
            registerForm?.classList.remove('active');
            tabBtns.forEach(btn => {
                if (btn.getAttribute('data-tab') === 'login') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        } else {
            registerForm?.classList.add('active');
            loginForm?.classList.remove('active');
            tabBtns.forEach(btn => {
                if (btn.getAttribute('data-tab') === 'register') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    }

    // Event listeners for opening modal
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab('login');
            openModal();
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab('register');
            openModal();
        });
    }

    if (enrollBtn) {
        enrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab('register');
            openModal();
        });
    }

    // Tab click handlers
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    // Escape key closes modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeModalFunc();
        }
    });

    // Toggle password visibility
    document.querySelectorAll('.toggle-pass').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (input) {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                this.querySelector('i').classList.toggle('fa-eye');
                this.querySelector('i').classList.toggle('fa-eye-slash');
            }
        });
    });

    // Handle login form submit
    const loginFormElement = document.getElementById('loginFormElement');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login logic here
            alert('ورود با موفقیت انجام شد!');
            closeModalFunc();
        });
    }

    // Handle register form submit
    const registerFormElement = document.getElementById('registerFormElement');
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your registration logic here
            alert('ثبت‌نام با موفقیت انجام شد! به خانواده Polaris خوش آمدید.');
            closeModalFunc();
        });
    }

    console.log('✅ Polaris Detail Page Ready with Modal');
})();