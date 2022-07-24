/* eslint-disable import/prefer-default-export */
export const dayArray = ["일", "월", "화", "수", "목", "금", "토"];

export const UNIX_TIMESTAMP_MS_CONVERT: number = 1000;

export const timestampToDate = (timestamp: number): Date =>
  new Date(timestamp * UNIX_TIMESTAMP_MS_CONVERT);

export const timestampToUnixTimestamp = (timestamp: number): number =>
  Math.floor(timestamp / UNIX_TIMESTAMP_MS_CONVERT);

export const getFullDateString = (datetime: number | Date) => {
  const convertedDate: Date =
    typeof datetime === "number" ? timestampToDate(datetime) : datetime;

  return `${convertedDate.toLocaleDateString()}(${
    dayArray[convertedDate.getDay()]
  }) ${convertedDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};
