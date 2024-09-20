/**
 * Stack from object elements
 */
class StackObject {

    /**
     * Create StackObject
     */
    constructor(){
        /**
         * Store elements
         */
        this._items = {};
        /**
         * Index from elements
         */
        this._count = 0;
    }

    /**
     * Insert element in Stack
     * @param {any} element 
     */
    push(element){
        this._items[this._count] = element;
        this._count++;
    }

    /**
     * Return size of stack
     * @returns size
     */
    size(){
        return this._count;
    }

    /**
     * Return the last element
     * @returns last element
     */
    pop(){
        if (this.isEmpty()){
            return undefined;
        }
        this._count--;
        let element = this._items[this._count];
        delete this._items[this._count];
        return element;
    }

    /**
     * 
     * @returns 
     */
    isEmpty(){
        return this._count === 0;
    }

}

export default StackObject;

