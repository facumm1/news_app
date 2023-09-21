import React from 'react';
import {useSelector} from 'react-redux';

import {NewsSliceTypes} from '../types';
import Loader from './Loader/Loader';
import NewsCond from './Layout/NewsCond';

const NewsMap: React.FC = () => {
  const {newsData, isLoading} = useSelector(
    (state: NewsSliceTypes) => state.newsData,
  );

  return isLoading ? <Loader /> : <NewsCond newsData={newsData} />;
};

export default NewsMap;
