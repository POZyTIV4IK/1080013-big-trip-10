import {MONTH_NAMES} from '../const.js';
import {timeTagFormatted} from '../utils.js';
import {createTripEventTemplate} from './content.js';

const YEAR_OFFSET = 2;
const TIME_TAG_OFFSET = -6;

const createContentDaysListTemplate = (eventDate, events) => {
  const date = new Date(eventDate);
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear().toString().slice(YEAR_OFFSET);

  const timeTagDateFormat = timeTagFormatted(date).slice(0, TIME_TAG_OFFSET);

  const eventsMarkup = events.map((event) => createTripEventTemplate(event)).join(`\n`);

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${day}</span>
        <time class="day__date" datetime="${timeTagDateFormat}">${month} ${year}</time>
      </div>
      <ul class="trip-events__list">
        ${eventsMarkup}
      </ul>
     </li>`
  );
};

export {createContentDaysListTemplate};
