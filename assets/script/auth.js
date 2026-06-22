(function () {
  const PASSWORD = '8056';
  const AUTH_KEY = 'stockstudy_auth';
  const repoBase = '/StockStudy/';
  const path = location.pathname;
  const isLoginPage = path.endsWith(repoBase) || path.endsWith(repoBase + 'index.html') || path.endsWith('/index.html');
  const hasAuthParam = new URLSearchParams(location.search).get('auth') === '1';

  function goLogin() {
    location.replace(repoBase + 'index.html');
  }

  function goHome() {
    location.replace(repoBase + 'pages/home.html?auth=1');
  }

  if (!isLoginPage) {
    if (hasAuthParam) {
      sessionStorage.setItem(AUTH_KEY, '1');
      history.replaceState(null, '', location.pathname);
      return;
    }

    if (sessionStorage.getItem(AUTH_KEY) !== '1') {
      goLogin();
    }
    return;
  }

  sessionStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_KEY);

  const input = prompt('请输入访问密码');

  if (input === PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, '1');
    goHome();
    return;
  }

  document.documentElement.innerHTML = '<body style="font-family:sans-serif;padding:40px;"><h1>StockStudy</h1><p>密码不正确。</p><p><a href="/StockStudy/index.html">重新输入</a></p></body>';
})();
