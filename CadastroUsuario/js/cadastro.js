function formatarDataNascimento(input) {
    let valorAtual = input.value.replace(/\D/g, '');

    if (valorAtual.length > 8) {
        valorAtual = valorAtual.substring(0, 8);
    }

    const partes = [];
    partes.push(valorAtual.substring(0, 4)); 
    partes.push(valorAtual.substring(4, 6)); 
    partes.push(valorAtual.substring(6, 8)); 

    input.value = partes.filter(Boolean).join('-');
}


function formatarCPF(input) {
    let valorAtual = input.value.replace(/\D/g, '');

    if (valorAtual.length > 11) {
        valorAtual = valorAtual.substring(0, 11);
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


document.getElementById("registro-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const dt_nascimento = document.getElementById("dt_nascimento").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senhaUser").value;
    const confirmarSenha = document.getElementById("confirma").value;
    
    if(senha.length < 7){
        alert("A senha deve ter mais de 7 dígitos");

    } else if(senha !== confirmarSenha){
        alert("Senhas não Coincidem");
        
    } else{
        const usuarioComum = {
            nomeComum: nome,
            cpfComum: cpf,
            telefoneComum: telefone,
            emailComum: email,
            dataNascimentoComum: dt_nascimento,
            senhaComum: senha
        };
        fetch('http://localhost:8080/usuarios/cadastro', {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
                method: 'POST',
                body: JSON.stringify(usuarioComum),
        })
        .then(response => {
            if(response.ok){
                /*É direcionado para a segunda etapa*/
                window.location.href = 'cadastrousuario02.html';
            } else {
                console.log("Erro desconhecido ao criar novo usuário.");
            }
        })
        .catch(error => {
            console.error("Erro ao fazer a requisição:", error);
        });
    }
});


