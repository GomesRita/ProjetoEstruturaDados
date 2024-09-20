class Node {
    constructor(value){
        this.value = value ;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {
    
    constructor(){
        this.root = null;
    }

    insert(value){
        if (this.root === null){
            this.root = new Node(value);
        } else {
            let node = this.root;
            while(true){
                if (value < node.value){
                    if (node.left === null){
                        node.left = new Node(value);
                        break;
                    } else {
                        node = node.left;
                    }
                } else {
                    if (node.right === null){
                        node.right = new Node(value);
                        break;
                    } else {
                        node = node.right;
                    }
                }
            }
        }
    }

    
    findSuccessor(value) {
        let node = this.findNode(value);
        if (!node) return null;

        
        if (node.right !== null) {
            return this.findMin(node.right);
        }

        
        let successor = null;
        let ancestor = this.root;
        while (ancestor !== node) {
            if (node.value < ancestor.value) {
                successor = ancestor;
                ancestor = ancestor.left;
            } else {
                ancestor = ancestor.right;
            }
        }
        return successor;
    }

    
    findPredecessor(value) {
        let node = this.findNode(value);
        if (!node) return null;

        
        if (node.left !== null) {
            return this.findMax(node.left);
        }

        
        let predecessor = null;
        let ancestor = this.root;
        while (ancestor !== node) {
            if (node.value > ancestor.value) {
                predecessor = ancestor;
                ancestor = ancestor.right;
            } else {
                ancestor = ancestor.left;
            }
        }
        return predecessor;
    }

    
    findNode(value) {
        let node = this.root;
        while (node !== null) {
            if (value < node.value) {
                node = node.left;
            } else if (value > node.value) {
                node = node.right;
            } else {
                return node; 
            }
        }
        return null;  
    }

    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    findMax(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }
}
