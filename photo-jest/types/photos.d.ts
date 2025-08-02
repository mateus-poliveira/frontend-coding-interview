export type Photo = {
  avg_color: string;
  height: number;
  id: number;
  width: number;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  url: string;
  alt: string;
  liked: boolean;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
};
