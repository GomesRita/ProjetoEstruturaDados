import AvlTree from './q2';

describe('Árvore AVL - Contagem de Nós e Folhas', () => {
    let tree;

    beforeEach(() => {
        tree = new AvlTree();
    });

    test('contar o número total de nós em uma árvore vazia', () => {
        expect(tree.countNodes()).toBe(0);
    });

    test('contar o número total de nós após inserções', () => {
        tree.insertKey(10);
        tree.insertKey(20);
        tree.insertKey(30);
        expect(tree.countNodes()).toBe(3);
    });

    test('contar o número de folhas em uma árvore vazia', () => {
        expect(tree.countLeaves()).toBe(0);
    });

    test('contar o número de folhas após inserções', () => {
        tree.insertKey(10);
        tree.insertKey(20);
        tree.insertKey(30); 
        expect(tree.countLeaves()).toBe(2); 
    });

    test('contar o número total de nós e folhas em uma árvore balanceada', () => {
        tree.insertKey(50);
        tree.insertKey(30);
        tree.insertKey(70);
        tree.insertKey(20);
        tree.insertKey(40);
        tree.insertKey(60);
        tree.insertKey(80);
        
        expect(tree.countNodes()).toBe(7); 
        expect(tree.countLeaves()).toBe(4); 
    });
});
