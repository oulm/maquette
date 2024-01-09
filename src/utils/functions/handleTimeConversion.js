export const convertIsoToTime = (isoTimestamp) => {
  const date = new Date(isoTimestamp);
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
