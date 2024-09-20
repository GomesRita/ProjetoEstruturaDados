import ListaEncadeada from './q16.js'

describe('Teste da Lista Encadeada', () => {
  test('Adicionar e imprimir elementos', () => {
    const lista = new ListaEncadeada();
    lista.inserir(1);
    lista.inserir(2);
    lista.inserir(3);

    // Verifica se a lista contém os elementos na ordem correta
    const resultado = [];
    lista.imprimir = function() {
      let atual = this.primeiro;
      while (atual !== null) {
        resultado.push(atual.valor);
        atual = atual.proximo;
      }
    };
    
    lista.imprimir();
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('Rotacionar a lista [1, 2, 3, 4, 5] para a direita por 2 posições', () => {
    const lista = new ListaEncadeada();
    lista.inserir(1);
    lista.inserir(2);
    lista.inserir(3);
    lista.inserir(4);
    lista.inserir(5);

    lista.rotacionarDireita(2, lista);

    const resultado = [];
    lista.imprimir = function() {
      let atual = this.primeiro;
      while (atual !== null) {
        resultado.push(atual.valor);
        atual = atual.proximo;
      }
    };
    
    lista.imprimir();
    expect(resultado).toEqual([4, 5, 1, 2, 3]);
  });

  test('Rotacionar a lista [1, 2, 3] para a direita por 4 posições', () => {
    const lista = new ListaEncadeada();
    lista.inserir(1);
    lista.inserir(2);
    lista.inserir(3);

    lista.rotacionarDireita(4, lista);  // 4 % 3 = 1

    const resultado = [];
    lista.imprimir = function() {
      let atual = this.primeiro;
      while (atual !== null) {
        resultado.push(atual.valor);
        atual = atual.proximo;
      }
    };
    
    lista.imprimir();
    expect(resultado).toEqual([3, 1, 2]);
  });

  test('Rotacionar a lista [1, 2, 3, 4, 5] para a direita por 0 posições não altera a lista', () => {
    const lista = new ListaEncadeada();
    lista.inserir(1);
    lista.inserir(2);
    lista.inserir(3);
    lista.inserir(4);
    lista.inserir(5);

    lista.rotacionarDireita(0, lista);

    const resultado = [];
    lista.imprimir = function() {
      let atual = this.primeiro;
      while (atual !== null) {
        resultado.push(atual.valor);
        atual = atual.proximo;
      }
    };
    
    lista.imprimir();
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });

  test('Rotacionar uma lista de um elemento não altera a lista', () => {
    const lista = new ListaEncadeada();
    lista.inserir(1);

    lista.rotacionarDireita(1, lista);

    const resultado = [];
    lista.imprimir = function() {
      let atual = this.primeiro;
      while (atual !== null) {
        resultado.push(atual.valor);
        atual = atual.proximo;
      }
    };
    
    lista.imprimir();
    expect(resultado).toEqual([1]);
  });
});