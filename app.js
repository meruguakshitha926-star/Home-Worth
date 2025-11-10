// Basic client-side login for demo
(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = /** @type {HTMLInputElement} */(document.getElementById('username')).value.trim();
    const password = /** @type {HTMLInputElement} */(document.getElementById('password')).value;

    if (!username) {
      alert('Please enter username');
      return;
    }
    // Accept any password for demo

    localStorage.setItem('bhva_user', JSON.stringify({ username, t: Date.now() }));
    window.location.href = 'dashboard.html';
  });
})();


