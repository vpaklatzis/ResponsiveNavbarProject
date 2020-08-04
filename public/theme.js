if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') 
    console.log('🎉 Dark mode is supported');
  
if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') 
    console.log('🎉 Prefers-color-scheme is supported');

const themeMap = {
    dark: "light",
    light: "dark"
};

const bodyClass = document.body.classList;
const darkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkModeOn) {
    localStorage.setItem("dark", Object.keys("dark"));
    bodyClass.add("dark");
} else {
    localStorage.setItem("light", Object.keys("light"));
    bodyClass.add("light");
}
   
function toggleTheme() {
    const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
    bodyClass.add(theme);
    const current = theme;
    const next = themeMap[current];
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}  

document.getElementById('themeButton').onclick = toggleTheme;