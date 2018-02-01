function main() {
  let items = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15]
  ];

  let root = _.qs('#root'),
      fragment = _.cdf();

  for (let i = 0, rows = items.length; i < rows; i += 1) {
  
    for (let j = 0, columns = items[i].length; j < columns; j += 1) {
      let itemNode = _.ce('div'); 
      itemNode.className = 'item';
      itemNode.dataset.row = i + 1;
      itemNode.dataset.col = j + 1;
      itemNode.dataset.value = items[i][j];
      fragment.appendChild(itemNode);
    } 
  
  }

  root.appendChild(fragment);
} 

window.addEventListener('DOMContentLoaded', main, false);
