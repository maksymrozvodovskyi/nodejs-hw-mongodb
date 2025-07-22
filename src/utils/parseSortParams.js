import { SORT_ORDER } from '../constants/index.js';

const parseSortBy = (value) => {
  if (typeof value === 'undefined') {
    return '_id';
  }

  const keys = [
    '_id',
    'name',
    'phoneNumber',
    'email',
    'isFavourite',
    'contactType',
    'createdAt',
    'updatedAt',
  ];

  if (keys.includes(value) !== true) {
    return '_id';
  }

  return value;
};

const parseSortOrder = (value) => {
  return value === SORT_ORDER.ASC || value === SORT_ORDER.DESC
    ? value
    : SORT_ORDER.ASC;
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
