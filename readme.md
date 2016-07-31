# EitherJS [![Build Status](https://travis-ci.org/grillorafael/either-js.svg?branch=master)](https://travis-ci.org/grillorafael/either-js)
This project is a Naive representation of Scala's `Either[A, B]`

`npm install either-js --save`

## Examples
```javascript
const Either = require('either-js');
function mixedResultFn() {
    let v = parseInt(Math.random() * 1000);
    if(v%2===0) return Either.Left(v);
    else return Either.Right(v);
}

function caseLeft(v) {
    return v * 2;
}

function caseRight(v) {
    return v * 3;
}

const either = mixedResultFn();
const mixedResult = either.fold(caseLeft, caseRight);
```

## MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.