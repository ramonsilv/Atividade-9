class Cliente {
    constructor(cpf, nome, datanascimento){
        this.cpf = cpf
        this.nome = nome
        this.datanascimento = datanascimento
    }
}//(EXERCICO 1)

class Produto {
    constructor(codigo, descricao, qtdestoque) {
        this.codigo = codigo
        this.descricao = descricao
        this.qtdestoque = qtdestoque
    }
}//(EXERCICO 1)

class Venda {
    constructor(codigo, datahora, cliente, produto) {
        this.codigo = codigo
        this.datahora = datahora
        this.cliente = cliente
        this.produto = produto
    }
} //(EXERCICO 1)

let cliente1 = new Cliente("096.225.216-65", "David Martins", "31/03/2000")
let cliente2 = new Cliente("406.810.957-50", "Andre Valadao", "25/05/2005")
let cliente3 = new Cliente("744.190.798-51", "Gabriel Santos", "01/06/2002")

// console.log(cliente1, cliente2, cliente3) //(EXERCICIO 2)

let produto1 = new Produto("25BR25J1", "Tenis-azul", "10")
let produto2 = new Produto("26BR35J2", "Mochila-Preta", "15",)
let produto3 = new Produto("27BR45J3", "Boné-Cinza", "20")
let produto4 = new Produto("28BR55J4", "Chaveiro-Prata", "25")
let produto5 = new Produto("29BR65J5", "Chinelo-Branco", "30")
let produto6 = new Produto("30BR75J6", "Meia-Cano Medio", "35")
let produto7 = new Produto("31BR85J7", "Perfume", "40")
let produto8 = new Produto("32BR95J8", "Calça", "45")

// console.log(produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8)//(EXERCICIO 2)

let venda1 = new Venda("25BR25J1", "19/06/2023 08:00", "David Martins", "Tenis-azul")
let venda2 = new Venda("26BR35J2", "20/06/2023 09:00", "Andre Valadao", "Mochila-Preta")
let venda3 = new Venda("27BR45J3", "21/06/2023 10:00", "Gabriel Santos", "Boné-Cinza")
let venda4 = new Venda("28BR55J4", "22/06/2023 11:00", "Samuel Backer", "Chaveiro-Prata")
let venda5 = new Venda("30BR75J6", "23/06/2023 13:00", "Ilton Salazar", "Chinelo-Branco")

// console.log(venda1, venda2, venda3, venda4, venda5)//(EXERCICIO 2)

//-----------------------------------------------------------------------------------------------------

let clientes = [cliente1, cliente2, cliente3];
let produtos = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8];
let vendas = [venda1, venda2, venda3, venda4, venda5];

// console.log(clientes);//(EXERCICIO 3)
clientes.forEach(nomes => {
    // console.log("Nome: " + nomes)
}) //(EXERCICIO 3)

// console.log(produtos);//(EXERCICIO 3)
produtos.forEach(produtos => {
    // console.log("Descrição: " + produtos)
}) //(EXERCICIO 3)

// console.log(vendas);//(EXERCICIO 3)
vendas.forEach(vendas =>{
    // console.log("Data e Hora: " + vendas)
}) //(EXERCICO 3)

//---------------------------------------------------------------------------------------------------

let clientesMap = new Map(clientes.map(nome => [nome.cpf, [nome.nome, nome.datanascimento]]));
// console.log(clientesMap)     //(EXERCICIO 4)

let produtosMap = new Map(produtos.map(prod => [prod.codigo, [prod.descricao, prod.qtdestoque]]));
// console.log(produtosMap)    //(EXERCICIO 4)

let vendasMap = new Map(vendas.map(vend => [vend.codigo, [vend.datahora, vend.cliente, vend.produto]]));
// console.log(vendasMap)  //(EXERCICIO 4)

//-----------------------------------------------------------------------------------------------------

let clienteMap = new Map(clientes.map(nome => [nome.cpf, { nome: nome.nome, datanascimento: nome.datanascimento }]));
// console.log(clienteMap) //(EXERCICIO 5)
let produtoMap = new Map(produtos.map(prod => [prod.codigo, { descricao: prod.descricao, qtdestoque: prod.qtdestoque }]));
// console.log(produtoMap) //(EXERCICIO 5)
let vendaMap = new Map(vendas.map(vend => [vend.codigo, { datahora: vend.datahora, cliente: vend.cliente, produto: vend.produto }]));
// console.log(vendaMap)   //(EXERCICIO 5)

//-----------------------------------------------------------------------------------------------------
