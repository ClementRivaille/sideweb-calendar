import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useMemo,
} from 'react';
import { decrypt, ENCRYPTED_CALENDAR } from '../utils/encryption';
import { CalendarEntry } from './calendar';

// const TARGET_MONT = 11;
const TARGET_MONT = 9;

const GIFT_DAYS = ['4', '11', '18', '25', '31'];

interface Store {
  days: string[];
  isDayUnlocked: (day: string) => boolean;
  isToday: (day: string) => boolean;
  hasGift: (day: string) => boolean;
  getDay: (day: string) => CalendarEntry | undefined;
}

const StoreContext = createContext<Store>({} as Store);

interface Props {
  children: ReactNode;
}

export const StoreProvider: FunctionComponent<Props> = ({ children }) => {
  const today = new Date();
  const calendar = decrypt(ENCRYPTED_CALENDAR);

  const isDayUnlocked = (day: string) => {
    const dayValue = parseInt(day, 10);
    if (!Object.keys(calendar).includes(day)) return false;
    if (![TARGET_MONT, TARGET_MONT - 1].includes(today.getMonth())) return true;
    return today.getDate() >= dayValue;
  };

  const getDay = (day: string) =>
    isDayUnlocked(day) ? calendar[day] : undefined;

  const isToday = (day: string) => day === `${today.getDate()}`;

  const hasGift = (day: string) => GIFT_DAYS.includes(day);

  const store = useMemo<Store>(
    () => ({
      days: Object.keys(calendar),
      isDayUnlocked,
      getDay,
      isToday,
      hasGift,
    }),
    []
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
