/**
 * Get set of unique numbers from the renge between 0 and {max}
 * @param {number} max The top number of the renge 0..max (will not be included in the result)
 * @param {number} qty The amount of unique numbers from the renge Must be less or equal to {max}
 * @returns {Array<number>} List of unique random numbers from the renge (0 <= random number < max)
 */
export default function uniqueIndexes(max, qty) {
  const retVal = new Set;
  while (retVal.size < qty) {
    retVal.add(Math.floor(Math.random() * max));
  }
  return Array.from(retVal);
}
