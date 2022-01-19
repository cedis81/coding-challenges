/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let resultArr = [];
    // input is a sorted array ascending
    let l = 0;
    let r = nums.length - 1;
    let resultIndex = nums.length - 1;
    
    // loop
    // base case when resultIndex === 0
    while (resultIndex > -1) {
        let leftSquare = nums[l] ** 2;
        let rightSquare = nums[r] ** 2;;
    // if left square >= right square, push left square to resultArr[resultIndex]. increment l and decrement resultIndex
        if (leftSquare >= rightSquare) {
            resultArr[resultIndex] = leftSquare;
            l++;
            resultIndex--;
        }
    // if right square > left square, push right square to resultArr[resultIndex]. decrement r and resultIndex
        if (rightSquare > leftSquare) {
            resultArr[resultIndex] = rightSquare;
            r--;
            resultIndex--;
        }
    }
    // return an array. array is square of every value in nums, sorted ascending
    return resultArr;
};
