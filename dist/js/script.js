// Icon Toggle
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');

// Theme Vars
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Icon Toggling
const iconToggle = () => {
  darkIcon.classList.toggle('display-none');
  lightIcon.classList.toggle('display-none');
};

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    lightIcon.classList.add('display-none');
    return;
  }
  darkIcon.classList.add('display-none');
};

// Manual Theme Check
const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
};

// Call theme switch on clicking buttons
lightIcon.addEventListener('click', () => {
  themeSwitch();
});

darkIcon.addEventListener('click', () => {
  themeSwitch();
});

// Invoke theme check on initial load
themeCheck();
