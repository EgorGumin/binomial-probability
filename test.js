const binomialProbability = require('./');
const tap = require('tap');

const EPSILON = 0.00001;

tap.assert(Math.abs(binomialProbability(2, 2, 1 / 2) - 0.25000) < EPSILON,
    'The probability of two coin flips being heads is 0.25');

tap.assert(Math.abs(binomialProbability(5, 2, 1 / 6) - 0.16075) < EPSILON,
    'The probability of getting two sixes when rolling a die twice is roughly 0.161');

tap.assert(Math.abs(binomialProbability.cumulative(100, 45, 1 / 2) - 0.18410) < EPSILON,
    'The probability of getting 45 or fewer heads in 100 tosses of a coin is roughly 0.184');

tap.assert(Math.abs(binomialProbability.cumulative(1000, 780, 0.77) - 0.78419) < EPSILON,
    'If a probability to score a penalty is 0.77 the probability to score 780 or less penalties from 1000 is roughly 0.78419');
