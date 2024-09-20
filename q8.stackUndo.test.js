import UndoText from "./q8.stackUndo.js";

describe('UndoText', () => {
    let operation;

    beforeEach(() => {
        operation = new UndoText();
    });

    test('deve iniciar vazia', () => {
        expect(operation.isEmpty()).toBe(true);
    });

    test('deve desfazer o texto corretamente', () => {
        operation.push("Work "); 
        operation.push("completed. "); 
    
        expect(operation.displayText()).toBe("Work completed.");

        operation.undo();
        expect(operation.displayText()).toBe("Work ");
        
        operation.undo();
        expect(operation.displayText()).toBe(null); 
    });

    test('deve mostrar mensagem ao tentar desfazer sem texto', () => {
        console.log = jest.fn(); 
        operation.undo();
        expect(console.log).toHaveBeenCalledWith("Nothing to undo");
    });

    test('deve exibir o texto completo após várias adições', () => {
        operation.push("Work ");
        operation.push("completed. ");
        operation.push("Next ");
        operation.push("challenge!!");
        expect(operation.displayText()).toBe("Work completed. Next challenge!!");
    });

    test('deve desfazer todas as palavras e ficar vazia', () => {
        operation.push("Test ");
        operation.push("undo ");
        operation.push("functionality.");

        operation.undo();
        operation.undo();
        operation.undo();
        
        expect(operation.isEmpty()).toBe(true);
    });
});
