// recursive solution

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    function helper(left, right) {
    //base case if left >= right
        if (left >= right) return;
    //swap characters        
        [s[left], s[right]] = [s[right], s[left]];
    //recursive call
        return helper(left +1, right - 1);
    }
    //initial call
    helper(0, s.length-1);
};