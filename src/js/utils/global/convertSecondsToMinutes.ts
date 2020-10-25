function pad(num: number) {
  return `0${num}`.slice(-2);
}

export function convertSecondsToMinutes(seconds: number) {
  let minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  minutes %= 60;

  return `${minutes}:${pad(secs)}`;
}
