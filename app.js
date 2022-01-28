const container = document.querySelector(".container");
const listaDeAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoDeCadastrar = document.querySelector(".botao_adc");
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");
const botaoParaDeletarTodas = document.querySelector(".botao_del_todos");

function definirPaleta(cor) {
  container.style.backgroundColor = cor;
  listaDeAtividades.style.backgroundColor = cor;
}
function removerAtividades() {
  while (listaDeAtividades.firstElementChild) {
    listaDeAtividades.removeChild(listaDeAtividades.firstElementChild);
  }
}
function removerAtividade(atividade) {
  listaDeAtividades.removeChild(atividade);
}
function criarAtividade() {
  const atividade = document.createElement("div");
  atividade.classList.add("atividade");
  const nomeDaAtividade = document.createElement("p");
  atividade.textContent = input.value;
  const botaoLimpar = document.createElement("button");
  botaoLimpar.textContent = "Limpar";
  botaoLimpar.classList.add("botao_del");

  botaoLimpar.addEventListener("click", () => removerAtividade(atividade));

  listaDeAtividades.appendChild(atividade);
  atividade.appendChild(nomeDaAtividade);
  atividade.appendChild(botaoLimpar);
}
function cadastrarAtividade() {
  if (input.value.length > 3) {
    erro.style.display = "none";
    criarAtividade();
  } else {
    erro.style.display = "grid";
    erro.innerHTML = `${input.value} não é uma atividade válida!`;
  }
  limpaInput();
}

function limpaInput() {
  input.value = "";
}

botaoDeCadastrar.addEventListener("click", () => cadastrarAtividade());
botaoParaDeletarTodas.addEventListener("click", () => removerAtividades());
paleta1.addEventListener("click", () => definirPaleta("seagreen"));
paleta2.addEventListener("mousemove", () => {
  definirPaleta("slateblue");
});
paleta3.addEventListener("dblclick", () => definirPaleta("tomato"));

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    cadastrarAtividade();
  }
});
