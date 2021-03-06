/**
 * Этот клас создаёт боковое меню исходя из заданных
 * параметров.
 */
class mobileNav {
  /**
   * Создадим навигацию
   * @param {object} args Начальный объект конфигурации.
   */
  constructor(args) {
    this.trigersList = args.trigersList || null;
    this.mainNav = args.mainNav || null;
    this.linksArray = args.linksArray || [
      {
        href: '#link1',
        innerHTML: 'test 1',
      },
      {
        href: '#link2',
        innerHTML: '<strong>test 2</strong>',
        classes: ['addedClass', 'disabled'],
      },
      {
        href: '#link3',
        innerHTML: 'test 3',
      },
      {
        href: '#link4',
        innerHTML: '<i>test 4</i>',
      },
    ];
    this.needSelfTrigerBtn = args.needSelfTrigerBtn || true;
    this.hideSelfTrigerBtn = args.hideSelfTrigerBtn || true;
    this.selfTrigerBtnHTML =
      args.selfTrigerBtnHTML || '<span class="nav-triger-btn__line"></span>';
    this.isOverlay = args.isOverlay || true;
    this.navPosition = args.navPosition || 'left'; // left, right, top, bottom
    this.isHeader = args.isHeader || true;
    this.isFooter = args.isFooter || false;
    this.disableAt = args.disableAt || 1024;
    // Массив для внутренних <ul>.
    this.innerLists = [];
    this.isInnerLists = false;
  }

  /**
   * Этот метод создаёт кнопку тригер для появления меню
   * @returns {object}
   */
  createSelfTrigerBtn() {
    const button = document.createElement('button');
    button.innerHTML = this.selfTrigerBtnHTML;
    //button.innerHTML = 'Кастомная кнопка показать меню';
    button.classList.add('nav-triger-btn');
    button.addEventListener('click', this.toggleMenuAndOverlay.bind(this));
    if (this.hideSelfTrigerBtn) {
      button.classList.add('nav-dn');
    }
    this.selfTrigerBtn = button;
    return button;
  }

  /**
   * Развешиваем слушателей на тригеры.
   */
  trigersHandler() {
    if (this.trigersList != null) {
      document.querySelectorAll(this.trigersList).forEach((element) => {
        element.addEventListener('click', this.showMenuAndOverlay.bind(this));
      });
    }
  }

  /**
   * Тоглим наше меню
   * @param {e} e Событие
   */
  toggleMenu(e) {
    if (e) {
      e.preventDefault();
    }
    this.overlap.classList.toggle('open');
    this.nav.classList.toggle('visible');

    if (this.needSelfTrigerBtn) {
      this.selfTrigerBtn.classList.toggle('open');
    }
  }

  /**
   * Показать меню
   * @param {e} e Событие тригер
   */
  showMenu(e) {
    if (e) {
      e.preventDefault();
    }
    this.overlap.classList.add('open');
    this.nav.classList.add('visible');

    if (this.needSelfTrigerBtn && this.mainNav) {
      this.selfTrigerBtn.classList.add('open');
    }

    // console.log('Показать меню');
  }

  /**
   * Скрыть меню
   * @param {e} e Событие тригер
   */
  hideMenu(e) {
    if (e) {
      e.preventDefault();
    }
    this.overlap.classList.remove('open');
    this.nav.classList.remove('visible');

    if (this.needSelfTrigerBtn && this.mainNav) {
      this.selfTrigerBtn.classList.remove('open');
    }

    this.nav.classList.remove('inner-open');
    this.closeAllInnerLists();

    // console.log('Скрыть меню');
  }

  /**
   * Скрыть внутреннее меню
   * @param {e} e Событие тригер
   */
  hideInnerMenu(e) {
    if (e) {
      e.preventDefault();
    }

    this.nav.classList.remove('inner-open');
    this.closeAllInnerLists();
  }

  /**
   * Тоглим оверлей меню
   * @param {e} e Событие тригер
   */
  toggleOverlay(e) {
    if (this.isOverlay) {
      if (e) {
        e.preventDefault();
      }
      this.overlay.classList.toggle('visible');
    }
  }

  /**
   * Показать оверлей меню
   * @param {e} e Событие тригер
   */
  showOverlay(e) {
    if (this.isOverlay) {
      if (e) {
        e.preventDefault();
      }
      this.overlay.classList.add('visible');
      // console.log('Показать оверлей');
    }
  }

  /**
   * Скрыть оверлей меню
   * @param {e} e Событие тригер
   */
  hideOverlay(e) {
    if (this.isOverlay) {
      if (e) {
        e.preventDefault();
      }
      this.overlay.classList.remove('visible');
      // console.log('Скрыть оверлей');
    }
  }

  /**
   * Показать меню с оверлеем
   * @param {e} e
   */
  showMenuAndOverlay(e) {
    this.showMenu(e);
    this.showOverlay(e);
  }

  /**
   * Показать меню с оверлеем
   * @param {e} e
   */
  toggleMenuAndOverlay(e) {
    this.toggleMenu(e);
    this.toggleOverlay(e);
  }

