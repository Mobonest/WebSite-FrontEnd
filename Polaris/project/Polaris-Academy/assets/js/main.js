// Languages Data
const languagesData = {
  fa: [
    { name: "انگلیسی", enName: "English", level: "A1 تا C2", desc: "پرمخاطب‌ترین زبان دنیا" },
    { name: "آلمانی", enName: "Deutsch", level: "A1 تا C1", desc: "زبان علم و صنعت" },
    { name: "فرانسوی", enName: "Français", level: "A1 تا C2", desc: "زبان هنر و دیپلماسی" },
    { name: "اسپانیایی", enName: "Español", level: "A1 تا C2", desc: "دومین زبان پرگویش جهان" },
    { name: "چینی", enName: "中文", level: "HSK 1-6", desc: "زبان آینده اقتصاد" },
    { name: "عربی", enName: "العربية", level: "A1 تا C1", desc: "زبان قرآن و خاورمیانه" },
    { name: "روسی", enName: "Русский", level: "A1 تا B2", desc: "زبان ادبیات کلاسیک" },
    { name: "ترکی", enName: "Türkçe", level: "A1 تا C1", desc: "زبان همسایه پرکاربرد" },
    { name: "کره‌ای", enName: "한국어", level: "TOPIK 1-6", desc: "زبان K-pop و تکنولوژی" },
    { name: "ژاپنی", enName: "日本語", level: "JLPT N5-N1", desc: "ترکیب سنت و مدرنیته" },
    { name: "ایتالیایی", enName: "Italiano", level: "A1 تا C2", desc: "زبان عشق و هنر" }
  ],
  en: [
    { name: "English", enName: "English", level: "A1 to C2", desc: "World's most spoken language" },
    { name: "German", enName: "Deutsch", level: "A1 to C1", desc: "Language of science & industry" },
    { name: "French", enName: "Français", level: "A1 to C2", desc: "Language of art & diplomacy" },
    { name: "Spanish", enName: "Español", level: "A1 to C2", desc: "Second most spoken globally" },
    { name: "Chinese", enName: "中文", level: "HSK 1-6", desc: "Language of future economy" },
    { name: "Arabic", enName: "العربية", level: "A1 to C1", desc: "Language of Quran & Middle East" },
    { name: "Russian", enName: "Русский", level: "A1 to B2", desc: "Language of classic literature" },
    { name: "Turkish", enName: "Türkçe", level: "A1 to C1", desc: "Useful neighbor language" },
    { name: "Korean", enName: "한국어", level: "TOPIK 1-6", desc: "Language of K-pop & technology" },
    { name: "Japanese", enName: "日本語", level: "JLPT N5-N1", desc: "Tradition meets modernity" },
    { name: "Italian", enName: "Italiano", level: "A1 to C2", desc: "Language of love & art" }
  ]
};

function renderLanguages(lang) {
  const container = document.getElementById('languagesGrid');
  if (!container) return;
  const data = languagesData[lang] || languagesData['fa'];
  
  container.innerHTML = data.map(l => `
    <div class="lang-card fade-in-up">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
        <circle cx="12" cy="12" r="9"/>
        <path d="M2 12H22M12 2C9.5 6 7.5 10 7.5 12C7.5 14 9.5 18 12 22C14.5 18 16.5 14 16.5 12C16.5 10 14.5 6 12 2Z"/>
      </svg>
      <h3>${l.name}</h3>
      <p class="lang-name-en">${l.enName}</p>
      <span class="lang-info">${l.level}</span>
      <p class="lang-desc">${l.desc}</p>
    </div>
  `).join('');
}

