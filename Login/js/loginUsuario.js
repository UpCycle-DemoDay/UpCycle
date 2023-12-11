document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senhaLog").value;

  const loginUsuario = {
    email: email,
    senha: senha,
  };

  fetch("http://localhost:8080/usuarios/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(loginUsuario),
  })
    .then((response) => {
      if (response.ok) {
        /*alert("Usuário logado com Sucesso!");*/
        window.location.href = "../Usuário/perfilUser.html";
      } else {
        alert("Credenciais Inválidas");
      }
    })
    .catch((error) => {
      console.error("Erro ao fazer a requisição:", error);
      alert("Erro ao fazer a solicitação.");
    });
});
