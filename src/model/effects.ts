import { IconName } from '../components/atoms/Icons';

export enum Effects {
  lights = 'lights',
  background = 'background',
  raindeer = 'raindeer',
  snow = 'snow',
  sparkles = 'sparkles',
}

interface Gift {
  day: string;
  effect: Effects;
  icon: IconName;
}

export const GIFT_DAYS: Gift[] = [
  { day: '4', effect: Effects.lights, icon: 'close' },
  { day: '11', effect: Effects.background, icon: 'close' },
  { day: '18', effect: Effects.raindeer, icon: 'close' },
  { day: '25', effect: Effects.snow, icon: 'close' },
  { day: '31', effect: Effects.sparkles, icon: 'close' },
];
