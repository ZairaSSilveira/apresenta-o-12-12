const itensCarrinho = {};

function addCarrinho(itemNome, itemPreco) {
  // Verifica se o item adicionado já existe no carrinho
  if (itensCarrinho[itemNome]) {
    // A quantidade do produto vai aumentar
    itensCarrinho[itemNome].quantity++;
    itensCarrinho[itemNome].precoTotal += itemPreco;
    itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML =
      itensCarrinho[itemNome].quantity;
    itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML =
      "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2);
  } else {
    const liItem = document.createElement("li");
    liItem.innerHTML = `
        <div class="item">
            <span>${itemNome}</span>
            <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
            <span class="quantity">1</span>
            <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})">+</button>
            <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
        </div>  
        `;

    document.getElementById("itens-lista").appendChild(liItem);
    itensCarrinho[itemNome] = {
      quantity: 1,
      precoTotal: itemPreco,
      liItem: liItem,
    };
  }
  // calcula o valor total
  let precoTotal = 0;
  for (let itemNome in itensCarrinho) {
    precoTotal += itensCarrinho[itemNome].precoTotal;
  }

  // atualiza o valor total
  document.getElementById("preco-total").innerHTML =
    "Valor Total R$" + precoTotal.toFixed(2);
  updateCarrinho();
}

function removeCarrinho(itemNome, itemPreco) {
  if (itensCarrinho[itemNome]) {
    if (itensCarrinho[itemNome].quantity > 1) {
      itensCarrinho[itemNome].quantity--;
      itensCarrinho[itemNome].precoTotal -= itemPreco;
      itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML =
        itensCarrinho[itemNome].quantity;
      itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML =
        "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2);
    } else {
      document
        .getElementById("itens-lista")
        .removeChild(itensCarrinho[itemNome].liItem);
      delete itensCarrinho[itemNome];
      document.getElementById("preco-total").innerHTML = "Valor Total: R$ 0.00";
    }
    updateCarrinho();
    document.getElementById("preco-total").innerHTML =
      "Valor Total: R$" + precoTotal.toFixed(2);
    updateCarrinho();
  }
}
function updateCarrinho() {
  let cont = 0;
  for (let item in itensCarrinho) {
    cont += itensCarrinho[item].quantity;
  }
  document.getElementById("cont-carrinho").innerHTML = cont;
}

function limparCarrinho() {
  document.getElementById("itens-lista").innerHTML = "";
  document.getElementById("preco-total").innerHTML = "Valor Total R$0.00";
  for (let itemNome in itensCarrinho) {
    delete itensCarrinho[itemNome];
  }
  updateCarrinho();
}

function toggleCarrinho() {
  const itensCarrinhoDiv = document.getElementById("carrinho-itens");
  if (itensCarrinhoDiv.style.display == "none") {
    itensCarrinhoDiv.style.display = "block";
  } else {
    itensCarrinhoDiv.style.display = "none";
  }
}

function buscarProdutos() {
  const buscarInput = document.getElementById("buscar-input");
  const produto = document.getElementsByClassName("produto");
  for (let i = 0; i < produto.length; i++) {
    const produtoNome = produto[i].querySelector("h3").innerText.toLowerCase();

    if (produtoNome.includes(buscarInput.value.toLocaleLowerCase())) {
      produto[i].style.display = "block";
    } else {
      produto[i].style.display = "none";
    }
  }
}

function realizarPagamento(){
  window.location.href = "/pagamentos/pag.html";
}

// Função Troca de Cor

const trocaCor = document.getElementById("trocaCor");

const fundoClaro = document.querySelector(".fundo-claro");
const logoClaro = document.querySelectorAll(".logo-claro");
const navClaro = document.querySelector(".nav-claro");
const navItemClaro = document.querySelector(".nav-item-claro");
const brincoClaro = document.querySelectorAll(".brinco-claro");
const rodapeClaro = document.querySelector(".rodape-claro");
const textoClaro = document.querySelectorAll(".texto-claro");



trocaCor.addEventListener("click", () => {
  fundoClaro.classList.toggle("fundo-escuro");
  logoClaro.forEach((logos) => {
    logos.classList.toggle("logo-escuro");
  });
  navClaro.classList.toggle("nav-escuro");
  navItemClaro.classList.toggle("nav-item-escuro");
  brincoClaro.forEach((brinco) => {
    brinco.classList.toggle("brinco-escuro");
  });
  rodapeClaro.classList.toggle("rodape-escuro");
  textoClaro.forEach((texto) => {
    texto.classList.toggle("texto-escuro");
  })

  
  
});

// parte do feedback
function mostrarAvaliacao(avaliacao) {
  console.log(`A avaliação foi ${avaliacao}`);
}
document.getElementById('enviar').addEventListener('click', function () {
  // Pega o valor do input
  var feedbackInput = document.querySelector('.feed input');
  var mensagem = feedbackInput.value;

  // Exibe a mensagem no console
  console.log(`Mensagem enviada: ${mensagem}`);

  // Limpa o conteúdo do input após o envio
  feedbackInput.value = '';
});

