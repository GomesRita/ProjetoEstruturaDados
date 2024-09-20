class SimpleLinkedList {

    intercalarNosListas(otherList) {
        const newList = new SimpleLinkedList();
        let currentA = this.head;
        let currentB = otherList.head;

        while (currentA !== null || currentB !== null) {
            if (currentA !== null) {
                newList.append(currentA.value);
                currentA = currentA.next;
            }
            if (currentB !== null) {
                newList.append(currentB.value);
                currentB = currentB.next;
            }
        }
        return newList;
    }
}
