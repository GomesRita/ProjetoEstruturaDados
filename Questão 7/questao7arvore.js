class AVLTree extends BinarySearchTree {

    height(node) {
        if (node === null) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    isBalancedNode(node) {
        if (node === null) return true;

        const balanceFactor = this.height(node.left) - this.height(node.right);

        if (balanceFactor < -1 || balanceFactor > 1) {
            return false;
        }

        return this.isBalancedNode(node.left) && this.isBalancedNode(node.right);
    }

    isBalanced() {
        return this.isBalancedNode(this.root);
    }
}
