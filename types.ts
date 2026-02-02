
// Fix: Added missing Publication interface used in constants.tsx and Publications.tsx
export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: 'Academic' | 'Children’s books' | 'Other';
  link?: string;
  abstract?: string;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  type: 'Academic & Professional' | 'science communication' | 'Media & Interviews' | 'Hosting';
  description: string;
  link?: string;
  imageUrl?: string;
  gallery?: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
  imageUrl?: string;
  gallery?: string[];
}

export interface ArtPiece {
  id: string;
  title: string;
  medium: string;
  year: number;
  imageUrl: string;
  thumbnailUrl: string;
  description: string;
  category: 'Digital art' | 'Painting' | 'Urban sketching' | 'Comics';
}

export type Section = 'home' | 'publications' | 'talks' | 'awards' | 'art' | 'about' | 'contact';
