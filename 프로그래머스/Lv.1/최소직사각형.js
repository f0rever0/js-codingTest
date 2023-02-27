const solution = (sizes) => {
  let maxWidth = 0;
  let maxHeight = 0;
  sizes.forEach((s) => {
    const [w, h] = s.sort((w, h) => w - h);
    if (w > maxWidth) maxWidth = w;
    if (h > maxHeight) maxHeight = h;
  });

  return maxWidth * maxHeight;
};
