const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

// 主题切换
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.classList.add('light');
  if (themeToggle) themeToggle.textContent = '🌞';
}

themeToggle?.addEventListener('click', () => {
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '🌞' : '🌙';
});

// 联系表单演示
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');
const tip = document.getElementById('form-tip');

sendBtn?.addEventListener('click', () => {
  const email = /** @type {HTMLInputElement} */(emailInput)?.value?.trim();
  const message = /** @type {HTMLTextAreaElement} */(messageInput)?.value?.trim();
  if (!email || !message) {
    tip.textContent = '请填写邮箱与留言。';
    return;
  }
  // 仅本地演示，不发送网络请求
  tip.textContent = '感谢留言！(演示，不会真正发送)';
  emailInput.value = '';
  messageInput.value = '';
});


