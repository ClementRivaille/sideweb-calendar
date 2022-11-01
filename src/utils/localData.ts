import { Effects } from '../model/effects';

const SAVE_KEY = `sideweb-calendar-data`;

export const isLocalGiftOpen = (name: Effects) => {
  try {
    const data = localStorage.getItem(`${SAVE_KEY}/${name}`);
    return data !== null;
  } catch (e) {
    return true;
  }
};

export const setLocalGiftOpen = (name: Effects) => {
  try {
    localStorage.setItem(`${SAVE_KEY}/${name}`, 'opened');
  } catch (e) {
    console.info('%cUnable to save local data on your browser', 'color: red');
  }
};
