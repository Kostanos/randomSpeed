export default function uniqueIndexes(max, qty) {
  return (Array.from((new Array(max)).keys()))
    .sort((a, b) => Math.random() * 2 - 1)
    .slice(0, qty);
}
