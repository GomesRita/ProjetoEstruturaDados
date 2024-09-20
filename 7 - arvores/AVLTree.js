import BinarySearchTree from "./BinarySearchTree.js";

class AVLTree extends BinarySearchTree {
    heigthNode(node){
        if (node === null){
            return null;
        }

        if (node.left === null && node.right === null)
            return 0;

        let nodes = [node];
        let heigth = 0;
        while (true){
            let newNodes = [];
            for (let no of nodes) {
                if (no.left !== null)
                    newNodes.push(no.left);
                if (no.right !== null)
                    newNodes.push(no.right);
            }               
            nodes = newNodes;
            heigth++;
            if (nodes.length === 0)
                break;         
        }
        return heigth > 0 ? heigth - 1 : heigth;
    }


}

let arvore = new AVLTree();
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

arvore.printNodeByLevel();

console.log("Altura: ", arvore.heigthNode(arvore.searchNode(40)));

