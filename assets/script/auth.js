(function () {
  const PASSWORD_HASH = '9782db6027f5f37025700d231e28c64c9f78ccd455912e17e3f3a027dc4c9b67';
  const AUTH_KEY = 'stockstudy_auth';
  const isHomePage = location.pathname.endsWith('/') || location.pathname.endsWith('/index.html');

  async function sha256(text) {
    const data = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  function deny(message) {
    document.documentElement.innerHTML = '<head><title>Access Denied</title></head><body style="font-family: sans-serif; padding: 40px;"><h1>Access Denied</h1><p>' + message + '</p></body>';
    throw new Error('Access Denied');
  }

  async function protect() {
    if (sessionStorage.getItem(AUTH_KEY) === '1') {
      return;
    }

    if (!isHomePage) {
      location.replace('../index.html');
      return;
    }

    const input = prompt('请输入访问密码');
    const inputHash = await sha256(input || '');

    if (inputHash === PASSWORD_HASH) {
      sessionStorage.setItem(AUTH_KEY, '1');
      return;
    }

    deny('密码错误，无法访问。');
  }

  protect();
})();
