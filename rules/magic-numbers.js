/* eslint-disable no-magic-numbers */

/*
 * Rules for generating a set of acceptable magic numbers which are commonly
 * (or at least not rarely) used in everyday programming.
 */

"use strict";

const MagicNumbers = new Set();
module.exports = MagicNumbers;

// Common numbers (-1 to 10)
for (let i = -1; i <= 10; i++) {
    MagicNumbers.add(i);
}

// Multiples of 10 (20 to 90)
for (let i = 2; i <= 9; i++) {
    MagicNumbers.add( 10 * i );
}

// Powers of 10 (100, 1000, 10000)
for (let i = 2; i <= 4; i++) {
    MagicNumbers.add( Math.pow(10, i) ); // 10 ** i
}

// Powers of 2; Powers of 2, minus 1 (starting at 16, up to 1024)
for (let i = 4; i <= 10; i++) {
    MagicNumbers.add( Math.pow(2, i) ); // 2 ** i
    MagicNumbers.add( Math.pow(2, i) - 1 ); // (2 ** i) - 1
}

// Time related
for (let i of [12, 15, 24, 30, 60, 365]) {
    MagicNumbers.add(i);
}

// Webdev related
for (let i of [80, 8000, 8080, 65535]) {
    MagicNumbers.add(i);
}

// Primes (first 5 greater than 10)
for (let i of [11, 13, 17, 19, 23]) {
    MagicNumbers.add(i);
}

// Age related
for (let i of [13, 18, 21]) {
    MagicNumbers.add(i);
}

// Random other numbers
MagicNumbers.add(120); // Line length
MagicNumbers.add(25);
