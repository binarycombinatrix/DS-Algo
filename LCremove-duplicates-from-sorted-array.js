/**                                                 Set approach
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




/**                                                      Two Pointer approach
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if(nums.length < 2) return nums.length;

    let unique1=0, unique2=1;
    while(unique2 < nums.length){
        if(nums[unique1] === nums[unique2]) unique2++

        else{
            let swap = nums[unique1+1]
            nums[unique1+1] = nums[unique2]
            nums[unique2] = swap

            unique1++
            unique2++
        }
    }

    return unique1+1
};
