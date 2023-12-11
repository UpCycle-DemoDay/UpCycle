const toggleClose = document.querySelector(".toggle-icon");
const sidebar = document.querySelector(".sidebar");
const textLogo = document.querySelector(".text-logo");
const margin = document.getElementById("marginMain");

/* BOTÃO DE MINIMIZAR MENU LATERAL */
toggleClose.addEventListener("click", () => sidebar.classList.toggle("close"));
toggleClose.addEventListener("click", () =>
  toggleClose.classList.toggle("close")
);
toggleClose.addEventListener("click", () =>
  margin.classList.toggle("marginMain")
);
toggleClose.addEventListener("click", () =>
  margin.classList.toggle("marginSide")
);
toggleClose.addEventListener("click", () =>
  textLogo.classList.toggle("text-logo-close")
);

/* BOTÃO DE MINIMIZAR MENU LATERAL */
const perfil = document.getElementById("perfil");
const home = document.getElementById("home");
const logout = document.getElementById("logout");

perfil.addEventListener("click", function alterarPerfil() {
  const contentMainPerfil = `<div class="organize" id="wrap" style="flex-direction: row; justify-content: space-between;">
    <div class="user-profile">
        <img class="avatar" src="img/user.jpg" alt="Ash" />
        <div class="username">Júlia Silva</div>
        <div class="bio">
            contribuidor(a) bronze
        </div>
        <div class="description">
            Buscando acabar com a ebulição global!
        </div>
        <ul class="data">
            <li>
            <span class="entypo-heart">Descartes: 21</span>
            </li>
            <li>
            <span class="entypo-eye">próximo rank: 9</span>
            </li>
        </ul>
    </div>
    <div class="points">
        <div>
            <h2>Pontuação</h2>
            <h1>2650</h1>
        </div>
        <div style="align-items: center;">
            <img src="img/medal.png">
            <a href="../pagbonificação/bonificacao.html">Trocar pontos</a>
        </div>
    </div>
</div>



<!--Estrutura da carteira-->

<div class="carteira">
    <div class="title-wallet">
        <h2>CARTEIRA</h2>
        <i class="bi bi-wallet"></i>
    </div>
    <div class="saldo-saque">
        <div class="saldo">
            <h5>Saldo disponível para saque</h5>
            <h1>R$54,50</h1>
        </div>
        <div class="saque">
            <span>Saque</span>
        </div>
    </div>
    <h4 style="margin: 1rem 0; font-size: 1.5em;">Janeiro</h4>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>19</h2>
                <h4>Hoje</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Saque</h4><p>19/12/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: red;">-R$20,00</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>2</h2>
                <h4>3 sem atrás</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Descarte</h4><p>2/12/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: #26D64C;">+R$31,25</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>21</h2>
                <h4>mês passado</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Descarte</h4><p>21/11/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: #26D64C;">+R$10,50</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>17</h2>
                <h4>mês passado</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Saque</h4><p>17/11/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: red;">-R$50,00</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>3</h2>
                <h4>mês passado</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Descarte</h4><p>3/11/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: #26D64C;">+R$41,20</h2>
    </div>
</div>
<div class="espacamento"></div>`;
  margin.innerHTML = contentMainPerfil;
  perfil.classList.add("active");
  home.classList.remove("active");
  logout.classList.remove("active");
});

