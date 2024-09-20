import Node from "./Node.js";

export default class BinarySearchTree {
    
    constructor(){
        this.root = null;
    }

    insert(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            let node = this.root;
            while(true){
                if (value < node.value){
                    if (node.left === null){
                        node.left = new Node(value);
                        break;
                    }else{
                        node = node.left;
                    }
                }else{
                    if (node.right === null){
                        node.right = new Node(value);
                        break;
                    }
                    else{
                        node = node.right;
                    }
                }
            }
        }
    }

    insertRecursive(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            this.insertNode(this.root, value);
        }
    }

    insertNode(node, value){
        if (value < node.value){
            if (node.left === null){
                node.left = new Node(value);
            }else{
                this.insertNode(node.left, value);
            }
        }else{
            if (node.right === null){
                node.right = new Node(value);
            }else{
                this.insertNode(node.right, value);
            }
        }
    }

    printNodeByLevel(){
        let node = this.root;
        let nodes = [node];
        while (true){
            let newNodes = [];
            let values = "";
            for (let no of nodes) {
                values = values + no.value + " ";
                if (no.left !== null)
                    newNodes.push(no.left);
                if (no.right !== null)
                    newNodes.push(no.right);
            }   
            console.log(values);
            console.log("==================================")
            nodes = newNodes;
            if (nodes.length === 0)
                break;         
        }
    }  

    min(){
        return this.minNode(this.root);
    }

    minNode(node){
        if (node == null){
            return null;
        }

        while (true){
            if (node.left !== null){
                node = node.left;
            }else{
                return node.value;
            }
        }
    }

    minNodeRemove(node){
        if (node == null){
            return null;
        }

        let nodeParent = null;
        while (true){
            if (node.left !== null){
                nodeParent = node;
                node = node.left;
            }else{
                return [node, nodeParent];
            }
        }
    }

    max(){
        return this.maxNode(this.root);
    }

    maxNode(node){
        if (node == null){
            return null;
        }

        while (true){
            if (node.right !== null){
                node = node.right;
            }else{
                return node.value;
            }
        }        
    }

    inOrderTraverse(callBack){
        this.inOrderNode(this.root, callBack);
    }

    inOrderNode(node, callBack){
        if (node != null){
            this.inOrderNode(node.left, callBack);
            callBack(node.value);
            this.inOrderNode(node.right, callBack);
        }
    }

    preOrderTraverse(callBack){
        this.preOrderNode(this.root, callBack);
    }

    preOrderNode(node, callBack){
        if (node != null){
            callBack(node.value);
            this.preOrderNode(node.left,callBack);
            this.preOrderNode(node.right,callBack);
        }
    }

    posOrderTraverse(callBack){
        this.posOrderNode(this.root, callBack);
    }

    posOrderNode(node, callBack){
        if (node != null){            
            this.posOrderNode(node.left,callBack);
            this.posOrderNode(node.right,callBack);
            callBack(node.value);
        }
    }

    search(value){
        return this.hasNode(this.root, value);
    }

    hasNode(node, value){
        if (node === null){
            return false;
        }
        while(true){
            if (value === node.value){
                return true;
            }
            if (value < node.value){
                if (node.left == null)
                    return false;
                else 
                    node = node.left;                
            } else {
                if (node.right == null)
                    return false;
                else
                    node = node.right;
            }
       }
    }

    searchNode(value){
        let node = this.root;
        if (node === null){
            return null;
        }
        while(true){
            if (value === node.value){
                return node;
            }
            if (value < node.value){
                if (node.left == null)
                    return null;
                else 
                    node = node.left;                
            } else {
                if (node.right == null)
                    return null;
                else
                    node = node.right;
            }
       }
    }

    searchRecursive(value){
        return this.searchRecursiveNode(this.root, value);
    }

    searchRecursiveNode(node, value){
        if (node === null){
            return false;
        }
        if (value === node.value){
            return true;
        }
        if (value < node.value){
            return this.searchRecursiveNode(node.left, value);
        }else{
            return this.searchRecursiveNode(node.right, value);
        }        
    }

    removeJohn(value){
        //Verificar se a árvore está vazia
        if (this.root === null) return false;
        //Variáveis auxiliares
        let node = this.root;
        let nodeParent = null; //Armazenar o pai do nó analisado
        while (true){
            if (node === null)
                return false;

            if (node.value === value){  

                //Caso um 1 - Quando o nó não tem filhos
                if (node.left === null && node.right === null){
                    if (nodeParent === null){
                        this.root = null;                                            
                    }else{
                        if (node.value < nodeParent.value){
                            nodeParent.left = null;                            
                        }else{
                            nodeParent.right = null;                            
                        }
                    }
                    return true;
                }

                //Caso 2 - Filho da direita - Quando o nó só tenho um filho
                if (node.left === null && node.right !== null){
                    if (node.value > nodeParent.value){
                        nodeParent.right = node.right;
                    }else{
                        nodeParent.left = node.right;
                    }
                }
                //Caso 2 - Filho da esquerda - Quando o nó só tenho um filho
                if (node.right === null && node.left !== null){
                    if (node.value > nodeParent.value){
                        nodeParent.right = node.left;
                    }else{
                        nodeParent.left = node.left;
                    }
                }

                //Caso 3 - Quando o nó tem dois filhos
                if (node.left !== null && node.right !== null){
                    const [nodeMin, nodeMinParent] = this.minNodeRemove(node.right);
                    nodeParent.right = nodeMin;                    
                    nodeMin.left = node.left;
                    if (nodeMinParent !== null){
                        nodeMinParent.left = null;
                    }
                }

            }

            nodeParent = node;
            if (value < node.value){
                node = node.left;
            }else{
                node = node.right;
            }
        }
    }
    
  }
