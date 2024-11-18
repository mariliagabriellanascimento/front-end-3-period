const botao = document.querySelector(".botao");

function adicionar() {
const texto = document.querySelector(".texto");
const total = Number(texto.innerHTML) + 1;
if (total <= 10) {
    texto.innerHTML = total;
} else {
    alert("Você alcançou o limite!")
}
  
}  
botao.addEventListener("click", adicionar);