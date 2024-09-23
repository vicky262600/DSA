/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the current pair adds up to the target
            if (nums[i] + nums[j] === target) {
                result = [i, j];
                return result; // Return the indices immediately
            }
        }
    }
    
    // Return an empty array if no solution is found (though problem guarantees one solution)
    return result;
};
