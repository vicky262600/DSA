/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const length = nums.length;
    const left = new Array(length);
    const right = new Array(length);
    const answer = new Array(length);

    // Step 1: Fill the left array
    left[0] = 1; // No elements to the left of the first element
    for (let i = 1; i < length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // Step 2: Fill the right array
    right[length - 1] = 1; // No elements to the right of the last element
    for (let i = length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    // Step 3: Build the answer array
    for (let i = 0; i < length; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
};


