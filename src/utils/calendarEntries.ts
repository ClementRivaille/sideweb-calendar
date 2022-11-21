import { decrypt, ENCRYPTED_CALENDAR } from './encryption';

const TARGET_MONT = 1;

const today = new Date();
export const calendar = decrypt(ENCRYPTED_CALENDAR);

export const isDayUnlocked = (day: string) => {
  const dayValue = parseInt(day, 10);
  if (!Object.keys(calendar).includes(day)) return false;
  if (![TARGET_MONT, TARGET_MONT - 1].includes(today.getMonth())) return true;
  return today.getMonth() == TARGET_MONT && today.getDate() >= dayValue;
};

export const getDay = (day: string) =>
  isDayUnlocked(day) ? calendar[day] : undefined;

export const isToday = (day: string) =>
  TARGET_MONT === today.getMonth() && day === `${today.getDate()}`;