// Teachers Data with REAL images and proper fallback
const teachersData = {
  fa: [
    { img: "assets/image/teacher1.jpg", name: "زهرا باقری", role: "مدرس ارشد انگلیسی", bio: "دکترای آموزش زبان از کمبریج، ۱۵ سال سابقه", exp: "۱۵ سال", students: "۲۰۰۰+" },
    { img: "assets/image/teacher5.jpg", name: "محمد کمالی", role: "مدرس آلمانی", bio: "مدرس رسمی گوته، ۲۰ سال تجربه", exp: "۲۰ سال", students: "۳۵۰۰+" },
    { img: "assets/image/teacher3.jpg", name: "علیرضا اصغریان", role: "مدرس فرانسوی", bio: "فارغ‌التحصیل سوربن، ۱۲ سال سابقه", exp: "۱۲ سال", students: "۱۵۰۰+" },
    { img: "assets/image/teacher4.jpg", name: "نادر جمالی", role: "مدرس اسپانیایی", bio: "متخصص DELE، ۱۰ سال تجربه", exp: "۱۰ سال", students: "۱۲۰۰+" },
    { img: "assets/image/teacher2.jpg", name: "هانیه امینی پور", role: "مدرس چینی", bio: "مدرس رسمی HSK، مسلط به فارسی", exp: "۱۰ سال", students: "۸۰۰+" },
    { img: "assets/image/teacher6.jpg", name: "حامد تهرانی", role: "مدرس عربی", bio: "دکترای ادبیات عرب، ۱۸ سال سابقه", exp: "۱۸ سال", students: "۲۵۰۰+" }
  ],
  en: [
    { img: "assets/image/teacher1.jpg", name: "Zahra Bagheri", role: "Senior English Instructor", bio: "PhD in Language Education from Cambridge, 15 years experience", exp: "15 yrs", students: "2000+" },
    { img: "assets/image/teacher5.jpg", name: "Mohammad Kamali", role: "German Instructor", bio: "Official Goethe Institute instructor, 20 years experience", exp: "20 yrs", students: "3500+" },
    { img: "assets/image/teacher3.jpg", name: "Alireza Asgharian", role: "French Instructor", bio: "Sorbonne graduate, 12 years experience", exp: "12 yrs", students: "1500+" },
    { img: "assets/image/teacher4.jpg", name: "Nader Jamali", role: "Spanish Instructor", bio: "DELE specialist, 10 years experience", exp: "10 yrs", students: "1200+" },
    { img: "assets/image/teacher2.jpg", name: "Hanieh Aminipour", role: "Chinese Instructor", bio: "Official HSK instructor, fluent in Persian", exp: "10 yrs", students: "800+" },
    { img: "assets/image/teacher6.jpg", name: "Hamed Tehrani", role: "Arabic Instructor", bio: "PhD in Arabic Literature, 18 years experience", exp: "18 yrs", students: "2500+" }
  ]
};

function renderTeachers(lang) {
  const container = document.getElementById('teachersGrid');
  if (!container) return;
  const data = teachersData[lang] || teachersData['fa'];
  const expLabel = lang === 'en' ? 'Exp.' : 'تجربه';
  const studentsLabel = lang === 'en' ? 'Students' : 'زبان‌آموز';
  
  container.innerHTML = data.map((teacher, index) => {
    const imgId = `teacher-img-${index}-${Math.random().toString(36).substr(2, 5)}`;
    return `
    <div class="teacher-card fade-in-up">
      <div class="teacher-avatar-wrapper">
        <div class="teacher-avatar">
          <img id="${imgId}" src="${teacher.img}" alt="${teacher.name}" 
               onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, var(--primary), var(--primary-dark));color:white;font-size:1.8rem;font-weight:bold;\\'>${teacher.name.charAt(0)}</div>'">
        </div>
        <span class="teacher-verified">✓</span>
      </div>
      <h3>${teacher.name}</h3>
      <span class="teacher-role">${teacher.role}</span>
      <p class="teacher-bio">${teacher.bio}</p>
      <div class="teacher-stats">
        <span><strong>${teacher.exp}</strong> ${expLabel}</span>
        <span><strong>${teacher.students}</strong> ${studentsLabel}</span>
      </div>
    </div>
  `}).join('');
}

