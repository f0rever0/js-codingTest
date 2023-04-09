const solution = (m, musicinfos) => {
  m = m
    .replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a");

  const musicArray = musicinfos.map((music) => {
    let [startTime, endTime, title, melody] = music.split(",");
    const playTime =
      parseInt(endTime.split(":")[0]) * 60 +
      parseInt(endTime.split(":")[1]) -
      (parseInt(startTime.split(":")[0]) * 60 +
        parseInt(startTime.split(":")[1]));

    melody = melody
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g")
      .replace(/(A#)/g, "a");

    let playMelodyCount = 0;
    let melodyList = [];
    while (playMelodyCount !== playTime) {
      melodyList.push(melody.charAt(playMelodyCount % melody.length));
      playMelodyCount++;
    }
    return [title, playTime, melodyList.join("")];
  });

  let result = [];

  musicArray.forEach((item) => {
    if (item[2].includes(m)) result.push(item);
  });

  result.sort((a, b) => {
    if (a[1] === b[1]) return 0;
    return b[1] - a[1];
  });

  if (result.length === 0) return "(None)";
  return result[0][0];
};
