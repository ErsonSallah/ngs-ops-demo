/* NGS OPS demo theme control. Does not touch operational demo data. */
(() => {
  'use strict';
  const key = 'ngs_ops_v11_theme';
  let stored = null;
  try { stored = localStorage.getItem(key); } catch (_) {}
  const apply = (mode) => {
    const theme = mode === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#171d3b' : '#202aa2';
    const button = document.getElementById('themeToggle');
    if (button) {
      const next = theme === 'dark' ? 'Light' : 'Dark';
      button.setAttribute('aria-label', 'Switch to ' + next.toLowerCase() + ' mode');
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.querySelector('.theme-toggle-icon').textContent = theme === 'dark' ? '☀' : '☾';
      button.querySelector('.theme-toggle-label').textContent = next + ' mode';
      button.title = 'Switch to ' + next.toLowerCase() + ' mode';
    }
  };
  apply(stored === 'dark' ? 'dark' : 'light');
  document.addEventListener('DOMContentLoaded', () => {
    apply(document.documentElement.dataset.theme);
    document.getElementById('themeToggle')?.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(key, next); } catch (_) {}
    });
  });
})();
