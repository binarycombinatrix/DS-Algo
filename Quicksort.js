/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //quicksort

var sortArray = function(nums) {
    
    function pivot(arr, start, end) {

        let randp = start + Math.floor(Math.random(end - start + 1))
        const pt = arr[randp]
        arr[randp] = arr[end]
        arr[end] = pt


        let pivot = arr[end], border = start

        for (let i = start; i <= end; i++){
            if(arr[i] < pivot) 
            {
                //swap
                const val = arr[i]
                arr[i] = arr[border]
                arr[border] = val
                border ++
            }
        }

        arr[end] = arr[border]
        arr[border] = pivot
        return border

    }

    function quicksort (arr, start, end) {
        if (start >= end) return

        let p = pivot(arr, start, end)

        quicksort(arr, start, p-1)

        quicksort(arr, p+1, end )
    }

    quicksort(nums, 0, nums.length-1)

    return nums
};
