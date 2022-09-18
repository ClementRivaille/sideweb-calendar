export interface CalendarEntry {
  title: string;
  link: string;
  description: string[];
  imgUrl?: string;
  videoUrl?: string;
}

export type Calendar = { [key: string]: CalendarEntry };
