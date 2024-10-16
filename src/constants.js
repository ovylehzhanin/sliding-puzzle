export const EMPTY_CELL = ' ';

export const GAME_DEFAULTS = {
  MATRIX_SIZE: 4,
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
