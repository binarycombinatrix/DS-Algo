Leetcode 912 Sort an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    function merge(ar, s1, e1, s2, e2){

        let aux = [], i=s1, j=s2;

        while(i<=e1 && j<=e2){

            if(ar[i] <= ar[j]) {
                aux.push(ar[i])
                i++
            }

            else if(ar[j] < ar[i]) {
                aux.push(ar[j]) 
                j++
            }

        }

        while(i>e1 && j<=e2){
            aux.push(ar[j])
            j++
        }

        while(j>e2 && i<=e1){
            aux.push(ar[i])
            i++
        }

        for(let ai=0; ai< aux.length; ai++){
            ar[s1+ai] = aux[ai]
        }


        
    }
    
    function mergesort( arr, start, end) {

        let mid = Math.floor((end + start)/2)

        if(start < end) {

            mergesort(arr, start, mid)
            mergesort(arr, mid+1, end)
            merge(arr, start, mid, mid+1, end)

            return
        }

        else return
    }

    mergesort(nums,0, nums.length-1)

    return nums
};
