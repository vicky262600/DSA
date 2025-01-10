const array = [[2,2], [1,2,2], [3, 4, 1, 1]];
let count = 0;
let row = 0;
let col = 0;
for(let i =0; i < array.length; i++){
    for( let j=0; j < array[i].length; j++){
        console.log("num",array[i][j]);
        count = count + array[i][j];
    }
// row++;
}
console.log(count);