// /* =============================================
//    ✦ POLARIS ACADEMY - LUXURY GOLD EDITION ✦
//    Authentication & User Management - Version 3.0
//    ============================================= */

// const PolarisAuth = (function() {
//     'use strict';

//     // ==========================================
//     // CONFIGURATION
//     // ==========================================
//     const CONFIG = {
//         storageUserKey: 'polaris_user_data',
//         storageTokenKey: 'polaris_auth_token',
//         storageSettingsKey: 'polaris_user_settings',
//         sessionDuration: 7 * 24 * 60 * 60 * 1000, // 7 روز
//         minPasswordLength: 8,
//         maxLoginAttempts: 5,
//         lockoutDuration: 30 * 60 * 1000, // 30 دقیقه
//     };

//     // ==========================================
//     // STATE
//     // ==========================================
//     let currentUser = null;
//     let loginAttempts = 0;
//     let lockoutUntil = null;

//     // ==========================================
//     // STORAGE HELPERS
//     // ==========================================
//     const storage = {
//         set(key, value) {
//             try {
//                 localStorage.setItem(key, JSON.stringify(value));
//                 return true;
//             } catch (e) {
//                 console.warn('⚠️ LocalStorage is full or unavailable');
//                 return false;
//             }
//         },
//         get(key) {
//             try {
//                 const item = localStorage.getItem(key);
//                 return item ? JSON.parse(item) : null;
//             } catch (e) {
//                 return null;
//             }
//         },
//         remove(key) {
//             try {
//                 localStorage.removeItem(key);
//                 return true;
//             } catch (e) {
//                 return false;
//             }
//         },
//         clear() {
//             try {
//                 localStorage.removeItem(CONFIG.storageUserKey);
//                 localStorage.removeItem(CONFIG.storageTokenKey);
//                 localStorage.removeItem(CONFIG.storageSettingsKey);
//                 return true;
//             } catch (e) {
//                 return false;
//             }
//         }
//     };

//     // ==========================================
//     // TOKEN GENERATOR
//     // ==========================================
//     function generateToken(length = 64) {
//         const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
//         let token = '';
//         const array = new Uint8Array(length);
//         crypto.getRandomValues(array);
//         for (let i = 0; i < length; i++) {
//             token += chars[array[i] % chars.length];
//         }
//         return token;
//     }

//     function generateUserId() {
//         return 'polaris_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
//     }

//     // ==========================================
//     // USER CLASS
//     // ==========================================
//     class User {
//         constructor(data = {}) {
//             this.id = data.id || generateUserId();
//             this.fullName = data.fullName || '';
//             this.email = data.email || '';
//             this.phone = data.phone || '';
//             this.avatar = data.avatar || '';
//             this.role = data.role || 'student';
//             this.createdAt = data.createdAt || new Date().toISOString();
//             this.updatedAt = new Date().toISOString();
//             this.lastLogin = data.lastLogin || new Date().toISOString();
//             this.courses = data.courses || [];
//             this.wishlist = data.wishlist || [];
//             this.progress = data.progress || {};
//             this.settings = data.settings || {
//                 theme: 'dark',
//                 language: 'fa',
//                 notifications: true,
//                 newsletter: true,
//                 emailUpdates: true
//             };
//             this.isEmailVerified = data.isEmailVerified || false;
//             this.isPhoneVerified = data.isPhoneVerified || false;
//         }

//         get displayName() {
//             return this.fullName || this.email || 'کاربر پولاریس | Polaris User';
//         }

//         get firstName() {
//             if (this.fullName) {
//                 return this.fullName.split(' ')[0];
//             }
//             return this.email ? this.email.split('@')[0] : 'کاربر | User';
//         }

//         get initials() {
//             if (this.fullName) {
//                 const parts = this.fullName.trim().split(/\s+/);
//                 if (parts.length >= 2) {
//                     return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
//                 }
//                 return parts[0][0].toUpperCase();
//             }
//             if (this.email) {
//                 return this.email[0].toUpperCase();
//             }
//             return 'P';
//         }

//         get isVIP() {
//             return this.role === 'vip' || this.role === 'admin';
//         }

