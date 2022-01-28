/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // merge two arrays non descending sorted
    // two variables to track indices in nums1 and nums2. one variable to track progress at end of num1. compare, and input larger num into nums1[tracker]. decrement tracker each time. decrement first or second if that number is larger
        let first = m - 1; //-1
        let second = n - 1; // 0
        let tracker = m + n - 1; // 0
        // loop. base case if first and second arrays < 0
        while (first >= 0 && second >= 0) {
            if (nums2[second] >= nums1[first]) {
                nums1[tracker] = nums2[second];
                second--;
            } else {
                nums1[tracker] = nums1[first];
                first--
            }
                tracker--;
        }
        // edge case. if nums1 is blank, then input all of nums2 into nums1. if nums2 is blank, nums1 stays as is, no need to do anything.
        while (second >= 0) {
            nums1[tracker] = nums2[second];
            second--;
            tracker--;
        }
    // do NOT return. All values to be stored inside nums1
    };