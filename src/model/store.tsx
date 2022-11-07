import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { decrypt, ENCRYPTED_CALENDAR } from '../utils/encryption';
import { isLocalGiftOpen, setLocalGiftOpen } from '../utils/localData';
import { CalendarEntry } from './calendar';
import { Effects, GIFT_DAYS } from './effects';

const TARGET_MONT = 1;

interface EffectState {
  opened: boolean;
  enabled: boolean;
}
interface Store {
  days: string[];
  effects: { [key in Effects]: EffectState };
  isDayUnlocked: (day: string) => boolean;
  isToday: (day: string) => boolean;
  hasGift: (day: string) => boolean;
  getDay: (day: string) => CalendarEntry | undefined;
  openEffect: (effect: Effects) => void;
  toggleEffect: (effect: Effects) => void;
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
    return today.getMonth() == TARGET_MONT && today.getDate() >= dayValue;
  };

  const getDay = (day: string) =>
    isDayUnlocked(day) ? calendar[day] : undefined;

  const isToday = (day: string) =>
    TARGET_MONT === today.getMonth() && day === `${today.getDate()}`;

  const hasGift = (day: string) => GIFT_DAYS.some((gift) => gift.day === day);

  const [effects, setEffects] = useState<Store['effects']>(
    GIFT_DAYS.reduce(
      (values, gift) => ({
        ...values,
        [gift.effect]: {
          enabled: false,
          opened: isDayUnlocked(gift.day) && isLocalGiftOpen(gift.effect),
        } as EffectState,
      }),
      {} as Store['effects']
    )
  );

  const openEffect = (name: Effects) => {
    setLocalGiftOpen(name);
    setEffects((values) => ({
      ...values,
      [name]: { ...values[name], opened: true },
    }));
  };

  const toggleEffect = (name: Effects) => {
    setEffects((values) => ({
      ...values,
      [name]: { ...values[name], enabled: !values[name].enabled },
    }));
  };

  const store = useMemo<Store>(
    () => ({
      days: Object.keys(calendar),
      effects,
      isDayUnlocked,
      getDay,
      isToday,
      hasGift,
      openEffect,
      toggleEffect,
    }),
    [effects]
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
