// Função que alterna entre exibir o formulário de login e ocultar outros elementos
function toggleForm() {
    // Obtém a referência ao elemento com o id 'container'
    var container = document.getElementById('container');
    // Limpa o conteúdo do container
    container.innerHTML = '';

    // Cria um novo formulário
    var form = document.createElement('form');
    form.id = 'loginForm';

    // Cria e adiciona um rótulo e um campo de entrada para o nome de usuário
    var nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'username';
    nameLabel.textContent = 'Nome:';
    form.appendChild(nameLabel);
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'username';
    nameInput.name = 'username';
    nameInput.required = true;
    form.appendChild(nameInput);

    // Cria e adiciona um rótulo e um campo de entrada para a senha
    var passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    passwordLabel.textContent = 'Senha:';
    form.appendChild(passwordLabel);
    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.name = 'password';
    passwordInput.required = true;
    form.appendChild(passwordInput);

    // Adiciona o formulário ao container
    container.appendChild(form);

    // Cria e adiciona um botão de login com um evento de clique
    var loginButton = document.createElement('button');
    loginButton.type = 'button';
    loginButton.textContent = 'Entrar';
    loginButton.onclick = function () {
        alert('Login realizado com sucesso!');
        window.location.href = "/index/index.html";
    };
    container.appendChild(loginButton);

    // Cria e adiciona um link para a página de cadastro
    var backToRegister = document.createElement('p');
    backToRegister.innerHTML = 'Não tem uma conta? <a href="form.html" class="toggle-btn" onclick="toggleForm()">Cadastrar</a>';
    container.appendChild(backToRegister);
}

// Função que lida com o processo de cadastro
function register() {
    // Obtém os valores dos campos de nome, e-mail e senha
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica se a senha atende aos critérios
    if (!isValidPassword(password)) {
        alert('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.');
        return;
    }

    // Exibe as informações no console
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Senha:', password);

    // Exibe um alerta indicando que o cadastro foi realizado com sucesso
    alert('Cadastro realizado com sucesso!');
}

// Função que verifica se uma senha atende aos critérios especificados
function isValidPassword(password) {
    // Verifica se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;

    return uppercaseRegex.test(password) && lowercaseRegex.test(password) && numberRegex.test(password);
}

// Obtém referências aos elementos do DOM
const trocaCor = document.getElementById("trocaCor");
const ffClaro = document.querySelector(".ff-claro");

// Adiciona um ouvinte de evento ao elemento de troca de cor
trocaCor.addEventListener("click", () => {
    // Alterna a classe 'ff-escuro' no elemento com a classe 'ff-claro'
    ffClaro.classList.toggle("ff-escuro");
});
