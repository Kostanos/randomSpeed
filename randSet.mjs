export default function uniqueIndexes(max, qty) {
  const retVal = new Set;
  while (retVal.size < qty) {
    retVal.add(Math.floor(Math.random() * max));
  }
  return Array.from(retVal);
}