// Courses Data
const coursesData = {
  fa: [
    { badge: "پرفروش", title: "انگلیسی فشرده", desc: "مبتدی تا پیشرفته", features: ["۳ جلسه در هفته", "آمادگی آیلتس", "پشتیبانی ۲۴/۷", "مکالمه آزاد"], duration: "۶ ماه" },
    { badge: "جدید", title: "آلمانی مقدماتی", desc: "مناسب مهاجرت", features: ["۲ جلسه در هفته", "منابع گوته", "کارگاه تلفظ", "آزمون آزمایشی"], duration: "۸ ماه" },
    { badge: "محبوب", title: "فرانسوی تجاری", desc: "کسب‌وکار و تجارت", features: ["۲ جلسه در هفته", "مکاتبات اداری", "اصطلاحات بازرگانی", "معرفی به شرکت‌ها"], duration: "۴ ماه" },
    { badge: "ویژه", title: "اسپانیایی گردشگری", desc: "سفر و مکالمه", features: ["۲ جلسه در هفته", "شبیه‌سازی سفر", "فرهنگ و آداب", "فیلم و موسیقی"], duration: "۳ ماه" },
    { badge: "پیشنهادی", title: "ترکی استانبولی", desc: "ارتباط با ترکیه", features: ["۲ جلسه در هفته", "مکالمه محور", "اصطلاحات روزمره", "فشرده ۴ ماهه"], duration: "۴ ماه" }
  ],
  en: [
    { badge: "Best Seller", title: "Intensive English", desc: "Beginner to Advanced", features: ["3 sessions/week", "IELTS Preparation", "24/7 Support", "Free Conversation"], duration: "6 months" },
    { badge: "New", title: "Basic German", desc: "Ideal for Immigration", features: ["2 sessions/week", "Goethe Resources", "Pronunciation Workshop", "Mock Exam"], duration: "8 months" },
    { badge: "Popular", title: "Business French", desc: "Business & Commerce", features: ["2 sessions/week", "Office Correspondence", "Commercial Terms", "Company Referral"], duration: "4 months" },
    { badge: "Special", title: "Tourism Spanish", desc: "Travel & Conversation", features: ["2 sessions/week", "Travel Simulation", "Culture & Etiquette", "Films & Music"], duration: "3 months" },
    { badge: "Recommended", title: "Istanbul Turkish", desc: "Connect with Turkey", features: ["2 sessions/week", "Conversation Based", "Daily Idioms", "Intensive 4-Month"], duration: "4 months" }
  ]
};

function renderCourses(lang) {
  const container = document.getElementById('coursesGrid');
  if (!container) return;
  const data = coursesData[lang] || coursesData['fa'];
  const alertText = lang === 'en' ? 'Call for pricing: 021-88912345' : '📞 برای قیمت و ثبت‌نام: ۰۲۱-۸۸۹۱۲۳۴۵';
  
  container.innerHTML = data.map(course => `
    <div class="course-card fade-in-up">
      <span class="course-badge">${course.badge}</span>
      <div class="course-content">
        <h3>${course.title}</h3>
        <p>${course.desc}</p>
        <ul class="course-features">
          ${course.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:14px;">⏱ ${course.duration}</p>
        <button class="course-cta" onclick="alert('${alertText}')">${lang === 'en' ? 'Call for Registration' : 'تماس برای ثبت‌نام'}</button>
      </div>
    </div>
  `).join('');
}

// FAQ Data
const faqData = {
  fa: [
    { q: "پولاریس آکادمی چه مجوزهایی دارد؟", a: "مجوز رسمی از وزارت آموزش و پرورش و وزارت ارشاد، گواهینامه ISO 9001." },
    { q: "مدرک پایان دوره معتبر است؟", a: "بله، مورد تأیید سفارت‌خانه‌ها و دانشگاه‌های بین‌المللی." },
    { q: "چگونه سطح زبانم را تعیین کنم؟", a: "آزمون تعیین سطح رایگان حضوری یا آنلاین، نتیجه فوری." },
    { q: "کلاس‌ها آنلاین هم برگزار می‌شود؟", a: "بله، حضوری و آنلاین با پلتفرم اختصاصی." },
    { q: "شرایط پرداخت اقساطی دارید؟", a: "اقساط تا ۱۲ ماه بدون کارمزد، شرایط ویژه دانشجویان." },
    { q: "چند جلسه در هفته برگزار می‌شود؟", a: "۲ تا ۳ جلسه، کلاس‌های فشرده آخر هفته نیز موجود است." }
  ],
  en: [
    { q: "What licenses does Polaris Academy have?", a: "Official license from Ministry of Education & Ministry of Culture, ISO 9001 certified." },
    { q: "Is the course certificate valid?", a: "Yes, approved by embassies and international universities." },
    { q: "How do I determine my language level?", a: "Free placement test in-person or online, instant results." },
    { q: "Are online classes available?", a: "Yes, both in-person and online via our dedicated platform." },
    { q: "Do you offer installment payment plans?", a: "Up to 12 months interest-free installments, special student terms." },
    { q: "How many sessions per week?", a: "2 to 3 sessions, intensive weekend classes also available." }
  ]
};

