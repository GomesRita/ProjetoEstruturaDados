// Implemente um método combineImparPar() na classe Lista Encadeada que
// reorganize os nós para que todos os nós em posições pares venham antes dos nós
// em posições ímpares (mantendo a ordem relativa dentro dos pares e ímpares).
// Entrada: Lista original: 10 -> 11 -> 12 -> 13 -> 14 -> 15
// Saída: Lista reorganizada: 11 -> 13 -> 15 -> 10 -> 12 -> 14

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }

    combineImparPar() {
        if (!this.head || !this.head.next) {
            return;
        }

        let odd = this.head;       
        let even = this.head.next; 
        let evenHead = even;       

        while (even && even.next) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }

        odd.next = evenHead;
    }
}
