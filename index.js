const input = document.querySelector("#input")
const apagar = document.querySelector("#apagar");
const limpar = document.querySelector("#limpar");
const multiplicacao = document.querySelector("#multiplicacao");
const adicao = document.querySelector("#adicao");
const subtracao = document.querySelector("#subtracao");
const divisao = document.querySelector("#divisao");
// const zero = document.querySelector("zero");
// const um = document.querySelector("um");
// const dois = document.querySelector("dois");
// const tres = document.querySelector("tres");
// const quatro = document.querySelector("quatro");
// const cinco = document.querySelector("5");
// const seis = document.querySelector("6");
// const sete = document.querySelector("7");
// const oito = document.querySelector("8");
// const nove = document.querySelector("9");
const porcentagem = document.querySelector("#porcentagem");
const ponto = document.querySelector("#ponto");
const raiz = document.querySelector("#raiz");
const igual = document.querySelector("#igual");



function digitar (valor) {
    input.value = input.value + valor
}

function limpar() {
   input.value = ""
}