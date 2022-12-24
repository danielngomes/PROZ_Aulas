const title = document.getElementsByClassName('title')
const errorText = document.getElementsByClassName('error-text')
const usernameInput = document.getElementById('login-usuario')
const passwdInput = document.getElementById('login-senha')
const successMsg = document.getElementsByClassName('success-message')
const failMsg = document.getElementsByClassName('fail-message')

title[0].style.color = 'red';

/* Função que serve para validar o usuário, mudando também a estilização se estiver certo ou errado,
usei o add para só mostrar o que se deve e o remove para controlar as alterações no fluxo do onchange */
function validateUsername() {
    if (usernameInput.value != 'daniel') {
        usernameInput.classList.remove('correct')
        usernameInput.classList.add('error')
        errorText[0].classList.add('visible')
    } else {
        usernameInput.classList.add('correct')
        usernameInput.classList.remove('error')
        errorText[0].classList.remove('visible')
    }
}

/* Função que serve para validar a senha, mudando também a estilização se estiver certa ou errada,
usei o toggle para substituir o add e controlar as alterações e o remove apenas para não mostrar o que não deve */
function validatePasswd() {
    if (passwdInput.value != '123') {
        passwdInput.classList.remove('correct')
        passwdInput.classList.toggle('error')
        errorText[1].classList.toggle('visible')
    } else {
        passwdInput.classList.toggle('correct')
        passwdInput.classList.remove('error')
        errorText[1].classList.remove('visible')
    }
}

/* Função que serve para mostrar uma mensagem de validação ao clicar no botão de login, 
mudando a mensagem caso esteja algo certo ou errado, usei o toggle para adicionar e remover a mensagem clicando no botão 
e o remove para não mostrar caso não seja necessário */
function showValidateMsg () {
    if (usernameInput.value == 'daniel' && passwdInput.value == '123'){
        successMsg[0].classList.toggle('visible')
        failMsg[0].classList.remove('visible')
    } else {
        successMsg[0].classList.remove('visible')
        failMsg[0].classList.toggle('visible')
    }    
}