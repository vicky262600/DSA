/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let y = new Set();
    for(let i = 0; i < nums.length; i++){
        if(y.has(nums[i])){
            return true;
        }
        y.add(nums[i]);
    }
    return false;
};