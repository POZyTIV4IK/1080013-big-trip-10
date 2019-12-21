import {createSiteMenuTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sorter.js';
import {createEditTemplate} from './components/editor.js';
import {createTripInfoTemplate} from './components/trip-info';
import {createContentDaysListTemplate} from './components/content-days-list.js';
import {getUniqueDays, renderComponent} from './utils';
import {generateDays} from './mock/event.js';

const DAYS_COUNT = 10;
const daysData = generateDays(DAYS_COUNT);

const sortedDaysData = daysData.slice().sort((a, b) => a.date.getTime() - b.date.getTime());
const uniqueDays = getUniqueDays(sortedDaysData);

const siteHeaderElement = document.querySelector(`.page-header`);
const siteMainElement = document.querySelector(`.page-main`);
const routeElement = siteHeaderElement.querySelector(`.trip-info`);
const controlElement = siteHeaderElement.querySelector(`.trip-controls`);
const contentElement = siteMainElement.querySelector(`.trip-events`);

renderComponent(routeElement, createTripInfoTemplate(uniqueDays));
renderComponent(controlElement, createSiteMenuTemplate());
renderComponent(controlElement, createFilterTemplate());

renderComponent(contentElement, createSortTemplate());
renderComponent(contentElement, createEditTemplate(uniqueDays[0].events[0]));
renderComponent(contentElement, createContentDaysListTemplate(uniqueDays.slice(1)));
