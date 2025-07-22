const parseContactType = (value) => {
  if (typeof value === 'undefined') {
    return undefined;
  }

  const keys = ['work', 'personal', 'home'];

  if (keys.includes(value) !== true) {
    return undefined;
  }

  return value;
};

const parseIsFavourite = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
