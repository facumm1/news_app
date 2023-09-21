const trimTitle = (title: string): string => {
  if (!title) {
    return title;
  }

  const index = title.lastIndexOf('-');

  const newTitle = title.slice(0, index);

  if (newTitle.length > 60) {
    return newTitle.slice(0, 60).trim() + '...';
  }

  return newTitle;
};

export const trimAuthor = (author: string): string => {
  if (!author) {
    return author;
  }

  const index = author.lastIndexOf('-');

  const newTitle = author.slice(0, index);

  if (newTitle.length > 30) {
    return newTitle.slice(0, 30).trim() + '...';
  }

  return newTitle;
};

export default trimTitle;
