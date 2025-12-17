export type Language = 'zh' | 'en' | 'ja';

export interface Game {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  websiteLink: string;
  steamLink: string;
  isSteamPending?: boolean; // For "敬请期待" status
  type: 'meta' | 'audio' | 'standard';
  releaseYear: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown content
  tags: string[];
}