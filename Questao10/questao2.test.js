import SimpleLinkedList from './questao2';

test('Deve intercalar duas listas encadeadas', () => {
  const listA = new SimpleLinkedList();
  listA.append(1);
  listA.append(3);
  listA.append(5);

  const listB = new SimpleLinkedList();
  listB.append(2);
  listB.append(4);
  listB.append(6);

  const intercalatedList = listA.intercalarNosListas(listB);

  expect(intercalatedList.list()).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Deve intercalar corretamente quando uma lista é maior que a outra', () => {
  const listA = new SimpleLinkedList();
  listA.append(1);
  listA.append(3);

  const listB = new SimpleLinkedList();
  listB.append(2);
  listB.append(4);
  listB.append(6);

  const intercalatedList = listA.intercalarNosListas(listB);

  expect(intercalatedList.list()).toEqual([1, 2, 3, 4, 6]);
});