//         toJSON() {
//             return {
//                 id: this.id,
//                 fullName: this.fullName,
//                 email: this.email,
//                 phone: this.phone,
//                 avatar: this.avatar,
//                 role: this.role,
//                 createdAt: this.createdAt,
//                 updatedAt: this.updatedAt,
//                 lastLogin: this.lastLogin,
//                 courses: this.courses,
//                 wishlist: this.wishlist,
//                 progress: this.progress,
//                 settings: this.settings,
//                 isEmailVerified: this.isEmailVerified,
//                 isPhoneVerified: this.isPhoneVerified
//             };
//         }

//         static fromJSON(json) {
//             return new User(json);
//         }
//     }

//     // ==========================================
//     // AUTH FUNCTIONS
//     // ==========================================
//     function isLockedOut() {
//         if (lockoutUntil && Date.now() < lockoutUntil) {
//             const remainingMinutes = Math.ceil((lockoutUntil - Date.now()) / 60000);
//             return remainingMinutes;
//         }
//         if (lockoutUntil && Date.now() >= lockoutUntil) {
//             loginAttempts = 0;
//             lockoutUntil = null;
//         }
//         return false;
//     }

//     function login(email, password) {
//         return new Promise((resolve, reject) => {
//             // بررسی قفل بودن
//             const lockout = isLockedOut();
//             if (lockout) {
//                 reject(new Error(`حساب شما به دلیل تلاش‌های ناموفق قفل شده است. ${lockout} دقیقه دیگر صبر کنید. | Account locked. Please wait ${lockout} minutes.`));
//                 return;
//             }

//             // شبیه‌سازی تاخیر شبکه
//             setTimeout(() => {
//                 // اعتبارسنجی
//                 if (!email || !email.trim()) {
//                     reject(new Error('لطفاً ایمیل یا شماره موبایل را وارد کنید. | Please enter your email or phone.'));
//                     return;
//                 }

//                 if (!password || password.length < CONFIG.minPasswordLength) {
//                     loginAttempts++;
//                     if (loginAttempts >= CONFIG.maxLoginAttempts) {
//                         lockoutUntil = Date.now() + CONFIG.lockoutDuration;
//                         reject(new Error('حساب شما به دلیل تلاش‌های ناموفق قفل شد. ۳۰ دقیقه صبر کنید. | Account locked due to multiple failed attempts. Please wait 30 minutes.'));
//                     } else {
//                         const remaining = CONFIG.maxLoginAttempts - loginAttempts;
//                         reject(new Error(`رمز عبور اشتباه است. ${remaining} تلاش دیگر باقی مانده. | Incorrect password. ${remaining} attempts remaining.`));
//                     }
//                     return;
//                 }

//                 // بازنشانی تلاش‌های ناموفق
//                 loginAttempts = 0;
//                 lockoutUntil = null;

//                 // ایجاد کاربر
//                 const userData = {
//                     id: generateUserId(),
//                     fullName: email.includes('@') ? email.split('@')[0].replace(/[^a-zA-Z\u0600-\u06FF]/g, ' ') : 'کاربر پولاریس',
//                     email: email.includes('@') ? email : '',
//                     phone: email.includes('@') ? '' : email,
//                     role: 'student',
//                     lastLogin: new Date().toISOString()
//                 };

//                 const user = new User(userData);
//                 const token = generateToken();

//                 // ذخیره‌سازی
//                 storage.set(CONFIG.storageTokenKey, {
//                     token: token,
//                     expiresAt: Date.now() + CONFIG.sessionDuration
//                 });
//                 storage.set(CONFIG.storageUserKey, user.toJSON());

//                 // اعمال تنظیمات کاربر
//                 applyUserSettings(user.settings);

//                 // آپدیت UI
//                 currentUser = user;
//                 updateUIAfterAuth(user);

//                 // Event
//                 document.dispatchEvent(new CustomEvent('polaris:login', { detail: { user } }));

//                 resolve(user);
//             }, 1200);
//         });
//     }

//     function register(data) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // اعتبارسنجی
//                 if (!data.fullName || !data.fullName.trim()) {
//                     reject(new Error('لطفاً نام و نام خانوادگی را وارد کنید. | Please enter your full name.'));
//                     return;
//                 }