  /**
   * Скрыть меню с оверлеем
   * @param {e} e
   */
  hideMenuAndOverlay(e) {
    this.hideMenu(e);
    this.hideOverlay(e);
  }

  /**
   * Добавляем нашу менюшку со всеми потрахами в ДОМ
   */
  appendMobNav() {
    document.body.append(this.createOverlap());
  }

  /**
   * Этот метод берёт данные для ссылок (this.linksArray) из меню this.mainNav
   * из его первых дочерних ссылок.
   */
  makeNavFromThisMainNav() {
    const mainNavLinks = document.querySelectorAll(this.mainNav + '>li>a');
    this.mainNavElement = document.querySelector(this.mainNav);
    const newLinksArray = [];

    mainNavLinks.forEach((link, index) => {
      const newLinkObject = {};
      newLinkObject.href = link.href;
      newLinkObject.innerHTML = link.innerHTML;

      if (link.dataset.classes) {
        newLinkObject.classes = link.dataset.classes.split(' ');
        // console.log(newLinkObject);
      }

      // Если рядом с сылкой лежит другой список, то мы этот внутренний список учтём
      if (link.parentElement.querySelector('ul')) {
        this.isInnerLists = true;
        const innerUl = {};
        innerUl.index = index;
        innerUl.list = link.parentElement.querySelector('ul');
        this.innerLists.push(innerUl);
      }

      newLinksArray.push(newLinkObject);
    });

    this.linksArray = newLinksArray;
  }

  /**
   * Эту функция принимает список ссылок из внутренних ul элементов
   * для того чтобы сделать на основе них внутренние списки в нашем меню.
   * @param {*} linksArray Массив объектов
   * @return {object} Возвращаем массив объектов для внутреннего списка
   */
  makeInnerNavFromInnerUl(linksArray) {
    const newLinksArray = [];

    linksArray.forEach((link, index) => {
      const newLinkObject = {};
      newLinkObject.href = link.href;
      newLinkObject.innerHTML = link.innerHTML;

      if (link.dataset.classes) {
        newLinkObject.classes = link.dataset.classes.split(' ');
      }

      newLinksArray.push(newLinkObject);
    });

    return newLinksArray;
  }

  /**
   * Создаём Оболочку, в которой у нас будет вертеться наше меню.
   * @return {object} Возвращает <DIV> с классом overlap.
   */
  createOverlap() {
    const overlap = document.createElement('div');
    overlap.classList.add('overlap');
    this.overlap = overlap;
    overlap.append(this.createNav());

    overlap.classList.add('position-' + this.navPosition);

    if (this.isOverlay) {
      overlap.append(this.createOverlay());
    }

    return overlap;
  }

  /**
   * Создаём Враппер для элементов меню.
   * @return {object} Возвращает <DIV> с классом nav.
   */
  createNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');

    if (this.mainNav != null) {
      this.makeNavFromThisMainNav();
    }

    this.linksArray.forEach((item, index) => {
      nav.append(this.createNavItemAndLink(item, index));
    });

    if (this.needSelfTrigerBtn && this.mainNav) {
      document
        .querySelector(this.mainNav)
        .insertAdjacentElement('afterEnd', this.createSelfTrigerBtn());
    }

    if (this.isHeader) {
      nav.prepend(this.createNavHeader());
    }

    if (this.isFooter) {
      nav.append(this.createNavFooter());
    }

    nav.append(this.createNavCloseButton());

