import {getMenuItems} from '../mock/menu.js';

const createMenuMarkup = (items) => {
  return items.map((item) => {
    const activeClass = item.isActive ? `trip-tabs__btn--active` : ``;
    return (
      `<a class="trip-tabs__btn ${activeClass}" href="#">
        ${item.title}
      </a>`
    );
  }).join(`\n`);
};

const createSiteMenuTemplate = () => {
  const menuItems = createMenuMarkup(getMenuItems());

  return (`
    <nav class="trip-controls__trip-tabs  trip-tabs">
      ${menuItems}
    </nav>
  `);
};

export {createSiteMenuTemplate};
