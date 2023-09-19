export type ArticleTypes = {
  id: string | number[];
  isFavourite: boolean;
  title: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  shortTitle: string;
  content: string;
  url: string;
  source: SourceType;
};

type SourceType = {
  name: string;
};
