
/**
 * Node class
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/**
 * SimpleLinkedList
 */
class SimpleLinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    /**
     * Append element
     * @param {any} value 
     */
    append(value){
        /**
         * If dont have element
         */
        let node = new Node(value);
        if (this.head === null){
            this.head = node;
        }
        /**
         * If already has element
         */
        else{
            let current = this.head;
            while (current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    shift(value){
        let node = new Node(value);
        if (this.head === null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    /**
     * Clear list
     */
    clear(){
        this.head = null;
        this.length = 0;
    }

    /**
     * Transform to list
     * @returns list
     */
    list(){
        let list = [];
        if (this.head === null){
            return list;
        }
        else{            
            let current = this.head;
            list.push(current.value);
            while(current.next !== null){
                current = current.next;
                list.push(current.value);
            }
        }
    }

    length(){
        return this.length;
    }

    /**
     * Returns the value of index from list
     * @param {*} index 
     */
    at(index){
        
        if (this.length() === 0) return undefined;        
        let current = this.head;
        if  (index === 0)
            return current.value;
        else{
            let count = 1;
            while (current.next !== null){
                current = current.next;
                if (index === count)
                    break
                count++;
            }
            return current.value;
        }
    }
}
