const trocaCor = document.getElementById("trocaCor");

const bodyClaro = document.querySelector(".body-Claro");
const txtClaro = document.querySelectorAll(".txt-Claro");

trocaCor.addEventListener("click", () => {
    bodyClaro.classList.toggle("body-Escuro");
    txtClaro.forEach((txt) => {
        txt.classList.toggle("txt-Escuro");
    });
});
