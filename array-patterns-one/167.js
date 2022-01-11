/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    // input is a 1-indexed array of integers sorted in non-decreasing order 
    // two pointers
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    // loop to check sum
    // base case - while rightPointer is greater than leftPointer
    while (leftPointer < rightPointer) {
        const sum = numbers[leftPointer] + numbers[rightPointer]
        
        if (sum > target) {//sum > target? right decrement    
            rightPointer--
        } else if (sum < target) {//sum < target? left increment
            leftPointer++
        } else {//sum === target? return
        // output is an array of length 2 [index1 + 1, index2 + 1]. Only one solution.
            return [leftPointer + 1, rightPointer + 1]
        }
    }
};