/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let bool = x<0;

let con = 0;
x = Math.abs(x);
while(x>0){
    rev = x%10;
    con = (con*10) + rev;
    x = Math.floor(x/10);
}
if (con < Math.pow(-2, 31) || con > Math.pow(2, 31) - 1) {
    return 0;  // Return 0 in case of overflow
}        
if(bool){
    let negetiv = -con;
    return negetiv
}
return con;

};