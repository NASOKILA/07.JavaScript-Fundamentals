
function solve(primaryMatrix, secondaryMatrix, overlayCoord, startingCoords) {

    for (let row in overlayCoord) {

        let indexRowCopy = overlayCoord[row][0];
        let indexColCopy = overlayCoord[row][1];

        for (let i = 0; i < secondaryMatrix.length; i++) {

            for (let j = 0; j < secondaryMatrix.length; j++) {

                let currentPrimaryMatrixRow = (i + indexRowCopy);
                let currentPrimaryMatrixCol = (j + indexColCopy);

                if (currentPrimaryMatrixRow < 0 || currentPrimaryMatrixRow >= primaryMatrix.length
                    || currentPrimaryMatrixCol < 0 || currentPrimaryMatrixCol >= primaryMatrix.length) {
                    continue;
                }

                if (secondaryMatrix[i][j] == 1) {
                    primaryMatrix[i + indexRowCopy][j + indexColCopy] == 1
                        ? primaryMatrix[i + indexRowCopy][j + indexColCopy] = 0
                        : primaryMatrix[i + indexRowCopy][j + indexColCopy] = 1;
                }
            }
        }
    }

    let steps = 0;
    let previousDirection;
    let currentRow = startingCoords[0];
    let currentCol = startingCoords[1];

    while (true) {

        if (currentRow + 1 < primaryMatrix.length
            && primaryMatrix[currentRow + 1][currentCol] == 0
            && previousDirection != 'up') {
            previousDirection = 'down';
            currentRow++;
        }

        else if (currentCol + 1 < primaryMatrix[0].length
            && primaryMatrix[currentRow][currentCol + 1] == 0
            && previousDirection != 'left') {
            previousDirection = 'right';
            currentCol++;
        }

        else if (currentRow - 1 >= 0
            && primaryMatrix[currentRow - 1][currentCol] == 0
            && previousDirection != 'down') {
            previousDirection = 'up';
            currentRow--;
        }

        else if (currentCol - 1 >= 0
            && primaryMatrix[currentRow][currentCol - 1] == 0
            && previousDirection != 'right') {
            previousDirection = 'left';
            currentCol--;
        }

        else {
            break;
        }

        steps++;
    }

    console.log(++steps);
    definePosition(currentRow, currentCol);

    function definePosition(endRow, endCol) {

        let output = '';

        if (endRow === 0)
            output = 'Top';

        else if (endCol === 0)
            output = 'Left';

        else if (endRow === primaryMatrix.length - 1)
            output = 'Bottom';

        else if (endCol === primaryMatrix[0].length - 1)
            output = 'Right';

        else if (endRow < primaryMatrix.length / 2 && endCol >= primaryMatrix[0].length / 2) {
            output = 'Dead end 1';
        }

        else if (endRow < primaryMatrix.length / 2 && endCol < primaryMatrix[0].length / 2) {
            output = 'Dead end 2';
        }

        else if (endRow >= primaryMatrix.length / 2 && endCol < primaryMatrix[0].length / 2) {
            output = 'Dead end 3';
        }

        else if (endRow >= primaryMatrix.length / 2 && endCol >= primaryMatrix[0].length / 2) {
            output = 'Dead end 4';
        }

        console.log(output);
    }
}

solve(
    [[1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 0]],

    [[0, 1, 1],
    [0, 1, 0],
    [1, 1, 0]],

    [[1, 1],
    [2, 3],
    [5, 3]],

    [0, 2]);

solve(
    [[1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1]],
    [[0, 0],
    [2, 1],
    [1, 0]],
    [2, 0]);