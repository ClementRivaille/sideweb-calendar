import { IconName } from '../components/atoms/Icons';

export enum Effects {
  lights = 'lights',
  background = 'background',
  reindeer = 'reindeer',
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
  { day: '4', effect: Effects.lights, icon: 'light', label: 'Lumières' },
  { day: '11', effect: Effects.background, icon: 'tree', label: 'Sapin' },
  { day: '18', effect: Effects.reindeer, icon: 'reindeer', label: 'Renne' },
  { day: '25', effect: Effects.snow, icon: 'snowflake', label: 'Neige' },
  { day: '31', effect: Effects.sparkles, icon: 'stars', label: 'Étoiles' },
];
