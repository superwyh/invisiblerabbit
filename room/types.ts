export type Language = 'zh' | 'en' | 'ja';

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
}

export interface GameContent {
  title: string;
  subtitle: string;
  tagline: string;
  studio: string;
  steamLink: string;
  intro: {
    title: string;
    content: string;
    subContent: string;
  };
  story: {
    title: string;
    role: string;
    content: string;
    climax: string;
  };
  features: FeatureItem[];
  ui: {
    buy: string;
    learnMore: string;
    steamStore: string;
    featuresTitle: string;
    featuresSubtitle: string;
    immersiveTitle: string;
    immersiveDesc: string;
    immersiveLabel: string;
    footerRights: string;
    privacy: string;
    contact: string;
    evidence: string;
    caseNumber: string;
    doNotRemove: string;
  };
}

export interface SectionProps {
  id?: string;
  className?: string;
}