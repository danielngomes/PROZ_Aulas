let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const addQuantidade = document.getElementById("btn-adicionar-produto-01")
const subQuantidade = document.getElementById("btn-subtrair-produto-01")
const quantProduto = document.getElementById("quantidade-produto-01")

let subtotalInfo = {
  valor: 11.66,
};

function addProduto () {
  if(quantProduto.value < 10) {
    quantProduto.value = Number(quantProduto.value) + 1
    altSubtotal()
  }
}

function subProduto () {
  if(quantProduto.value > 1) {
    quantProduto.value = Number(quantProduto.value) - 1
    altSubtotal()
  }
}

function altSubtotal () {
  quantidadeSubtotal.innerText = quantProduto.value != 1 ? `${quantProduto.value} itens` : `${quantProduto.value} item`
  somaSubtotal(quantProduto.value)
}

function somaSubtotal (quantProduto) {
  valorSubtotal.innerText = (subtotalInfo.valor * quantProduto).toFixed(2)
}

// Mantive essas linhas, já que sempre começa com 1 no carrinho
quantidadeSubtotal.innerText = quantProduto.value + " item";
valorSubtotal.innerText = subtotalInfo.valor;

addQuantidade.addEventListener('click', addProduto)
subQuantidade.addEventListener('click', subProduto)