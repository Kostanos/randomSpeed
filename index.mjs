#!/usr/bin/env node

import randShuffle from './randShuffle.mjs';
import randHash from './randHash.mjs';
import randSet from './randSet.mjs';
import randIndexOf from './randIndexOf.mjs';


const timed = (f) => (...args) => {
  let start = performance.now();
  let ret = f(...args);
  console.log(`function ${f.name} took ${(performance.now() - start).toFixed(3)}ms`);
  return ret;
}

const params = [100, 10];
const reps = new Array(10000);
reps.fill(true);

console.log(`Testing ${reps.length} x (${params[1]} out of ${params[0]})\n`);
process.stdout.write('Shuffle ');
timed(() => reps.forEach(() => randShuffle(...params)))();
process.stdout.write('Hash ');
timed(() => reps.forEach(() => randHash(...params)))();
process.stdout.write('Set ');
timed(() => reps.forEach(() => randSet(...params)))();
process.stdout.write('IndexOf ');
timed(() => reps.forEach(() => randIndexOf(...params)))();
