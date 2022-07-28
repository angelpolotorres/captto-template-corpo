// Header JS
const toggleNav = document.getElementById('toggle-responsive');
const menu = document.getElementById('menu-responsive');

toggleNav.addEventListener('click', () => {
    const clases = [...menu.classList];
    if (clases.includes('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
    } else {
        menu.classList.remove('block');
        menu.classList.add('hidden');
    }
});
// END Header JS
