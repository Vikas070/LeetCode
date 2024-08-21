/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    return nums.reduce((acc, num) => Math.abs(num) < Math.abs(acc)
        ? num
        : Math.abs(num) === Math.abs(acc)
            ? Math.max(num, acc)
            : acc,
    );
};