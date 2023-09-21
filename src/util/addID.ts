import {ArticleTypes} from '../types/ArticleTypes';
import uuid from 'react-native-uuid';

const addID = (data: ArticleTypes[]): ArticleTypes[] => {
  return data.map((article: ArticleTypes) => ({
    ...article,
    id: uuid.v4().toString(),
    isFavourite: false,
  }));
};

export default addID;
