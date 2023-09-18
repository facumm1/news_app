const truncText = (text: string, fromChar: string) => {
  if (text) {
    const index = text.lastIndexOf(fromChar);
    return text.slice(0, index).trim();
  }

  return 'Not available';
};

export default truncText;
