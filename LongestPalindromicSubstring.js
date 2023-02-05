/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    const n = s.length;
    let maxLength = 1;
    let st = 0;
    let end = 0;

    let startCheck = (rightShift = 0) => {
        for(let i = 0; i < n; i++) {
            let l = i, r = i + rightShift;
            while(l >= 0 && r < n)
            {
                if(s[l] == s[r]) {
                    l--;
                    r++;
                }else {
                    break;
                }
            }
            let len = r - l + 1;
            if(len > maxLength) {
                maxLength = len;
                st = l + 1;
                end = r - 1;
            }
        }
    }

    startCheck();
    startCheck(1);
    
    return s.substring(st, end + 1);
};

const s0 = 'babad';
const s1 = 'cbbd';
const s2 = 'cccc';
const s3 = 'tattarrattat';

console.log(longestPalindrome(s1));