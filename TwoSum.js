var twoSum = function(nums, target) {
    const result = [];
    for (let i = 0; i < nums.length; i++) { 
      for (let j = i; j < nums.length; j++) { 
          if(( (nums[i]  + nums[j]) == target) && i !== j){
              result.push(i);
              result.push(j);
          }
      }
    }
    return result;
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target));