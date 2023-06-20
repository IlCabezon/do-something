export const themeSwitcher = () => {
  const html = document.getElementById('app');

  if (
    localStorage.theme === 'dark'
    || (!('theme' in localStorage)
      && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    html.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }
};
