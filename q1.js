// 1. Implemente o algoritmo de balanceamento de árvore AVL.

class TreeNode {
    constructor(key) {
        this.key = key;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AvlTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        if (node === null) return 0;
        return node.height;
    }

    getBalance(node) {
        if (node === null) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

        return y;
    }

    insert(root, key) {
        if (root === null) return new TreeNode(key);

        if (key < root.key) {
            root.left = this.insert(root.left, key);
        } else if (key > root.key) {
            root.right = this.insert(root.right, key);
        } else {
            return root;
        }

        root.height = 1 + Math.max(this.height(root.left), this.height(root.right));

        let balance = this.getBalance(root);

        if (balance > 1 && key < root.left.key) {
            return this.rightRotate(root);
        }

        if (balance < -1 && key > root.right.key) {
            return this.leftRotate(root);
        }

        if (balance > 1 && key > root.left.key) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        if (balance < -1 && key < root.right.key) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    insertKey(key) {
        this.root = this.insert(this.root, key);
    }

    inorder(root, result = []) {
        if (root !== null) {
            this.inorder(root.left, result);
            result.push(root.key);
            this.inorder(root.right, result);
        }
        return result;
    }

    getInorder() {
        return this.inorder(this.root);
    }
}
