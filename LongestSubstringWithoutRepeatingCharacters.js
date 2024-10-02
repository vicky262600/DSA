/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    length = 0;
    prev = 0;
    let str = ""
    for(let i= 0; i<s.length; i++){
        if(!str.includes(s[i])){
            str = str.slice(0) + s[i];
            length++;
        }else{
            // Compare current length to previous max length
            prev = Math.max(prev, length);
            
            // Find the index of the repeated character and adjust the substring
            let index = str.indexOf(s[i]);
            str = str.slice(index + 1) + s[i];
            
            // Update length to the new valid substring's length
            length = str.length;
        }
    }
    return Math.max(prev, length);
};