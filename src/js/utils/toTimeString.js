function toTimeString(timeMs, stripFractions = true) {
  const secondsNum = timeMs / 1000;
  const hours = Math.floor(secondsNum / 3600);
  const minutes = Math.floor((secondsNum - hours * 3600) / 60);
  const seconds = secondsNum - hours * 3600 - minutes * 60;


  // const outHours = hours < 10 ? `0${hours}` : hours.toString();
  const outHours = hours.toString();
  const outMins = minutes < 10 ? `0${minutes}` : minutes.toString();
  let outSecs = seconds < 10 ? `0${seconds}` : seconds.toString();

  if (outSecs.length === 2) outSecs = `${outSecs}.`;
  outSecs = outSecs.padEnd(6, '0');

  if (stripFractions) outSecs = outSecs.substr(0, 2);

  switch (true) {
    case hours === 0:
      return `${outMins}:${outSecs}`;

    case minutes === 0:
      return `00:${outSecs}`;

    default:
      return `${outHours}:${outMins}:${outSecs}`;
  }
}

export default toTimeString;
