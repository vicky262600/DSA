/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<2) return s;

    let finalString = "";
    const yo=(s, left, right)=>{
        while(left>=0 && right<s.length && s[left]===s[right]){
            left--;
            right++;
            // length++;
            // finalString = finalString + s[left];
        }
        return s.slice(left+1, right);
    }
    for(let i = 0; i<s.length; i++){
        let first = yo(s, i, i);
        let second = yo(s,i ,i+1);
        if(first.length > finalString.length){
            finalString = first;
        }
        if(second.length > finalString.length){
            finalString = second;
        }
    }
    return finalString;
};