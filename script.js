import {produtos} from "./produtos.js";

const elemento = {
    btnCurva: document.querySelectorAll(".btnCurva"),

};
elemento.btnCurva.forEach((item) => {
    item.addEventListener("click", (evento) => {
        //console.log(evento.target.id);
        listarProdutosPorCurvaABC(evento.target.id);
    });
});

function listarProdutosPorCurvaABC(curva) {
    let produtosFiltrados = produtos.filter((produto) => produto.curva_abc === curva);
    console.table(produtosFiltrados);
}
