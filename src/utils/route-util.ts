/* eslint-disable import/prefer-default-export */

export const hasQuery = (query: string): boolean => {
  return query.indexOf("?") > -1;
};

export const getFullPath = (path: string, query: string): string => {
  return `${path}${hasQuery(query) ? query : `?${query}`}`;
};
