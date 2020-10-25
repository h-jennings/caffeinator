export function toTimeString(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = totalMinutes / 24;

  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor(totalMinutes % 60);
  const hours = Math.floor(totalHours % 240);

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
