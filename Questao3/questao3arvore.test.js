import BinarySearchTree from '.questao3arvore';

test('Deve encontrar o menor valor na árvore', () => {
  const tree = new BinarySearchTree();
  tree.insert(30);
  tree.insert(20);
  tree.insert(40);
  tree.insert(5);
  tree.insert(25);

  expect(tree.min()).toBe(5);
});

test('Deve encontrar o maior valor na árvore', () => {
  const tree = new BinarySearchTree();
  tree.insert(30);
  tree.insert(20);
  tree.insert(40);
  tree.insert(5);
  tree.insert(25);

  expect(tree.max()).toBe(40);
});
