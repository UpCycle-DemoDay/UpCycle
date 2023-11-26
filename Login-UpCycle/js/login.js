'use strict'

const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)

const cadastroF = document.getElementById('cadastroF')
const loginF = document.getAnimations('loginF')
const cadastroU = document.getElementById('cadastroU')
const loginU = document.getAnimations('loginU')


cadastroF.addEventListener('click', function(){
    window.location.href = '../cadastro-ferrovelho/cadastroF.html'
});
loginF.addEventListener('click', function() {
    window.location.href = '../areaF/ferrovelho.hrml'
});