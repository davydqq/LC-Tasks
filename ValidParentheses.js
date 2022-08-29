'use-strict';

const map = {
    '{': '}',
    '(': ')',
    '[': ']'
}

const mapOposite = {
    '}': '{',
    ')': '(',
    ']': '['
}

/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
    let stack = [];
    for(const symbol of s) {
        const parenthes = map[symbol];
        if(parenthes) {
            stack.push(parenthes);
        }
        const last = stack[stack.length - 1];
        if(last !== symbol && mapOposite[symbol]) {
            return false;
        }
        if(symbol === last) {
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(isValid('[ssd]sa{ {d} }ad'));