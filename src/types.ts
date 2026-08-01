export interface GameLink {
  id: string;
  label: string; // e.g. 'Steam', 'Itch.io', 'Epic Games', 'App Store', 'Official Site', 'Trailer'
  url: string;
  type: 'store' | 'community' | 'media' | 'press' | 'demo';
  primary?: boolean;
}

export interface GameScreenshot {
  id: string;
  url: string;
  caption?: string;
}

export type Language = 'zh' | 'en' | 'ja' | 'ko';

export interface LocalizedGameContent {
  title: string;
  tagline?: string;
  description: string;
  details?: string[];
  awardOrganizer?: string;
  awards?: string[];
}

export interface LocalizedStudioContent {
  name: string;
  tagline?: string;
  manifesto: string;
  location?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TeamContent {
  label: string;
  intro: string;
  members: TeamMember[];
}

export interface GameItem {
  id: string;
  number: string; // e.g. "01", "02"
  title: string;
  titleZh?: string;
  tagline: string;
  taglineZh?: string;
  description: string;
  descriptionZh?: string;
  details?: string[];
  detailsZh?: string[];
  genre: string[];
  platforms: string[];
  releaseYear: string;
  status: 'RELEASED' | 'IN_DEVELOPMENT' | 'EARLY_ACCESS' | 'ANNOUNCED';
  coverImage: string;
  bannerImage: string;
  screenshots: GameScreenshot[];
  videoUrl?: string; // e.g. YouTube / MP4 embed
  links: GameLink[];
  highlights?: string[];
  highlightsZh?: string[];
  engine?: string;
  awardOrganizer?: string;
  awards?: string[];
  locales?: Partial<Record<Language, LocalizedGameContent>>;
  hasWebDemo?: boolean;
}

export interface StudioInfo {
  name: string;
  nameZh: string;
  tagline: string;
  taglineZh: string;
  established: string;
  location: string;
  manifesto: string;
  manifestoZh: string;
  contactEmail?: string;
  socials: { name: string; url: string }[];
  locales?: Partial<Record<Language, LocalizedStudioContent>>;
  team?: Record<Language, TeamContent>;
}
