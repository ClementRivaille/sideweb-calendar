import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  calendar,
  isDayUnlocked,
  getDay,
  isToday,
} from '../utils/calendarEntries';
import { isLocalGiftOpen, setLocalGiftOpen } from '../utils/localData';
import { CalendarEntry } from './calendar';
import { Effects, GIFT_DAYS } from './effects';

interface EffectState {
  opened: boolean;
  enabled: boolean;
}
interface Store {
  days: string[];
  effects: { [key in Effects]: EffectState };
  mute: boolean;
  isDayUnlocked: (day: string) => boolean;
  isToday: (day: string) => boolean;
  hasGift: (day: string) => boolean;
  getDay: (day: string) => CalendarEntry | undefined;
  openEffect: (effect: Effects) => void;
  toggleEffect: (effect: Effects) => void;
  setMute: (value: boolean) => void;
}

const StoreContext = createContext<Store>({} as Store);

interface Props {
  children: ReactNode;
}

const hasGift = (day: string) => GIFT_DAYS.some((gift) => gift.day === day);

export const StoreProvider: FunctionComponent<Props> = ({ children }) => {
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
    const gift = GIFT_DAYS.find(({ effect }) => effect === name);
    if (!gift || !isDayUnlocked(gift.day)) return;

    setEffects((values) => ({
      ...values,
      [name]: { ...values[name], enabled: !values[name].enabled },
    }));
  };

  const [mute, setMute] = useState(false);

  const store = useMemo<Store>(
    () => ({
      days: Object.keys(calendar),
      effects,
      mute,
      isDayUnlocked,
      getDay,
      isToday,
      hasGift,
      openEffect,
      toggleEffect,
      setMute,
    }),
    [effects, mute]
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