//                 if (!data.email || !data.email.includes('@')) {
//                     reject(new Error('لطفاً یک ایمیل معتبر وارد کنید. | Please enter a valid email.'));
//                     return;
//                 }

//                 if (!data.phone || data.phone.length < 10) {
//                     reject(new Error('لطفاً شماره موبایل معتبر وارد کنید. | Please enter a valid phone number.'));
//                     return;
//                 }

//                 if (!data.password || data.password.length < CONFIG.minPasswordLength) {
//                     reject(new Error(`رمز عبور باید حداقل ${CONFIG.minPasswordLength} کاراکتر باشد. | Password must be at least ${CONFIG.minPasswordLength} characters.`));
//                     return;
//                 }

//                 // ایجاد کاربر
//                 const userData = {
//                     id: generateUserId(),
//                     fullName: data.fullName.trim(),
//                     email: data.email.trim().toLowerCase(),
//                     phone: data.phone.trim(),
//                     role: 'student'
//                 };

//                 const user = new User(userData);
//                 const token = generateToken();

//                 // ذخیره‌سازی
//                 storage.set(CONFIG.storageTokenKey, {
//                     token: token,
//                     expiresAt: Date.now() + CONFIG.sessionDuration
//                 });
//                 storage.set(CONFIG.storageUserKey, user.toJSON());

//                 // اعمال تنظیمات
//                 applyUserSettings(user.settings);

//                 // آپدیت UI
//                 currentUser = user;
//                 updateUIAfterAuth(user);

//                 // Event
//                 document.dispatchEvent(new CustomEvent('polaris:register', { detail: { user } }));

//                 resolve(user);
//             }, 1500);
//         });
//     }

//     function logout() {
//         currentUser = null;
//         storage.clear();
//         updateUIAfterLogout();

//         // Event
//         document.dispatchEvent(new CustomEvent('polaris:logout'));
//     }

//     function checkAuth() {
//         const tokenData = storage.get(CONFIG.storageTokenKey);
//         const userData = storage.get(CONFIG.storageUserKey);

//         if (tokenData && userData && tokenData.token && userData.id) {
//             if (Date.now() < tokenData.expiresAt) {
//                 currentUser = User.fromJSON(userData);
//                 updateUIAfterAuth(currentUser);
//                 applyUserSettings(currentUser.settings);
//                 return true;
//             } else {
//                 // توکن منقضی شده
//                 storage.remove(CONFIG.storageTokenKey);
//                 currentUser = null;
//                 updateUIAfterLogout();
//                 return false;
//             }
//         }

//         return false;
//     }

//     // ==========================================
//     // USER SETTINGS
//     // ==========================================
//     function applyUserSettings(settings) {
//         if (!settings) return;

//         if (settings.theme) {
//             document.documentElement.setAttribute('data-theme', settings.theme);
//             localStorage.setItem('polaris-theme', settings.theme);
//         }

//         if (settings.language) {
//             document.documentElement.setAttribute('lang', settings.language);
//             document.documentElement.setAttribute('dir', settings.language === 'fa' ? 'rtl' : 'ltr');
//             document.body.style.direction = settings.language === 'fa' ? 'rtl' : 'ltr';
//             localStorage.setItem('polaris-lang', settings.language);
            
//             const langText = document.querySelector('.lang-text');
//             if (langText) {
//                 langText.textContent = settings.language === 'fa' ? 'FA' : 'EN';
//             }
//         }
//     }

//     function updateUserSettings(newSettings) {
//         if (!currentUser) return false;

//         Object.assign(currentUser.settings, newSettings);
//         currentUser.updatedAt = new Date().toISOString();

//         storage.set(CONFIG.storageUserKey, currentUser.toJSON());
//         applyUserSettings(newSettings);

//         return true;
//     }

//     // ==========================================
//     // COURSE MANAGEMENT
//     // ==========================================
//     function enrollCourse(courseId) {
//         if (!currentUser) return false;
//         if (!currentUser.courses.includes(courseId)) {
//             currentUser.courses.push(courseId);
//             currentUser.updatedAt = new Date().toISOString();
//             storage.set(CONFIG.storageUserKey, currentUser.toJSON());
//             return true;
//         }
//         return false;
//     }

