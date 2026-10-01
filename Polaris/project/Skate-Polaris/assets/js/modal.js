document.addEventListener('DOMContentLoaded', () => {

    const loginBtn = document.getElementById('loginBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    let isLogin = true;

    const getText = (key) => {
        const lang = localStorage.getItem('polaris-lang') || 'fa';
        const t = {
            fa: {
                loginTitle: 'ورود به پولاریس',
                loginSub: 'به خانواده بزرگ ما خوش برگشتی!',
                registerTitle: 'ثبت‌نام در پولاریس',
                registerSub: 'برای ثبت‌نام با مشاوران ما تماس بگیرید',
                email: 'ایمیل یا شماره موبایل',
                pass: 'رمز عبور',
                loginBtn: 'ورود',
                noAccount: 'حساب نداری؟',
                hasAccount: 'قبلاً ثبت‌نام کردی؟',
                registerLink: 'همین حالا ثبت‌نام کن',
                loginLink: 'وارد شو',
                phone: '۰۲۱-۱۲۳۴۵۶۷۸',
                infoNote: 'مشاوران ما آماده راهنمایی شما هستند'
            },
            en: {
                loginTitle: 'Login to Polaris',
                loginSub: 'Welcome back to our big family!',
                registerTitle: 'Register at Polaris',
                registerSub: 'Contact our consultants to register',
                email: 'Email or Phone',
                pass: 'Password',
                loginBtn: 'Login',
                noAccount: "Don't have an account?",
                hasAccount: 'Already registered?',
                registerLink: 'Register now',
                loginLink: 'Login',
                phone: '+98 21 1234 5678',
                infoNote: 'Our consultants are ready to help you'
            }
        };
        return t[lang][key] || t.fa[key];
    };

    const openModal = (mode) => {
        isLogin = mode;
        
        if (mode) {
            modalTitle.textContent = getText('loginTitle');
            modalContent.innerHTML = `
                <p class="modal__subtitle">${getText('loginSub')}</p>
                <form class="modal__form" id="modalForm">
                    <label class="modal__label">${getText('email')}</label>
                    <input type="text" class="modal__input" placeholder="example@mail.com" required>
                    <label class="modal__label">${getText('pass')}</label>
                    <input type="password" class="modal__input" placeholder="********" required>
                    <button type="submit" class="modal__submit">${getText('loginBtn')}</button>
                </form>
                <p class="modal__toggle">${getText('noAccount')} <a id="toggleMode">${getText('registerLink')}</a></p>
            `;
        } else {
            modalTitle.textContent = getText('registerTitle');
            modalContent.innerHTML = `
                <p class="modal__subtitle">${getText('registerSub')}</p>
                <div class="modal__info-box">
                    <p>${getText('registerSub')}</p>
                    <a href="tel:${getText('phone').replace(/[^0-9+]/g, '')}" class="modal__phone">${getText('phone')}</a>
                    <p class="modal__info-note">${getText('infoNote')}</p>
                </div>
                <p class="modal__toggle">${getText('hasAccount')} <a id="toggleMode">${getText('loginLink')}</a></p>
            `;
        }
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Form listener for login
        if (mode) {
            const form = document.getElementById('modalForm');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const lang = localStorage.getItem('polaris-lang') || 'fa';
                    alert(lang === 'fa' ? '🎉 خوش آمدید!' : '🎉 Welcome!');
                    closeModal();
                });
            }
        }
        
        // Toggle mode listener
        const toggleMode = document.getElementById('toggleMode');
        if (toggleMode) {
            toggleMode.addEventListener('click', () => openModal(!isLogin));
        }
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (loginBtn) loginBtn.addEventListener('click', () => openModal(true));
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => { 
            if (e.target === modalOverlay) closeModal(); 
        });
    }
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape') closeModal(); 
    });

});