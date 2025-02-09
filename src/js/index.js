const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
  cartao.addEventListener("click", function() {
      const cartaVirada = cartao.querySelector(".carta-virada");

      //virar o cartao
      cartao.classList.toggle("virar");
      //mostrar o fundo da carata
      cartaVirada.classList.toggle("mostrar-fundo-carta");

      const descricao = cartao.querySelector(".descricao");
      descricao.classList.toggle("esconder");
  });
});

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