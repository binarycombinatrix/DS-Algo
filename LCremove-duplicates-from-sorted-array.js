/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set(nums)
    let uniqueArr = Array.from(set)

    for (let i=0; i<uniqueArr.length; i++){
        nums[i] = uniqueArr[i]
    }

    return uniqueArr.length
};
