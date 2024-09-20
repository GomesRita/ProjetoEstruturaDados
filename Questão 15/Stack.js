
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
    
    /**
     * Reverse the stack without using an additional data structure
     */
    reverse(){
        if (this.isEmpty()) return;
    
            let temp = this.pop();  // Remove o elemento do topo
            this.reverse();         // Chama a função recursivamente até a pilha estar vazia
            this.insertAtBottom(temp);  // Insere o elemento no fundo da pilha
    }
    
        /**
         * Helper function to insert element at the bottom of the stack
         *  
         */
    insertAtBottom(element){
        if (this.isEmpty()) {
            this.push(element);  // Se a pilha estiver vazia, empurra o elemento
        } else {
            let temp = this.pop();     // Remove o topo
            this.insertAtBottom(element); // Insere o elemento no fundo
            this.push(temp);          // Empurra de volta o topo removido
        }
    }
    
}
class Conversor {
    decimalParaBinario(numero) {
        const stack = new Stack();
        let binario = '';

        // Empilha os restos da divisão por 2
        while (numero > 0) {
            stack.push(numero % 2);
            numero = Math.floor(numero / 2);
        }

        // Desempilha os restos para formar o número binário
        while (!stack.isEmpty()) {
            binario += stack.pop().toString();
        }

        return binario || '0';  // Retorna '0' se o número original era 0
    }
}
export default Stack;
export { Conversor };