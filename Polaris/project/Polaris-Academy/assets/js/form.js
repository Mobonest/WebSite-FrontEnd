const messages = {
  fa: {
    invalidPhone: '❌ شماره معتبر وارد کنید',
    codeSent: '✅ کد تأیید ارسال شد!',
    fillAllFields: '❌ همه فیلدها را پر کنید',
    consultSuccess: '✅ ثبت شد! بزودی تماس می‌گیریم.'
  },
  en: {
    invalidPhone: '❌ Please enter a valid number',
    codeSent: '✅ Verification code sent!',
    fillAllFields: '❌ Please fill all fields',
    consultSuccess: '✅ Registered! We will call you soon.'
  }
};

function getLang() {
  return localStorage.getItem('linguaLang') || 'fa';
}

const loginBtn = document.getElementById('loginBtn'), loginModal = document.getElementById('loginModal'), loginForm = document.getElementById('loginForm'), loginMsg = document.getElementById('loginMessage');
loginBtn?.addEventListener('click', () => loginModal.style.display = 'flex');
loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const phone = document.getElementById('loginPhone').value.trim();
  const lang = getLang();
  if (!phone || phone.length < 10) { loginMsg.innerHTML = messages[lang].invalidPhone; loginMsg.style.color = '#DC2626'; return; }
  localStorage.setItem('linguaUsers', JSON.stringify([...(JSON.parse(localStorage.getItem('linguaUsers')||'[]')), phone]));
  loginMsg.innerHTML = messages[lang].codeSent; loginMsg.style.color = '#10B981';
  setTimeout(() => { loginMsg.innerHTML = ''; loginModal.style.display = 'none'; document.getElementById('loginPhone').value = ''; }, 2000);
});

const consultForm = document.getElementById('consultForm'), consultMsg = document.getElementById('consultMessage');
consultForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('consultName').value.trim(), phone = document.getElementById('consultPhone').value.trim(), langVal = document.getElementById('consultLang').value;
  const lang = getLang();
  if (!name || !phone || !langVal) { consultMsg.innerHTML = messages[lang].fillAllFields; consultMsg.style.color = '#DC2626'; setTimeout(() => consultMsg.innerHTML = '', 3000); return; }
  const consults = JSON.parse(localStorage.getItem('linguaConsults')||'[]'); consults.push({name,phone,lang:langVal,date:new Date().toISOString()}); localStorage.setItem('linguaConsults', JSON.stringify(consults));
  consultMsg.innerHTML = messages[lang].consultSuccess; consultMsg.style.color = '#10B981'; consultForm.reset();
  setTimeout(() => consultMsg.innerHTML = '', 4000);
});