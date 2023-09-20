var lista = []

var numero = 5

while (true){

var opcao = prompt (`
    Bem-vindo ao cadastro de produtos! 
    【1️⃣】 Adicionar Novo Produto
    【2️⃣】 Editar Produto
    【3️⃣】 Remover Produto
    【4️⃣】 Visualizar Todos os Produtos 
    `)

    if(opcao == 1) {
        adicionar()
    }else if(opcao == 2){
        editar()
    }else if(opcao == 3){
        remover()
    }else if(opcao == 4){
        ver()    
    }else{
        alert("« ❗ Nenhuma das Opções foi Selecionada ❗ »")
    }
}

function adicionar() {
    var objeto = {
        nome: '',
        marca: '',
        preco: ''
    }

objeto.nome = prompt ("〚📋〛Escolha o Nome")
objeto.marca = prompt ("〚📋〛Escolha a Marca")
objeto.preco = prompt ("〚📋〛Escolha o Preço")

lista.push(objeto)

}

function editar(){
    var renomear = prompt("Qual produto você quer editar?")

    lista[renomear].nome = prompt ("〚✍️〛Qual o novo nome?")
    lista[renomear].marca = prompt ("〚✍️〛Qual a nova marca?")
    lista[renomear].preco = prompt ("〚✍️〛Qual o novo preço?")

    lista.push(renomear)

}

function remover(){
    var excluir = prompt ("〚🗑️〛Qual item você deseja remover?")
    lista.splice (excluir, 1)

}

function ver(){
    var produtos = ""

    for(let i = 0; i < lista.length; i++ ){
        produtos +=
        `
        \n 
「 NOME 」╎ ${lista[i].nome} 
        \n
「 MARCA 」╎ ${lista[i].marca} 
        \n
「 PREÇO 」╎ ${lista[i].preco}
        \n
◖■ ■ ■ ■ ■ ■ ■ ■◗
        `
    }

    alert(produtos)
}