import AVLTree from './questao7arvore';

test('Deve retornar true se a árvore AVL estiver balanceada', () => {
  const tree = new AVLTree();
  tree.insert(30);
  tree.insert(20);
  tree.insert(40);
  tree.insert(10);
  tree.insert(5);

  expect(tree.isBalanced()).toBe(true);
});

test('Deve retornar false se a árvore AVL não estiver balanceada', () => {
  const tree = new AVLTree();
  tree.insert(30);
  tree.insert(20);
  tree.insert(40);
  tree.insert(10);
  tree.insert(5);
  tree.insert(2); 

  expect(tree.isBalanced()).toBe(false);
});
