/* ============================================
   ENROLL.JS - اسکریپت کامل صفحه ثبت‌نامه
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ---------- مرحله‌بندی فرم ----------
    let currentStep = 1;
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const steps = document.querySelectorAll('.step');

    function updateSteps() {
        // نمایش مرحله مناسب
        step1.classList.remove('active-step');
        step2.classList.remove('active-step');
        step3.classList.remove('active-step');
        
        if (currentStep === 1) step1.classList.add('active-step');
        if (currentStep === 2) step2.classList.add('active-step');
        if (currentStep === 3) step3.classList.add('active-step');

        // بروزرسانی وضعیت مراحل
        steps.forEach((step, idx) => {
            step.classList.remove('active', 'completed');
            if (idx + 1 === currentStep) step.classList.add('active');
            if (idx + 1 < currentStep) step.classList.add('completed');
        });

        // نمایش/مخفی کردن دکمه‌ها
        prevBtn.style.display = currentStep === 1 ? 'none' : 'flex';
        nextBtn.style.display = currentStep === 3 ? 'none' : 'flex';
        submitBtn.style.display = currentStep === 3 ? 'flex' : 'none';
    }

    // اعتبارسنجی مرحله 1
    function validateStep1() {
        const fields = ['firstName', 'lastName', 'phone', 'birthdate', 'nationalCode', 'address'];
        for (let f of fields) {
            const val = document.getElementById(f)?.value.trim();
            if (!val) {
                alert('لطفاً تمام فیلدهای مرحله اول را پر کنید.');
                return false;
            }
        }
        return true;
    }

    // اعتبارسنجی مرحله 2
    function validateStep2() {
        const skill = document.getElementById('skillLevel')?.value;
        const classType = document.getElementById('classType')?.value;
        if (!skill || !classType) {
            alert('لطفاً سطح اسکیت و کلاس مورد نظر را انتخاب کنید.');
            return false;
        }
        return true;
    }

    // دکمه بعدی
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentStep === 1 && !validateStep1()) return;
            if (currentStep === 2 && !validateStep2()) return;
            if (currentStep < 3) {
                currentStep++;
                updateSteps();
            }
        });
    }

    // دکمه قبلی
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateSteps();
            }
        });
    }

    // ---------- کپچا ----------
    function generateCaptcha() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
        let captcha = '';
        for (let i = 0; i < 5; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        const captchaCode = document.getElementById('captchaCode');
        if (captchaCode) captchaCode.textContent = captcha;
        return captcha;
    }

    let currentCaptcha = generateCaptcha();
    
    const refreshCaptcha = document.getElementById('refreshCaptcha');
    if (refreshCaptcha) {
        refreshCaptcha.addEventListener('click', () => {
            currentCaptcha = generateCaptcha();
            const captchaInput = document.getElementById('captchaInput');
            if (captchaInput) captchaInput.value = '';
            const captchaError = document.getElementById('captchaError');
            if (captchaError) captchaError.textContent = '';
        });
    }

    // ---------- انتخاب مهارت‌ها ----------
    const skillChecks = document.querySelectorAll('.skill-check');
    skillChecks.forEach(el => {
        el.addEventListener('click', function(e) {
            const cb = this.querySelector('input');
            if (cb) {
                cb.checked = !cb.checked;
                this.classList.toggle('selected', cb.checked);
            }
        });
    });

    // ---------- انتخاب زمان کلاس ----------
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(el => {
        el.addEventListener('click', function() {
            timeSlots.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // ---------- ثبت نهایی فرم ----------
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // بررسی کپچا
            const userCaptcha = document.getElementById('captchaInput')?.value.trim().toUpperCase();
            const captchaError = document.getElementById('captchaError');
            
            if (userCaptcha !== currentCaptcha) {
                if (captchaError) captchaError.textContent = '❌ کد امنیتی اشتباه است.';
                currentCaptcha = generateCaptcha();
                const captchaInput = document.getElementById('captchaInput');
                if (captchaInput) captchaInput.value = '';
                return;
            }
            if (captchaError) captchaError.textContent = '';
            
            // بررسی تیک شرایط
            const terms = document.getElementById('terms')?.checked;
            if (!terms) {
                alert('لطفاً شرایط و قوانین آکادمی را بپذیرید.');
                return;
            }
            
            // ذخیره اطلاعات در localStorage
            const formData = {
                name: document.getElementById('firstName')?.value || '',
                lastName: document.getElementById('lastName')?.value || '',
                phone: document.getElementById('phone')?.value || '',
                classType: document.getElementById('classType')?.value || '',
                date: new Date().toLocaleString('fa-IR')
            };
            localStorage.setItem('polaris_registration', JSON.stringify(formData));
            
            // نمایش مودال موفقیت
            const successDetails = document.getElementById('successDetails');
            if (successDetails) {
                successDetails.innerHTML = `
                    <strong>${formData.name} ${formData.lastName}</strong><br>
                    📞 ${formData.phone}<br>
                    🛼 کلاس: ${formData.classType}
                `;
            }
            
            const successModal = document.getElementById('successModal');
            if (successModal) successModal.classList.add('active');
        });
    }

    // ---------- بستن مودال ----------
    window.closeSuccessModal = function() {
        const successModal = document.getElementById('successModal');
        if (successModal) successModal.classList.remove('active');
        window.location.href = 'index.html';
    };

    // کلیک خارج از مودال
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.addEventListener('click', function(e) {
            if (e.target === this) window.closeSuccessModal();
        });
    }

    // ---------- تم دارک/لایت ----------
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('polaris-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            localStorage.setItem('polaris-theme', next);
        });
    }

    // ---------- منوی موبایل ----------
    const mobileToggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('mainMenu');
    if (mobileToggle && menu) {
        mobileToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // ---------- افکت اسکرول هدر ----------
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 80);
    });

    // ---------- سئورچ اورلی ----------
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => searchOverlay.classList.add('active'));
    }
    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay) searchOverlay.classList.remove('active');
    });

    // ---------- انیمیشن ریویل ----------
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // اجرای اولیه مرحله‌بندی
    updateSteps();
});