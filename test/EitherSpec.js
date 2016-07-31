const Either = require('../src/Either');
const expect = require('chai').expect;

describe('Side', () => {
    describe('#isRight', () => {
        it('should return false if Left', () => {
            let eitherLeft = Either.Left(10);
            expect(eitherLeft.isRight()).to.be.false;
        });

        it('should return true if Right', () => {
            let eitherRight = Either.Right(10);
            expect(eitherRight.isRight()).to.be.true;
        });
    });
    describe('#isLeft', () => {
        it('should return true if Left', () => {
            let eitherLeft = Either.Left(10);
            expect(eitherLeft.isLeft()).to.be.true;
        });

        it('should return false if Right', () => {
            let eitherRight = Either.Right(10);
            expect(eitherRight.isLeft()).to.be.false;
        });
    });
    describe('#fold', () => {
       it('should execute first parameter if is left', () => {
           let left = Either.Left(10);
           let foldResult = left.fold(v => v * 2, v => v * 3);
           expect(foldResult).to.equal(20);
       });
       it('should execute second parameter if is right', () => {
           let right = Either.Right(10);
           let foldResult = right.fold(v => v * 2, v => v * 3);
           expect(foldResult).to.equal(30);
       });
    });
    describe('#Right', () => {
        it('should return a Either with a Right value', () => {
            let right = Either.Right(10);
            expect(right.isRight()).to.be.true;
            expect(right._right.get()).to.equal(10);
        });
    });
    describe('#Left', () => {
        it('should return a Either with a Left value', () => {
            let left = Either.Left(10);
            expect(left.isLeft()).to.be.true;
            expect(left._left.get()).to.equal(10);
        });
    });
    describe('#rightValue', () => {
        it('should return value if is right', () => {
            let right = Either.Right(10);
            expect(right.rightValue()).to.equal(10);
        });
        it('should throw exception if is left', () => {
            let left = Either.Left(10);
            expect(() => left.rightValue()).to.throw(Error);
        });
    });
    describe('#leftValue', () => {
        it('should return value if is left', () => {
            let left = Either.Left(10);
            expect(left.leftValue()).to.equal(10);
        });
        it('should throw exception if is right', () => {
            let right = Either.Right(10);
            expect(() => right.leftValue()).to.throw(Error);
        });
    });
});