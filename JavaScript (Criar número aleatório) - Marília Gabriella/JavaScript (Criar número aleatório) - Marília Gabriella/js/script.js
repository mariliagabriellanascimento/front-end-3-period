const botaoC = document.querySelector(".botaoCriar");
const botaoR = document.querySelector(".botaoRemover");
const resultados = document.querySelector(".resultados");
let contador = 0;

botaoC.addEventListener("click", () => {
    if (contador < 3) {
        resultados.innerHTML += `<p>Acabei de pensar no número <span class="destaque">${Math.floor(Math.random() * 100) + 1}</span>!</p>`;
        contador++;
    } else {
        alert("Você chegou no limite de números pensados!");
    }
});

botaoR.addEventListener("click", () => {
    resultados.innerHTML = '';
    contador = 0;
});