    this.nav = nav;
    return nav;
  }

  /**
   * Эта функция создаёт внутренний список и возвращает его.
   * @param {array} listInnerAncors Массив из объектов для внутренних ссылок
   * @return {object} Возвращает готовый внутренний список
   */
  createInnerNav(listInnerAncors) {
    const innerNav = document.createElement('div');
    innerNav.classList.add('nav__inner-list');

    listInnerAncors.forEach((item, index) => {
      innerNav.append(this.createNavItemAndLink(item, index));
    });

    innerNav.prepend(this.createNavHeader());
    innerNav.append(this.createInnerNavCloseButton());

    return innerNav;
  }

  /**
   * Создание оверлея
   * @return {object} Возвращает <DIV> оверлея
   */
  createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    overlay.addEventListener('click', this.hideMenuAndOverlay.bind(this));
    this.overlay = overlay;
    return overlay;
  }

  /**
   * Создаём оболочку для ссылки вместе с самой ссылкой
   * @param {object} linkArgs Объект конфигурации для ссылки
   * @return {object} HTML елемент
   */
  createNavItemAndLink(linkArgs, index) {
    const itemAndLink = this.createNavItem();
    itemAndLink.append(this.createNavLink(linkArgs));

    this.innerLists.forEach((innerList) => {
      if (innerList.index == index) {
        // itemAndLink.append(innerList.list.cloneNode(true));
        itemAndLink.classList.add('nav__parent');
        itemAndLink.append(
          this.createInnerNav(
            this.makeInnerNavFromInnerUl(innerList.list.querySelectorAll('a'))
          )
        );
        itemAndLink.querySelector(
          '.nav__inner-list .nav__header'
        ).innerHTML = itemAndLink.querySelector('.nav__link').innerHTML;
      }
    });

    return itemAndLink;
  }

  /**
   * Создаём оболочку для ссылки.
   * @return {object} Возвращает <DIV> с классом nav__item.
   */
  createNavItem() {
    const item = document.createElement('div');
    item.classList.add('nav__item');
    return item;
  }

  /**
   * Создаём ссылку.
   * linkArgs.href - путь для ссылки.
   * linkArgs.innerHTML - контент помещаемый в ссылку.
   * linkArgs.classes - массив из дополнительных классов для ссылки.
   * @param {object} linkArgs Объект конфигурации для ссылки
   * @return {object} Возвращает <a> с классом nav__link.
   */
  createNavLink(linkArgs) {
    const link = document.createElement('a');
    if (linkArgs.href) {
      link.href = linkArgs.href;
    } else {
      console.log('Пропущено свойство href у', link);
    }

    if (linkArgs.innerHTML) {
      link.innerHTML = linkArgs.innerHTML;
    } else {
      console.log('Пропущено свойство innerHTML у', link);
    }

    link.classList.add('nav__link');
    link.addEventListener('click', this.clickOnLinkHandler.bind(this));

    if (linkArgs.classes) {
      linkArgs.classes.forEach((item) => {
        link.classList.add(item);
      });
    }

    return link;
  }

  /**
   * Эта функция срабатывает по клику на ссылки.
   * Если ссылка оказывается родительской, то соседнему
   * элементу .nav__inner-list добавляется класс .open.
   * @param {e} e Событие клика
   */
  clickOnLinkHandler(e) {
    if (e) {
      e.preventDefault();
    }

    // Если эта ссылка открывающая внутренний список, то надо
    // открыть внутренний список, иначе перейти по ссылке и закрыть навигацию
    if (e.target.closest('.nav__parent')) {
      // console.log('show inner menu');
      let navParent = e.target.closest('.nav__parent');

      // Если внутренний список уже раскрыт, то надо просто закрыть навигацию
      if (navParent.querySelector('.nav__inner-list.open')) {
        this.hideMenuAndOverlay();
      } else {
        navParent.querySelector('.nav__inner-list').classList.add('open');
        this.nav.classList.add('inner-open');
      }
    } else {
      this.hideMenuAndOverlay();
    }
  }

  /**
   * Эта функция закрывает все внутренние списки
   */
  closeAllInnerLists() {
    if (this.isInnerLists) {
      this.nav.querySelectorAll('.nav__inner-list').forEach((item) => {
        item.classList.remove('open');
      });
    }
  }

  /**
   * Создание Хедера для навигации
   * @return {object}
   */
  createNavHeader(headerContent) {
    const navHeader = document.createElement('div');
    navHeader.classList.add('nav__header');

    // Если есть что передать в хедер, то передадим
    if (headerContent) {
      navHeader.innerHTML = headerContent;
    }
    // navHeader.textContent = 'Хедер';
    return navHeader;
  }

  /**
   * Создание Футера для навигации
   * @return {object}
   */
  createNavFooter() {
    const navFooter = document.createElement('div');
    navFooter.classList.add('nav__footer');
    navFooter.textContent = 'Футер';
    return navFooter;
  }

  /**
   * Создание Кнопки закрытия для навигации
   * @return {object}
   */
  createNavCloseButton() {
    const navCloseBtn = document.createElement('button');
    navCloseBtn.classList.add('nav__close-btn');
    navCloseBtn.addEventListener('click', this.hideMenuAndOverlay.bind(this));
    return navCloseBtn;
  }

  /**
   * Создание Кнопки закрытия для внутренней навигации
   * @return {object}
   */
  createInnerNavCloseButton() {
    const navCloseBtn = document.createElement('button');
    navCloseBtn.classList.add('nav__close-btn');
    navCloseBtn.addEventListener('click', this.hideInnerMenu.bind(this));
    return navCloseBtn;
  }

  /**
   * Переключалка обычного меню в наше
   */
  toggleSelfTrigerBtn() {
    if (window.innerWidth < this.disableAt) {
      this.selfTrigerBtn.classList.remove('nav-dn');
      this.mainNavElement.classList.add('nav-dn');
    } else {
      this.selfTrigerBtn.classList.add('nav-dn');
      this.mainNavElement.classList.remove('nav-dn');
    }
  }

  /**
   * Эта функция добавляет к window слушателя
   * toggleSelfTrigerBtn() на событие resize.
   */
  windowResizeHandler() {
    window.addEventListener('resize', this.toggleSelfTrigerBtn.bind(this));
  }

  /**
   * Сабрал разные функции необходимые для старта программы
   */
  startFns() {
    this.trigersHandler();
    this.appendMobNav();
    if (this.mainNav) {
      this.windowResizeHandler();
    }
  }
}
