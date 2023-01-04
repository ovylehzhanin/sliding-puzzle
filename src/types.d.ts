type SliderItem = number | string;
type SliderItemsMatrix = SliderItem[][];
type SliderItemPosition = [number, number];
type Move = "up" | "right" | "down" | "left";
type PossibleMoves = {
  [key in Move]: SliderItemPosition;
};
type ArrowMove = "ArrowUp" | "ArrowRight" | "ArrowDown" | "ArrowLeft";
