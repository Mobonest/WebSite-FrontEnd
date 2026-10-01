// lang-switch.js
let currentLang = 'fa';

const translations = {
  fa: {
    nav_home: 'خانه',
    nav_lang: 'زبان‌ها',
    nav_teachers: 'اساتید',
    nav_courses: 'دوره‌ها',
    nav_faq: 'پرسش و پاسخ',
    nav_consult: 'مشاوره',
    nav_testimonials: 'نظرات',
    close_menu: 'بستن منو',
    notifications: 'اعلان‌ها',
    clear_all: 'پاک کردن همه',
    notif1: 'تخفیف ۴۰٪ ثبت‌نام تا پایان هفته',
    notif1_time: '۲ دقیقه پیش',
    notif2: 'کلاس جدید آلمانی شروع شد',
    notif2_time: '۱ ساعت پیش',
    notif3: 'مشاوره رایگان فردا ساعت ۱۸',
    notif3_time: '۳ ساعت پیش',
    hero_badge: '۱۱ زبان زنده دنیا',
    hero_title: 'آینده از آنِ <span>چندزبانه‌هاست</span>',
    hero_desc: 'در پولاریس آکادمی با جدیدترین متدهای آموزشی، زبان مورد علاقه‌ات را از پایه تا پیشرفته بیاموز. بیش از ۵۰۰۰ زبان‌آموز موفق در کنار ما.',
    hero_btn1: 'شروع یادگیری',
    hero_btn2: 'مشاوره رایگان',
    hero_stat1_label: 'زبان‌آموز',
    hero_stat2_label: 'مدرس بین‌المللی',
    hero_stat3_label: 'زبان زنده',
    hero_stat4_label: 'سال تجربه',
    consult_title: 'نیاز به <span>مشاوره</span> دارید؟',
    consult_desc: 'تیم متخصص ما آماده پاسخگویی است. فرم زیر را پر کنید تا در کمتر از ۲۴ ساعت با شما تماس بگیریم.',
    consult_name_ph: 'نام و نام خانوادگی',
    consult_phone_ph: 'شماره تماس',
    consult_lang_def: 'زبان مورد نظر خود را انتخاب کنید',
    consult_btn: 'درخواست مشاوره',
    login_title: 'ورود / ثبت‌نام',
    login_desc: 'برای ادامه شماره موبایل خود را وارد کنید',
    login_phone_ph: 'مثال: ۰۹۱۲۳۴۵۶۷۸۹',
    login_btn: 'ارسال کد تأیید',
    footer_brand_desc: 'آکادمی پیشرو زبان‌های خارجی با متد مدرن و اساتید بین‌المللی',
    footer_quick_title: 'دسترسی سریع',
    footer_quick_home: 'خانه',
    footer_quick_lang: 'زبان‌ها',
    footer_quick_teachers: 'اساتید',
    footer_quick_courses: 'دوره‌ها',
    footer_quick_faq: 'پرسش و پاسخ',
    footer_popular_title: 'زبان‌های محبوب',
    footer_contact_title: 'تماس با ما',
    footer_copyright: '© ۱۴۰۴ پولاریس آکادمی — تمامی حقوق محفوظ است.',
    footer_address: '📍 تهران، خیابان ولیعصر، بالاتر از پارک وی، پلاک ۱۲۳',
    newsletter_title: 'عضویت در خبرنامه',
    lang_english: 'انگلیسی',
    lang_german: 'آلمانی',
    lang_french: 'فرانسوی',
    lang_spanish: 'اسپانیایی',
    lang_chinese: 'چینی',
    lang_arabic: 'عربی',
    lang_russian: 'روسی',
    lang_turkish: 'ترکی استانبولی',
    lang_korean: 'کره‌ای',
    lang_japanese: 'ژاپنی',
    lang_italian: 'ایتالیایی',
    stat_students: 'دانشجوی ثبت‌نام شده',
    stat_teachers: 'مدرس متخصص',
    stat_countries: 'کشور همکاری',
    stat_awards: 'جوایز بین‌المللی',
    sections_lang_title: 'زبان زنده',
    sections_teachers_title: 'اساتید',
    sections_teachers_sub: 'بین‌المللی',
    sections_teachers_suffix: 'ما',
    sections_courses_title: 'دوره‌های',
    sections_courses_sub: 'ویژه',
    sections_courses_suffix: 'ما',
    sections_faq_title: 'سوالات',
    sections_faq_sub: 'متداول',
    sections_testimonials_title: 'آنچه',
    sections_testimonials_sub: 'دانشجویان',
    sections_testimonials_suffix: 'ما می‌گویند'
  },
  en: {
    nav_home: 'Home',
    nav_lang: 'Languages',
    nav_teachers: 'Teachers',
    nav_courses: 'Courses',
    nav_faq: 'FAQ',
    nav_consult: 'Consult',
    nav_testimonials: 'Testimonials',
    close_menu: 'Close Menu',
    notifications: 'Notifications',
    clear_all: 'Clear All',
    notif1: '40% registration discount until weekend',
    notif1_time: '2 minutes ago',
    notif2: 'New German class started',
    notif2_time: '1 hour ago',
    notif3: 'Free consultation tomorrow at 6 PM',
    notif3_time: '3 hours ago',
    hero_badge: '11 Living World Languages',
    hero_title: 'Future Belongs to <span>Multilinguals</span>',
    hero_desc: 'At Polaris Academy, learn your favorite language from basic to advanced with the latest teaching methods. Over 5,000 successful language learners with us.',
    hero_btn1: 'Start Learning',
    hero_btn2: 'Free Consultation',
    hero_stat1_label: 'Students',
    hero_stat2_label: 'International Teachers',
    hero_stat3_label: 'Living Languages',
    hero_stat4_label: 'Years Experience',
    consult_title: 'Need <span>Consultation</span>?',
    consult_desc: 'Our expert team is ready to assist. Fill out the form below and we will contact you within 24 hours.',
    consult_name_ph: 'Full Name',
    consult_phone_ph: 'Phone Number',
    consult_lang_def: 'Select your desired language',
    consult_btn: 'Request Consultation',
    login_title: 'Login / Register',
    login_desc: 'Enter your phone number to continue',
    login_phone_ph: 'e.g. 09123456789',
    login_btn: 'Send Verification Code',
    footer_brand_desc: 'Leading language academy with modern methodology and international instructors',
    footer_quick_title: 'Quick Access',
    footer_quick_home: 'Home',
    footer_quick_lang: 'Languages',
    footer_quick_teachers: 'Teachers',
    footer_quick_courses: 'Courses',
    footer_quick_faq: 'FAQ',
    footer_popular_title: 'Popular Languages',
    footer_contact_title: 'Contact Us',
    footer_copyright: '© 2025 Polaris Academy — All rights reserved.',
    footer_address: '📍 Tehran, Valiasr St, above Park Way, No. 123',
    newsletter_title: 'Newsletter',
    lang_english: 'English',
    lang_german: 'German',
    lang_french: 'French',
    lang_spanish: 'Spanish',
    lang_chinese: 'Chinese',
    lang_arabic: 'Arabic',
    lang_russian: 'Russian',
    lang_turkish: 'Turkish',
    lang_korean: 'Korean',
    lang_japanese: 'Japanese',
    lang_italian: 'Italian',
    stat_students: 'Enrolled Students',
    stat_teachers: 'Expert Teachers',
    stat_countries: 'Partner Countries',
    stat_awards: 'International Awards',
    sections_lang_title: 'Living Languages',
    sections_teachers_title: 'Our',
    sections_teachers_sub: 'International',
    sections_teachers_suffix: 'Faculty',
    sections_courses_title: 'Our',
    sections_courses_sub: 'Special',
    sections_courses_suffix: 'Courses',
    sections_faq_title: 'Frequent',
    sections_faq_sub: 'Questions',
    sections_testimonials_title: 'What Our',
    sections_testimonials_sub: 'Students',
    sections_testimonials_suffix: 'Say'
  }
};

