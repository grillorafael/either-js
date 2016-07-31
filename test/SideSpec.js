const Side = require('../src/Side');

const Right = require('../src/Right');
const Left = require('../src/Left');

const expect = require('chai').expect;

describe('Side', () => {
    describe('#isSide', () => {
        it('should return true if Left', () => {
            let left = Left.with(10);
            expect(Side.isSide(left)).to.be.true;
        });

        it('should return true if Right', () => {
            let right = Right.with(10);
            expect(Side.isSide(right)).to.be.true;
        });
    });
    
    describe('#get', () => {
        it('should return value if Left', () => {
            let left = Left.with(10);
            expect(left.get()).to.equal(10);
        });

        it('should return value if Right', () => {
            let right = Right.with(10);
            expect(right.get()).to.equal(10);
        });
    });
});