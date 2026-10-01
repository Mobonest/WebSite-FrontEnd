// blog.js - داده‌های بلاگ (6 پست)

const blogPostsData = {
  fa: [
    { id: 1, category: "learning", categoryName: "نکات آموزشی", title: "۱۰ راهکار طلایی برای تقویت مکالمه انگلیسی", excerpt: "در این مقاله به بررسی موثرترین روش‌های بهبود مهارت Speaking می‌پردازیم...", content: "مکالمه انگلیسی یکی از مهم‌ترین مهارت‌هایی است که زبان‌آموزان به دنبال تقویت آن هستند. در این مقاله ۱۰ راهکار عملی و موثر را بررسی می‌کنیم...", date: "۲۵ دی ۱۴۰۳", readTime: "۵ دقیقه", image: "assets/image/blog1.jpg" },
    { id: 2, category: "immigration", categoryName: "مهاجرت", title: "بهترین مدرک زبان برای مهاجرت به آلمان", excerpt: "راهنمای کامل انتخاب مدرک زبان مناسب برای تحصیل و کار در آلمان...", content: "آلمان یکی از مقاصد محبوب برای مهاجرت تحصیلی و کاری است. برای مهاجرت به آلمان، داشتن مدرک زبان آلمانی معتبر ضروری است...", date: "۱۸ دی ۱۴۰۳", readTime: "۷ دقیقه", image: "assets/image/blog2.jpg" },
    { id: 3, category: "exam", categoryName: "آزمون‌ها", title: "تفاوت آیلتس آکادمیک و جنرال", excerpt: "کدام آزمون آیلتس برای هدف شما مناسب‌تر است؟ مقایسه کامل...", content: "آیلتس آکادمیک برای افرادی است که قصد ادامه تحصیل در دانشگاه‌های خارجی را دارند، در حالی که آیلتس جنرال برای مهاجرت کاری و اقامت دائم مناسب است...", date: "۱۲ دی ۱۴۰۳", readTime: "۴ دقیقه", image: "assets/image/blog3.jpg" },
    { id: 4, category: "culture", categoryName: "فرهنگ", title: "عادات روزانه افراد چندزبانه", excerpt: "راز موفقیت افرادی که به چند زبان مسلط هستند چیست؟...", content: "افرادی که به چند زبان مسلط هستند، عادات روزانه خاصی دارند که به آنها کمک می‌کند مهارت‌های زبانی خود را حفظ و تقویت کنند...", date: "۵ دی ۱۴۰۳", readTime: "۶ دقیقه", image: "assets/image/blog4.jpg" },
    { id: 5, category: "learning", categoryName: "نکات آموزشی", title: "چگونه دایره لغات انگلیسی را افزایش دهیم؟", excerpt: "روش‌های موثر برای یادگیری لغات جدید و تثبیت آنها در حافظه...", content: "افزایش دایره لغات یکی از چالش‌های اصلی زبان‌آموزان است. در این مقاله روش‌های علمی و عملی را بررسی می‌کنیم...", date: "۲۸ آذر ۱۴۰۳", readTime: "۸ دقیقه", image: "assets/image/blog5.jpg" },
    { id: 6, category: "exam", categoryName: "آزمون‌ها", title: "راهنمای جامع آزمون تافل", excerpt: "همه چیز درباره ساختار آزمون تافل و نکات کلیدی برای نمره بالا...", content: "تافل یکی از معتبرترین آزمون‌های زبان انگلیسی است که برای پذیرش در دانشگاه‌های آمریکا و کانادا مورد نیاز است...", date: "۲۰ آذر ۱۴۰۳", readTime: "۱۰ دقیقه", image: "assets/image/blog6.jpg" }
  ],
  en: [
    { id: 1, category: "learning", categoryName: "Learning Tips", title: "10 Golden Tips to Improve English Speaking", excerpt: "In this article, we explore the most effective methods to improve Speaking skills...", content: "English speaking is one of the most important skills that language learners seek to improve. In this article, we review 10 practical and effective strategies...", date: "Jan 15, 2025", readTime: "5 min", image: "assets/image/blog1.jpg" },
    { id: 2, category: "immigration", categoryName: "Immigration", title: "Best Language Certificate for Germany Immigration", excerpt: "Complete guide to choosing the right language certificate for studying and working in Germany...", content: "Germany is a popular destination for study and work immigration. Having a valid German language certificate is essential...", date: "Jan 8, 2025", readTime: "7 min", image: "assets/image/blog2.jpg" },
    { id: 3, category: "exam", categoryName: "Exams", title: "IELTS Academic vs General Training", excerpt: "Which IELTS test is right for your goal? Complete comparison...", content: "IELTS Academic is for those who want to study at foreign universities, while IELTS General Training is for work immigration and permanent residence...", date: "Jan 2, 2025", readTime: "4 min", image: "assets/image/blog3.jpg" },
    { id: 4, category: "culture", categoryName: "Culture", title: "Daily Habits of Polyglots", excerpt: "What is the secret of people who are fluent in several languages?...", content: "People who are fluent in several languages have specific daily habits that help them maintain and improve their language skills...", date: "Dec 26, 2024", readTime: "6 min", image: "assets/image/blog4.jpg" },
    { id: 5, category: "learning", categoryName: "Learning Tips", title: "How to Increase Your English Vocabulary?", excerpt: "Effective methods for learning new words and consolidating them in memory...", content: "Increasing vocabulary is one of the main challenges for language learners. In this article, we review scientific and practical methods...", date: "Dec 19, 2024", readTime: "8 min", image: "assets/image/blog5.jpg" },
    { id: 6, category: "exam", categoryName: "Exams", title: "Complete Guide to TOEFL Exam", excerpt: "Everything about the TOEFL exam structure and key tips for a high score...", content: "TOEFL is one of the most reputable English language tests required for admission to US and Canadian universities...", date: "Dec 11, 2024", readTime: "10 min", image: "assets/image/blog6.jpg" }
  ]
};

let currentBlogLang = 'fa';

function renderBlogPosts(lang) {
  const container = document.getElementById('blogGrid');
  if (!container) return;
  const data = blogPostsData[lang] || blogPostsData['fa'];
  currentBlogLang = lang;
  
  container.innerHTML = data.map(post => `
    <div class="blog-card" data-category="${post.category}" data-id="${post.id}">
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}" onerror="this.parentElement.innerHTML='<span>📖</span>'">
      </div>
      <div class="blog-content">
        <span class="blog-category">${post.categoryName}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-meta">
          <span>📅 ${post.date}</span>
          <span>⏱ ${post.readTime}</span>
          <a href="blog-post.html?id=${post.id}" class="blog-readmore" data-key="read_more">ادامه مطلب ←</a>
        </div>
      </div>
    </div>
  `).join('');
}

// فیلتر کردن بلاگ پست‌ها
function filterBlogPosts(category) {
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      card.classList.add('fade-in-up');
    } else {
      card.style.display = 'none';
    }
  });
}

// Event listeners برای فیلترها
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('linguaLang') || 'fa';
  renderBlogPosts(savedLang);
  
  // فیلتر دکمه‌ها
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterBlogPosts(btn.dataset.filter);
    });
  });
});

// تابع برای دریافت یک پست با آیدی
function getBlogPostById(id, lang) {
  const data = blogPostsData[lang] || blogPostsData['fa'];
  return data.find(post => post.id === parseInt(id));
}