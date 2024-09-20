import BinarySearchTree from "./BinarySearchTree.js";

const arvore = new BinarySearchTree();
arvore.insert(30);
arvore.insert(20);
arvore.insert(40);
arvore.insert(5);
arvore.insert(2);
arvore.insert(8);
arvore.insert(25);
arvore.insert(32);
arvore.insert(45);
arvore.insert(42);

arvore.printNodeByLevel()
arvore.removeJohn(45);
arvore.printNodeByLevel()
arvore.removeJohn(40);
arvore.printNodeByLevel();
arvore.removeJohn(8);
arvore.printNodeByLevel();
arvore.removeJohn(5);
arvore.printNodeByLevel();
/*
console.log("Min:", arvore.min())
console.log("Max:", arvore.max())

console.log("/////////////////////////////////////");

arvore.inOrderTraverse(value => console.log(value));

console.log("/////////////////////////////////////");

arvore.preOrderTraverse(value => console.log(value));

console.log("/////////////////////////////////////");

arvore.posOrderTraverse(value => console.log(value));

console.log("/////////////////////////////////////");

console.log("Possui 100: ", arvore.search(100));
console.log("Possui 100: ", arvore.searchRecursive(100));


//console.log(arvore.search(47))

//arvore.inOrderTraverse(value=>console.log(value));
*/