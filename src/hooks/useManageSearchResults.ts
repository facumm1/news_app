import {useState} from 'react';

export type useManageHook = {
  renderSearchNews: boolean;
  keywordToSearch: string;
  fieldValue: string;
  handleFieldValue: (keyword: string) => void;
  handleKeywordToSearch: () => void;
  searchByKeyword: () => void;
  hideSearchResults: () => void;
};

export const useManageSearchResults = (): useManageHook => {
  const [renderSearchNews, setRenderSearchNews] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>('');
  const [keywordToSearch, setKeywordToSearch] = useState<string>('');

  const searchByKeyword = () => {
    if (fieldValue.length > 0) {
      handleKeywordToSearch();
      setRenderSearchNews(true);
    }
  };

  const hideSearchResults = () => {
    setRenderSearchNews(false);
    setFieldValue('');
  };

  const handleFieldValue = (keyword: string) => {
    setFieldValue(keyword);
  };

  const handleKeywordToSearch = () => {
    setKeywordToSearch(fieldValue);
  };

  return {
    renderSearchNews,
    keywordToSearch,
    fieldValue,
    handleFieldValue,
    handleKeywordToSearch,
    searchByKeyword,
    hideSearchResults,
  };
};
