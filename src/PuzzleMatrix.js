import { DIR_LEFT, DIR_RIGHT, DIR_UP, DIR_DOWN, EMPTY_CELL } from "./constants";
import { flatArrayToMatrix, swap2dArrElements } from "./utils";

export class PuzzleMatrix {
    get items() {
        return this._items;
    }

    get matrixSize() {
        return this._matrixSize;
    }

    get emptyCellPosition() {
        for (let row = 0; row < this._items.length; row++) {
            for (let col = 0; col < this._items[row].length; col++) {
                if (this.items[row][col] === EMPTY_CELL) {
                    return [row, col];
                }
            }
        }

        return null;
    }

    constructor(matrixSize) {
        this._matrixSize = matrixSize;
        this._items = this._getDefaultMatrixState(matrixSize);
    }

    shuffleMatrixItems() {
        let isSolvable = false;
        let shuffledDraft = []; 

        while (!isSolvable) {
            shuffledDraft = this._getDraftShuffledValue(this._items.map(row => [...row]));
            isSolvable = this._isSolvable(shuffledDraft);
        }

        this._items = shuffledDraft;
    }

    swapItems(direction) {
        const currentPosition = this.emptyCellPosition;
        const newPosition = this._getPossibleMoves()[direction];
        const isPositionValid = !!this._items?.[newPosition[0]]?.[newPosition[1]];

        if (isPositionValid) {
            this._items = swap2dArrElements(this._items, currentPosition, newPosition);
        }
    }

    _getPossibleMoves() {
        const [row, col] = this.emptyCellPosition;

        return {
            [DIR_LEFT]: [row, col - 1],
            [DIR_UP]: [row - 1, col],
            [DIR_RIGHT]: [row, col + 1],
            [DIR_DOWN]: [row + 1, col]
        };
    }

    _getDefaultMatrixState(matrixSize) {
        const flatArr = [];
        const arrLength = matrixSize * matrixSize;

        for (let i = 1; i < arrLength; i++) {
            flatArr.push(i);
        }

        flatArr.push(EMPTY_CELL);

        return flatArrayToMatrix(flatArr, matrixSize);
    }

    _getDraftShuffledValue(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
    
        // Fisher-Yates shuffle applied directly to 2D matrix
        for (let i = rows * cols - 1; i > 0; i--) {
            // Convert 1D index into 2D (row, col)
            const currentRow = Math.floor(i / cols);
            const currentCol = i % cols;
    
            // Pick a random index to swap with
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const randomRow = Math.floor(randomIndex / cols);
            const randomCol = randomIndex % cols;
    
            // Swap the elements at (currentRow, currentCol) and (randomRow, randomCol)
            [matrix[currentRow][currentCol], matrix[randomRow][randomCol]] = 
            [matrix[randomRow][randomCol], matrix[currentRow][currentCol]];
        }
    
        return matrix;
    }

    _countInversions(matrixArr) {
        let inversions = 0;
        const flatArr = matrixArr.flat().filter(x => x !== EMPTY_CELL);

        for (let i = 0; i < flatArr.length - 1; i++) {
            for (let j = i + 1; j < flatArr.length; j++) {
                if (flatArr[i] > flatArr[j]) {
                    inversions++;
                }
            }
        }

        return inversions;
    }

    _findEmptyRowFromBottom(matrixArr) {
        for (let row = matrixArr.length - 1; row >= 0; row--) {
            if (matrixArr[row].includes(EMPTY_CELL)) {
                return matrixArr.length - row;
            }
        }
        return -1;
    }

    _isSolvable(matrixArr) {
        const inversionsCount = this._countInversions(matrixArr);
        const emptyRowFromBottom = this._findEmptyRowFromBottom(matrixArr);

        const gridWidth = matrixArr.length;

        if (gridWidth % 2 === 1) {
            // If grid width is odd, puzzle is solvable if inversion count is even
            return inversionsCount % 2 === 0;
        } else {
            // If grid width is even, puzzle is solvable if:
            // - inversions is odd and empty space is on an even row from the bottom
            // - inversions is even and empty space is on an odd row from the bottom
            if (emptyRowFromBottom % 2 === 0) {
                return inversionsCount % 2 === 1;
            } else {
                return inversionsCount % 2 === 0;
            }
        }
    }
}