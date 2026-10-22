/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const n = arr.length;
    let zeros = 0;
    for (let i = 0; i < n; i++) if (arr[i] === 0) zeros++;
    for (let i = n - 1, j = n + zeros - 1; i >= 0; i--, j--) {
        if (j < n) arr[j] = arr[i];
        if (arr[i] === 0) {
            j--;
            if (j < n) arr[j] = 0;
        }
    }
};