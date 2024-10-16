export const swap2dArrElements = (arr, [row1, col1], [row2, col2]) => {
    const arrCopy = arr.map(row => [...row]);

    const temp = arrCopy[row1][col1];
    arrCopy[row1][col1] = arrCopy[row2][col2];
    arrCopy[row2][col2] = temp;

    return arrCopy;
};

export const flatArrayToMatrix = (arr, matrixSize) => {
    const matrix = [];

    for (let i = 0; i < arr.length; i += matrixSize) {
        matrix.push(arr.slice(i, i + matrixSize));
    }

    return matrix;
};

