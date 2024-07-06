export default function updateUniqueItems(mp) {
  if (!(_map instanceof Map)) throw Error('Cannot process');
  mp.forEach((x, y) => {
    if (x === 1) mp.set(y, 100);
  });

  return mp;
}