function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // تنظیم جهت - RTL برای فارسی، LTR برای انگلیسی
  if (lang === 'fa') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'fa');
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';
  }
  
  // آپدیت title
  if (lang === 'fa') {
    document.title = 'پولاریس آکادمی | پیشرو در آموزش زبان‌های خارجی';
  } else {
    document.title = 'Polaris Academy | Leading Language Academy';
  }
  
  // 1. آپدیت همه المان‌های با data-key
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else if (el.tagName === 'SELECT') {
        const defaultOption = el.querySelector('option[value=""]');
        if (defaultOption) defaultOption.textContent = t[key];
      } else if (key === 'hero_title' || key === 'consult_title') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  
  // 2. آپدیت hero badge
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge && t.hero_badge) {
    heroBadge.textContent = t.hero_badge;
  }
  
  // 3. آپدیت hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && t.hero_title) {
    heroTitle.innerHTML = t.hero_title;
  }
  
  // 4. آپدیت hero description
  const heroDesc = document.querySelector('.hero-desc');
  if (heroDesc && t.hero_desc) {
    heroDesc.textContent = t.hero_desc;
  }
  
  // 5. آپدیت hero buttons
  const heroBtns = document.querySelectorAll('.hero-buttons a');
  if (heroBtns.length >= 2) {
    if (t.hero_btn1) heroBtns[0].textContent = t.hero_btn1;
    if (t.hero_btn2) heroBtns[1].textContent = t.hero_btn2;
  }
  
  // 6. آپدیت hero stats labels
  const statLabels = document.querySelectorAll('.hero-stats div span:last-child');
  const statKeys = ['hero_stat1_label', 'hero_stat2_label', 'hero_stat3_label', 'hero_stat4_label'];
  statLabels.forEach((label, i) => {
    if (t[statKeys[i]]) label.textContent = t[statKeys[i]];
  });
  
  // 7. آپدیت section headers
  const langSectionH2 = document.querySelector('#languages .section-header h2');
  if (langSectionH2 && t.sections_lang_title) {
    langSectionH2.innerHTML = `۱۱ <span>${t.sections_lang_title}</span> جهان`;
  }
  
  const teachersSectionH2 = document.querySelector('#teachers .section-header h2');
  if (teachersSectionH2 && t.sections_teachers_title) {
    teachersSectionH2.innerHTML = `${t.sections_teachers_title} <span>${t.sections_teachers_sub}</span> ${t.sections_teachers_suffix}`;
  }
  
  const coursesSectionH2 = document.querySelector('#courses .section-header h2');
  if (coursesSectionH2 && t.sections_courses_title) {
    coursesSectionH2.innerHTML = `${t.sections_courses_title} <span>${t.sections_courses_sub}</span> ${t.sections_courses_suffix}`;
  }
  
  const faqSectionH2 = document.querySelector('#faq .section-header h2');
  if (faqSectionH2 && t.sections_faq_title) {
    faqSectionH2.innerHTML = `${t.sections_faq_title} <span>${t.sections_faq_sub}</span>`;
  }
  
  const testimonialsSectionH2 = document.querySelector('#testimonials .section-header h2');
  if (testimonialsSectionH2 && t.sections_testimonials_title) {
    testimonialsSectionH2.innerHTML = `${t.sections_testimonials_title} <span>${t.sections_testimonials_sub}</span> ${t.sections_testimonials_suffix}`;
  }
  
  // 8. آپدیت section descriptions
  const langSectionP = document.querySelector('#languages .section-header p');
  if (langSectionP) {
    langSectionP.textContent = lang === 'fa' ? 'از مبتدی تا پیشرفته با استانداردهای بین‌المللی CEFR' : 'From beginner to advanced with international CEFR standards';
  }
  
  const teachersSectionP = document.querySelector('#teachers .section-header p');
  if (teachersSectionP) {
    teachersSectionP.textContent = lang === 'fa' ? 'با تجربه‌ترین مدرسین Native و فارسی‌زبان' : 'Most experienced Native and Persian-speaking instructors';
  }
  
  const coursesSectionP = document.querySelector('#courses .section-header p');
  if (coursesSectionP) {
    coursesSectionP.textContent = lang === 'fa' ? 'طراحی شده برای تمامی سطوح و اهداف مهاجرتی، تحصیلی و شغلی' : 'Designed for all levels and immigration, academic, and career goals';
  }
  
  const testimonialsSectionP = document.querySelector('#testimonials .section-header p');
  if (testimonialsSectionP) {
    testimonialsSectionP.textContent = lang === 'fa' ? 'تجربه موفقیت را با ما به اشتراک بگذارید' : 'Share your success experience with us';
  }
  
  const faqSectionP = document.querySelector('#faq .section-header p');
  if (faqSectionP) {
    faqSectionP.textContent = lang === 'fa' ? 'پاسخ به پرتکرارترین سوالات زبان‌آموزان' : 'Answers to the most frequently asked questions';
  }
  
  // 9. آپدیت section tags
  const langSectionTag = document.querySelector('#languages .section-tag');
  if (langSectionTag) {
    langSectionTag.textContent = lang === 'fa' ? 'زبان‌های تخصصی' : 'Specialized Languages';
  }
  
  const teachersSectionTag = document.querySelector('#teachers .section-tag');
  if (teachersSectionTag) {
    teachersSectionTag.textContent = lang === 'fa' ? 'اساتید برجسته' : 'Distinguished Teachers';
  }
  
  const coursesSectionTag = document.querySelector('#courses .section-tag');
  if (coursesSectionTag) {
    coursesSectionTag.textContent = lang === 'fa' ? 'دوره‌های آموزشی' : 'Training Courses';
  }
  
  const testimonialsSectionTag = document.querySelector('#testimonials .section-tag');
  if (testimonialsSectionTag) {
    testimonialsSectionTag.textContent = lang === 'fa' ? 'نظرات زبان‌آموزان' : 'Student Testimonials';
  }
  
  const faqSectionTag = document.querySelector('#faq .section-tag');
  if (faqSectionTag) {
    faqSectionTag.textContent = lang === 'fa' ? 'پرسش و پاسخ' : 'FAQ';
  }
  
  // 10. آپدیت consult section
  const consultTitle = document.querySelector('#consult .consult-text h2');
  if (consultTitle && t.consult_title) {
    consultTitle.innerHTML = t.consult_title;
  }
  
  const consultDesc = document.querySelector('#consult .consult-text > p');
  if (consultDesc && t.consult_desc) {
    consultDesc.textContent = t.consult_desc;
  }
  
  const consultName = document.getElementById('consultName');
  if (consultName && t.consult_name_ph) {
    consultName.placeholder = t.consult_name_ph;
  }
  
  const consultPhone = document.getElementById('consultPhone');
  if (consultPhone && t.consult_phone_ph) {
    consultPhone.placeholder = t.consult_phone_ph;
  }
  
  const consultLang = document.getElementById('consultLang');
  if (consultLang && t.consult_lang_def) {
    const defaultOption = consultLang.querySelector('option[value=""]');
    if (defaultOption) defaultOption.textContent = t.consult_lang_def;
  }
  
  const consultBtn = document.querySelector('#consultForm button[type="submit"]');
  if (consultBtn && t.consult_btn) {
    consultBtn.textContent = t.consult_btn;
  }
  
  // 11. آپدیت modal
  const modalTitle = document.querySelector('#loginModal .modal-content h3');
  if (modalTitle && t.login_title) {
    modalTitle.textContent = t.login_title;
  }
  
  const modalDesc = document.querySelector('#loginModal .modal-content > p');
  if (modalDesc && t.login_desc) {
    modalDesc.textContent = t.login_desc;
  }
  
  const loginPhone = document.getElementById('loginPhone');
  if (loginPhone && t.login_phone_ph) {
    loginPhone.placeholder = t.login_phone_ph;
  }
  
  const loginBtn = document.querySelector('#loginForm button[type="submit"]');
  if (loginBtn && t.login_btn) {
    loginBtn.textContent = t.login_btn;
  }
  
  // 12. آپدیت footer
  const footerBrandDesc = document.querySelector('.footer-brand p');
  if (footerBrandDesc && t.footer_brand_desc) {
    footerBrandDesc.textContent = t.footer_brand_desc;
  }
  
  const copyright = document.querySelector('.footer-bottom p');
  if (copyright && t.footer_copyright) {
    copyright.textContent = t.footer_copyright;
  }
  
  // 13. رندر محتوای داینامیک
  if (typeof window.renderAllContent === 'function') {
    window.renderAllContent(lang);
  }
  
  // 14. ذخیره زبان در localStorage
  localStorage.setItem('linguaLang', lang);
  
  // 15. آپدیت دکمه سایدبار
  if (typeof window.updateSidebarToggleText === 'function') {
    window.updateSidebarToggleText();
  }
}

// اجرا وقتی DOM کامل لود شد
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language switcher buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      if (!lang) return;
      
      // فعال کردن دکمه کلیک شده
      langBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // تغییر زبان
      changeLanguage(lang);
    });
  });
  
  // Load saved language
  const savedLang = localStorage.getItem('linguaLang') || 'fa';
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  changeLanguage(savedLang);
});