const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
  esconderCartaoSelecionado();

  // Se estiver na última carta, volta para a primeira
  cartaoAtual = (cartaoAtual + 1) % cartoes.length;

  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  esconderCartaoSelecionado();

  // Se estiver na primeira carta, volta para a última
  cartaoAtual = (cartaoAtual - 1 + cartoes.length) % cartoes.length;

  mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}