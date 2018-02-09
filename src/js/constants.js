(function () {
  const GAME_DEFAULTS = {
    MATRIX_SIZE: 4,
    ITEMS: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, ' ']
    ],
    TARGET_ITEM_POSITION: [3, 3]
  };

  const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  window.GAME_DEFAULTS = GAME_DEFAULTS;
  window.KEY = KEY;
})();
