class No {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  class ListaEncadeada {
    constructor() {
      this.Primeiro = null;  
    }
  
    inserir(valor) {
      const novoNo = new No(valor);
      if (this.Primeiro === null) {
        this.Primeiro = novoNo;
      } else {
        let atual = this.Primeiro;
        while (atual.proximo !== null) {
          atual = atual.proximo;
        }
        atual.proximo = novoNo;
      }
    }
  
    rotacionarDireita(k, lista) {  
      for (let i = 0; i < k; i++) {
        this.rotacionarUmaPosicao(lista);
      }
    }
  
    rotacionarUmaPosicao(lista) {  
      let ultimo = lista.Primeiro;
      let penultimo = lista.Primeiro;
  
      // Encontrar o último nó
      while (ultimo.proximo !== null) {
        ultimo = ultimo.proximo;
      }
  
      // Encontrar o penúltimo nó
      while (penultimo.proximo !== ultimo) {
        penultimo = penultimo.proximo;
      }
  
      penultimo.proximo = null;
      let PrimeiroAtual = lista.Primeiro;
      ultimo.proximo = PrimeiroAtual;
      lista.Primeiro = ultimo;
    }
  
    imprimir() {
      let atual = this.Primeiro;
      while (atual !== null) {
        console.log(atual.valor);
        atual = atual.proximo;
      }
    }
  }
const lista = new ListaEncadeada();

lista.inserir(1);
lista.inserir(2);
lista.inserir(3);
lista.inserir(4);
lista.inserir(5);
lista.rotacionarDireita(2, lista);

lista.imprimir();

export default ListaEncadeada;