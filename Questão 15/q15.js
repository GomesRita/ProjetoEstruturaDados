import Stack from "./Stack";

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

        return binario || '0';  // Retorna '0' se o número original for 0
    }
}
export default Conversor;