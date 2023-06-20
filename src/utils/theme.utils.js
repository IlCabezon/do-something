export const themeSwitcher = () => {
  const html = document.getElementById('app');

  if (localStorage.theme === 'dark') {
    html.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }
};
