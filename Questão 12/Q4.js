/**
 * Remova nós duplicados (apenas os repetidos). Crie um método
 * removeTodosDuplicados() que remova todos os nós duplicados de uma lista
 * encadeada, garantindo que os valores duplicados não apareçam na lista final.
 */

class No{
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada{
    constructor(){
        this.cabeca = null
        this.tamanho = 0
    }

    removeTodosDuplicados(){
        if (!this.cabeca) {
            return null; 
        }
        let atual = this.cabeca;
        const valoresVistos = new Set();
        let anterior = null;
        while (atual !== null) {
            if (valoresVistos.has(atual.valor)) {
                anterior.proximo = atual.proximo;
            } else {
                valoresVistos.add(atual.valor);
                anterior = atual;
            }
            atual = atual.proximo;
        }

    }

    inserirNoInicio(valor){
        let no = new No(valor)
        no.proximo = this.cabeca
        this.cabeca = no

        this.tamanho++;
    }
    inserirNoFinal(valor){
        let no = new No(valor)
        if(this.cabeca == null){
            this.cabeca = no
        } 
        else{
            let atual = this.cabeca
            while(atual.proximo !== null){
                atual = atual.proximo
            }
            atual.proximo = no
        }
        this.tamanho++;
    }

    inserirElementos(valor, posicao){
        let no = new No(valor)
        if(posicao > 0 && posicao <= this.tamanho){
            if(this.cabeca  ===  null || posicao == 1){
                this.inserirNoInicio(valor)
            } 
            if(posicao == this.tamanho){
                this.inserirNoFinal()
            }
            else {
                let atual = this.cabeca
                for(let i = 1; i < posicao; i++){
                    atual = atual.proximo
                } 
                no.proximo = atual.proximo;
                atual.proximo = no
            }
        } else {
            console.log('Informe uma posição válida')
            return false
        }
    }

    removerInicio(){
        if(!this.cabeca){
            return;
        } else {
            this.cabeca = this.cabeca.proximo
            this.tamanho--;
            console.log("LISTA ATUALIZADA APÓS REMOÇÃO DO NÓ")
            this.exibirElementos()
        }
    }
    
    exibirElementos(){
        let atual = this.cabeca
        console.log("Nodos")
        while (atual !== null){
            console.log(atual.valor)
            atual = atual.proximo
        }
    }

    excluirPorValor(num){
        if (!this.cabeca) return;

        // Caso especial: a cabeça é o nó a ser removido
        if (this.cabeca.valor === num) {
            this.cabeca = this.cabeca.proximo;
            return;
        }

        let atual = this.cabeca;
        while (atual.proximo.valor !== null && atual.proximo.valor !== num) {
            atual = atual.proximo;
        }

        // Se encontramos o valor
        if (atual.proximo !== null) {
            atual.proximo = atual.proximo.proximo;
        }
    }

}

const linkedlist = new ListaEncadeada()
linkedlist.inserirNoInicio(1);
linkedlist.inserirNoInicio('b');
linkedlist.inserirNoInicio('c');
linkedlist.inserirNoInicio(2);
linkedlist.inserirNoInicio('b');
linkedlist.inserirNoInicio(2);
linkedlist.inserirNoInicio('e');
linkedlist.inserirNoInicio(2);
console.log("Lista Encadeada") //Mostra a lista antes de excluir os valores duplicados
linkedlist.exibirElementos()
console.log('--------------------------------------------')
console.log("Remover Duplicatas")
linkedlist.removeTodosDuplicados()
linkedlist.exibirElementos()