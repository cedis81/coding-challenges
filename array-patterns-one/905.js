/**
 * @param {number[]} nums
 * @return {number[]}
 */

//without using extra space
 var sortArrayByParity = function(nums) {
    // input is an array of integers
    // two pointers
    let left = 0;
    let right = nums.length - 1;
    // loop through array
    // base case = when left < right
    while (left < right) {// if nums[left] is odd AND nums[right] is even, swap and increment/decrement
        if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else if (nums[left] % 2 === 0) {// if nums[left] is even, increment left
            left++;
        } else if (nums[right] % 2 !== 0) {// if nums[right] is odd, decrement right
            right--;
        }
    }
    //return array of integers. array will be same size
    return nums;
};

// with extra space
var sortArrayByParity2 = function(nums) {
    let l = nums[0];
    let r = nums.length-1;
    
    //traverse array and check elements for even and odd values
    let evenArray = [];
    let oddArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2===0) {
            evenArray.push(nums[i]);
        } else {
            oddArray.push(nums[i]);
        }
    }
    return ([...evenArray,...oddArray])
    
};