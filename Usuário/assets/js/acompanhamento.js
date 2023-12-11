const content = document.querySelector("main");

function MudançaConteudo() {
  const confirm = `<div class="confirm">
    <img src="img/confirm.png" alt="">
    <h2>Agendamento realizado!</h2>
    <div>
        <p>Agora basta você esperar e acompanhar o andamento do seu descarte.</p>
    </div>
    <button type="button" id="acompanhar">Acompanhar coleta</button>
</div>`;
  content.innerHTML = confirm;

  const confirmButton = document.getElementById("acompanhar");
  confirmButton.addEventListener("click", function () {
    const newContent = `<div class="bg"></div>
        <div class="more"><i class="bi bi-arrow-up-circle"></i></div>
        <div class="perfil">
            <div class="colet">
                <img src="img/coletador.png" alt="">
                <div class="nome">
                    <h2>Rafael Dias</h2>
                    <h4>Carreteiro</h4>
                </div>
            </div>
            <div class="comunication">
                <div class="call"><i class="bi bi-telephone-fill"></i></div>
                <div class="chat"><i class="bi bi-chat-dots-fill"></i></div>
            </div>
        </div>
        <header>
            <a href="perfilUser.html">X</a>
        </header>
    `;
    content.innerHTML = newContent;
  });
}

setTimeout(MudançaConteudo, 3500);
