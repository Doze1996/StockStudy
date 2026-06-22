(function () {
  var input = document.getElementById('codeInput');
  var button = document.getElementById('enterButton');
  var message = document.getElementById('codeMessage');
  var expected = ['8', '0', '5', '6'].join('');

  sessionStorage.removeItem('stockstudy_auth');
  localStorage.removeItem('stockstudy_auth');

  function openSite() {
    if (input.value === expected) {
      sessionStorage.setItem('stockstudy_auth', '1');
      window.location.href = 'pages/home.html';
      return;
    }
    message.textContent = '访问码不正确';
    input.value = '';
    input.focus();
  }

  button.addEventListener('click', openSite);
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      openSite();
    }
  });
  input.focus();
})();
