import {ArticleTypes} from './ArticleTypes';

export interface NewsApiResponse {
  articles: ArticleTypes[];
  status: string;
  totalResults: number;
}
