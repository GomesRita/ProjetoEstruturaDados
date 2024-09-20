import QueuePriority from '../q1QueuePriority.js'

const queue = new QueuePriority();

queue.enqueueWithPriority('Joana', 2);
queue.enqueueWithPriority('Teresa', 1);
queue.enqueueWithPriority('Jose', 3);
queue.enqueueWithPriority('Helena', 1);
queue.enqueueWithPriority('Helena', 1);

console.log(queue.queueItems); // Verifica o estado da fila após inserções

queue.dequeue(); // Deve servir Teresa (prioridade 1)
console.log(queue.queueItems); // Verifica o estado da fila após o primeiro dequeue

queue.dequeue(); // Deve servir Helena (prioridade 1)
console.log(queue.queueItems); // Verifica o estado da fila após o segundo dequeue

queue.dequeue(); // Deve servir Joana (prioridade 2)
console.log(queue.queueItems); // Verifica o estado da fila após o terceiro dequeue

queue.dequeue(); // Deve servir Jose (prioridade 3)
console.log(queue.queueItems); // Verifica o estado da fila após o quarto dequeue

queue.dequeue(); // Fila vazia