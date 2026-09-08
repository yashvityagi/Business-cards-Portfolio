export type CardCategory = 'all' | 'minimal' | 'luxury' | 'creative';

export interface CardSample {
  id: string;
  title: string;
  category: 'minimal' | 'luxury' | 'creative';
  categoryLabel: string;
  subtitle: string;
  clientType: string;
  tagline: string;
  personName: string;
  personRole: string;
  contactEmail: string;
  contactPhone: string;
  contactWebsite: string;
  contactAddress: string;
  finish: string;
  recommendedPaper: string;
  aspectRatio: string;
  frontColor: {
    bg: string;
    text: string;
    accent: string;
    border?: string;
  };
  backColor: {
    bg: string;
    text: string;
    accent: string;
    border?: string;
  };
  designNotes: string;
}
