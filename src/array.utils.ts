export const array2dSwap = (
  array: any[][],
  a: [number, number],
  b: [number, number]
) => {
  array[a[0]][a[1]] = [
    array[b[0]][b[1]],
    (array[b[0]][b[1]] = array[a[0]][a[1]]),
  ][0];

  return b;
};
