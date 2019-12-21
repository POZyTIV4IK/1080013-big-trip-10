import {createContentDaysListTemplate} from './content-days-list.js';

const generateDaysMarkup = (days) => {
  return days.map((day) => {
    return createContentDaysListTemplate(day.date, day.events);
  }).join(`\n`);
};

const createContentDaysContainerTemplate = (daysData) => {
  const daysMarkup = generateDaysMarkup(daysData);

  return (`
    <ul class="trip-days">
      ${daysMarkup}
    </ul>
  `);
};

export {createContentDaysContainerTemplate};
