class QueuePriority {
    constructor() {
        this.queueItems = [];
    }
    /*
     * O primeiro método da classe verifica se a fila está vazia.
     * Retorna true se a fila estiver vazia, caso contrário, retorna false.
     */
    isEmpty() {
        return this.queueItems.length === 0;
    }

    /*
     * O segundo método da classe adiciona um novo elemento à fila com uma prioridade.
     * [priority=0] - A prioridade do elemento (quanto menor o número, maior a prioridade).
     * O novo elemento recebe as propriedades "element" e "priority" no qual inicia em zero.
     * A primeira condição verifica se a lista de itens está vazia caso seja true ele insere o item na lista.
     * Se for false é verificado seu nivel de prioridade comparado aos itens presentes na lista.
     * O loop estabelecido nesse laço enqueueWithPriority insere um novo elemento de acordo com sua prioridade.
     * Se o item já estiver contido é dado prioridade ao próximo.  
     */

    enqueueWithPriority(element, priority = 0) {
        let newElement = { element, priority };
        let contain = false;

        if (this.isEmpty()) {
            this.queueItems.push(newElement);
        } else {
            for (let i = 0; i < this.queueItems.length; i++) {
                if (this.queueItems[i].priority > newElement.priority) {
                    this.queueItems.splice(i, 0, newElement);
                    contain = true;
                    break;
                }
            }
            if (contain){
                console.log(`The person ${element} is already in the queue. We will give priority to the next one.`);
            }
            if (!contain) {
                this.queueItems.push(newElement);
            }
        }
    }


     //O metodo dequeue Remove o primeiro elemento da fila (elemento de maior prioridade).
    dequeue() {
        if (!this.isEmpty()) {
            const serveElement = this.queueItems.shift();
            console.log(`Servindo: ${ serveElement.element} com prioridade ${serveElement.priority}`);
            return serveElement;
        } else {
            console.log("A fila está vazia");
        }
    }
}

const queue = new QueuePriority();
queue.enqueueWithPriority('Joana', 2);
queue.enqueueWithPriority('Teresa', 1);
queue.enqueueWithPriority('Jose', 3);
queue.enqueueWithPriority('Helena', 1);
queue.enqueueWithPriority('Helena', 1);


console.log(queue.queueItems); 
console.log(queue.dequeue()); 


console.log(queue.queueItems); 
console.log(queue.dequeue()); 


console.log(queue.queueItems); 
console.log(queue.dequeue()); 


console.log(queue.queueItems); 
console.log(queue.dequeue()); 

console.log(queue.queueItems); 
console.log(queue.dequeue()); 


console.log(queue.queueItems); 
console.log(queue.dequeue()); 

module.exports = QueuePriority;