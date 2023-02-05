"use strict"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let res = '';
    for(let i = 0; i < strs[0].length; i++) {
        const letter = strs[0][i];
        const sameLetter = strs.every(x => x[i] === letter);
        if(sameLetter) {
            res += letter;
        }else break;
    }
    
    return res;
};

const strs2 = ["cir","car"];

console.log(longestCommonPrefix(strs2));