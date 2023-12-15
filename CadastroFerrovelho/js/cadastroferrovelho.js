<<<<<<< HEAD
function segundaEtapa() {
  window.location.href = "cadastroferrovelho02.html";
}

function redirecionaIndex() {
  window.location.href = "../Login/loginferrovelho.html";
=======
function segundaEtapa(){
    window.location.href = 'cadastroFerrovelhoSegundaEtapa.html';
}

function redirecionaIndex(){
    window.location.href = '../Login/loginFerrovelho.html';
>>>>>>> 2dde589f4b16c18e5c6a3ae35531e579aea979fd
}

function formatarCNPJ(input) {
  let valorAtual = input.value.replace(/\D/g, "");

  if (valorAtual.length > 11) {
    valorAtual = valorAtual.substring(0, 14);
  }
  input.value = valorAtual;
}

function formatarTelefone(input) {
  let numeroTelefone = input.value.replace(/\D/g, "");

  if (numeroTelefone.length >= 2) {
    numeroTelefone =
      "(" +
      numeroTelefone.substring(0, 2) +
      (numeroTelefone.length > 2 ? ") " + numeroTelefone.substring(2) : "");
  }

  if (numeroTelefone.length >= 7) {
    numeroTelefone =
      numeroTelefone.substring(0, 10) +
      (numeroTelefone.length > 10 ? "-" + numeroTelefone.substring(10) : "");
  }

  numeroTelefone = numeroTelefone.substring(0, 15);

  input.value = numeroTelefone;
}

function formatarNumero(input) {
    let valorAtual = input.value.replace(/\D/g, '');

    if (valorAtual.length > 5) {
        valorAtual = valorAtual.substring(0, 5);
    }
    input.value = valorAtual;
}

function formatarCep(input) {
    let valorAtual = input.value.replace(/\D/g, '');

    if (valorAtual.length > 8) {
        valorAtual = valorAtual.substring(0, 8);
    }

    const partes = [];
    partes.push(valorAtual.substring(0, 5)); 
    partes.push(valorAtual.substring(5, 8)); 

    input.value = partes.filter(Boolean).join('-');
}

function formatarUF(input) {
    let valorAtual = input.value.toUpperCase();

    valorAtual = valorAtual.replace(/[^A-Z]/g, '');

    input.value = valorAtual;
}
