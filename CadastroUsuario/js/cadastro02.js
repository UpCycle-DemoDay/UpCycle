document
  .getElementById("form-endereco")
  .addEventListener("submit", function (event) {
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
    fetch("http://localhost:8080/enderecos-comum/cadastro", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(enderecoUsuarioComum),
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
