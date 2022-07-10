import { expect } from 'chai';

import randShuffle from './randShuffle.mjs';
import randHash from './randHash.mjs';
import randSet from './randSet.mjs';
import randIndexOf from './randIndexOf.mjs';

const funcs = {
  randShuffle, randHash, randSet, randIndexOf
};

describe('Get random numbers speed test', () => {
  const testParams = [
    [100, 10],
    [100, 80],
    [1000, 5],
    [1000, 900],
    [10, 10],
  ];

  for (const func in funcs) {
    describe(func, () => {
      for (const params of testParams) {
        it(JSON.stringify(params), () => {
          const res = funcs[func](...params);
          expect(res, `failed with ${JSON.stringify(params)}`).to.be.an('Array').with.length(params[1]);
          expect(res.filter((r) => r < params[0] && r >= 0 && Number.isInteger(r)), `failed with ${JSON.stringify(params)}`)
            .to.have.length(params[1]);
          let x;
          while ((x = res.pop()) !== undefined) {
            expect(res.indexOf(x)).to.eq(-1);
          };
        });
      }
    });
  }

  // describe('randHash', () => {
  //   for (const params of testParams) {
  //     it(JSON.stringify(params), () => {
  //       const res = randHash(...params);
  //       expect(res, `failed with ${JSON.stringify(params)}`).to.be.an('Array').with.length(params[1]);
  //       expect(res.filter((r) => r < params[0] && r >= 0 && Number.isInteger(r)), `failed with ${JSON.stringify(params)}`)
  //         .to.have.length(params[1]);
  //       let x;
  //       while ((x = res.pop()) !== undefined) {
  //         expect(res.indexOf(x)).to.eq(-1);
  //       };
  //     });
  //   }
  // });

  // describe('randSet', () => {
  //   for (const params of testParams) {
  //     it(JSON.stringify(params), () => {
  //       const res = randSet(...params);
  //       expect(res, `failed with ${JSON.stringify(params)}`).to.be.an('Array').with.length(params[1]);
  //       expect(res.filter((r) => r < params[0] && r >= 0 && Number.isInteger(r)), `failed with ${JSON.stringify(params)}`)
  //         .to.have.length(params[1]);
  //       let x;
  //       while ((x = res.pop()) !== undefined) {
  //         expect(res.indexOf(x)).to.eq(-1);
  //       };
  //     });
  //   }
  // });

  // describe('randIndexOf', () => {
  //   for (const params of testParams) {
  //     it(JSON.stringify(params), () => {
  //       const res = randIndexOf(...params);
  //       expect(res, `failed with ${JSON.stringify(params)}`).to.be.an('Array').with.length(params[1]);
  //       expect(res.filter((r) => r < params[0] && r >= 0 && Number.isInteger(r)), `failed with ${JSON.stringify(params)}`)
  //         .to.have.length(params[1]);
  //       let x;
  //       while ((x = res.pop()) !== undefined) {
  //         expect(res.indexOf(x)).to.eq(-1);
  //       };
  //     });
  //   }
  // });
});