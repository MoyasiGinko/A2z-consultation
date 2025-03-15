export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type BlogType = {
  id: number;
  title: string;
  slug?: any;
  metadata?: string;
  excerpt?: string;
  category?: string;
  thumbnail?: any;
  author?: Author;
  tags?: string[];
  date?: string;
  readTime: string;
};
