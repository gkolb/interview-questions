import { isUnique } from './isUnique';
import { expect } from 'chai';

console.log(isUnique('abcd'));
describe('isUnique ', function() {

  [
    'abcdefghi',
    'jklpoiuqwerzxcvmnsadf',
    '1234567890',
    'AaBbCcDdeFg1234567890(*&^%$#@!)'
  ].forEach(arg => {

    it(`returns true for unique string: '${arg}'`, function() {
      expect(isUnique(arg)).to.be.true;
    });

  });

  [
    'abcadef',
    'aaaaaaaaaa',
    'abcdefghijklmnopqrstuvwxyza',
    '1234567890asdklf1',
    '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
  ].forEach(arg => {

    it(`returns false for string with dupes: '${arg}'`, function() {
      expect(isUnique(arg.split(''))).to.be.false;
    });

  });

});