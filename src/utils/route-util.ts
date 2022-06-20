/* eslint-disable import/prefer-default-export */

export const hasQuery = (query: string): boolean => {
  return query.indexOf("?") > -1;
};

export const hasPage = (query: string): boolean => {
  return query.indexOf("page=") > -1;
};

export const getFullPath = (path: string, query: string): string => {
  return `${path}${hasQuery(query) ? query : `?${query}`}`;
};

export const changePage = (
  path: string,
  query: string,
  page: number | null,
): string => {
  if (page === null) {
    return getFullPath(path, query);
  }

  const appendOrReplace: string = hasPage(query) ? "" : "&";
  const queryWithoutPage: string = query.replace(/page=\d+/, "");
  const newQuery: string = `${queryWithoutPage}${appendOrReplace}page=${page}`;

  return getFullPath(path, newQuery);
};
