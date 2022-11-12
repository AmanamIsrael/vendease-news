export interface iNews {
  id: string;
  author: string;
  content: string;
  publishedAt: string;
  urlToImage: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  description: string;
}
