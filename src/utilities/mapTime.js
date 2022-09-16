//  code snippet from https://www.codegrepper.com/code-examples/javascript/javascript+time+ago+function

// This calculate the length of time from the posting by the given timestamp
export const mapTime = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  // calculate number of seconds
  let interval = seconds / 31536000;

  // calculate number of years
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }

  // calculate number of months
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }

  // calculate number of days
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }

  // calculate number of hours
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }

  // calculate number of minutes
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }

  // calculate number of seconds
  return Math.floor(seconds) + " seconds";
};
