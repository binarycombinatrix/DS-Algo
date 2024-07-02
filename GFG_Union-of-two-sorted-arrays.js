//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
*/

class Solution {
    //Function to return a list containing the union of the two arrays. 
    findUnion(arr1, arr2, n, m)
    {
        
        let i=0,j=0, aux=[];
        
        while(i<arr1.length && j<arr2.length){
            
           if(aux[aux.length -1] === arr1[i]) i++
           
           else if(aux[aux.length -1] === arr2[j]) j++
            
           else if(arr1[i] <= arr2[j]){
                aux.push(arr1[i])
                i++
            }
            
            else if(arr2[j] < arr1[i]){
                aux.push(arr2[j])
                j++
            }
            
        }
        
        while(i === arr1.length && j < arr2.length) {
            
            if(aux[aux.length -1] === arr2[j]) j++
            
            else {
                aux.push(arr2[j])
                j++
            }
        }
        
        while( j === arr2.length && i < arr1.length) {
            
            if(aux[aux.length -1] === arr1[i]) i++
            
            else {
                aux.push(arr1[i]) 
                i++
            }
        }
        
        return aux
        
        //your code here
    }
}
