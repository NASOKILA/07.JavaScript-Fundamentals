
function solve(rows, cols) {

    let matrix = [];

    for(let i = 0; i < rows; i++){

        let currentRow = [];

        for(let j = 0; j < cols; j++)
            currentRow.push(0);

        matrix.push(currentRow);
    }

    let number = 1;
    let currentRow = 0;
    let currentCol = 0;
    let targetNumber = rows * cols; 
    let rotations = 0;

    while(targetNumber >= number)
    {
        for(let i = rotations; i < cols - rotations; i++)
            matrix[currentRow][currentCol++] = number++;

        currentCol -= 1;
        for(let i = ++currentRow; i <= rows - 1 - rotations; i++)
            matrix[currentRow++][currentCol] = number++;

        currentRow--;
        for(let i = --currentCol; i >= rotations; i--)
            matrix[currentRow][currentCol--] = number++;

        currentCol++;
        for(let i = --currentRow; i > rotations; i--) {
            matrix[currentRow--][currentCol] = number++;
        }

        currentCol++;
        currentRow++;
        rotations++;
    }

    matrix.forEach(r => console.log(r.join(" ")));
}

solve(5,5);