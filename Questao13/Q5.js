const Stack = require('./Stack'); 

class Pilha{
    constructor(){}
    isBalanceado(sequencia) {
        let ArraySequencia = sequencia.split('');
        let balanceada = true;
        const dict = {
            '{': '}',
            '[': ']',
            '(': ')'
        };
        
        let stack = new Stack();

        // Itera sobre cada caractere da sequência
        for (let i = 0; i < ArraySequencia.length; i++) {
            let caractere = ArraySequencia[i];

            // Se for um caractere de abertura, coloca na pilha
            if (dict[caractere]) {
                stack.push(caractere);
            } else {
                // Se for caractere de fechamento, verifica com o topo da pilha
                let ultimo = stack.pop();
                if (dict[ultimo] !== caractere) {
                    balanceada = false;
                    break;
                }
            }
        }

        // Verifica se ainda há elementos na pilha, o que indica desbalanceamento
        if (!stack.isEmpty()) {
            balanceada = false;
        }

        if (balanceada) {
            console.log('Sequência balanceada');
        } else {
            console.log('Sequência desbalanceada');
        }

        return balanceada;
    }
}

module.exports = Pilha;
// Testes
let pilha = new Pilha()
console.log(pilha.isBalanceado("(]")); // false
console.log(pilha.isBalanceado("{[()]}")); // true