home.addEventListener("click", function alterarHome() {
  const contentMainHome = ` <div class="organize">
    <div class="container-cards">
                    <div class="card1">
                        <div class="icon-card1"><i class="bi bi-wallet"></i></div>
                        <h2>R$34,00</h2>
                        <h4>Carteira</h4>
                        <i class="bi bi-info-circle" id="icon-wallet"></i>
                    </div>
                    <div class="card2">
                        <div class="icon-card2"><i class="bi bi-trash-fill"></i></div>
                        <h2>21 Descartes</h2>
                        <h4>9 para alcançar prata</h4>
                    </div>
                    <div class="card3">
                        <div class="icon-card3"><img src="img/iconBlue.png"></div>
                        <h2>89kg Reciclados</h2>
                        <h4>Alcance 100kg para um bônus de pontos</h4>
                    </div>
                </div>
                <div class="container2-cards">
                    <div class="container2-card1">
                        <div class="divisao-card1">
                        <div class="text-area-card">    
                            <div>
                                <h2>Total arrecadado</h2>
                                <h3>R$643,50</h3>
                                <h4>+R$403,25</h4> <p>Nos últimos 6 meses</p>
                            </div>
                            <div>
                                <div class="seeMore"><p>Ver detalhes >></p></div>
                            </div>
                        </div>
                        <div class="graphic">
                            <h5>Últimos 6 meses <i class="bi bi-caret-down-fill"></i></h5>
                            <div class="area-graphic">
                                <div class="column1"></div>
                                <div class="column2"></div>
                                <div class="column3"></div>
                                <div class="column4"></div>
                                <div class="column5"></div>
                            </div>
                        </div>
                    </div>
                    <div class="progress-area">
                        <div class="line"></div>
                        <p>Melhor que 39.5% dos contribuidores</p>
                        <div class="progress-line"><div class="progress"></div></div>
                    </div>
                </div>
                    <div class="container2-card2">
                            <div class="divisao-card1">
                            <div class="text-area-card" style="width: 40%;">    
                                <div>
                                    <h2>Cartão-presente</h2>
                                    <h2>Spotify <i class="bi bi-spotify" style="color: #1ED760;"></i></h2>
                                    <h5 style="font-weight: 100;">30 dias de premium</h5>
                                </div>
                                <div>
                                    <div class="seeMore"><p>Ver mais >></p></div>
                                </div>
                            </div>
                            <div class="graphic">
                                <div class="area-graphic-circle">
                                    <img src="./img/circle graphic.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="desc-area">
                           <div>
                                <h4>Já resgatados</h4>
                                <h3>8</h3>
                           </div>
                           <div>
                                <h4>Máx. de pontos</h4>
                                <h3>13650</h3>
                           </div>
                           <div>
                                <h4>Último resgatado</h4>
                                <h3>03/01/2024</h3>
                           </div>
                        </div>
                    </div>
                <div class="espacamento"></div>
    </div>
    `;

  margin.innerHTML = contentMainHome;
  perfil.classList.remove("active");
  home.classList.add("active");
  logout.classList.remove("active");
});
logout.addEventListener("click", function alterarLogout() {
  const contentMainLogout = `<div class="container-logout">
    <div class="box-logout">
        <h2>Tem certeza que deseja sair?</h2>                    
        <a href="../index.html"><span>Sim</span></a>
    </div>
</div>`;
  margin.innerHTML = contentMainLogout;
  perfil.classList.remove("active");
  home.classList.remove("active");
  logout.classList.add("active");
});

const bottomNav = document.querySelector(".nav-mobile");

const contentNav = `<ul class="bottom-nav">
<div class="slider"></div>
<li>
    <a href="#" id="perfil2">
        <i class="bi bi-person"></i>
        <span>Perfil</span>
    </a>
</li>
<li>
    <a href="solicitacao.html" id="agendamento2">
        <i class="bi bi-calendar"></i>
        <span>Agendamento</span>
    </a>
</li>
<li>
    <a href="#" class="active-icon" id="home2">
        <i class="bi bi-house"></i>
        <span>Home</span>
    </a>
</li>
<li>
    <a href="../pagbonificação/bonificacao.html" id="trocar2">
        <i class="bi bi-reception-4"></i>
        <span>trocar pontos</span>
    </a>
</li>
<li>
    <a href="#" id="logout2">
        <i class="bi bi-door-open"></i>
        <span>Sair</span>
    </a>
</li>

</ul>`;

