const main = () =>{
    row = 3;
    col = 3;
    const twoDarray = [];
    for( let i = 0; i < row; i++){
        twoDarray[i] = []; 
        for(let j = 0; j < col; j++){
            let userInput = prompt(`enter the value for twoDarray[${i}][${j}]`);
            twoDarray[i][j] = userInput;
        }
    }
    console.log(twoDarray);
}

const result = main();
console.log(result);