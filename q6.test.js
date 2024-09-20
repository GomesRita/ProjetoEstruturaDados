import LinkedList from './q6';

describe('LinkedList.combineImparPar', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('Reorganiza a lista corretamente com múltiplos elementos', () => {
        list.append(10);
        list.append(11);
        list.append(12);
        list.append(13);
        list.append(14);
        list.append(15);

        list.combineImparPar();

        const result = [];
        let current = list.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }

        expect(result).toEqual([11, 13, 15, 10, 12, 14]);
    });

    test('Não faz nada quando a lista é vazia', () => {
        list.combineImparPar();

        expect(list.head).toBeNull();
    });

    test('Não faz nada quando a lista tem apenas um elemento', () => {
        list.append(1);
        list.combineImparPar();

        expect(list.head.data).toBe(1);
    });

    test('Reorganiza corretamente quando a lista tem dois elementos', () => {
        list.append(1);
        list.append(2);
        list.combineImparPar();

        const result = [];
        let current = list.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }

        expect(result).toEqual([2, 1]);
    });
});
