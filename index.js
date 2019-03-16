const mathjs = require('mathjs');
const BigNumber = mathjs.bignumber;
const assert = require('assert');

function binomialProbability(trials, successes, successProbability) {
    assert.ok(typeof trials === 'number');
    assert.ok(trials >= 0);

    assert.ok(typeof successes === 'number');
    assert.ok(successes >= 0);

    assert.ok(successes <= trials);

    assert.ok(typeof successProbability === 'number');
    assert.ok(successProbability >= 0);
    assert.ok(successProbability <= 1);

    const failures = trials - successes;
    const failureProbability = 1 - successProbability;

    return mathjs
        .chain(mathjs.combinations(BigNumber(trials), BigNumber(successes)))
        .multiply(BigNumber(Math.pow(successProbability, successes)))
        .multiply(BigNumber(Math.pow(failureProbability, failures)))
        .number()
        .done()
}

function cumulativeBinomialProbability(trials, successes, successProbability) {
    let cumulative = 0;

    for (let i = 0; i <= successes; ++i) {
        cumulative = cumulative + binomialProbability(trials, i, successProbability)
    }

    return cumulative
}

module.exports = binomialProbability;
module.exports.cumulative = cumulativeBinomialProbability;