function renderFAQ(lang) {
  const container = document.getElementById('faqGrid');
  if (!container) return;
  const data = faqData[lang] || faqData['fa'];
  
  container.innerHTML = data.map((item, i) => `
    <div class="faq-item fade-in-up" data-faq="${i}">
      <div class="faq-question">
        <h3>${item.q}</h3>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });
}

// Testimonials Data
const testimonialsData = {
  fa: [
    { name: "مریم حسینی", course: "دوره آیلتس", text: "بعد از ۳ ماه، نمره آیلتسم از ۵.۵ به ۷ رسید. اساتید فوق‌العاده حرفه‌ای بودن!", stars: 5, avatar: "م" },
    { name: "علی رضایی", course: "انگلیسی فشرده", text: "محیط یادگیری عالی و پشتیبانی ۲۴ ساعته. واقعاً از ثبت‌نامم راضی هستم.", stars: 5, avatar: "ع" },
    { name: "سارا کریمی", course: "آلمانی مقدماتی", text: "مدرس آلمانی من فوق‌العاده مسلط و خوش‌برخورد بود. بعد از ۶ ماه به سطح B1 رسیدم!", stars: 5, avatar: "س" }
  ],
  en: [
    { name: "Maryam Hosseini", course: "IELTS Course", text: "After 3 months, my IELTS score increased from 5.5 to 7. The instructors are incredibly professional!", stars: 5, avatar: "M" },
    { name: "Ali Rezaei", course: "Intensive English", text: "Great learning environment and 24/7 support. I'm really satisfied with my registration.", stars: 5, avatar: "A" },
    { name: "Sara Karimi", course: "Basic German", text: "My German instructor is extremely fluent and friendly. I reached B1 level in 6 months!", stars: 5, avatar: "S" }
  ]
};

function renderTestimonials(lang) {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;
  const data = testimonialsData[lang] || testimonialsData['fa'];
  const stars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);
  
  container.innerHTML = data.map(t => `
    <div class="testimonial-card fade-in-up">
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.avatar}</div>
        <div class="testimonial-info">
          <h4>${t.name}</h4>
          <p>${t.course}</p>
          <div class="testimonial-stars">${stars(t.stars)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ==================== شمارنده‌ها با اعداد فارسی ====================

// تبدیل اعداد انگلیسی به فارسی
function toPersianNumbers(str) {
  if (str === undefined || str === null || str === '') return '۰';
  const persianNumbers = {
    '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
    '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
  };
  return str.toString().replace(/[0-9]/g, d => persianNumbers[d] || d);
}

// انیمیشن شمارنده - بدون NaN
function animateCounter(el) {
  const targetStr = el.getAttribute('data-target');
  let target = parseInt(targetStr);
  
  // اگر NaN بود، مقدار 0 بگذار
  if (isNaN(target)) {
    target = 0;
  }
  
  let current = 0;
  const duration = 2000;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;
  
  let currentStep = 0;
  const timer = setInterval(() => {
    currentStep++;
    current += increment;
    if (currentStep >= steps) {
      el.innerText = toPersianNumbers(target);
      clearInterval(timer);
    } else {
      el.innerText = toPersianNumbers(Math.floor(current));
    }
  }, stepTime);
}

// راه‌اندازی همه شمارنده‌ها
function initCounters() {
  const observerOptions = { threshold: 0.3, rootMargin: '0px' };
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          if (!counter.hasAttribute('data-animated')) {
            counter.setAttribute('data-animated', 'true');
            const target = counter.getAttribute('data-target');
            if (target && !isNaN(parseInt(target))) {
              animateCounter(counter);
            } else {
              counter.innerText = toPersianNumbers(0);
            }
          }
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // مشاهده هر دو بخش شمارنده
  const heroStats = document.getElementById('heroStats');
  if (heroStats) counterObserver.observe(heroStats);
  
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) counterObserver.observe(statsSection);
}

// ==================== توابع اصلی رندر ====================

// Master render function
function renderAllContent(lang) {
  renderLanguages(lang);
  renderTeachers(lang);
  renderCourses(lang);
  renderFAQ(lang);
  renderTestimonials(lang);
}

// ==================== رویدادهای اولیه ====================

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('linguaLang') || 'fa';
  renderAllContent(savedLang);
  initCounters(); // راه‌اندازی شمارنده‌ها
  
  // Animation observer for scroll animations
  const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(el => observer.observe(el));
});

// Make functions globally available
window.renderAllContent = renderAllContent;
window.toPersianNumbers = toPersianNumbers;
window.animateCounter = animateCounter;
window.initCounters = initCounters;