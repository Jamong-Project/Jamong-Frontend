export enum FilterType {
  DATA_GET_FAILED,
  DATA_GET_LOADING,
  DATA_GET_SUCCESSFUL,
  DATA_GET_EMPTY,
}

export const filterData = (
  data: any,
  loading: boolean,
  error: any,
): FilterType => {
  if (error) {
    return FilterType.DATA_GET_FAILED;
  }

  if (loading) {
    return FilterType.DATA_GET_LOADING;
  }

  if (data !== undefined && data.length > 0) {
    return FilterType.DATA_GET_SUCCESSFUL;
  }

  return FilterType.DATA_GET_EMPTY;
};
