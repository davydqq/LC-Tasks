"use strict";

/**
 * @param {number[]} m
 */
const findMedian = (m) => {
  const middle = Math.floor((m.length - 1) / 2); 
  if (m.length % 2) {
    return m[middle];
  } else {
      return (m[middle] + m[middle + 1]) / 2.0;
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 const findMedianSortedArrays = function(nums1, nums2) {

   if(nums1.length === 0 && nums2.length === 0){
     return 0;
   }
   const numbers = [...nums1, ...nums2].sort((a, b) => a - b);
   return findMedian(numbers);
};

const nums1 = [1];
const nums2 = [2,3,4];
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);
