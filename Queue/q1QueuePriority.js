
/**
 * Classe QueuePriority
 * Representa uma fila com prioridades, onde elementos são ordenados de acordo com sua prioridade.
 */
class QueuePriority {
    constructor() {
        /**
         * @property {Array<Object>} queueItems - Array que armazena os elementos da fila com suas respectivas prioridades.
         */
        this.queueItems = [];
    }

    /**
     * Verifica se a fila está vazia.
     * @returns {boolean} - Retorna true se a fila estiver vazia, caso contrário, false.
     */
    isEmpty() {
        return this.queueItems.length === 0;
    }

    /**
     * Adiciona um novo elemento à fila com uma prioridade.
     * @param {*} element - O elemento a ser adicionado.
     * @param {number} [priority=0] - A prioridade do elemento (quanto menor o número, maior a prioridade).
     */
    enqueueWithPriority(element, priority = 0) {
        let newElement = { element, priority };
        let contain = false;

        if (this.isEmpty()) {
            this.queueItems.push(newElement);
        } else {
            for (let i = 0; i < this.queueItems.length; i++) {
                // Insere o novo elemento no local correto de acordo com sua prioridade
                if (this.queueItems[i].priority > newElement.priority) {
                    this.queueItems.splice(i, 0, newElement);
                    contain = true;
                    break;
                }
            }
            // Se não foi inserido durante o loop, insere no final
            if (!contain) {
                this.queueItems.push(newElement);
            }
        }
    }

    /**
     * Remove o primeiro elemento da fila (elemento de maior prioridade).
     * @returns {*} - O elemento removido ou undefined se a fila estiver vazia.
     */
    dequeue() {
        if (!this.isEmpty()) {
            return this.queueItems.shift();
        } else {
            console.log("A fila está vazia");
        }
    }
}

// Exemplo de uso da classe
const queue = new QueuePriority();
queue.enqueueWithPriority('Joana', 2);
queue.enqueueWithPriority('Teresa', 1);
queue.enqueueWithPriority('Jose', 3);
queue.enqueueWithPriority('Helena', 1);
queue.enqueueWithPriority('Helena', 1);

console.log(queue.queueItems); // Verifica a ordem dos itens na fila

console.log(queue.dequeue()); // Remove o primeiro item (elemento de maior prioridade)
console.log(queue.queueItems); // Verifica a fila após o dequeue

module.exports= QueuePriority;