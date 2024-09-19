
/**
 * Stack with array
 */
class Stack {
    constructor(){
        /**
         * @type {Array} List to add elements
         */
        this._items = [];
    }

    /**
     * Insert element in stack
     * @param {any} element - element          
     */
    push(element){
        this._items.push(element);
    }

    /**
     * Remove element from stack
     * @returns {any} element
     */
    pop(){
        return this._items.pop();
    }

    /**
     * Show last element
     * @returns {}
     */
    peek(){
        return this._items.at(-1);
    }

    /**
     * Check is stack is empty
     * @returns {boolean} result
     */
    isEmpty(){
        return this._items.length == 0;
    }    

    /**
     * Size of stack
     * @returns {number} size
     */
    size(){
        return this._items.length;
    }

}
module.exports = Stack;



