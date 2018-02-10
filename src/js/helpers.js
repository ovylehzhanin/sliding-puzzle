export const _h = {
    qs: (selector, scope) => {
      return (scope || document).querySelector(selector);
    },
    qsa: (selector, scope) => {
      return (scope || document).querySelectorAll(selector); 
    },
    cdf: () => {
      return document.createDocumentFragment(); 
    }, 
    ce: nodeString => {
      return document.createElement(nodeString); 
    } 
};

export const _2dSwap = (array, a, b) => {
  array[a[0]][a[1]] = [
    array[b[0]][b[1]], 
    array[b[0]][b[1]] = array[a[0]][a[1]]
  ][0];

  return b;
};
