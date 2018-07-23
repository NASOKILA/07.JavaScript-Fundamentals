
function neighbours(matrix) {

    let neighbours = 0;

    for(let row in matrix){
        for(let col in matrix[row]){

            if(Number(row)+1 < matrix.length) {

                let rowCol = matrix[row][col];
                let rowPlusOneCol = matrix[row][Number(col)+1];
                let rowColPlusOne = matrix[Number(row)+1][col];

                if(matrix[row][col] === matrix[Number(row)+1][col])
                    neighbours++;

                if (matrix[row][col] === matrix[row][Number(col) + 1])
                    neighbours++;
            }else{

                if (matrix[row][col] === matrix[row][Number(col) + 1])
                    neighbours++;
            }
        }
    }

    console.log(neighbours);
}

neighbours(
    [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);