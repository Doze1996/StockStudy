(function () {
  const PASSWORD_HASH = '9782db6027f5f37025700d231e28c64c9f78ccd455912e17e3f3a027dc4c9b67';
  const AUTH_KEY = 'stockstudy_auth';
  const repoBase = '/StockStudy/';
  const path = location.pathname;
  const isLoginPage = path.endsWith(repoBase) || path.endsWith(repoBase + 'index.html') || path.endsWith('/index.html');

  function goLogin() {
    location.replace(repoBase + 'index.html');
  }

  function goHome() {
    location.replace(repoBase + 'pages/home.html');
  }

  if (!isLoginPage) {
    if (localStorage.getItem(AUTH_KEY) !== '1') {
      goLogin();
    }
    return;
  }

  if (localStorage.getItem(AUTH_KEY) === '1') {
    goHome();
    return;
  }

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  async function login() {
    const input = prompt('请输入访问密码');
    const inputHash = await sha256(input || '');

    if (inputHash === PASSWORD_HASH) {
      localStorage.setItem(AUTH_KEY, '1');
      goHome();
      return;
    }

    document.documentElement.innerHTML = '<body style="font-family:sans-serif;padding:40px;"><h1>StockStudy</h1><p>密码不正确。</p><p><a href="/StockStudy/index.html">重新输入</a></p></body>';
  }

  login();
})();
