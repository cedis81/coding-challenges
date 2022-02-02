/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    //input is an array of characters
    //no new array, o(1) memory
    
    let left = 0;
    let right = s.length - 1;
    
    // loop
    // base case is when left > right
    while(left < right) {
        //swap characters. increment left. decrement right
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    // nothing to return
};
