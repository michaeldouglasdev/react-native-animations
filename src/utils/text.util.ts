export const getTextFirstAndLastInitial = (text: string) => {
  return removeAccent(text)
    .match(/(\b\S)?/g)
    ?.join('')
    ?.match(/(^\S|\S$)?/g)
    ?.join('')
    ?.toUpperCase();
};

export const getTextAllInitials = (text: string) => {
  return removeAccent(text)
    .match(/(\b\S)?/g)
    ?.join('')
    .toUpperCase();
};

export const removeAccent = (text: string) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
