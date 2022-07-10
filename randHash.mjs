export default function uniqueIndexes(max, qty) {
  const retVal = {};
  while (qty > 0) {
    const idx = Math.floor(Math.random() * max);
    if (retVal[idx] === undefined) {
      retVal[idx] = idx;
      qty--;
    }
  }
  return Object.values(retVal);
}
