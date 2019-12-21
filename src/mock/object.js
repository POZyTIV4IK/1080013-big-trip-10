import {getRandomInRange, getRandomArrayItem, repeat} from '../utils.js';
import {EVENT_TYPES, EVENT_OPTIONS} from '../const.js';

const PRICE_MAX = 10000;
const PRICE_MIN = 100;

const OPTION_MIN_NUMBER = 0;
const OPTION_MAX_NUMBER = 2;

const SENTENCE_MIN_NUMBER = 1;
const SENTENCE_MAX_NUMBER = 3;

const PHOTOS_MIN_PER_CARD = 2;
const PHOTOS_MAX_PER_CARD = 5;

const CITY_NAMES = [`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`];

const defaultDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`. `);

const generatePhoto = () => `http://picsum.photos/300/150?r=${Math.random()}`;

const generatePhrase = () => getRandomArrayItem(defaultDescription);

const generateOption = () => getRandomArrayItem(EVENT_OPTIONS);

const generateEvent = (startDate, endDate) => {
  const type = getRandomArrayItem(EVENT_TYPES);
  const city = getRandomArrayItem(CITY_NAMES);
  const title = `${type} to ${city}`;

  return {
    type,
    city,
    title,
    description: repeat(getRandomInRange(SENTENCE_MIN_NUMBER, SENTENCE_MAX_NUMBER), generatePhrase),
    photos: repeat(getRandomInRange(PHOTOS_MIN_PER_CARD, PHOTOS_MAX_PER_CARD), generatePhoto),
    dateStart: startDate,
    dateEnd: endDate,
    price: getRandomInRange(PRICE_MIN, PRICE_MAX),
    options: new Set(repeat(getRandomInRange(OPTION_MIN_NUMBER, OPTION_MAX_NUMBER), generateOption)),
  };
};

export {generateEvent};
