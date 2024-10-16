export const GAME_DEFAULTS = {
  MATRIX_SIZE: 4,
  ITEMS: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, ' ']
  ],
};

const ARROW_LEFT = 'ArrowLeft';
const ARROW_UP = 'ArrowUp';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_DOWN = 'ArrowDown';

export const DIR_LEFT = 'left';
export const DIR_UP = 'up';
export const DIR_RIGHT = 'right';
export const DIR_DOWN = 'down';

export const ARROWS_KEYS = [ARROW_LEFT, ARROW_UP, ARROW_RIGHT, ARROW_DOWN];

export const DIRECTION_DICT = {
  [ARROW_LEFT]: DIR_RIGHT,
  [ARROW_UP]: DIR_DOWN,
  [ARROW_RIGHT]: DIR_LEFT,
  [ARROW_DOWN]: DIR_UP,
};