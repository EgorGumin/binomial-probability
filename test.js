const binomialProbability = require('./');
const tap = require('tap');

const EPSILON = 0.00001;

tap.assert(Math.abs(binomialProbability(2, 2, 1/2) - 0.25000) < EPSILON,
	'The probability of two coin flips being heads is 0.25');

tap.assert(Math.abs(binomialProbability(5, 2, 1/6) - 0.16075) < EPSILON,
	'The probability of getting two sixes when rolling a die twice is roughly 0.161');

tap.assert(Math.abs(binomialProbability.cumulative(100, 45, 1/2)- 0.18410) < EPSILON,
	'The probability of getting 45 or fewer heads in 100 tosses of a coin is roughly 0.184');
