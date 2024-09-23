/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(!map[char] ){
            stack.push(char);
        }
        else{
            if(stack[stack.length-1]===map[char] && stack.length > 0){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }
    return stack.length===0;
};