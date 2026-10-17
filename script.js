(() => {
  const root = document.documentElement;
  const isBengali = () => root.lang.toLowerCase().startsWith('bn');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  const savedTheme = (() => {
    try { return localStorage.getItem('ridwanul-theme'); } catch { return null; }
  })();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === 'dark';
    if (themeIcon) themeIcon.textContent = isDark ? '☀' : '☾';
    if (themeLabel) themeLabel.textContent = isBengali() ? (isDark ? 'লাইট মোড' : 'ডার্ক মোড') : (isDark ? 'Light mode' : 'Dark mode');
    if (themeToggle) themeToggle.setAttribute('aria-label', isBengali() ? (isDark ? 'লাইট মোড চালু করুন' : 'ডার্ক মোড চালু করুন') : (isDark ? 'Switch to light mode' : 'Switch to dark mode'));
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', isDark ? '#101a14' : '#0f9f55');
  }
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  themeToggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try { localStorage.setItem('ridwanul-theme', nextTheme); } catch { /* Theme still works for this page view. */ }
  });

  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  function closeMenu() {
    nav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  }
  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav?.classList.toggle('is-open', !expanded);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });

  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const publicationCards = Array.from(document.querySelectorAll('.publication-card'));
  const publicationCount = document.getElementById('publication-count');
  function applyPublicationFilter(filter) {
    let shown = 0;
    publicationCards.forEach(card => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.hidden = !matches;
      if (matches) shown += 1;
    });
    filterButtons.forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (publicationCount) publicationCount.textContent = isBengali() ? `${String(shown).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[Number(d)])}টি প্রকাশনা` : `${shown} publication${shown === 1 ? '' : 's'}`;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => applyPublicationFilter(button.dataset.filter || 'all')));
  applyPublicationFilter('all');

  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
})();
