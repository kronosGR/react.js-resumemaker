export const ConvertRGBtoHSL = (rgb) => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const mn = Math.min(r, g, b);
  const mx = Math.max(r, g, b);
  const dif = mx - mn;
  let h, s;

  if (mx === mn) h = 0;
  else if (r === mx) h = (g - b) / dif;
  else if (g === mx) h = 2 + (b - r) / dif;
  else if (b === mx) h = 4 + (r - g) / dif;

  h = Math.min(h * 60, 360);

  if (h < 0) h += 360;

  const l = (mn + mx) / 2;

  if (mx === mn) s = 0;
  else if (l < 0.5) s = dif / (mx + mn);
  else s = dif / (2 - mx - mn);

  return [Math.round(h), Math.round(s * 100), Math.round(l * 1000)];
};
