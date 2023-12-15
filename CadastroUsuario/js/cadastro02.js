<<<<<<< HEAD
document
  .getElementById("form-endereco")
  .addEventListener("submit", function (event) {
=======
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

document.getElementById("form-endereco").addEventListener("submit", function (event) {
>>>>>>> 2dde589f4b16c18e5c6a3ae35531e579aea979fd
    event.preventDefault();

    const rua = document.getElementById("rua").value;
    const bairro = document.getElementById("bairro").value;
    const numero = document.getElementById("numero").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const uf = document.getElementById("uf").value;
    const complemento = document.getElementById("complemento").value;

    const enderecoUsuarioComum = {
      ruaComum: rua,
      estadoComum: estado,
      bairroComum: bairro,
      cidadeComum: cidade,
      ufComum: uf,
      complementoComum: complemento,
      numeroComum: numero,
      cepComum: cep,
    };
<<<<<<< HEAD
    fetch("http://localhost:8080/enderecos-comum/cadastro", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(enderecoUsuarioComum),
=======
    fetch('http://localhost:8080/enderecos-comum/cadastro', {
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
            method: 'POST',
            body: JSON.stringify(enderecoUsuarioComum),
        })
    .then(response => {
        if(response.ok){
                /*alert("Usuario Criado com Sucesso!");*/
                window.location.href = '../Login/loginUsuario.html';
        } else {
                console.log("Erro desconhecido ao adastrar endereço");
        }
>>>>>>> 2dde589f4b16c18e5c6a3ae35531e579aea979fd
    })
      .then((response) => {
        if (response.ok) {
          /*alert("Usuario Criado com Sucesso!");*/
          window.location.href = '../index.html"';
        } else {
          console.log("Erro desconhecido ao adastrar endereço");
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer a requisição:", error);
      });
  });
