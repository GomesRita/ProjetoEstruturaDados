import Conversor from './q15.js';

describe('Conversor - decimalParaBinario', () => {
    let conversor;

    beforeEach(() => {
        conversor = new Conversor();
    });

    test('Deve converter 10 para "1010"', () => {
        const resultado = conversor.decimalParaBinario(10);
        expect(resultado).toBe('1010');
    });

    test('Deve converter 0 para "0"', () => {
        const resultado = conversor.decimalParaBinario(0);
        expect(resultado).toBe('0');
    });

    test('Deve converter 255 para "11111111"', () => {
        const resultado = conversor.decimalParaBinario(255);
        expect(resultado).toBe('11111111');
    });
});