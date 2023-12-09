function segundaEtapa(){
    window.location.href = 'cadastroferrovelho02.html';
}

function redirecionaIndex(){
    window.location.href = '../Login/loginferrovelho.html';
}

function formatarCNPJ(input) {
    let valorAtual = input.value.replace(/\D/g, '');

    if (valorAtual.length > 11) {
        valorAtual = valorAtual.substring(0, 14);
    }
    input.value = valorAtual;
}

function formatarTelefone(input){
    let numeroTelefone = input.value.replace(/\D/g, '');

    if (numeroTelefone.length >= 2) {
        numeroTelefone = '(' + numeroTelefone.substring(0, 2) + (numeroTelefone.length > 2 ? ') ' + numeroTelefone.substring(2) : '');
    }

    if (numeroTelefone.length >= 7) {
        numeroTelefone = numeroTelefone.substring(0, 10) + (numeroTelefone.length > 10 ? '-' + numeroTelefone.substring(10) : '');
    }

    numeroTelefone = numeroTelefone.substring(0, 15);

    input.value = numeroTelefone;
}