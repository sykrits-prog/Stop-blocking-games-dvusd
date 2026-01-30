
export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  iframeUrl: string;
  category: string;
  description: string;
  rating?: number;
}

export type ViewState = 'home' | 'playing' | 'category';
