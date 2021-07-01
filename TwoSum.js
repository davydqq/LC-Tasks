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

console.log(twoSum());