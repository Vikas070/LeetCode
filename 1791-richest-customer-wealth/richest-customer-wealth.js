/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    var wealth = [];
    for (i in accounts) {
        wealth[i] = accounts[i].reduce((a, c) => a + c, 0)
    }

    return Math.max.apply(0, wealth);
};