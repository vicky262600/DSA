/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let str = s.split('');
    let total = 0;
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for(let i = 0; i < str.length; i++){
        let currentValue = romanMap[s[i]];
        let nextValue = romanMap[s[i + 1]];
        if(currentValue && currentValue < nextValue){
            total = total - currentValue; 
        }
        else{
            total = total + currentValue
        }
    }
    return total;
    
};

let ans = romanToInt("III");
console.log(ans);