/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    var steps = 0;
    while (num) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        steps++;
    }
    return steps;
};