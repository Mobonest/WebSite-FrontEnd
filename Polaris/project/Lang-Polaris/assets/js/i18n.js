// ==================== i18n.js - Polaris Multi-Language System ====================
// ترجمه کامل برای ۴ زبان: فارسی، انگلیسی، عربی، ترکی استانبولی
(function() {
    
    // ========== TRANSLATION DATA ==========
    const translations = {
        fa: {
            // Top Bar
            'topbar.phone': '۰۲۱-۷۴۸۲۹۳۱۰',
            'topbar.email': 'info@polaris-learn.ir',
            'topbar.slogan': 'ستاره قطبیِ مسیر یادگیری شما',
            
            // Navbar
            'nav.home': 'خانه',
            'nav.about': 'درباره ما',
            'nav.courses': 'دوره‌ها',
            'nav.contact': 'تماس با ما',
            'nav.blog': 'وبلاگ',
            'nav.login': 'ورود',
            'nav.register': 'ثبت‌نام',
            'nav.theme.dark': 'تاریک',
            'nav.theme.light': 'روشن',
            
            // Hero Home
            'hero.eyebrow': 'بیش از ۱۲,۰۰۰ زبان‌آموز موفق',
            'hero.title1': 'انگلیسی رو',
            'hero.title2': 'حرفه‌ای',
            'hero.title3': 'و بدون کتاب یاد بگیر',
            'hero.text': 'دوره‌های مکالمه محور با اساتید Native. بدون کلاس‌های خسته‌کننده. فقط ۲۰ دقیقه در روز، ۳ ماهه روان صحبت کن.',
            'hero.search.category': 'همه دوره‌ها',
            'hero.search.placeholder': 'چی میخوای یاد بگیری؟',
            'hero.stat1': 'دوره تخصصی',
            'hero.stat2': 'زبان‌آموز',
            'hero.stat3': 'مدرس Native',
            'hero.stat4': 'امتیاز کاربران',
            
            // Features
            'features.tag': '— چرا Polaris؟',
            'features.title1': 'متفاوت یاد بگیر،',
            'features.title2': 'سریع',
            'features.title3': 'نتیجه بگیر',
            'features.desc': 'هر چیزی که برای تسلط به انگلیسی نیاز داری',
            
            'feature1.title': 'اساتید Native واقعی',
            'feature1.desc': 'همه مدرسین ما از انگلیس و آمریکا هستن با لهجه کاملاً طبیعی و اصیل.',
            'feature2.title': 'مدرک معتبر بین‌المللی',
            'feature2.desc': 'گواهی پایان دوره قابل استعلام برای ویزای تحصیلی و کاری.',
            'feature3.title': 'کلاس زنده هفتگی',
            'feature3.desc': 'هفته‌ای ۲ جلسه مکالمه مستقیم با استاد Native رفع اشکال.',
            'feature4.title': 'پشتیبانی ۲۴/۷',
            'feature4.desc': 'پشتیبانی دائمی و پاسخگویی به سوالات در هر ساعت شبانه‌روز.',
            'feature5.title': 'اپلیکیشن اختصاصی',
            'feature5.desc': 'هرجا که هستی با اپلیکیشن Polaris به یادگیری ادامه بده.',
            'feature6.title': 'دسترسی مادام‌العمر',
            'feature6.desc': 'دوره‌ها رو برای همیشه داشته باش با آپدیت رایگان.',
            
            // About Preview
            'about.tag': '— درباره Polaris',
            'about.title1': 'داستان',
            'about.title2': 'موفقیت',
            'about.title3': 'ما',
            'about.desc1': 'از ۴ نفر تو یه زیرزمین شروع کردیم. حالا ۶۵ مدرس Native و ۱۲,۰۰۰ زبان‌آموز داریم.',
            'about.desc2': 'مأموریت ما اینه که آموزش زبان رو از یه کابوس خسته‌کننده به یه تجربه لذت‌بخش تبدیل کنیم.',
            'about.stat1': 'سال تجربه',
            'about.stat2': 'مدرس حرفه‌ای',
            'about.stat3': 'دوره تخصصی',
            'about.stat4': 'رضایت کاربران',
            'about.btn': 'بیشتر بدونید',
            
            // Stats
            'stats.students': 'زبان‌آموز',
            'stats.teachers': 'مدرس Native',
            'stats.courses': 'دوره آموزشی',
            'stats.videos': 'ویدیو آموزشی',
            'stats.satisfaction': 'درصد رضایت',
            
            // FAQ Home
            'faq.tag': '— سوالات متداول',
            'faq.title1': 'سوالات',
            'faq.title2': 'پر تکرار',
            'faq.title3': 'شما',
            'faq.desc': 'هر سوالی داری اینجا جوابش هست',
            
            'faq1.q': 'دوره‌ها به چه صورت برگزار میشن؟',
            'faq1.a': 'دوره‌ها به صورت ترکیبی از ویدیوهای آفلاین و کلاس‌های زنده آنلاین برگزار میشن. هر هفته ۲ جلسه زنده با استاد Native داری.',
            'faq2.q': 'چقدر طول میکشه به مکالمه مسلط بشم؟',
            'faq2.a': 'با روزی ۲۰ تا ۳۰ دقیقه تمرین، بعد از ۳ ماه میتونی مکالمات روزمره رو روان انجام بدی.',
            'faq3.q': 'اگه از دوره راضی نبودم چی؟',
            'faq3.a': '۳۰ روز ضمانت بازگشت وجه کامل داری. بدون هیچ سوالی پولت رو پس میگیری.',
            'faq4.q': 'مدرک پایان دوره معتبره؟',
            'faq4.a': 'بله، مدرک ما کاملاً معتبر و قابل استعلام برای ویزای تحصیلی و کاریه.',
            'faq5.q': 'اساتید واقعاً Native هستن؟',
            'faq5.a': 'بله، همه ۶۵ مدرس ما متولد انگلیس و آمریکا هستن و زبان مادریشون انگلیسیه.',
            'faq6.q': 'چطور میتونم ثبت‌نام کنم؟',
            'faq6.a': 'کافیه روی دکمه ثبت‌نام کلیک کنی، دوره‌ات رو انتخاب کنی و کمتر از ۲ دقیقه عضو شی.',
            
            // Testimonials
            'testimonials.tag': '— نظرات زبان‌آموزان',
            'testimonials.title1': 'دیگران',
            'testimonials.title2': 'چی میگن',
            'testimonials.title3': 'درباره ما',
            'testimonials.desc': 'بیش از ۱۲,۰۰۰ زبان‌آموز راضی',
            
            'testimonial1.name': 'سارا محمدی',
            'testimonial1.role': 'دانشجوی پزشکی',
            'testimonial1.text': 'فوق‌العاده بود! تو ۳ ماه از صفر به جایی رسیدم که راحت میتونم فیلم انگلیسی ببینم. پشتیبانی عالی و اساتید فوق‌العاده.',
            'testimonial2.name': 'علی رضایی',
            'testimonial2.role': 'مهندس نرم‌افزار',
            'testimonial2.text': 'برای آیلتس ثبت‌نام کردم و نمره ۷.۵ گرفتم. روش تدریسشون واقعاً متفاوت و مؤثره. به همه پیشنهاد میکنم.',
            'testimonial3.name': 'مریم حسینی',
            'testimonial3.role': 'مدیر بازاریابی',
            'testimonial3.text': 'بخاطر کارم نیاز به مکالمه انگلیسی داشتم. تو ۲ ماه پیشرفت چشمگیری داشتم. الان تو جلسات بین‌المللی راحت صحبت میکنم.',
            'testimonial4.name': 'امیر کریمی',
            'testimonial4.role': 'دانشجوی MBA',
            'testimonial4.text': 'بهترین تصمیم زندگیم بود. قیمت مناسب، کیفیت عالی. الان کلی دوست خارجی دارم و راحت باهاشون چت میکنم.',
            
            // Courses Preview
            'courses.tag': '— جدیدترین دوره‌ها',
            'courses.title1': 'دوره‌های',
            'courses.title2': 'کاربردی',
            'courses.title3': 'زبان',
            'courses.desc': 'از مبتدی تا پیشرفته، هر سطحی که هستی ما برات دوره داریم',
            'courses.btn': 'مشاهده همه دوره‌ها',
            
            'course1.title': 'مکالمه روزمره انگلیسی — از صفر تا روان در ۹۰ روز',
            'course1.category': 'مکالمه',
            'course1.level': 'مبتدی',
            'course1.teacher': 'James Wilson',
            'course1.rating': '۴.۹',
            'course1.reviews': '۸۴۷',
            
            'course2.title': 'آمادگی فشرده آیلتس — نمره ۷+ تضمینی',
            'course2.category': 'IELTS',
            'course2.level': 'متوسط',
            'course2.teacher': 'Sarah Mitchell',
            'course2.rating': '۴.۸',
            'course2.reviews': '۶۲۳',
            
            'course3.title': 'گرامر حرفه‌ای — بدون حفظ کردن یک فرمول',
            'course3.category': 'گرامر',
            'course3.level': 'پیشرفته',
            'course3.teacher': 'Emma Roberts',
            'course3.rating': '۴.۷',
            'course3.reviews': '۳۹۲',
            
            // Blog Preview
            'blog.tag': '— مقالات آموزشی',
            'blog.title1': 'آخرین',
            'blog.title2': 'مقالات',
            'blog.title3': 'زبان',
            'blog.desc': 'نکات و ترفندهای یادگیری زبان انگلیسی',
            'blog.btn': 'مشاهده همه مقالات',
            
            'blog1.title': '۱۰ تکنیک طلایی برای تقویت مکالمه انگلیسی',
            'blog1.date': '۱۵ فروردین ۱۴۰۴',
            'blog1.excerpt': 'با این ۱۰ تکنیک ساده، مکالمه انگلیسیت رو مثل آب خوردن روان کن...',
            'blog1.category': 'مکالمه',
            
            'blog2.title': 'راهنمای کامل گرامر انگلیسی در ۳۰ روز',
            'blog2.date': '۱۰ فروردین ۱۴۰۴',
            'blog2.excerpt': 'گرامر رو بدون فرمول و حفظ کردن، با روش داستان‌سرایی یاد بگیر...',
            'blog2.category': 'گرامر',
            
            'blog3.title': 'چطور برای آیلتس آماده شیم؟ برنامه ۶۰ روزه',
            'blog3.date': '۵ فروردین ۱۴۰۴',
            'blog3.excerpt': 'برنامه کامل ۶۰ روزه برای کسب نمره ۷+ در آزمون آیلتس...',
            'blog3.category': 'IELTS',
            
            // CTA
            'cta.title': '۳۰٪ تخفیف',
            'cta.subtitle': 'اولین دوره',
            'cta.desc': 'زبان‌آموزای جدید ۳۰٪ تخفیف میگیرن. بدون کد، فقط ثبت‌نام کن.',
            'cta.name.placeholder': 'نام و نام خانوادگی',
            'cta.email.placeholder': 'آدرس ایمیل',
            'cta.course.default': 'انتخاب دوره...',
            'cta.course.option1': 'مکالمه روزمره',
            'cta.course.option2': 'آمادگی IELTS',
            'cta.course.option3': 'گرامر حرفه‌ای',
            'cta.course.option4': 'آمادگی TOEFL',
            'cta.btn': 'ثبت‌نام رایگان',
            
            // About Page
            'about.hero.eyebrow': 'داستان ما از سال ۱۳۹۵',
            'about.hero.title1': 'درباره',
            'about.hero.title2': 'Polaris',
            'about.hero.title3': 'بیشتر بدونید',
            'about.hero.desc': 'از ۴ نفر تو یه زیرزمین تا ۶۵ مدرس Native. راهی که با عشق ساختیم.',
            
            'about.story.tag': '— داستان ما',
            'about.story.title1': 'از یه ایده ساده تا',
            'about.story.title2': 'بزرگترین',
            'about.story.title3': 'پلتفرم',
            'about.story.p1': 'سال ۱۳۹۵ با ۴ تا لپتاپ تو زیرزمین شروع کردیم. از وضعیت آموزش زبان تو ایران خسته شده بودیم. همه کتابای قطور و کلاسای حفظی بودن.',
            'about.story.p2': '۴ تا ویدیو ضبط کردیم و گذاشتیم رو یه سایت ساده. تو همون ماه اول ۲۰۰ نفر ثبت‌نام کردن. فهمیدیم تنها نیستیم.',
            'about.story.p3': 'الان بعد از ۹ سال، ۶۵ مدرس Native، بیش از ۱۲,۰۰۰ زبان‌آموز و ۲۰۰ دوره تخصصی داریم.',
            'about.story.p4': 'هنوزم مثل روز اول عاشق کارمونیم. هر پیام موفقیت زبان‌آموزامون بهمون انرژی میده.',
            
            // About Timeline
            'about.timeline.tag': '— مسیر ما',
            'about.timeline.title1': 'نقاط عطف',
            'about.timeline.title2': 'Polaris',
            
            'timeline1.year': '۱۳۹۵',
            'timeline1.title': 'شروع با ۴ نفر',
            'timeline1.desc': 'در یک زیرزمین کوچک با ۴ لپتاپ کار رو شروع کردیم.',
            'timeline2.year': '۱۳۹۷',
            'timeline2.title': '۲۰۰۰ زبان‌آموز',
            'timeline2.desc': 'به مرز ۲۰۰۰ زبان‌آموز رسیدیم و ۱۵ مدرس به تیم اضافه شد.',
            'timeline3.year': '۱۳۹۹',
            'timeline3.title': 'راه‌اندازی اپلیکیشن',
            'timeline3.desc': 'اپلیکیشن اختصاصی Polaris رو برای اندروید و iOS منتشر کردیم.',
            'timeline4.year': '۱۴۰۱',
            'timeline4.title': '۵۰۰۰ زبان‌آموز',
            'timeline4.desc': 'از مرز ۵۰۰۰ زبان‌آموز عبور کردیم و ۳۰ مدرس Native جذب کردیم.',
            'timeline5.year': '۱۴۰۴',
            'timeline5.title': 'امروز',
            'timeline5.desc': 'با ۱۲,۰۰۰+ زبان‌آموز، ۶۵ مدرس و ۲۰۰ دوره، بزرگترین پلتفرم آموزش زبان هستیم.',
            
            // About Values
            'about.values.tag': '— ارزش‌های ما',
            'about.values.title1': 'باورهایی که',
            'about.values.title2': 'روشون',
            'about.values.title3': 'می‌ایستیم',
            
            'value1.title': 'کیفیت بی‌نظیر',
            'value1.desc': 'هر دوره رو با وسواس کامل طراحی میکنیم. رضایت ۹۹٪ زبان‌آموزان گواه این موضوعه.',
            'value2.title': 'دسترسی برای همه',
            'value2.desc': 'معتقدیم آموزش باکیفیت باید برای همه در دسترس باشه، نه فقط عده‌ای خاص.',
            'value3.title': 'نوآوری مداوم',
            'value3.desc': 'هر ماه دوره‌ها رو آپدیت میکنیم و جدیدترین متدهای آموزشی رو به کار میگیریم.',
            'value4.title': 'پشتیبانی واقعی',
            'value4.desc': 'تا وقتی به هدفت نرسی کنارتیم. پشتیبانی ۲۴/۷ فقط یه شعار نیست.',
            
            // Contact Page
            'contact.hero.eyebrow': 'همیشه در دسترس',
            'contact.hero.title1': 'با',
            'contact.hero.title2': 'ما',
            'contact.hero.title3': 'در تماس باش',
            'contact.hero.desc': 'هر سوالی داری برامون بنویس. زیر ۲۴ ساعت جواب میدیم.',
            
            'contact.info.tag': '— اطلاعات تماس',
            'contact.info.title1': 'راه‌های',
            'contact.info.title2': 'ارتباط',
            'contact.info.title3': 'با ما',
            
            'contact.address.title': 'آدرس دفتر',
            'contact.address': 'تهران، خیابان ولیعصر، کوچه نوآوری، پلاک ۴۲، طبقه ۳',
            'contact.phone.title': 'شماره تماس',
            'contact.phone': '۰۲۱-۷۴۸۲۹۳۱۰',
            'contact.phone.sub': 'شنبه تا پنجشنبه، ۹ صبح تا ۸ شب',
            'contact.email.title': 'ایمیل',
            'contact.email': 'info@polaris-learn.ir',
            'contact.email.sub': 'معمولاً زیر ۲ ساعت جواب میدیم',
            'contact.whatsapp.title': 'واتساپ',
            'contact.whatsapp': '۰۹۱۲-۳۴۵-۶۷۸۹',
            'contact.whatsapp.sub': 'پاسخگویی ۲۴ ساعته',
            
            'contact.form.title': 'برامون پیام بذار',
            'contact.form.name': 'نام و نام خانوادگی',
            'contact.form.email': 'آدرس ایمیل',
            'contact.form.subject': 'موضوع پیام',
            'contact.form.number' : 'شماره تماس',
            'contact.form.message': 'متن پیام...',
            'contact.form.btn': 'ارسال پیام',
            
            // Contact FAQ
            'contact.faq.tag': '— سوالات قبل از تماس',
            'contact.faq.q1': 'چقدر طول میکشه جواب بدید؟',
            'contact.faq.a1': 'معمولاً زیر ۲ ساعت در ساعات اداری و زیر ۲۴ ساعت در روزهای تعطیل.',
            'contact.faq.q2': 'میتونم حضوری مراجعه کنم؟',
            'contact.faq.a2': 'بله، از شنبه تا پنجشنبه ۹ صبح تا ۸ شب میتونید به دفتر ما مراجعه کنید.',
            'contact.faq.q3': 'پشتیبانی فنی چطوریه؟',
            'contact.faq.a3': 'تیم فنی ما ۲۴/۷ آماده کمک به شماست. از طریق واتساپ، تلگرام و تیکت پاسخگو هستیم.',
            
            // Contact Map
            'contact.map.title': 'موقعیت ما روی نقشه',
            
            // Blog Page
            'blog.hero.eyebrow': 'مقالات آموزشی رایگان',
            'blog.hero.title1': 'وبلاگ',
            'blog.hero.title2': 'آموزشی',
            'blog.hero.title3': 'Polaris',
            'blog.hero.desc': 'جدیدترین مقالات، نکات و ترفندهای یادگیری زبان انگلیسی',
            
            // Courses Page
            'courses.hero.eyebrow': 'بیش از ۲۰۰ دوره تخصصی',
            'courses.hero.title1': 'تمام',
            'courses.hero.title2': 'دوره‌های',
            'courses.hero.title3': 'زبان انگلیسی',
            'courses.hero.desc': 'از مکالمه تا آیلتس، هر سطحی هستی یه دوره برات داریم.',
            'courses.hero.search': 'دوره‌ات رو جستجو کن...',
            
            // Footer
            'footer.brand.desc': 'یادگیری زبان رو از کابوس به تجربه لذت‌بخش تبدیل میکنیم.',
            'footer.quick.title': 'دسترسی سریع',
            'footer.quick.rules': 'قوانین',
            'footer.quick.privacy': 'حریم خصوصی',
            'footer.quick.faq': 'سوالات متداول',
            'footer.quick.support': 'پشتیبانی',
            'footer.quick.contact': 'تماس با ما',
            
            'footer.courses.title': 'دوره‌های محبوب',
            'footer.courses.conversation': 'مکالمه',
            'footer.courses.ielts': 'IELTS',
            'footer.courses.grammar': 'گرامر',
            'footer.courses.toefl': 'TOEFL',
            'footer.courses.listening': 'لیسنینگ',
            
            'footer.newsletter.title': 'خبرنامه',
            'footer.newsletter.desc': 'نکات رایگان هر هفته',
            'footer.newsletter.placeholder': 'ایمیل خود را وارد کنید',
            
            'footer.copyright': '© ۱۴۰۴ Polaris. با',
            'footer.copyright2': 'برای فارسی‌زبانان',
            
            // Modal
            'modal.login.tab': 'ورود',
            'modal.register.tab': 'ثبت‌نام',
            'modal.login.title': 'ورود به حساب',
            'modal.login.desc': 'اگه ثبت‌نام کردی از اینجا وارد شو',
            'modal.login.email': 'ایمیل',
            'modal.login.password': 'رمز عبور',
            'modal.login.remember': 'منو یادت بمونه',
            'modal.login.forgot': 'رمزت رو فراموش کردی؟',
            'modal.login.btn': 'ورود',
            'modal.login.or': 'یا',
            
            'modal.register.title': 'ایجاد حساب جدید',
            'modal.register.desc': 'کمتر از ۲ دقیقه',
            'modal.register.firstname': 'نام',
            'modal.register.lastname': 'نام خانوادگی',
            'modal.register.email': 'ایمیل',
            'modal.register.phone': 'موبایل (اختیاری)',
            'modal.register.password': 'رمز عبور',
            'modal.register.confirm': 'تکرار رمز',
            'modal.register.terms': 'با',
            'modal.register.terms.link': 'قوانین',
            'modal.register.terms2': 'موافقم',
            'modal.register.btn': 'ثبت‌نام',
        },
        
        en: {
            // Top Bar
            'topbar.phone': '+98-21-74829310',
            'topbar.email': 'info@polaris-learn.com',
            'topbar.slogan': 'The Polaris of Your Learning Journey',
            
            // Navbar
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.courses': 'Courses',
            'nav.contact': 'Contact',
            'nav.blog': 'Blog',
            'nav.login': 'Login',
            'nav.register': 'Register',
            'nav.theme.dark': 'Dark',
            'nav.theme.light': 'Light',
            
            // Hero Home
            'hero.eyebrow': 'Over 12,000 Successful Learners',
            'hero.title1': 'Learn English',
            'hero.title2': 'Professionally',
            'hero.title3': 'Without Books',
            'hero.text': 'Conversation-focused courses with Native teachers. No boring classes. Just 20 minutes a day, speak fluently in 3 months.',
            'hero.search.category': 'All Courses',
            'hero.search.placeholder': 'What do you want to learn?',
            'hero.stat1': 'Specialized Courses',
            'hero.stat2': 'Learners',
            'hero.stat3': 'Native Teachers',
            'hero.stat4': 'User Rating',
            
            // Features
            'features.tag': '— Why Polaris?',
            'features.title1': 'Learn Differently,',
            'features.title2': 'Get Results',
            'features.title3': 'Fast',
            'features.desc': 'Everything you need to master English',
            
            'feature1.title': 'Real Native Teachers',
            'feature1.desc': 'All our teachers are from the UK and US with completely natural and authentic accents.',
            'feature2.title': 'International Certificate',
            'feature2.desc': 'End-of-course certificate verifiable for study and work visas.',
            'feature3.title': 'Weekly Live Classes',
            'feature3.desc': '2 live conversation sessions per week with a Native teacher for Q&A.',
            'feature4.title': '24/7 Support',
            'feature4.desc': 'Constant support and answering questions at any time of day.',
            'feature5.title': 'Dedicated App',
            'feature5.desc': 'Continue learning wherever you are with the Polaris app.',
            'feature6.title': 'Lifetime Access',
            'feature6.desc': 'Keep the courses forever with free updates.',
            
            // About Preview
            'about.tag': '— About Polaris',
            'about.title1': 'Our',
            'about.title2': 'Success',
            'about.title3': 'Story',
            'about.desc1': 'We started with 4 people in a basement. Now we have 65 Native teachers and 12,000 learners.',
            'about.desc2': 'Our mission is to transform language learning from a boring nightmare into an enjoyable experience.',
            'about.stat1': 'Years Experience',
            'about.stat2': 'Professional Teachers',
            'about.stat3': 'Specialized Courses',
            'about.stat4': 'User Satisfaction',
            'about.btn': 'Learn More',
            
            // Stats
            'stats.students': 'Learners',
            'stats.teachers': 'Native Teachers',
            'stats.courses': 'Courses',
            'stats.videos': 'Training Videos',
            'stats.satisfaction': 'Satisfaction Rate',
            
            // FAQ Home
            'faq.tag': '— Frequently Asked',
            'faq.title1': 'Common',
            'faq.title2': 'Questions',
            'faq.title3': '',
            'faq.desc': 'Any questions you have, the answers are here',
            'faq1.q': 'How are the courses conducted?',
            'faq1.a': 'Courses are a combination of offline videos and live online classes. You have 2 live sessions per week with a Native teacher.',
            'faq2.q': 'How long does it take to become fluent?',
            'faq2.a': 'With 20-30 minutes of daily practice, you can speak everyday conversations fluently after 3 months.',
            'faq3.q': 'What if I\'m not satisfied with the course?',
            'faq3.a': 'You have a 30-day full money-back guarantee. No questions asked.',
            'faq4.q': 'Is the certificate valid?',
            'faq4.a': 'Yes, our certificate is fully valid and verifiable for study and work visas.',
            'faq5.q': 'Are the teachers really Native?',
            'faq5.a': 'Yes, all 65 of our teachers are born in the UK and US, and English is their mother tongue.',
            'faq6.q': 'How can I register?',
            'faq6.a': 'Just click the register button, choose your course, and become a member in less than 2 minutes.',
            
            // Testimonials
            'testimonials.tag': '— Student Reviews',
            'testimonials.title1': 'What',
            'testimonials.title2': 'Others Say',
            'testimonials.title3': 'About Us',
            'testimonials.desc': 'Over 12,000 satisfied learners',
            'testimonial1.name': 'Sara Mohammadi',
            'testimonial1.role': 'Medical Student',
            'testimonial1.text': 'Amazing! In 3 months I went from zero to being able to watch English movies easily. Great support and amazing teachers.',
            'testimonial2.name': 'Ali Rezaei',
            'testimonial2.role': 'Software Engineer',
            'testimonial2.text': 'I registered for IELTS and scored 7.5. Their teaching method is truly different and effective. I recommend it to everyone.',
            'testimonial3.name': 'Maryam Hosseini',
            'testimonial3.role': 'Marketing Manager',
            'testimonial3.text': 'I needed English conversation for work. In 2 months I made remarkable progress. Now I speak comfortably in international meetings.',
            'testimonial4.name': 'Amir Karimi',
            'testimonial4.role': 'MBA Student',
            'testimonial4.text': 'Best decision of my life. Affordable price, excellent quality. Now I have many foreign friends and chat with them easily.',
            
            // Courses Preview
            'courses.tag': '— Latest Courses',
            'courses.title1': 'Practical',
            'courses.title2': 'Language',
            'courses.title3': 'Courses',
            'courses.desc': 'From beginner to advanced, whatever your level, we have a course for you',
            'courses.btn': 'View All Courses',
            
            'course1.title': 'Everyday English Conversation — From Zero to Fluent in 90 Days',
            'course1.category': 'Conversation',
            'course1.level': 'Beginner',
            'course1.teacher': 'James Wilson',
            'course1.rating': '4.9',
            'course1.reviews': '847',
            
            'course2.title': 'Intensive IELTS Preparation — Guaranteed 7+ Score',
            'course2.category': 'IELTS',
            'course2.level': 'Intermediate',
            'course2.teacher': 'Sarah Mitchell',
            'course2.rating': '4.8',
            'course2.reviews': '623',
            
            'course3.title': 'Professional Grammar — Without Memorizing a Single Formula',
            'course3.category': 'Grammar',
            'course3.level': 'Advanced',
            'course3.teacher': 'Emma Roberts',
            'course3.rating': '4.7',
            'course3.reviews': '392',
            
            // Blog Preview
            'blog.tag': '— Educational Articles',
            'blog.title1': 'Latest',
            'blog.title2': 'Language',
            'blog.title3': 'Articles',
            'blog.desc': 'Tips and tricks for learning English',
            'blog.btn': 'View All Articles',
            
            'blog1.title': '10 Golden Techniques for Improving English Speaking',
            'blog1.date': 'April 4, 2025',
            'blog1.excerpt': 'With these 10 simple techniques, make your English conversation flow like water...',
            'blog1.category': 'Speaking',
            
            'blog2.title': 'Complete English Grammar Guide in 30 Days',
            'blog2.date': 'March 30, 2025',
            'blog2.excerpt': 'Learn grammar without formulas and memorization, using storytelling methods...',
            'blog2.category': 'Grammar',
            
            'blog3.title': 'How to Prepare for IELTS? 60-Day Plan',
            'blog3.date': 'March 25, 2025',
            'blog3.excerpt': 'Complete 60-day plan to achieve a 7+ score on the IELTS exam...',
            'blog3.category': 'IELTS',
            
            // CTA
            'cta.title': '30% Off',
            'cta.subtitle': 'Your First Course',
            'cta.desc': 'New learners get 30% off. No code needed, just register.',
            'cta.name.placeholder': 'Full Name',
            'cta.email.placeholder': 'Email Address',
            'cta.course.default': 'Select Course...',
            'cta.course.option1': 'Everyday Conversation',
            'cta.course.option2': 'IELTS Preparation',
            'cta.course.option3': 'Professional Grammar',
            'cta.course.option4': 'TOEFL Preparation',
            'cta.btn': 'Free Registration',
            
            // About Page
            'about.hero.eyebrow': 'Our Story Since 2016',
            'about.hero.title1': 'Learn More',
            'about.hero.title2': 'About',
            'about.hero.title3': 'Polaris',
            'about.hero.desc': 'From 4 people in a basement to 65 Native teachers. A path we built with love.',
            
            'about.story.tag': '— Our Story',
            'about.story.title1': 'From a Simple Idea to the',
            'about.story.title2': 'Largest',
            'about.story.title3': 'Platform',
            'about.story.p1': 'In 2016, we started with 4 laptops in a basement. We were tired of the state of language education in Iran. Everything was thick books and memorization classes.',
            'about.story.p2': 'We recorded 4 videos and put them on a simple website. 200 people registered in the first month. We realized we weren\'t alone.',
            'about.story.p3': 'Now, after 9 years, we have 65 Native teachers, over 12,000 learners, and 200 specialized courses.',
            'about.story.p4': 'We still love our work like the first day. Every success message from our learners energizes us.',
            
            // About Timeline
            'about.timeline.tag': '— Our Journey',
            'about.timeline.title1': 'Milestones of',
            'about.timeline.title2': 'Polaris',
            
            'timeline1.year': '2016',
            'timeline1.title': 'Started with 4 People',
            'timeline1.desc': 'We started working in a small basement with 4 laptops.',
            'timeline2.year': '2018',
            'timeline2.title': '2,000 Learners',
            'timeline2.desc': 'We reached 2,000 learners and added 15 teachers to the team.',
            'timeline3.year': '2020',
            'timeline3.title': 'App Launch',
            'timeline3.desc': 'We released the dedicated Polaris app for Android and iOS.',
            'timeline4.year': '2022',
            'timeline4.title': '5,000 Learners',
            'timeline4.desc': 'We surpassed 5,000 learners and recruited 30 Native teachers.',
            'timeline5.year': '2025',
            'timeline5.title': 'Today',
            'timeline5.desc': 'With 12,000+ learners, 65 teachers, and 200 courses, we are the largest language learning platform.',
            
            // About Values
            'about.values.tag': '— Our Values',
            'about.values.title1': 'Beliefs We',
            'about.values.title2': 'Stand',
            'about.values.title3': 'By',
            
            'value1.title': 'Unmatched Quality',
            'value1.desc': 'We design each course with complete obsession. 99% learner satisfaction proves this.',
            'value2.title': 'Accessibility for All',
            'value2.desc': 'We believe quality education should be available to everyone, not just a select few.',
            'value3.title': 'Continuous Innovation',
            'value3.desc': 'We update courses every month and implement the latest teaching methods.',
            'value4.title': 'Real Support',
            'value4.desc': 'We\'re with you until you reach your goal. 24/7 support isn\'t just a slogan.',
            
            // Contact Page
            'contact.hero.eyebrow': 'Always Available',
            'contact.hero.title1': 'Get in',
            'contact.hero.title2': 'Touch',
            'contact.hero.title3': 'With Us',
            'contact.hero.desc': 'Write us any questions you have. We respond within 24 hours.',
            
            'contact.info.tag': '— Contact Info',
            'contact.info.title1': 'Ways to',
            'contact.info.title2': 'Connect',
            'contact.info.title3': 'With Us',
            
            'contact.address.title': 'Office Address',
            'contact.address': 'No. 42, Innovation Alley, Valiasr St, Tehran, 3rd Floor',
            'contact.phone.title': 'Phone Number',
            'contact.phone': '+98-21-74829310',
            'contact.phone.sub': 'Saturday to Thursday, 9 AM to 8 PM',
            'contact.email.title': 'Email',
            'contact.email': 'info@polaris-learn.com',
            'contact.email.sub': 'We usually respond within 2 hours',
            'contact.whatsapp.title': 'WhatsApp',
            'contact.whatsapp': '+98-912-345-6789',
            'contact.whatsapp.sub': '24/7 response',
            
            'contact.form.title': 'Leave Us a Message',
            'contact.form.name': 'Full Name',
            'contact.form.email': 'Email Address',
            'contact.form.subject': 'Message Subject',
            'contact.form.number': 'Phone Number',
            'contact.form.message': 'Message text...',
            'contact.form.btn': 'Send Message',
            
            // Contact FAQ
            'contact.faq.tag': '— Questions Before Contact',
            'contact.faq.q1': 'How long does it take to respond?',
            'contact.faq.a1': 'Usually within 2 hours during business hours and within 24 hours on holidays.',
            'contact.faq.q2': 'Can I visit in person?',
            'contact.faq.a2': 'Yes, you can visit our office Saturday to Thursday, 9 AM to 8 PM.',
            'contact.faq.q3': 'What about technical support?',
            'contact.faq.a3': 'Our technical team is ready 24/7 to help you. We respond via WhatsApp, Telegram, and tickets.',
            
            // Contact Map
            'contact.map.title': 'Our Location on Map',
            
            // Blog Page
            'blog.hero.eyebrow': 'Free Educational Articles',
            'blog.hero.title1': 'Polaris',
            'blog.hero.title2': 'Learning',
            'blog.hero.title3': 'Blog',
            'blog.hero.desc': 'Latest articles, tips, and tricks for learning English',
            
            // Courses Page
            'courses.hero.eyebrow': 'Over 200 Specialized Courses',
            'courses.hero.title1': 'All',
            'courses.hero.title2': 'English',
            'courses.hero.title3': 'Courses',
            'courses.hero.desc': 'From conversation to IELTS, whatever your level, we have a course for you.',
            'courses.hero.search': 'Search for your course...',
            
            // Footer
            'footer.brand.desc': 'We turn language learning from a nightmare into an enjoyable experience.',
            'footer.quick.title': 'Quick Access',
            'footer.quick.rules': 'Terms & Rules',
            'footer.quick.privacy': 'Privacy Policy',
            'footer.quick.faq': 'FAQ',
            'footer.quick.support': 'Support',
            'footer.quick.contact': 'Contact Us',
            
            'footer.courses.title': 'Popular Courses',
            'footer.courses.conversation': 'Conversation',
            'footer.courses.ielts': 'IELTS',
            'footer.courses.grammar': 'Grammar',
            'footer.courses.toefl': 'TOEFL',
            'footer.courses.listening': 'Listening',
            
            'footer.newsletter.title': 'Newsletter',
            'footer.newsletter.desc': 'Free tips every week',
            'footer.newsletter.placeholder': 'Enter your email',
            
            'footer.copyright': '© 2025 Polaris. With',
            'footer.copyright2': 'for the World',
            
            // Modal
            'modal.login.tab': 'Login',
            'modal.register.tab': 'Register',
            'modal.login.title': 'Login to Account',
            'modal.login.desc': 'If you\'ve registered, login here',
            'modal.login.email': 'Email',
            'modal.login.password': 'Password',
            'modal.login.remember': 'Remember me',
            'modal.login.forgot': 'Forgot password?',
            'modal.login.btn': 'Login',
            'modal.login.or': 'or',
            
            'modal.register.title': 'Create New Account',
            'modal.register.desc': 'Less than 2 minutes',
            'modal.register.firstname': 'First Name',
            'modal.register.lastname': 'Last Name',
            'modal.register.email': 'Email',
            'modal.register.phone': 'Phone (optional)',
            'modal.register.password': 'Password',
            'modal.register.confirm': 'Confirm Password',
            'modal.register.terms': 'I agree to',
            'modal.register.terms.link': 'Terms',
            'modal.register.terms2': '',
            'modal.register.btn': 'Register',
        },
        
        ar: {
            // Top Bar
            'topbar.phone': '٠٢١-٧٤٨٢٩٣١٠',
            'topbar.email': 'info@polaris-learn.ir',
            'topbar.slogan': 'نجم القطب لرحلتك التعليمية',
            
            // Navbar
            'nav.home': 'الرئيسية',
            'nav.about': 'من نحن',
            'nav.courses': 'الدورات',
            'nav.contact': 'اتصل بنا',
            'nav.blog': 'المدونة',
            'nav.login': 'تسجيل الدخول',
            'nav.register': 'التسجيل',
            'nav.theme.dark': 'داكن',
            'nav.theme.light': 'فاتح',
            
            // Hero Home
            'hero.eyebrow': 'أكثر من ١٢,٠٠٠ متعلم ناجح',
            'hero.title1': 'تعلم الإنجليزية',
            'hero.title2': 'باحترافية',
            'hero.title3': 'بدون كتب',
            'hero.text': 'دورات تركز على المحادثة مع مدرسين أصليين. بدون فصول مملة. ٢٠ دقيقة فقط يومياً، تحدث بطلاقة في ٣ أشهر.',
            'hero.search.category': 'جميع الدورات',
            'hero.search.placeholder': 'ماذا تريد أن تتعلم؟',
            'hero.stat1': 'دورة تخصصية',
            'hero.stat2': 'متعلم',
            'hero.stat3': 'مدرس أصلي',
            'hero.stat4': 'تقييم المستخدمين',
            
            // Features
            'features.tag': '— لماذا Polaris؟',
            'features.title1': 'تعلم بشكل مختلف،',
            'features.title2': 'سريع',
            'features.title3': 'احصل على نتائج',
            'features.desc': 'كل ما تحتاجه لإتقان اللغة الإنجليزية',
            
            'feature1.title': 'مدرسون أصليون حقيقيون',
            'feature1.desc': 'جميع مدرسينا من المملكة المتحدة والولايات المتحدة بلهجة طبيعية وأصيلة تماماً.',
            'feature2.title': 'شهادة دولية معتمدة',
            'feature2.desc': 'شهادة نهاية الدورة قابلة للتحقق لتأشيرات الدراسة والعمل.',
            'feature3.title': 'فصول مباشرة أسبوعية',
            'feature3.desc': 'جلساتان للمحادثة المباشرة أسبوعياً مع مدرس أصلي للإجابة على الأسئلة.',
            'feature4.title': 'دعم ٢٤/٧',
            'feature4.desc': 'دعم دائم والإجابة على الأسئلة في أي وقت من اليوم.',
            'feature5.title': 'تطبيق خاص',
            'feature5.desc': 'استمر في التعلم أينما كنت مع تطبيق Polaris.',
            'feature6.title': 'وصول مدى الحياة',
            'feature6.desc': 'احتفظ بالدورات للأبد مع تحديثات مجانية.',
            
            // About Preview
            'about.tag': '— عن Polaris',
            'about.title1': 'قصة',
            'about.title2': 'نجاحنا',
            'about.title3': '',
            'about.desc1': 'بدأنا بـ ٤ أشخاص في قبو. الآن لدينا ٦٥ مدرساً أصلياً و١٢,٠٠٠ متعلم.',
            'about.desc2': 'مهمتنا هي تحويل تعلم اللغة من كابوس ممل إلى تجربة ممتعة.',
            'about.stat1': 'سنوات الخبرة',
            'about.stat2': 'مدرس محترف',
            'about.stat3': 'دورة تخصصية',
            'about.stat4': 'رضا المستخدمين',
            'about.btn': 'اعرف المزيد',
            
            // Stats
            'stats.students': 'متعلم',
            'stats.teachers': 'مدرس أصلي',
            'stats.courses': 'دورة تعليمية',
            'stats.videos': 'فيديو تعليمي',
            'stats.satisfaction': 'نسبة الرضا',
            
            // FAQ Home
            'faq.tag': '— الأسئلة الشائعة',
            'faq.title1': 'أسئلة',
            'faq.title2': 'متكررة',
            'faq.title3': '',
            'faq.desc': 'أي أسئلة لديك، الإجابات هنا',
            'faq1.q': 'كيف يتم تقديم الدورات؟',
            'faq1.a': 'الدورات عبارة عن مزيج من مقاطع الفيديو غير المتصلة والفصول المباشرة عبر الإنترنت. لديك جلساتان مباشرتان أسبوعياً مع مدرس أصلي.',
            'faq2.q': 'كم من الوقت يستغرق التحدث بطلاقة؟',
            'faq2.a': 'مع ٢٠-٣٠ دقيقة من الممارسة اليومية، يمكنك التحدث بالمحادثات اليومية بطلاقة بعد ٣ أشهر.',
            'faq3.q': 'ماذا لو لم أكن راضياً عن الدورة؟',
            'faq3.a': 'لديك ضمان استرداد كامل للمبلغ لمدة ٣٠ يوماً. بدون أي أسئلة.',
            'faq4.q': 'هل الشهادة صالحة؟',
            'faq4.a': 'نعم، شهادتنا صالحة تماماً وقابلة للتحقق لتأشيرات الدراسة والعمل.',
            'faq5.q': 'هل المدرسون أصليون حقاً؟',
            'faq5.a': 'نعم، جميع مدرسينا الـ ٦٥ ولدوا في المملكة المتحدة والولايات المتحدة، والإنجليزية هي لغتهم الأم.',
            'faq6.q': 'كيف يمكنني التسجيل؟',
            'faq6.a': 'فقط انقر على زر التسجيل، اختر دورتك، وكن عضواً في أقل من دقيقتين.',
            
            // Testimonials
            'testimonials.tag': '— آراء المتعلمين',
            'testimonials.title1': 'ماذا',
            'testimonials.title2': 'يقول',
            'testimonials.title3': 'الآخرون',
            'testimonials.desc': 'أكثر من ١٢,٠٠٠ متعلم راضٍ',
            'testimonial1.name': 'سارا محمدي',
            'testimonial1.role': 'طالبة طب',
            'testimonial1.text': 'مذهل! في ٣ أشهر انتقلت من الصفر إلى مشاهدة الأفلام الإنجليزية بسهولة. دعم رائع ومدرسون مذهلون.',
            'testimonial2.name': 'علي رضائي',
            'testimonial2.role': 'مهندس برمجيات',
            'testimonial2.text': 'سجلت في IELTS وحصلت على ٧.٥. طريقة تدريسهم مختلفة وفعالة حقاً. أنصح بها الجميع.',
            'testimonial3.name': 'مريم حسيني',
            'testimonial3.role': 'مديرة تسويق',
            'testimonial3.text': 'كنت بحاجة للمحادثة الإنجليزية للعمل. في شهرين حققت تقدماً ملحوظاً. الآن أتحدث براحة في الاجتماعات الدولية.',
            'testimonial4.name': 'أمير كريمي',
            'testimonial4.role': 'طالب MBA',
            'testimonial4.text': 'أفضل قرار في حياتي. سعر مناسب، جودة ممتازة. الآن لدي أصدقاء أجانب وأتحدث معهم بسهولة.',
            
            // Courses Preview
            'courses.tag': '— أحدث الدورات',
            'courses.title1': 'دورات',
            'courses.title2': 'لغة',
            'courses.title3': 'عملية',
            'courses.desc': 'من المبتدئ إلى المتقدم، مهما كان مستواك، لدينا دورة لك',
            'courses.btn': 'عرض جميع الدورات',
            
            'course1.title': 'محادثة إنجليزية يومية — من الصفر إلى الطلاقة في ٩٠ يوماً',
            'course1.category': 'محادثة',
            'course1.level': 'مبتدئ',
            'course1.teacher': 'جيمس ويلسون',
            'course1.rating': '٤.٩',
            'course1.reviews': '٨٤٧',
            
            'course2.title': 'تحضير مكثف IELTS — ضمان ٧+',
            'course2.category': 'IELTS',
            'course2.level': 'متوسط',
            'course2.teacher': 'سارة ميتشل',
            'course2.rating': '٤.٨',
            'course2.reviews': '٦٢٣',
            
            'course3.title': 'قواعد احترافية — بدون حفظ صيغة واحدة',
            'course3.category': 'قواعد',
            'course3.level': 'متقدم',
            'course3.teacher': 'إيما روبرتس',
            'course3.rating': '٤.٧',
            'course3.reviews': '٣٩٢',
            
            // Blog Preview
            'blog.tag': '— مقالات تعليمية',
            'blog.title1': 'أحدث',
            'blog.title2': 'مقالات',
            'blog.title3': 'اللغة',
            'blog.desc': 'نصائح وحيل لتعلم اللغة الإنجليزية',
            'blog.btn': 'عرض جميع المقالات',
            
            'blog1.title': '١٠ تقنيات ذهبية لتحسين المحادثة الإنجليزية',
            'blog1.date': '١٥ أبريل ٢٠٢٥',
            'blog1.excerpt': 'بهذه التقنيات العشر البسيطة، اجعل محادثتك الإنجليزية تتدفق كالماء...',
            'blog1.category': 'محادثة',
            
            'blog2.title': 'دليل كامل لقواعد الإنجليزية في ٣٠ يوماً',
            'blog2.date': '١٠ أبريل ٢٠٢٥',
            'blog2.excerpt': 'تعلم القواعد بدون صيغ وحفظ، باستخدام أساليب سرد القصص...',
            'blog2.category': 'قواعد',
            
            'blog3.title': 'كيف تستعد لـ IELTS؟ خطة ٦٠ يوماً',
            'blog3.date': '٥ أبريل ٢٠٢٥',
            'blog3.excerpt': 'خطة كاملة لمدة ٦٠ يوماً لتحقيق ٧+ في اختبار IELTS...',
            'blog3.category': 'IELTS',
            
            // CTA
            'cta.title': 'خصم ٣٠٪',
            'cta.subtitle': 'أول دورة لك',
            'cta.desc': 'المتعلمون الجدد يحصلون على خصم ٣٠٪. بدون كود، فقط سجل.',
            'cta.name.placeholder': 'الاسم الكامل',
            'cta.email.placeholder': 'البريد الإلكتروني',
            'cta.course.default': 'اختر الدورة...',
            'cta.course.option1': 'محادثة يومية',
            'cta.course.option2': 'تحضير IELTS',
            'cta.course.option3': 'قواعد احترافية',
            'cta.course.option4': 'تحضير TOEFL',
            'cta.btn': 'تسجيل مجاني',
            
            // About Page
            'about.hero.eyebrow': 'قصتنا منذ ٢٠١٦',
            'about.hero.title1': 'اعرف',
            'about.hero.title2': 'المزيد عن',
            'about.hero.title3': 'Polaris',
            'about.hero.desc': 'من ٤ أشخاص في قبو إلى ٦٥ مدرساً أصلياً. طريق بنيناه بالحب.',
            
            'about.story.tag': '— قصتنا',
            'about.story.title1': 'من فكرة بسيطة إلى',
            'about.story.title2': 'أكبر',
            'about.story.title3': 'منصة',
            'about.story.p1': 'في عام ٢٠١٦، بدأنا بـ ٤ أجهزة كمبيوتر محمولة في قبو. كنا متعبين من حالة تعليم اللغة في إيران. كل شيء كان كتباً سميكة وفصول حفظ.',
            'about.story.p2': 'سجلنا ٤ مقاطع فيديو ووضعناها على موقع بسيط. سجل ٢٠٠ شخص في الشهر الأول. أدركنا أننا لسنا وحدنا.',
            'about.story.p3': 'الآن، بعد ٩ سنوات، لدينا ٦٥ مدرساً أصلياً، وأكثر من ١٢,٠٠٠ متعلم، و٢٠٠ دورة تخصصية.',
            'about.story.p4': 'ما زلنا نحب عملنا مثل اليوم الأول. كل رسالة نجاح من متعلمينا تمنحنا الطاقة.',
            
            // About Timeline
            'about.timeline.tag': '— رحلتنا',
            'about.timeline.title1': 'محطات',
            'about.timeline.title2': 'Polaris',
            
            'timeline1.year': '٢٠١٦',
            'timeline1.title': 'البداية مع ٤ أشخاص',
            'timeline1.desc': 'بدأنا العمل في قبو صغير بـ ٤ أجهزة كمبيوتر محمولة.',
            'timeline2.year': '٢٠١٨',
            'timeline2.title': '٢٠٠٠ متعلم',
            'timeline2.desc': 'وصلنا إلى ٢٠٠٠ متعلم وأضفنا ١٥ مدرساً للفريق.',
            'timeline3.year': '٢٠٢٠',
            'timeline3.title': 'إطلاق التطبيق',
            'timeline3.desc': 'أطلقنا تطبيق Polaris المخصص لأندرويد وiOS.',
            'timeline4.year': '٢٠٢٢',
            'timeline4.title': '٥٠٠٠ متعلم',
            'timeline4.desc': 'تجاوزنا ٥٠٠٠ متعلم وجندنا ٣٠ مدرساً أصلياً.',
            'timeline5.year': '٢٠٢٥',
            'timeline5.title': 'اليوم',
            'timeline5.desc': 'مع ١٢,٠٠٠+ متعلم و٦٥ مدرساً و٢٠٠ دورة، نحن أكبر منصة لتعلم اللغة.',
            
            // About Values
            'about.values.tag': '— قيمنا',
            'about.values.title1': 'معتقدات',
            'about.values.title2': 'ندافع',
            'about.values.title3': 'عنها',
            
            'value1.title': 'جودة لا مثيل لها',
            'value1.desc': 'نصمم كل دورة بهوس كامل. رضا المتعلمين بنسبة ٩٩٪ يثبت ذلك.',
            'value2.title': 'متاحة للجميع',
            'value2.desc': 'نؤمن بأن التعليم الجيد يجب أن يكون متاحاً للجميع، ليس فقط لقلة مختارة.',
            'value3.title': 'ابتكار مستمر',
            'value3.desc': 'نحدث الدورات كل شهر ونطبق أحدث طرق التدريس.',
            'value4.title': 'دعم حقيقي',
            'value4.desc': 'نحن معك حتى تصل إلى هدفك. الدعم ٢٤/٧ ليس مجرد شعار.',
            
            // Contact Page
            'contact.hero.eyebrow': 'متاحون دائماً',
            'contact.hero.title1': 'تواصل',
            'contact.hero.title2': 'معنا',
            'contact.hero.title3': '',
            'contact.hero.desc': 'اكتب لنا أي أسئلة لديك. نرد في غضون ٢٤ ساعة.',
            
            'contact.info.tag': '— معلومات الاتصال',
            'contact.info.title1': 'طرق',
            'contact.info.title2': 'التواصل',
            'contact.info.title3': 'معنا',
            
            'contact.address.title': 'عنوان المكتب',
            'contact.address': 'رقم ٤٢، زقاق الابتكار، شارع ولي عصر، طهران، الطابق الثالث',
            'contact.phone.title': 'رقم الهاتف',
            'contact.phone': '٠٢١-٧٤٨٢٩٣١٠',
            'contact.phone.sub': 'السبت إلى الخميس، ٩ صباحاً إلى ٨ مساءً',
            'contact.email.title': 'البريد الإلكتروني',
            'contact.email': 'info@polaris-learn.ir',
            'contact.email.sub': 'نرد عادةً في غضون ساعتين',
            'contact.whatsapp.title': 'واتساب',
            'contact.whatsapp': '٠٩١٢-٣٤٥-٦٧٨٩',
            'contact.whatsapp.sub': 'رد على مدار ٢٤ ساعة',
            
            'contact.form.title': 'اترك لنا رسالة',
            'contact.form.name': 'الاسم الكامل',
            'contact.form.email': 'البريد الإلكتروني',
            'contact.form.subject': 'موضوع الرسالة',
            'contact.form.number': 'رقم الهاتف',
            'contact.form.message': 'نص الرسالة...',
            'contact.form.btn': 'إرسال الرسالة',
            
            // Contact FAQ
            'contact.faq.tag': '— أسئلة قبل الاتصال',
            'contact.faq.q1': 'كم من الوقت يستغرق الرد؟',
            'contact.faq.a1': 'عادةً في غضون ساعتين خلال ساعات العمل وخلال ٢٤ ساعة في أيام العطل.',
            'contact.faq.q2': 'هل يمكنني الزيارة شخصياً؟',
            'contact.faq.a2': 'نعم، يمكنك زيارة مكتبنا من السبت إلى الخميس، ٩ صباحاً إلى ٨ مساءً.',
            'contact.faq.q3': 'ماذا عن الدعم الفني؟',
            'contact.faq.a3': 'فريقنا الفني جاهز ٢٤/٧ لمساعدتك. نرد عبر واتساب وتيليجرام والتذاكر.',
            
            // Contact Map
            'contact.map.title': 'موقعنا على الخريطة',
            
            // Blog Page
            'blog.hero.eyebrow': 'مقالات تعليمية مجانية',
            'blog.hero.title1': 'مدونة',
            'blog.hero.title2': 'Polaris',
            'blog.hero.title3': 'التعليمية',
            'blog.hero.desc': 'أحدث المقالات والنصائح والحيل لتعلم اللغة الإنجليزية',
            
            // Courses Page
            'courses.hero.eyebrow': 'أكثر من ٢٠٠ دورة تخصصية',
            'courses.hero.title1': 'جميع',
            'courses.hero.title2': 'دورات',
            'courses.hero.title3': 'الإنجليزية',
            'courses.hero.desc': 'من المحادثة إلى IELTS، مهما كان مستواك، لدينا دورة لك.',
            'courses.hero.search': 'ابحث عن دورتك...',
            
            // Footer
            'footer.brand.desc': 'نحول تعلم اللغة من كابوس إلى تجربة ممتعة.',
            'footer.quick.title': 'وصول سريع',
            'footer.quick.rules': 'القوانين',
            'footer.quick.privacy': 'سياسة الخصوصية',
            'footer.quick.faq': 'الأسئلة الشائعة',
            'footer.quick.support': 'الدعم',
            'footer.quick.contact': 'اتصل بنا',
            
            'footer.courses.title': 'الدورات الشائعة',
            'footer.courses.conversation': 'محادثة',
            'footer.courses.ielts': 'IELTS',
            'footer.courses.grammar': 'قواعد',
            'footer.courses.toefl': 'TOEFL',
            'footer.courses.listening': 'استماع',
            
            'footer.newsletter.title': 'النشرة البريدية',
            'footer.newsletter.desc': 'نصائح مجانية كل أسبوع',
            'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
            
            'footer.copyright': '© ٢٠٢٥ Polaris. مع',
            'footer.copyright2': 'للعالم',
            
            // Modal
            'modal.login.tab': 'تسجيل الدخول',
            'modal.register.tab': 'التسجيل',
            'modal.login.title': 'تسجيل الدخول للحساب',
            'modal.login.desc': 'إذا كنت مسجلاً، سجل الدخول هنا',
            'modal.login.email': 'البريد الإلكتروني',
            'modal.login.password': 'كلمة المرور',
            'modal.login.remember': 'تذكرني',
            'modal.login.forgot': 'نسيت كلمة المرور؟',
            'modal.login.btn': 'تسجيل الدخول',
            'modal.login.or': 'أو',
            
            'modal.register.title': 'إنشاء حساب جديد',
            'modal.register.desc': 'أقل من دقيقتين',
            'modal.register.firstname': 'الاسم الأول',
            'modal.register.lastname': 'اسم العائلة',
            'modal.register.email': 'البريد الإلكتروني',
            'modal.register.phone': 'الهاتف (اختياري)',
            'modal.register.password': 'كلمة المرور',
            'modal.register.confirm': 'تأكيد كلمة المرور',
            'modal.register.terms': 'أوافق على',
            'modal.register.terms.link': 'الشروط',
            'modal.register.terms2': '',
            'modal.register.btn': 'التسجيل',
        },
        
        tr: {
            // Top Bar
            'topbar.phone': '۰۲۱-۷۴۸۲۹۳۱۰',
            'topbar.email': 'info@polaris-learn.ir',
            'topbar.slogan': 'Öğrenme Yolculuğunuzun Kutup Yıldızı',
            
            // Navbar
            'nav.home': 'Ana Sayfa',
            'nav.about': 'Hakkımızda',
            'nav.courses': 'Kurslar',
            'nav.contact': 'İletişim',
            'nav.blog': 'Blog',
            'nav.login': 'Giriş',
            'nav.register': 'Kayıt Ol',
            'nav.theme.dark': 'Koyu',
            'nav.theme.light': 'Açık',
            
            // Hero Home
            'hero.eyebrow': '12.000+ Başarılı Öğrenci',
            'hero.title1': 'İngilizceyi',
            'hero.title2': 'Profesyonelce',
            'hero.title3': 'Kitapsız Öğren',
            'hero.text': 'Native öğretmenlerle konuşma odaklı kurslar. Sıkıcı sınıflar yok. Günde sadece 20 dakika, 3 ayda akıcı konuş.',
            'hero.search.category': 'Tüm Kurslar',
            'hero.search.placeholder': 'Ne öğrenmek istiyorsun?',
            'hero.stat1': 'Özel Kurs',
            'hero.stat2': 'Öğrenci',
            'hero.stat3': 'Native Öğretmen',
            'hero.stat4': 'Kullanıcı Puanı',
            
            // Features
            'features.tag': '— Neden Polaris?',
            'features.title1': 'Farklı Öğren,',
            'features.title2': 'Hızlı',
            'features.title3': 'Sonuç Al',
            'features.desc': 'İngilizcede ustalaşmak için ihtiyacın olan her şey',
            
            'feature1.title': 'Gerçek Native Öğretmenler',
            'feature1.desc': 'Tüm öğretmenlerimiz İngiltere ve ABD\'den, tamamen doğal ve otantik aksanla.',
            'feature2.title': 'Uluslararası Sertifika',
            'feature2.desc': 'Eğitim ve çalışma vizeleri için doğrulanabilir kurs bitirme sertifikası.',
            'feature3.title': 'Haftalık Canlı Dersler',
            'feature3.desc': 'Haftada 2 canlı konuşma seansı, Native öğretmenle soru-cevap.',
            'feature4.title': '7/24 Destek',
            'feature4.desc': 'Günün her saatinde sürekli destek ve sorulara yanıt.',
            'feature5.title': 'Özel Uygulama',
            'feature5.desc': 'Nerede olursan ol Polaris uygulamasıyla öğrenmeye devam et.',
            'feature6.title': 'Ömür Boyu Erişim',
            'feature6.desc': 'Kursları ücretsiz güncellemelerle sonsuza kadar sakla.',
            
            // About Preview
            'about.tag': '— Polaris Hakkında',
            'about.title1': 'Başarı',
            'about.title2': 'Hikayemiz',
            'about.title3': '',
            'about.desc1': 'Bir bodrum katında 4 kişiyle başladık. Şimdi 65 Native öğretmen ve 12.000 öğrencimiz var.',
            'about.desc2': 'Misyonumuz, dil öğrenmeyi sıkıcı bir kabustan keyifli bir deneyime dönüştürmek.',
            'about.stat1': 'Yıl Deneyim',
            'about.stat2': 'Profesyonel Öğretmen',
            'about.stat3': 'Özel Kurs',
            'about.stat4': 'Kullanıcı Memnuniyeti',
            'about.btn': 'Daha Fazla Bil',
            
            // Stats
            'stats.students': 'Öğrenci',
            'stats.teachers': 'Native Öğretmen',
            'stats.courses': 'Eğitim Kursu',
            'stats.videos': 'Eğitim Videosu',
            'stats.satisfaction': 'Memnuniyet Oranı',
            
            // FAQ Home
            'faq.tag': '— Sık Sorulan',
            'faq.title1': 'Sık',
            'faq.title2': 'Sorular',
            'faq.title3': '',
            'faq.desc': 'Tüm sorularının cevapları burada',
            'faq1.q': 'Kurslar nasıl işleniyor?',
            'faq1.a': 'Kurslar, çevrimdışı videolar ve canlı çevrimiçi sınıfların birleşimidir. Haftada 2 canlı oturumun var, Native öğretmenle.',
            'faq2.q': 'Akıcı konuşmak ne kadar sürer?',
            'faq2.a': 'Günde 20-30 dakika pratikle, 3 ay sonra günlük konuşmaları akıcı şekilde yapabilirsin.',
            'faq3.q': 'Kurstan memnun kalmazsam ne olur?',
            'faq3.a': '30 günlük tam para iade garantin var. Hiçbir soru sorulmaz.',
            'faq4.q': 'Sertifika geçerli mi?',
            'faq4.a': 'Evet, sertifikamız eğitim ve çalışma vizeleri için tamamen geçerli ve doğrulanabilir.',
            'faq5.q': 'Öğretmenler gerçekten Native mi?',
            'faq5.a': 'Evet, 65 öğretmenimizin tamamı İngiltere ve ABD doğumlu ve ana dilleri İngilizce.',
            'faq6.q': 'Nasıl kayıt olabilirim?',
            'faq6.a': 'Kayıt düğmesine tıkla, kursunu seç ve 2 dakikadan az sürede üye ol.',
            
            // Testimonials
            'testimonials.tag': '— Öğrenci Yorumları',
            'testimonials.title1': 'Diğerleri',
            'testimonials.title2': 'Ne Diyor',
            'testimonials.title3': '',
            'testimonials.desc': '12.000+ memnun öğrenci',
            'testimonial1.name': 'Sara Mohammadi',
            'testimonial1.role': 'Tıp Öğrencisi',
            'testimonial1.text': 'Harika! 3 ayda sıfırdan İngilizce filmleri rahatça izleyebilecek seviyeye geldim. Mükemmel destek ve harika öğretmenler.',
            'testimonial2.name': 'Ali Rezaei',
            'testimonial2.role': 'Yazılım Mühendisi',
            'testimonial2.text': 'IELTS için kaydoldum ve 7.5 aldım. Öğretim yöntemleri gerçekten farklı ve etkili. Herkese öneririm.',
            'testimonial3.name': 'Maryam Hosseini',
            'testimonial3.role': 'Pazarlama Müdürü',
            'testimonial3.text': 'İşim için İngilizce konuşmaya ihtiyacım vardı. 2 ayda kayda değer ilerleme kaydettim. Şimdi uluslararası toplantılarda rahatça konuşuyorum.',
            'testimonial4.name': 'Amir Karimi',
            'testimonial4.role': 'MBA Öğrencisi',
            'testimonial4.text': 'Hayatımın en iyi kararıydı. Uygun fiyat, mükemmel kalite. Artık birçok yabancı arkadaşım var ve onlarla kolayca sohbet ediyorum.',
            
            // Courses Preview
            'courses.tag': '— En Yeni Kurslar',
            'courses.title1': 'Pratik',
            'courses.title2': 'Dil',
            'courses.title3': 'Kursları',
            'courses.desc': 'Başlangıçtan ileri seviyeye, hangi seviyede olursan ol, sana uygun bir kursumuz var',
            'courses.btn': 'Tüm Kursları Gör',
            
            'course1.title': 'Günlük İngilizce Konuşma — 90 Günde Sıfırdan Akıcılığa',
            'course1.category': 'Konuşma',
            'course1.level': 'Başlangıç',
            'course1.teacher': 'James Wilson',
            'course1.rating': '4.9',
            'course1.reviews': '847',
            
            'course2.title': 'Yoğun IELTS Hazırlık — Garantili 7+ Puan',
            'course2.category': 'IELTS',
            'course2.level': 'Orta',
            'course2.teacher': 'Sarah Mitchell',
            'course2.rating': '4.8',
            'course2.reviews': '623',
            
            'course3.title': 'Profesyonel Dilbilgisi — Tek Bir Formül Ezberlemeden',
            'course3.category': 'Dilbilgisi',
            'course3.level': 'İleri',
            'course3.teacher': 'Emma Roberts',
            'course3.rating': '4.7',
            'course3.reviews': '392',
            
            // Blog Preview
            'blog.tag': '— Eğitim Makaleleri',
            'blog.title1': 'En Yeni',
            'blog.title2': 'Dil',
            'blog.title3': 'Makaleleri',
            'blog.desc': 'İngilizce öğrenmek için ipuçları ve püf noktaları',
            'blog.btn': 'Tüm Makaleleri Gör',
            
            'blog1.title': 'İngilizce Konuşmayı Geliştirmek için 10 Altın Teknik',
            'blog1.date': '15 Nisan 2025',
            'blog1.excerpt': 'Bu 10 basit teknikle İngilizce konuşmanı su gibi akıcı hale getir...',
            'blog1.category': 'Konuşma',
            
            'blog2.title': '30 Günde Tam İngilizce Dilbilgisi Rehberi',
            'blog2.date': '10 Nisan 2025',
            'blog2.excerpt': 'Dilbilgisini formüller ve ezber olmadan, hikaye anlatımı yöntemleriyle öğren...',
            'blog2.category': 'Dilbilgisi',
            
            'blog3.title': 'IELTS\'e Nasıl Hazırlanılır? 60 Günlük Plan',
            'blog3.date': '5 Nisan 2025',
            'blog3.excerpt': 'IELTS sınavında 7+ puan almak için tam 60 günlük plan...',
            'blog3.category': 'IELTS',
            
            // CTA
            'cta.title': '%30 İndirim',
            'cta.subtitle': 'İlk Kursun',
            'cta.desc': 'Yeni öğrenciler %30 indirim alır. Kod gerekmez, sadece kayıt ol.',
            'cta.name.placeholder': 'Ad Soyad',
            'cta.email.placeholder': 'E-posta Adresi',
            'cta.course.default': 'Kurs Seç...',
            'cta.course.option1': 'Günlük Konuşma',
            'cta.course.option2': 'IELTS Hazırlık',
            'cta.course.option3': 'Profesyonel Dilbilgisi',
            'cta.course.option4': 'TOEFL Hazırlık',
            'cta.btn': 'Ücretsiz Kayıt',
            
            // About Page
            'about.hero.eyebrow': '2016\'dan Beri Hikayemiz',
            'about.hero.title1': 'Hakkında',
            'about.hero.title2': 'Daha Fazla',
            'about.hero.title3': 'Bilgi',
            'about.hero.desc': 'Bir bodrum katında 4 kişiden 65 Native öğretmene. Sevgiyle inşa ettiğimiz bir yol.',
            
            'about.story.tag': '— Hikayemiz',
            'about.story.title1': 'Basit Bir Fikirden',
            'about.story.title2': 'En Büyük',
            'about.story.title3': 'Platforma',
            'about.story.p1': '2016\'da bir bodrum katında 4 dizüstü bilgisayarla başladık. İran\'daki dil eğitiminin durumundan bıkmıştık. Her şey kalın kitaplar ve ezber sınıflarıydı.',
            'about.story.p2': '4 video kaydettik ve basit bir siteye koyduk. İlk ayda 200 kişi kaydoldu. Yalnız olmadığımızı anladık.',
            'about.story.p3': 'Şimdi, 9 yıl sonra, 65 Native öğretmenimiz, 12.000\'den fazla öğrencimiz ve 200 özel kursumuz var.',
            'about.story.p4': 'Hâlâ ilk günkü gibi işimizi seviyoruz. Öğrencilerimizden gelen her başarı mesajı bize enerji veriyor.',
            
            // About Timeline
            'about.timeline.tag': '— Yolculuğumuz',
            'about.timeline.title1': 'Kilometre',
            'about.timeline.title2': 'Taşları',
            
            'timeline1.year': '2016',
            'timeline1.title': '4 Kişiyle Başlangıç',
            'timeline1.desc': 'Küçük bir bodrum katında 4 dizüstü bilgisayarla çalışmaya başladık.',
            'timeline2.year': '2018',
            'timeline2.title': '2.000 Öğrenci',
            'timeline2.desc': '2.000 öğrenciye ulaştık ve ekibe 15 öğretmen ekledik.',
            'timeline3.year': '2020',
            'timeline3.title': 'Uygulama Lansmanı',
            'timeline3.desc': 'Android ve iOS için özel Polaris uygulamasını yayınladık.',
            'timeline4.year': '2022',
            'timeline4.title': '5.000 Öğrenci',
            'timeline4.desc': '5.000 öğrenciyi aştık ve 30 Native öğretmeni işe aldık.',
            'timeline5.year': '2025',
            'timeline5.title': 'Bugün',
            'timeline5.desc': '12.000+ öğrenci, 65 öğretmen ve 200 kursla en büyük dil öğrenme platformuyuz.',
            
            // About Values
            'about.values.tag': '— Değerlerimiz',
            'about.values.title1': 'Savunduğumuz',
            'about.values.title2': 'İnançlar',
            'about.values.title3': '',
            
            'value1.title': 'Eşsiz Kalite',
            'value1.desc': 'Her kursu tam bir titizlikle tasarlıyoruz. %99 öğrenci memnuniyeti bunun kanıtı.',
            'value2.title': 'Herkes İçin Erişilebilir',
            'value2.desc': 'Kaliteli eğitimin sadece seçilmiş birkaç kişi için değil, herkes için erişilebilir olması gerektiğine inanıyoruz.',
            'value3.title': 'Sürekli İnovasyon',
            'value3.desc': 'Kursları her ay güncelliyor ve en yeni öğretim yöntemlerini uyguluyoruz.',
            'value4.title': 'Gerçek Destek',
            'value4.desc': 'Hedefine ulaşana kadar yanındayız. 7/24 destek sadece bir slogan değil.',
            
            // Contact Page
            'contact.hero.eyebrow': 'Her Zaman Ulaşılabilir',
            'contact.hero.title1': 'Bizimle',
            'contact.hero.title2': 'İletişime',
            'contact.hero.title3': 'Geç',
            'contact.hero.desc': 'Tüm sorularını bize yaz. 24 saat içinde yanıtlıyoruz.',
            
            'contact.info.tag': '— İletişim Bilgileri',
            'contact.info.title1': 'Bize',
            'contact.info.title2': 'Ulaşma',
            'contact.info.title3': 'Yolları',
            
            'contact.address.title': 'Ofis Adresi',
            'contact.address': 'No. 42, İnovasyon Sokağı, Valiasr Cd., Tahran, 3. Kat',
            'contact.phone.title': 'Telefon Numarası',
            'contact.phone': '+98-21-74829310',
            'contact.phone.sub': 'Cumartesi-Perşembe, 09:00-20:00',
            'contact.email.title': 'E-posta',
            'contact.email': 'info@polaris-learn.com',
            'contact.email.sub': 'Genellikle 2 saat içinde yanıtlarız',
            'contact.whatsapp.title': 'WhatsApp',
            'contact.whatsapp': '+98-912-345-6789',
            'contact.whatsapp.sub': '7/24 yanıt',
            
            'contact.form.title': 'Bize Mesaj Bırak',
            'contact.form.name': 'Ad Soyad',
            'contact.form.email': 'E-posta Adresi',
            'contact.form.subject': 'Mesaj Konusu',
            'contact.form.number': 'Telefon Numarası',
            'contact.form.message': 'Mesaj metni...',
            'contact.form.btn': 'Mesaj Gönder',
            
            // Contact FAQ
            'contact.faq.tag': '— İletişim Öncesi Sorular',
            'contact.faq.q1': 'Yanıt vermek ne kadar sürer?',
            'contact.faq.a1': 'Genellikle iş saatlerinde 2 saat içinde, tatillerde 24 saat içinde.',
            'contact.faq.q2': 'Şahsen ziyaret edebilir miyim?',
            'contact.faq.a2': 'Evet, Cumartesi-Perşembe 09:00-20:00 arası ofisimizi ziyaret edebilirsiniz.',
            'contact.faq.q3': 'Teknik destek nasıl?',
            'contact.faq.a3': 'Teknik ekibimiz 7/24 size yardıma hazır. WhatsApp, Telegram ve biletler aracılığıyla yanıt veriyoruz.',
            
            // Contact Map
            'contact.map.title': 'Haritadaki Konumumuz',
            
            // Blog Page
            'blog.hero.eyebrow': 'Ücretsiz Eğitim Makaleleri',
            'blog.hero.title1': 'Polaris',
            'blog.hero.title2': 'Öğrenme',
            'blog.hero.title3': 'Blogu',
            'blog.hero.desc': 'İngilizce öğrenmek için en yeni makaleler, ipuçları ve püf noktaları',
            
            // Courses Page
            'courses.hero.eyebrow': '200\'den Fazla Özel Kurs',
            'courses.hero.title1': 'Tüm',
            'courses.hero.title2': 'İngilizce',
            'courses.hero.title3': 'Kursları',
            'courses.hero.desc': 'Konuşmadan IELTS\'e, hangi seviyede olursan ol, sana uygun bir kursumuz var.',
            'courses.hero.search': 'Kursunu ara...',
            
            // Footer
            'footer.brand.desc': 'Dil öğrenmeyi bir kabustan keyifli bir deneyime dönüştürüyoruz.',
            'footer.quick.title': 'Hızlı Erişim',
            'footer.quick.rules': 'Kurallar',
            'footer.quick.privacy': 'Gizlilik Politikası',
            'footer.quick.faq': 'SSS',
            'footer.quick.support': 'Destek',
            'footer.quick.contact': 'İletişim',
            
            'footer.courses.title': 'Popüler Kurslar',
            'footer.courses.conversation': 'Konuşma',
            'footer.courses.ielts': 'IELTS',
            'footer.courses.grammar': 'Dilbilgisi',
            'footer.courses.toefl': 'TOEFL',
            'footer.courses.listening': 'Dinleme',
            
            'footer.newsletter.title': 'Bülten',
            'footer.newsletter.desc': 'Her hafta ücretsiz ipuçları',
            'footer.newsletter.placeholder': 'E-postanı gir',
            
            'footer.copyright': '© 2025 Polaris.',
            'footer.copyright2': 'Dünya için',
            
            // Modal
            'modal.login.tab': 'Giriş',
            'modal.register.tab': 'Kayıt Ol',
            'modal.login.title': 'Hesaba Giriş Yap',
            'modal.login.desc': 'Kayıtlıysan buradan giriş yap',
            'modal.login.email': 'E-posta',
            'modal.login.password': 'Şifre',
            'modal.login.remember': 'Beni hatırla',
            'modal.login.forgot': 'Şifreni mi unuttun?',
            'modal.login.btn': 'Giriş Yap',
            'modal.login.or': 'veya',
            
            'modal.register.title': 'Yeni Hesap Oluştur',
            'modal.register.desc': '2 dakikadan az',
            'modal.register.firstname': 'Ad',
            'modal.register.lastname': 'Soyad',
            'modal.register.email': 'E-posta',
            'modal.register.phone': 'Telefon (isteğe bağlı)',
            'modal.register.password': 'Şifre',
            'modal.register.confirm': 'Şifreyi Onayla',
            'modal.register.terms': '',
            'modal.register.terms.link': 'Şartları',
            'modal.register.terms2': 'kabul ediyorum',
            'modal.register.btn': 'Kayıt Ol',
        }
    };
    
    // ========== GLOBAL FUNCTIONS ==========
    window.getTranslation = function(key, lang) {
        const currentLang = lang || localStorage.getItem('polaris-lang') || 'fa';
        const langData = translations[currentLang];
        
        if (!langData) {
            const fallback = translations['fa'];
            return fallback[key] || key;
        }
        
        return langData[key] || translations['fa'][key] || key;
    };
    
    window.translatePage = function(lang) {
        const currentLang = lang || localStorage.getItem('polaris-lang') || 'fa';
        
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            const translation = window.getTranslation(key, currentLang);
            
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Skip - handled by placeholder translation
                } else if (el.tagName === 'SELECT') {
                    const options = el.querySelectorAll('option');
                    options.forEach(function(option) {
                        const optionKey = option.getAttribute('data-i18n');
                        if (optionKey) {
                            const optionTranslation = window.getTranslation(optionKey, currentLang);
                            if (optionTranslation) {
                                option.textContent = optionTranslation;
                            }
                        }
                    });
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = window.getTranslation(key, currentLang);
            if (translation) {
                el.placeholder = translation;
            }
        });
        
        // Update RTL/LTR
        const isRTL = ['fa', 'ar'].includes(currentLang);
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        
        // Update language button
        updateLangButton(currentLang);
        
        // Re-trigger counter animation with new numbers
        setTimeout(function() {
            document.querySelectorAll('.num, .stat-num, .stat-big').forEach(function(el) {
                el.removeAttribute('data-counted');
            });
            if (window.animateCounters) window.animateCounters();
        }, 200);
        
        console.log('🌐 Polaris - Language switched to: ' + currentLang);
    };
    
    function updateLangButton(lang) {
        const langData = {
            fa: { flag: '🇮🇷', code: 'FA' },
            en: { flag: '🇬🇧', code: 'EN' },
            ar: { flag: '🇸🇦', code: 'AR' },
            tr: { flag: '🇹🇷', code: 'TR' }
        };
        
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const d = langData[lang] || langData['fa'];
            langToggle.innerHTML = d.flag + ' ' + d.code + ' <i class="fas fa-chevron-down"></i>';
        }
    }
    
    // ========== INITIALIZATION ==========
    document.addEventListener('DOMContentLoaded', function() {
        const savedLang = localStorage.getItem('polaris-lang') || 'fa';
        window.translatePage(savedLang);
    });
    
    // ========== LANGUAGE SWITCHER ==========
    document.addEventListener('click', function(e) {
        const langLink = e.target.closest('.lang-dropdown-menu a');
        if (langLink) {
            e.preventDefault();
            const lang = langLink.getAttribute('data-lang');
            if (lang) {
                localStorage.setItem('polaris-lang', lang);
                window.translatePage(lang);
                
                const langMenu = document.getElementById('langMenu');
                if (langMenu) langMenu.classList.remove('show');
            }
        }
    });
    
    // ========== EXPORT ==========
    window.i18n = {
        getTranslation: window.getTranslation,
        translatePage: window.translatePage,
        translations: translations
    };
    
    console.log('🌐 Polaris i18n System Ready - 4 Languages (FA, EN, AR, TR)');
    
})();