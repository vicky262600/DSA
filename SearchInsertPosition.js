/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    i=0;
    while(nums[i]<target){
        i++;
    }
    return i;
};