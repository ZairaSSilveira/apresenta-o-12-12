// Atualiza dinamicamente o número do cartão na caixa correspondente
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

// Atualiza dinamicamente o nome do titular do cartão na caixa correspondente
document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

// Atualiza dinamicamente o mês de expiração do cartão na caixa correspondente
document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

// Atualiza dinamicamente o ano de expiração do cartão na caixa correspondente
document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

// Gira o cartão para mostrar o verso quando o cursor está sobre o campo CVV
document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

// Retorna o cartão à posição original quando o cursor sai do campo CVV
document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

// Atualiza dinamicamente o valor do CVV na caixa correspondente
document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

// Adiciona um evento de clique para alternar entre cores de fundo (claro/escuro)
const trocaCor = document.getElementById("trocaCor");
const ffClaro = document.querySelector(".ff-claro");

trocaCor.addEventListener("click", () => {
    ffClaro.classList.toggle("ff-escuro");
})