function updateContent() {
  var largura = window.innerWidth;

  if (largura < 767) {
    bottomNav.classList.remove("text-logo-close");
    bottomNav.innerHTML = contentNav;

    $(document).ready(function () {
      $(".bottom-nav li a").click(function () {
        var position = $(this).position();
        var margin = 37;
        if (largura < 400) {
          margin = 24.8;
        }

        $(".slider").css({
          left: position.left + margin,
          transform: "translateX(-50%)",
        });
        $(".bottom-nav li a").removeClass("active-icon");
        $(this).addClass("active-icon");
      });
    });

    const perfil2 = document.getElementById("perfil2");
    const home2 = document.getElementById("home2");
    const logout2 = document.getElementById("logout2");

    perfil2.addEventListener("click", function alterarPerfil2() {
      const contentMainPerfil2 = `<div class="organize" id="wrap" style="flex-direction: row; justify-content: space-between;">
    <div class="user-profile">
        <img class="avatar" src="img/user.jpg" alt="Ash" />
        <div class="username">Júlia Silva</div>
        <div class="bio">
            contribuidor(a) bronze
        </div>
        <div class="description">
            Buscando acabar com a ebulição global!
        </div>
        <ul class="data">
            <li>
            <span class="entypo-heart">Descartes: 21</span>
            </li>
            <li>
            <span class="entypo-eye">próximo rank: 9</span>
            </li>
        </ul>
    </div>
    <div class="points">
        <div>
            <h2>Pontuação</h2>
            <h1>2650</h1>
        </div>
        <div style="align-items: center;">
            <img src="img/medal.png">
            <a href="../pagbonificação/bonificacao.html">Trocar pontos</a>
        </div>
    </div>
</div>



<!--Estrutura da carteira-->

<div class="carteira">
    <div class="title-wallet">
        <h2>CARTEIRA</h2>
        <i class="bi bi-wallet"></i>
    </div>
    <div class="saldo-saque">
        <div class="saldo">
            <h5>Saldo disponível para saque</h5>
            <h1>R$54,50</h1>
        </div>
        <div class="saque">
            <span>Saque</span>
        </div>
    </div>
    <h4 style="margin: 1rem 0; font-size: 1.5em;">Janeiro</h4>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>19</h2>
                <h4>Hoje</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Saque</h4><p>19/12/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: red;">-R$20,00</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>2</h2>
                <h4>3 sem atrás</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Descarte</h4><p>2/12/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: #26D64C;">+R$31,25</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>21</h2>
                <h4>mês passado</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Descarte</h4><p>21/11/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: #26D64C;">+R$10,50</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>17</h2>
                <h4>mês passado</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Saque</h4><p>17/11/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: red;">-R$50,00</h2>
    </div>
    <div class="card-wallet">
        <div style="display: flex;">
            <div class="date">
                <h2>3</h2>
                <h4>mês passado</h4>
            </div>
            <div class="desc-card-wallet">
                <i class="bi bi-coin"></i>
                <div class="title-date"><h4>Descarte</h4><p>3/11/2023</p></div>
            </div>
        </div>
        <h2 id="valor" style="margin: auto 0; color: #26D64C;">+R$41,20</h2>
    </div>
</div>
<div class="espacamento"></div>`;
      margin.innerHTML = contentMainPerfil2;
      perfil2.classList.add("active-icon");
      home2.classList.remove("active-icon");
      logout2.classList.remove("active-icon");
    });
    home2.addEventListener("click", function alterarHome2() {
      const contentMainHome2 = ` <div class="organize">
    <div class="container-cards">
                    <div class="card1">
                        <div class="icon-card1"><i class="bi bi-wallet"></i></div>
                        <h2>R$34,00</h2>
                        <h4>Carteira</h4>
                        <i class="bi bi-info-circle" id="icon-wallet"></i>
                    </div>
                    <div class="card2">
                        <div class="icon-card2"><i class="bi bi-trash-fill"></i></div>
                        <h2>21 Descartes</h2>
                        <h4>9 para alcançar prata</h4>
                    </div>
                    <div class="card3">
                        <div class="icon-card3"><img src="img/iconBlue.png"></div>
                        <h2>89kg Reciclados</h2>
                        <h4>Alcance 100kg para um bônus de pontos</h4>
                    </div>
                </div>
                <div class="container2-cards">
                    <div class="container2-card1">
                        <div class="divisao-card1">
                        <div class="text-area-card">    
                            <div>
                                <h2>Total arrecadado</h2>
                                <h3>R$643,50</h3>
                                <h4>+R$403,25</h4> <p>Nos últimos 6 meses</p>
                            </div>
                            <div>
                                <div class="seeMore"><p>Ver detalhes >></p></div>
                            </div>
                        </div>
                        <div class="graphic">
                            <h5>Últimos 6 meses <i class="bi bi-caret-down-fill"></i></h5>
                            <div class="area-graphic">
                                <div class="column1"></div>
                                <div class="column2"></div>
                                <div class="column3"></div>
                                <div class="column4"></div>
                                <div class="column5"></div>
                            </div>
                        </div>
                    </div>
                    <div class="progress-area">
                        <div class="line"></div>
                        <p>Melhor que 39.5% dos contribuidores</p>
                        <div class="progress-line"><div class="progress"></div></div>
                    </div>
                </div>
                    <div class="container2-card2">
                            <div class="divisao-card1">
                            <div class="text-area-card" style="width: 40%;">    
                                <div>
                                    <h2>Cartão-presente</h2>
                                    <h2>Spotify <i class="bi bi-spotify" style="color: #1ED760;"></i></h2>
                                    <h5 style="font-weight: 100;">30 dias de premium</h5>
                                </div>
                                <div>
                                    <div class="seeMore"><p>Ver mais >></p></div>
                                </div>
                            </div>
                            <div class="graphic">
                                <div class="area-graphic-circle">
                                    <img src="./img/circle graphic.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="desc-area">
                           <div>
                                <h4>Já resgatados</h4>
                                <h3>8</h3>
                           </div>
                           <div>
                                <h4>Máx. de pontos</h4>
                                <h3>13650</h3>
                           </div>
                           <div>
                                <h4>Último resgatado</h4>
                                <h3>03/01/2024</h3>
                           </div>
                        </div>
                    </div>
                <div class="espacamento"></div>
    </div>`;

      margin.innerHTML = contentMainHome2;
      perfil2.classList.remove("active-icon");
      home2.classList.add("active-icon");
      logout2.classList.remove("active-icon");
    });
    logout2.addEventListener("click", function alterarLogout2() {
      const contentMainLogout2 = `<div class="container-logout">
    <div class="box-logout">
        <h2>Tem certeza que deseja sair?</h2>                    
        <a href="../index.html"><span>Sim</span></a>
    </div>
</div>`;
      margin.innerHTML = contentMainLogout2;
      perfil2.classList.remove("active-icon");
      home2.classList.remove("active-icon");
      logout2.classList.add("active-icon");
    });
  } else {
    bottomNav.classList.add("text-logo-close");
  }
}

document.addEventListener("DOMContentLoaded", updateContent);

window.addEventListener("resize", updateContent);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    home2.click();
  }, 100);
});
