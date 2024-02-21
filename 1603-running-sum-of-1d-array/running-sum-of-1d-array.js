/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = (nums) => {
    var sum_of_nums = [];
    sum_of_nums[0]=nums[0];
    for (var i = 1; i < nums.length; i++) {
        sum_of_nums[i] = nums[i] + sum_of_nums[i-1]
    }
    return sum_of_nums;
};