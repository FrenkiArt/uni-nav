/**
 * Создадим наше меню
 */
const menu = new mobileNav({
  trigersList: '#triger1',
  mainNav: '.navigation',
  navPosition: 'left',
  disableAt: 800,
});

menu.startFns();

console.log(menu);
