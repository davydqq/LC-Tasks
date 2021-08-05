"use strict";

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let mapMax = new Map();
  let currentMap = new Map();

  const str = [...s];
  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if(!currentMap.has(char)){
            currentMap.set(char, i);
      }else{
          i = currentMap.get(char);
          if(currentMap.size > mapMax.size){
            mapMax = currentMap;
          }
          currentMap = new Map();
      }
  }
  return mapMax.size < currentMap.size ? currentMap.size : mapMax.size;
};

const s = "dvdf";
const result = lengthOfLongestSubstring(s);
console.log(result);
