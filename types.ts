
export interface GameProject {
  id: number;
  title: string;
  category: string;
  description: string | string[];
  imageUrl: string;
  year: string;
}

export enum ViewMode {
  DEFAULT = 'DEFAULT',
  PROJECT = 'PROJECT',
  INFO = 'INFO'
}
