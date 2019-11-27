import {createSiteMenuTemplate} from './components/site-menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sorter.js';
import {createEditTemplate} from './components/editor.js';
import {createTripTemplate} from './components/trip.js';
import {createContentTemplate} from './components/content.js';
import {createContentDaysListTemplate} from './components/content-days-list.js';

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.trip-controls`);
const siteMainElementHeading = siteMainElement.querySelectorAll(`.visually-hidden`);

render(siteMainElementHeading[0], createSiteMenuTemplate(), `afterend`);
render(siteMainElementHeading[1], createFilterTemplate(), `afterend`);

const siteTripElement = document.querySelector(`.trip-info`);
render(siteTripElement, createTripTemplate(), `afterbegin`);

const siteSortElement = document.querySelector(`.trip-events`);
render(siteSortElement, createSortTemplate(), `beforeend`);
render(siteSortElement, createEditTemplate(), `beforeend`);
render(siteSortElement, createContentDaysListTemplate(), `beforeend`);

const siteDaysListElement = siteSortElement.querySelector(`.trip-events__list`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(siteDaysListElement, createContentTemplate(), `beforeend`);
}
