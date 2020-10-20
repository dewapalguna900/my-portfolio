const toogleNav = {
    toogleNavMenu: function () {
        document.querySelector('#btn-navigation').addEventListener('click', function (event) {
            event.preventDefault();

            const navItems = document.querySelector('#nav-items');

            if (getComputedStyle(navItems).display === 'none') {
                toogleNav.displayNavigations(navItems);
            } else {
                toogleNav.hideNavigations(navItems);
            }
        })
    },
    displayNavigations: function (navItems) {
        document.querySelector('#btn-navigation').innerHTML = `<i class="fas fa-times text-white fa-2x"></i>`;
        navItems.classList.remove('hidden');
        // navItems.classList.replace('-translate-x-32', 'translate-x-0');
    },
    hideNavigations: function (navItems) {
        document.querySelector('#btn-navigation').innerHTML = `<i class="fas fa-bars text-white fa-2x">`;
        navItems.classList.add('hidden');
        // navItems.classList.replace('translate-x-0', '-translate-x-32');
    }
}

export default toogleNav;