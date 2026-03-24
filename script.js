import {produtos} from "./produtos.js";

const elemento = {
    btnCurva: document.querySelectorAll(".btnCurva"),
    containerDisplay: document.querySelector("#containerDisplay"),

};

console.log(elemento.containerDisplay);

elemento.btnCurva.forEach((item) => {
    item.addEventListener("click", (evento) => {
        //console.log(evento.target.id);
        listarProdutosPorCurvaABC(evento.target.id);
    });
});

function listarProdutosPorCurvaABC(curva) {
    let produtosFiltrados = produtos.filter((produto) => produto.curva_abc === curva);
  //  console.table(produtosFiltrados);
  inserirDadosCurvaABC(produtosFiltrados);
}
function inserirDadosCurvaABC(dados) {
    elemento.containerDisplay.innerHTML = ""; // Limpa o conteúdo anterior
    let colunasGRID = {
        id: document.createElement("p"),
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque: document.createElement("p"),
    };

    colunasGRID.id.innerText = "ID";
    colunasGRID.nome.innerText = "NOME";
    colunasGRID.preco_venda.innerText = "PREÇO DE VENDA";
    colunasGRID.estoque.innerText = "ESTOQUE";

    elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque);
    
    dados.forEach((produto) => {
        let linhaProduto = {
            id: document.createElement("p"),
            nome: document.createElement("p"),
            preco_venda: document.createElement("p"),
            estoque: document.createElement("p"),
        };

        linhaProduto.id.innerText = produto.id;
        linhaProduto.nome.innerText = produto.nome;
        linhaProduto.preco_venda.innerText = produto.preco_venda;
        linhaProduto.estoque.innerText = produto.estoque;

        elemento.containerDisplay.append(linhaProduto.id, linhaProduto.nome, linhaProduto.preco_venda, linhaProduto.estoque);
    });
}