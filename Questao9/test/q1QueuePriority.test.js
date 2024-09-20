// Teste para a classe QueuePriority
const QueuePriority = require('./q1QueuePriority.js');
// Criar uma instância da fila de prioridade
const queueTest = new QueuePriority();

// Teste 1: Verificar se a fila está inicialmente vazia
console.assert(queueTest.isEmpty() === true, 'Erro: A fila deveria estar vazia');

// Teste 2: Inserir elementos com diferentes prioridades
queueTest.enqueueWithPriority('A', 2);
queueTest.enqueueWithPriority('B', 1);
queueTest.enqueueWithPriority('C', 3);

// Verificar se os itens foram ordenados corretamente
console.assert(queueTest.queueItems[0].element === 'B', 'Erro: Elemento de maior prioridade deveria ser B');
console.assert(queueTest.queueItems[1].element === 'A', 'Erro: Segundo elemento deveria ser A');
console.assert(queueTest.queueItems[2].element === 'C', 'Erro: Terceiro elemento deveria ser C');

// Teste 3: Remover o primeiro item da fila (de maior prioridade)
const removido = queueTest.dequeue();
console.assert(removido.element === 'B', 'Erro: O elemento removido deveria ser B');

// Teste 4: Verificar a fila após remover um item
console.assert(queueTest.queueItems.length === 2, 'Erro: A fila deveria ter dois elementos restantes');
console.assert(queueTest.queueItems[0].element === 'A', 'Erro: Primeiro elemento agora deveria ser A');

// Teste 5: Verificar o comportamento da fila vazia
queueTest.dequeue();
queueTest.dequeue();
console.assert(queueTest.isEmpty() === true, 'Erro: A fila deveria estar vazia após remover todos os itens');