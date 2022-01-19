/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // input is an array of integers sorted in ascending order

    // two pointers
    let left = 0;
    let right = 1;
    
    // loop through
    // base case right === nums.length
    while (right < nums.length) {
// if nums[l] !== nums[r], increment left, swap
       if (nums[left] !== nums[right]) {
            left++;
            [nums[left], nums[right]] = [nums[right], nums[left]]
        }
        // increment right each time
        right++;
    }

    
    return left + 1;
};