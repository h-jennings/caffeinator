function toTimeString(ms) {
  const totalSeconds = parseInt(Math.floor(ms / 1000), 10);
  const totalMinutes = parseInt(totalSeconds / 60, 10);
  const totalHours = parseInt(totalMinutes / 24, 10);

  const seconds = parseInt(totalSeconds % 60, 10);
  const minutes = parseInt(totalMinutes % 60, 10);
  const hours = parseInt(totalHours % 240, 10);

  const outSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
  const outMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const outHours = hours;

  switch (true) {
    case hours > 0:
      return `${outHours}:${outMinutes}:${outSeconds}`;

    case minutes > 0:
      return `${outMinutes}:${outSeconds}`;

    default:
      return `00:${outSeconds}`;
  }
}

export default toTimeString;
