/* eslint-disable import/prefer-default-export */
export const UNIX_TIMESTAMP_MS_CONVERT: number = 1000;

export const timestampToDate = (timestamp: number): Date =>
  new Date(timestamp * UNIX_TIMESTAMP_MS_CONVERT);

export const timestampToUnixTimestamp = (timestamp: number): number =>
  Math.floor(timestamp / UNIX_TIMESTAMP_MS_CONVERT);