//     function addToWishlist(courseId) {
//         if (!currentUser) return false;
//         if (!currentUser.wishlist.includes(courseId)) {
//             currentUser.wishlist.push(courseId);
//             currentUser.updatedAt = new Date().toISOString();
//             storage.set(CONFIG.storageUserKey, currentUser.toJSON());
//             return true;
//         }
//         return false;
//     }

//     function removeFromWishlist(courseId) {
//         if (!currentUser) return false;
//         const index = currentUser.wishlist.indexOf(courseId);
//         if (index > -1) {
//             currentUser.wishlist.splice(index, 1);
//             currentUser.updatedAt = new Date().toISOString();
//             storage.set(CONFIG.storageUserKey, currentUser.toJSON());
//             return true;
//         }
//         return false;
//     }

//     function updateProgress(courseId, progressData) {
//         if (!currentUser) return false;
//         currentUser.progress[courseId] = progressData;
//         currentUser.updatedAt = new Date().toISOString();
//         storage.set(CONFIG.storageUserKey, currentUser.toJSON());
//         return true;
//     }

//     function isEnrolled(courseId) {
//         return currentUser ? currentUser.courses.includes(courseId) : false;
//     }

//     function isInWishlist(courseId) {
//         return currentUser ? currentUser.wishlist.includes(courseId) : false;
//     }

//     // ==========================================
//     // UI UPDATES
//     // ==========================================
//     function updateUIAfterAuth(user) {
//         const headerActions = document.querySelector('.header__actions');
//         if (!headerActions) return;

//         // پیدا کردن و جایگزینی دکمه حساب کاربری
//         const existingBtn = headerActions.querySelector('#accountBtn');
//         if (existingBtn) {
//             existingBtn.outerHTML = `
//                 <div class="header__user-menu" id="userMenu">
//                     <button class="btn btn--luxury" id="userMenuBtn">
//                         <span class="btn__icon">
//                             <div class="user-avatar-mini">${user.initials}</div>
//                         </span>
//                         <span class="btn__text">
//                             ${user.firstName}
//                             <em>حساب من | My Account</em>
//                         </span>
//                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//                             <path d="M6 9l6 6 6-6"/>
//                         </svg>
//                     </button>
//                     <div class="user-dropdown" id="userDropdown">
//                         <div class="user-dropdown__header">
//                             <div class="user-avatar-lg">${user.initials}</div>
//                             <div>
//                                 <div class="user-dropdown__name">${user.displayName}</div>
//                                 <div class="user-dropdown__email">${user.email || user.phone || ''}</div>
//                             </div>
//                         </div>
//                         <div class="user-dropdown__divider"></div>
//                         <a href="#courses" class="user-dropdown__link">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15"/></svg>
//                             <span>دوره‌های من <em>My Courses</em></span>
//                         </a>
//                         <a href="#wishlist" class="user-dropdown__link">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
//                             <span>علاقه‌مندی‌ها <em>Wishlist</em></span>
//                         </a>
//                         <div class="user-dropdown__divider"></div>
//                         <button class="user-dropdown__logout" id="logoutBtn">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
//                             <span>خروج <em>Logout</em></span>
//                         </button>
//                     </div>
//                 </div>
//             `;

//             // راه‌اندازی dropdown
//             setupUserDropdown();

//             // دکمه خروج
//             const logoutBtn = document.getElementById('logoutBtn');
//             if (logoutBtn) {
//                 logoutBtn.addEventListener('click', function(e) {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     logout();
//                 });
//             }
//         }

//         // استایل‌های منوی کاربر
//         addUserMenuStyles();
//     }

//     function setupUserDropdown() {
//         setTimeout(() => {
//             const userMenuBtn = document.getElementById('userMenuBtn');
//             const userDropdown = document.getElementById('userDropdown');

//             if (!userMenuBtn || !userDropdown) return;

