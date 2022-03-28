const Listadepecas = ['pecas de teste', 'AB', 'peca B', 'não sei']

console.log('quantidade de caracteres')

if (Listadepecas.length <=10){
console.log('as peças pode, ser cadastradas');
}

console.log('quantidade de caracteres\n')

for (let index = 0; index < Listadepecas.length; index++){
    const pecaatual = Listadepecas[index];
    if (pecaatual.length <3){
        console.log(pecaatual + ' a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
    console.log(pecaatual + ' a peça pode ser cadastrada.')
    }
    
    const pesodapecaemgramas = 100

    if (pesodapecaemgramas >= 100) {
    console.log('Peso da peça é ' +pesodapecaemgramas + ' gramas o peso é suficiente \n')
    } else {
    console.log('Peso da peça é ' +pesodapecaemgramas + ' gramas o peso é insuficiente \n')
    }
}