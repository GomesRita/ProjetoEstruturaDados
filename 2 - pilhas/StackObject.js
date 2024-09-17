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
     * 
     */
    push(element){
        this._items[this._count] = element;
        this._count++;
    }

    /**
     * Return size of stack
     * returns size
     */
    size(){
        return this._count;
    }

    /**
     * Return the last element
     * returns last element
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
     * Check if stack is empty
     * returns true if empty, false otherwise
     */
    isEmpty(){
        return this._count === 0;
    }

    /**
    *  Retorna true se for palíndromo
    */
    isPalindrome(sequence) {
        const stack = new StackObject();

        // Empilha todos os caracteres
        for (let i = 0; i < sequence.length; i++) {
        stack.push(sequence[i]);
        }

        // Comparar os caracteres originais com os que saem da pilha 
        for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] !== stack.pop()) {
            return false; // Não é palíndromo
            }
        }
            return true; // É palíndromo
    }

}
    export default StackObject;

    //// Exemplo de uso
    //const stack = new StackObject();
    //const sequence1 = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];
    //const sequence2 = ['h', 'e', 'l', 'l', 'o'];

    //console.log(stack.isPalindrome(sequence1)); // true 
    //console.log(stack.isPalindrome(sequence2)); // false 


