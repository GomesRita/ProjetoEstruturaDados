const Stack = require('./Stack');  // Importa a classe Stack
const Pilha = require('./Q5');  // Importa a classe Pilha

describe('Teste da função isBalanceado', () => {
  let pilha;

  beforeEach(() => {
    pilha = new Pilha();  // Cria uma nova instância de Pilha antes de cada teste
  });

  test('Deve retornar false para uma sequência desbalanceada "(]"', () => {
    expect(pilha.isBalanceado("(]")).toBe(false);
  });

  test('Deve retornar true para uma sequência balanceada "{[()]}"', () => {
    expect(pilha.isBalanceado("{[()]}")).toBe(true);
  });

  test('Deve retornar false para uma sequência desbalanceada "[{]}"', () => {
    expect(pilha.isBalanceado("[{]}")).toBe(false);
  });

  test('Deve retornar true para uma sequência vazia', () => {
    expect(pilha.isBalanceado("")).toBe(true);  // Sequência vazia é considerada balanceada
  });

  test('Deve retornar false para uma sequência desbalanceada "[{"', () => {
    expect(pilha.isBalanceado("[{")).toBe(false);
  });

  test('Deve retornar true para uma sequência longa e balanceada "{[({[]})]}"', () => {
    expect(pilha.isBalanceado("{[({[]})]}")).toBe(true);
  });
});
