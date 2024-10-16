export const swap2dArrElements = (arr, [row1, col1], [row2, col2]) => {
    const arrCopy = arr.map(row => [...row]);

    const temp = arrCopy[row1][col1];
    arrCopy[row1][col1] = arrCopy[row2][col2];
    arrCopy[row2][col2] = temp;

    return arrCopy;
};
