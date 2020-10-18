function pad(num) {
  return `0${num}`.slice(-2);
}

export default function convertSecondsToMinutes(seconds) {
  let minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  minutes %= 60;

  return `${minutes}:${pad(secs)}`;
}
