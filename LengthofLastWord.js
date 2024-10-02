/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    length=0;
    for( let i=s.length-1; i >= 0; i--){
        if(s[i]==" " && length!==0){
            return length;
        }
        if(s[i]!==" ") length++;
    }
    return length;
};