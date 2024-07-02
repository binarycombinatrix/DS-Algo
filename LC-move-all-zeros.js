/**                   two pointer
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let firstz = -1, pos;

    for(let i=0; i< nums.length-1; i++){
        if(nums[i] === 0) {
            firstz = i
            break
        }
    }

    if (firstz === -1) return 



    for(let i=firstz+1; i< nums.length; i++){
        
        if(nums[i] !== 0){

            nums[firstz] = nums[i]
            nums[i] = 0
            firstz++
        }
    }
};




                              another approach
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let pend = nums.length-1

    function swapend(start,end){
        
        for(let j=start; j<end; j++){

            let swap = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] = swap
        }
    }

    for(let i=0; i<=pend; i++){

        while(nums[i] === 0 && pend > i) {
            swapend(i,pend)
            pend--
        }
    }
};
