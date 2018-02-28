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

export const tagger = function (strings, ...flags) {
  let _strings = strings.slice(0),
    result = [];

  result.push(_strings.splice(0, 1));

  return function () {
    return {
      formatWith: function (values) {
        for (let i = 0, end = flags.length; i < end; i += 1) {
          result.push(values[flags[i]], _strings[i]);
        }

        return result.join('');
      }
    }
  }();
}