//             userMenuBtn.addEventListener('click', function(e) {
//                 e.stopPropagation();
//                 const isOpen = userDropdown.classList.contains('active');
//                 userDropdown.classList.toggle('active');
//                 userMenuBtn.classList.toggle('active');
                
//                 if (!isOpen) {
//                     // بستن با کلیک بیرون
//                     setTimeout(() => {
//                         document.addEventListener('click', function closeDropdown(e) {
//                             if (!userDropdown.contains(e.target) && e.target !== userMenuBtn) {
//                                 userDropdown.classList.remove('active');
//                                 userMenuBtn.classList.remove('active');
//                                 document.removeEventListener('click', closeDropdown);
//                             }
//                         });
//                     }, 10);
//                 }
//             });

//             userDropdown.addEventListener('click', function(e) {
//                 e.stopPropagation();
//             });
//         }, 100);
//     }

//     function addUserMenuStyles() {
//         if (document.getElementById('polaris-user-menu-styles')) return;

//         const style = document.createElement('style');
//         style.id = 'polaris-user-menu-styles';
//         style.textContent = `
//             .header__user-menu {
//                 position: relative;
//             }
            
//             .user-avatar-mini {
//                 width: 28px;
//                 height: 28px;
//                 border-radius: 50%;
//                 background: var(--gradient-gold);
//                 color: #000;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 font-weight: 800;
//                 font-size: 11px;
//             }
            
//             .header__user-menu .btn--luxury {
//                 gap: 8px;
//                 padding: 8px 14px;
//                 cursor: pointer;
//                 transition: all 0.3s ease;
//             }
            
//             .header__user-menu .btn--luxury.active {
//                 border-color: var(--gold-primary);
//                 box-shadow: var(--shadow-gold);
//             }
            
//             .header__user-menu .btn--luxury svg {
//                 transition: transform 0.3s ease;
//                 margin-right: 4px;
//             }
            
//             .header__user-menu .btn--luxury.active svg {
//                 transform: rotate(180deg);
//             }
            
//             .user-dropdown {
//                 position: absolute;
//                 top: calc(100% + 12px);
//                 left: 0;
//                 min-width: 280px;
//                 background: var(--bg-secondary);
//                 border: 1px solid var(--border-gold);
//                 border-radius: var(--radius-lg);
//                 box-shadow: var(--shadow-gold-lg), var(--shadow-card);
//                 padding: 12px;
//                 z-index: 1001;
//                 opacity: 0;
//                 visibility: hidden;
//                 transform: translateY(-10px);
//                 transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
//             }
            
//             .user-dropdown.active {
//                 opacity: 1;
//                 visibility: visible;
//                 transform: translateY(0);
//             }
            
//             .user-dropdown__header {
//                 display: flex;
//                 align-items: center;
//                 gap: 12px;
//                 padding: 12px;
//             }
            
//             .user-avatar-lg {
//                 width: 48px;
//                 height: 48px;
//                 border-radius: 50%;
//                 background: var(--gradient-gold);
//                 color: #000;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 font-weight: 800;
//                 font-size: 18px;
//                 flex-shrink: 0;
//             }
            
//             .user-dropdown__name {
//                 font-weight: 700;
//                 font-size: 14px;
//                 color: var(--text-primary);
//                 margin-bottom: 2px;
//             }
            
//             .user-dropdown__email {
//                 font-size: 11px;
//                 color: var(--text-tertiary);
//             }
            
//             .user-dropdown__divider {
//                 height: 1px;
//                 background: var(--border-light);
//                 margin: 8px 0;
//             }
            
//             .user-dropdown__link {
//                 display: flex;
//                 align-items: center;
//                 gap: 12px;
//                 padding: 12px 14px;
//                 color: var(--text-primary);
//                 font-size: 14px;
//                 border-radius: var(--radius-sm);
//                 transition: all 0.2s ease;
//                 text-decoration: none;
//             }
            
//             .user-dropdown__link:hover {
//                 background: var(--bg-glass-strong);
//                 color: var(--gold-primary);
//             }
            
//             .user-dropdown__link span {
//                 display: flex;
//                 flex-direction: column;
//             }
            
