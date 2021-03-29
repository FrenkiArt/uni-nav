# uni-nav

Моя версия универсальной навигации для мобильных и обычных устройств

# Class: mobileNav

## mobileNav(args)

Этот клас создаёт боковое меню исходя из заданных параметров.

## Constructor

#### new mobileNav(args)

Создадим навигацию

##### Parameters:

| Name   | Type   | Description                    |
| :----- | :----- | :----------------------------- |
| `args` | object | Начальный объект конфигурации. |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 5](Mobile-nav.js.html#line5)

### Methods

#### appendMobNav()

Добавляем нашу менюшку со всеми потрахами в ДОМ

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 213](Mobile-nav.js.html#line213)

#### clickOnLinkHandler(e)

Эта функция срабатывает по клику на ссылки. Если ссылка оказывается родительской, то соседнему элементу .nav\_\_inner-list добавляется класс .open.

##### Parameters:

| Name | Type | Description   |
| :--- | :--- | :------------ |
| `e`  | e    | Событие клика |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 438](Mobile-nav.js.html#line438)

#### closeAllInnerLists()

Эта функция закрывает все внутренние списки

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 464](Mobile-nav.js.html#line464)

#### createInnerNav(listInnerAncors) → {object}

Эта функция создаёт внутренний список и возвращает его.

##### Parameters:

| Name              | Type  | Description                              |
| :---------------- | :---- | :--------------------------------------- |
| `listInnerAncors` | array | Массив из объектов для внутренних ссылок |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 335](Mobile-nav.js.html#line335)

##### Returns:

Возвращает готовый внутренний список

Type  
object

#### createInnerNavCloseButton() → {object}

Создание Кнопки закрытия для внутренней навигации

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 514](Mobile-nav.js.html#line514)

##### Returns:

Type  
object

#### createNav() → {object}

Создаём Враппер для элементов меню.

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 298](Mobile-nav.js.html#line298)

##### Returns:

Возвращает

с классом nav.

Type  
object

#### createNavCloseButton() → {object}

Создание Кнопки закрытия для навигации

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 503](Mobile-nav.js.html#line503)

##### Returns:

Type  
object

#### createNavFooter() → {object}

Создание Футера для навигации

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 492](Mobile-nav.js.html#line492)

##### Returns:

Type  
object

#### createNavHeader() → {object}

Создание Хедера для навигации

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 476](Mobile-nav.js.html#line476)

##### Returns:

Type  
object

#### createNavItem() → {object}

Создаём оболочку для ссылки.

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 392](Mobile-nav.js.html#line392)

##### Returns:

Возвращает

с классом nav\_\_item.

Type  
object

#### createNavItemAndLink(linkArgs) → {object}

Создаём оболочку для ссылки вместе с самой ссылкой

##### Parameters:

| Name       | Type   | Description                    |
| :--------- | :----- | :----------------------------- |
| `linkArgs` | object | Объект конфигурации для ссылки |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 366](Mobile-nav.js.html#line366)

##### Returns:

HTML елемент

Type  
object

#### createNavLink(linkArgs) → {object}

Создаём ссылку. linkArgs.href - путь для ссылки. linkArgs.innerHTML - контент помещаемый в ссылку. linkArgs.classes - массив из дополнительных классов для ссылки.

##### Parameters:

| Name       | Type   | Description                    |
| :--------- | :----- | :----------------------------- |
| `linkArgs` | object | Объект конфигурации для ссылки |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 406](Mobile-nav.js.html#line406)

##### Returns:

Возвращает с классом nav\_\_link.

Type  
object

#### createOverlap() → {object}

Создаём Оболочку, в которой у нас будет вертеться наше меню.

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 279](Mobile-nav.js.html#line279)

##### Returns:

Возвращает

с классом overlap.

Type  
object

#### createOverlay() → {object}

Создание оверлея

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 353](Mobile-nav.js.html#line353)

##### Returns:

Возвращает

оверлея

Type  
object

#### createSelfTrigerBtn() → {object}

Этот метод создаёт кнопку тригер для появления меню

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 50](Mobile-nav.js.html#line50)

##### Returns:

Type  
object

#### hideInnerMenu(e)

Скрыть внутреннее меню

##### Parameters:

| Name | Type | Description    |
| :--- | :--- | :------------- |
| `e`  | e    | Событие тригер |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 133](Mobile-nav.js.html#line133)

#### hideMenu(e)

Скрыть меню

##### Parameters:

| Name | Type | Description    |
| :--- | :--- | :------------- |
| `e`  | e    | Событие тригер |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 112](Mobile-nav.js.html#line112)

#### hideMenuAndOverlay(e)

Скрыть меню с оверлеем

##### Parameters:

| Name | Type | Description |
| :--- | :--- | :---------- |
| `e`  | e    |             |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 205](Mobile-nav.js.html#line205)

#### hideOverlay(e)

Скрыть оверлей меню

##### Parameters:

| Name | Type | Description    |
| :--- | :--- | :------------- |
| `e`  | e    | Событие тригер |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 173](Mobile-nav.js.html#line173)

#### makeInnerNavFromInnerUl(linksArray) → {object}

Эту функция принимает список ссылок из внутренних ul элементов для того чтобы сделать на основе них внутренние списки в нашем меню.

##### Parameters:

| Name         | Type | Description     |
| :----------- | :--- | :-------------- |
| `linksArray` | \*   | Массив объектов |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 257](Mobile-nav.js.html#line257)

##### Returns:

Возвращаем массив объектов для внутреннего списка

Type  
object

#### makeNavFromThisMainNav()

Этот метод берёт данные для ссылок (this.linksArray) из меню this.mainNav из его первых дочерних ссылок.

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 221](Mobile-nav.js.html#line221)

#### showMenu(e)

Показать меню

##### Parameters:

| Name | Type | Description    |
| :--- | :--- | :------------- |
| `e`  | e    | Событие тригер |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 94](Mobile-nav.js.html#line94)

#### showMenuAndOverlay(e)

Показать меню с оверлеем

##### Parameters:

| Name | Type | Description |
| :--- | :--- | :---------- |
| `e`  | e    |             |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 187](Mobile-nav.js.html#line187)

#### showOverlay(e)

Показать оверлей меню

##### Parameters:

| Name | Type | Description    |
| :--- | :--- | :------------- |
| `e`  | e    | Событие тригер |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 159](Mobile-nav.js.html#line159)

#### startFns()

Сабрал разные функции необходимые для старта программы

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 545](Mobile-nav.js.html#line545)

#### toggleMenu(e)

Тоглим наше меню

##### Parameters:

| Name | Type | Description |
| :--- | :--- | :---------- |
| `e`  | e    | Событие     |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 78](Mobile-nav.js.html#line78)

#### toggleMenuAndOverlay(e)

Показать меню с оверлеем

##### Parameters:

| Name | Type | Description |
| :--- | :--- | :---------- |
| `e`  | e    |             |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 196](Mobile-nav.js.html#line196)

#### toggleOverlay(e)

Тоглим оверлей меню

##### Parameters:

| Name | Type | Description    |
| :--- | :--- | :------------- |
| `e`  | e    | Событие тригер |

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 146](Mobile-nav.js.html#line146)

#### toggleSelfTrigerBtn()

Переключалка обычного меню в наше

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 524](Mobile-nav.js.html#line524)

#### trigersHandler()

Развешиваем слушателей на тригеры.

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 66](Mobile-nav.js.html#line66)

#### windowResizeHandler()

Эта функция добавляет к window слушателя toggleSelfTrigerBtn() на событие resize.

Source:

- [Mobile-nav.js](Mobile-nav.js.html), [line 538](Mobile-nav.js.html#line538)

## [Home](index.html)

### Classes

- [mobileNav](mobileNav.html)

### Global

- [menu](global.html#menu)

Documentation generated by [JSDoc 3.6.6](https://github.com/jsdoc/jsdoc) on Mon Mar 29 2021 12:45:17 GMT+0300 (Москва, стандартное время)
