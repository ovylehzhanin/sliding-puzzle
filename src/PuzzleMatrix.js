import { GAME_DEFAULTS, DIR_LEFT, DIR_RIGHT, DIR_UP, DIR_DOWN } from "./constants";
import { swap2dArrElements } from "./utils";

export class PuzzleMatrix {
    get items() {
        return this._items;
    }

    set items(value) {
        if (value) {
            this._items = value;
        }
    }

    get matrixSize() {
        return this._matrixSize;
    }

    set matrixSize(value) {
        if (value) {
            this._matrixSize = value;
        }
    }

    get emptyCellPosition() {
        for (let row = 0; row < this.items.length; row++) {
            for (let col = 0; col < this.items[row].length; col++) {
                if (this.items[row][col] === ' ') {
                    return [row, col];
                }
            }
        }

        return null;
    }

    constructor() {
        this._matrixSize = GAME_DEFAULTS.MATRIX_SIZE;
        this._items = GAME_DEFAULTS.ITEMS;
    }
    
    shuffleItems() {}

    swapItems(direction) {
        const currentPosition = this.emptyCellPosition;
        const newPosition = this._getPossibleMoves()[direction];
        const isItemExist = !!this.items?.[newPosition[0]]?.[newPosition[1]];

        if (isItemExist) {
            this.items = swap2dArrElements(this.items, currentPosition, newPosition);
            return newPosition;
        }

        return null;
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

}