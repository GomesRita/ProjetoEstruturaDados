const AvlTree = require('./q1'); 

describe('Árvore AVL', () => {
    let tree;

    beforeEach(() => {
        tree = new AvlTree();
    });

    test('inserindo em uma árvore vazia', () => {
        tree.insertKey(10);
        expect(tree.getInorder()).toEqual([10]);
    });

    test('inserindo múltiplas chaves e balanceando', () => {
        tree.insertKey(10);
        tree.insertKey(20);
        tree.insertKey(30); 
        expect(tree.getInorder()).toEqual([10, 20, 30]);
    });

    test('rotação esquerda-direita', () => {
        tree.insertKey(30);
        tree.insertKey(10);
        tree.insertKey(20); 
        expect(tree.getInorder()).toEqual([10, 20, 30]);
    });

    test('rotação direita-esquerda', () => {
        tree.insertKey(10);
        tree.insertKey(30);
        tree.insertKey(20); 
        expect(tree.getInorder()).toEqual([10, 20, 30]);
    });

    test('inserções múltiplas mantendo o balanceamento', () => {
        tree.insertKey(50);
        tree.insertKey(30);
        tree.insertKey(70);
        tree.insertKey(20);
        tree.insertKey(40);
        tree.insertKey(60);
        tree.insertKey(80);

        expect(tree.getInorder()).toEqual([20, 30, 40, 50, 60, 70, 80]);
    });
});
