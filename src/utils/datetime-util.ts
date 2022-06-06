/* eslint-disable import/prefer-default-export */
const UNIX_TIMESTAMP_MS_CONVERT: number = 1000;

export const timestampToDate = (timestamp: number): Date =>
  new Date(timestamp * UNIX_TIMESTAMP_MS_CONVERT);
