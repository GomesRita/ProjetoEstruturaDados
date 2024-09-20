class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
//metodo para serialiazar
    serialize() {
      const serializeNode = (node) => {
        if (node === null) {
          return '*';
        }
        return `${node.value},${serializeNode(node.left)},${serializeNode(node.right)}`;
      };
      return serializeNode(this.root);
    }
  
//metodo para deserializar    
    deserialize(data) {
      const values = data.split(',');
      let index = 0;
  
      const deserializeNode = () => {
        if (values[index] === '*') {
          index++;
          return null;
        }
        const node = new Node(parseInt(values[index]));
        index++;
        node.left = deserializeNode();
        node.right = deserializeNode();
        return node;
      };
  
      this.root = deserializeNode();
    }
  
    // Método para adicionar um novo valor 
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Método para imprimir a árvore em ordem
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Exemplo de uso:
  const tree = new BinarySearchTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(8);
  tree.insert(1);
  tree.insert(4);
  
  // serializar
  const serializedTree = tree.serialize();
  console.log("Árvore Serializada:", serializedTree);
  
  // desserializar
  const newTree = new BinarySearchTree();
  newTree.deserialize(serializedTree);
  console.log("Árvore Desserializada (em ordem):");
  newTree.inOrderTraversal();
  
  export default BinarySearchTree;