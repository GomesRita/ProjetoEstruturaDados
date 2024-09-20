import BinarySearchTree from './q6.js';

describe('Testes de Serialização e Desserialização de BinarySearchTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(8);
    tree.insert(1);
    tree.insert(4);
  });

  test('Serializar a árvore deve retornar a string correta', () => {
    const serializedTree = tree.serialize();
    const expectedSerialized = '5,3,1,*,*,4,*,*,8,*,*';
    expect(serializedTree).toBe(expectedSerialized);
  });

  test('Desserializar a string deve reconstruir a árvore corretamente', () => {
    const serializedTree = '5,3,1,*,*,4,*,*,8,*,*';
    const newTree = new BinarySearchTree();
    newTree.deserialize(serializedTree);

    const resultInOrder = [];
    const inOrderTraversal = (node = newTree.root) => {
      if (node !== null) {
        inOrderTraversal(node.left);
        resultInOrder.push(node.value);
        inOrderTraversal(node.right);
      }
    };
    inOrderTraversal();

    const expectedInOrder = [1, 3, 4, 5, 8];
    expect(resultInOrder).toEqual(expectedInOrder);
  });

  test('Serialização e desserialização devem resultar na mesma estrutura de árvore', () => {
    const serializedTree = tree.serialize();
    const newTree = new BinarySearchTree();
    newTree.deserialize(serializedTree);

    const reSerializedTree = newTree.serialize();
    expect(reSerializedTree).toBe(serializedTree);
  });
});
