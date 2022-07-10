export default function uniqueIndexes(max, qty) {
  const retVal = [];
  while (retVal.length < qty) {
    const idx = Math.floor(Math.random() * max);
    if (retVal.indexOf(idx) === -1) retVal.push(idx);
  }
  return retVal;
}
