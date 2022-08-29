
const dfs = function (result, stack, index, candidates, target) {
    let tmp = null;
    if (target < 0) return;
    if (target === 0) return result.push(stack);
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      tmp = Array.from(stack);
      tmp.push(candidates[i]);
      dfs(result, tmp, i + 1, candidates, target - candidates[i]);
    }
  };
  

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 const combinationSum2 = function(candidates, target) {
    var res = [];
    candidates.sort((a, b) => (a - b));
    dfs(res, [], 0, candidates, target);
    return res;
};

const candidates = [2,1,1,5];
const target = 8;

const res = combinationSum2(candidates, target);