//             .user-dropdown__link em {
//                 font-size: 9px;
//                 margin-top: 1px;
//                 color: var(--text-tertiary);
//             }
            
//             .user-dropdown__logout {
//                 display: flex;
//                 align-items: center;
//                 gap: 12px;
//                 width: 100%;
//                 padding: 12px 14px;
//                 background: none;
//                 border: none;
//                 color: #ff4444;
//                 font-family: var(--font-primary);
//                 font-size: 14px;
//                 cursor: pointer;
//                 border-radius: var(--radius-sm);
//                 transition: all 0.2s ease;
//             }
            
//             .user-dropdown__logout:hover {
//                 background: rgba(255, 68, 68, 0.08);
//             }
            
//             .user-dropdown__logout span {
//                 display: flex;
//                 flex-direction: column;
//                 text-align: right;
//             }
            
//             .user-dropdown__logout em {
//                 font-size: 9px;
//                 margin-top: 1px;
//                 color: rgba(255, 68, 68, 0.6);
//             }
            
//             @media (max-width: 767px) {
//                 .user-dropdown {
//                     right: -50px;
//                     left: auto;
//                     min-width: 260px;
//                 }
                
//                 .header__user-menu .btn--luxury .btn__text {
//                     display: none;
//                 }
//             }
//         `;
//         document.head.appendChild(style);
//     }

//     function updateUIAfterLogout() {
//         const userMenu = document.getElementById('userMenu');
//         if (userMenu) {
//             userMenu.outerHTML = `
//                 <button class="btn btn--luxury" id="accountBtn">
//                     <span class="btn__icon">
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
//                     </span>
//                     <span class="btn__text">حساب کاربری <em>Account</em></span>
//                 </button>
//             `;

//             // بازگردانی event listener
//             const newAccountBtn = document.getElementById('accountBtn');
//             const accountModal = document.getElementById('accountModal');
//             if (newAccountBtn && accountModal) {
//                 newAccountBtn.addEventListener('click', function() {
//                     if (typeof openModal === 'function') {
//                         openModal(accountModal);
//                     } else {
//                         accountModal.classList.add('active');
//                         document.body.style.overflow = 'hidden';
//                     }
//                 });
//             }
//         }

//         // پاکسازی استایل‌های منو
//         const styleEl = document.getElementById('polaris-user-menu-styles');
//         if (styleEl) styleEl.remove();
//     }

//     // ==========================================
//     // INITIALIZATION
//     // ==========================================
//     function init() {
//         const isLoggedIn = checkAuth();

//         if (!isLoggedIn) {
//             // اطمینان از وجود دکمه حساب کاربری
//             const accountBtn = document.getElementById('accountBtn');
//             const accountModal = document.getElementById('accountModal');
            
//             if (accountBtn && accountModal) {
//                 accountBtn.addEventListener('click', function() {
//                     if (typeof openModal === 'function') {
//                         openModal(accountModal);
//                     } else {
//                         accountModal.classList.add('active');
//                         document.body.style.overflow = 'hidden';
//                     }
//                 });
//             }
//         }

//         console.log('%c🔐 %cPolarisAuth %cآماده | Ready',
//             'color: #FFD700;',
//             'color: #FFD700; font-weight: bold;',
//             'color: #fff;'
//         );
//     }

//     // ==========================================
//     // PUBLIC API
//     // ==========================================
//     return {
//         init,
//         login,
//         register,
//         logout,
//         checkAuth,
//         getCurrentUser: () => currentUser,
//         isLoggedIn: () => !!currentUser,
//         isVIP: () => currentUser ? currentUser.isVIP : false,
//         updateSettings: updateUserSettings,
//         enrollCourse,
//         addToWishlist,
//         removeFromWishlist,
//         updateProgress,
//         isEnrolled,
//         isInWishlist,
//         getProgress: (courseId) => currentUser ? (currentUser.progress[courseId] || null) : null
//     };

// })();

// // ==========================================
// // AUTO INITIALIZE
// // ==========================================
// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function() {
//         PolarisAuth.init();
//     }, 500);
// });

// // ==========================================
// // GLOBAL ACCESS
// // ==========================================
// window.PolarisAuth = PolarisAuth;