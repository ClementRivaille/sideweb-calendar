import { IconName } from '../components/atoms/Icons';

export enum Effects {
  lights = 'lights',
  background = 'background',
  raindeer = 'raindeer',
  snow = 'snow',
  sparkles = 'sparkles',
}

export interface Gift {
  day: string;
  effect: Effects;
  icon: IconName;
  label: string;
}

export const GIFT_DAYS: Gift[] = [
  { day: '4', effect: Effects.lights, icon: 'close', label: 'Lumières' },
  { day: '11', effect: Effects.background, icon: 'close', label: 'Sapin' },
  { day: '18', effect: Effects.raindeer, icon: 'close', label: 'Renne' },
  { day: '25', effect: Effects.snow, icon: 'close', label: 'Neige' },
  { day: '31', effect: Effects.sparkles, icon: 'close', label: 'Étoiles' },
];
