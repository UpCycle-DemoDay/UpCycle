const toggleClose = document.querySelector('.toggle-icon')
const sidebar = document.querySelector('.sidebar')
const textLogo = document.querySelector('.text-logo')
const margin = document.getElementById('marginMain')

toggleClose.addEventListener('click', () => (
    sidebar.classList.toggle('close')
))
toggleClose.addEventListener('click', () => (
    toggleClose.classList.toggle('close')
))
toggleClose.addEventListener('click', () => (
    margin.classList.toggle('marginMain')
))
toggleClose.addEventListener('click', () => (
    margin.classList.toggle('marginSide')
))
toggleClose.addEventListener('click', () => (
    textLogo.classList.toggle('text-logo-close')
))


const perfil = document.getElementById('perfil');
const home = document.getElementById('home');
const agendamento = document.getElementById('agendamento');

const logout = document.getElementById('logout');

perfil.addEventListener('click', function alterarPerfil() {
    const contentMainPerfil = `<div class="organize" id="wrap">
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
    <div class="meta" id="meta2">
        <h2>Voucher Spotify</h2>
        <h3>Progresso</h3>
        <h4>2745/3000</h4>
        <div class="progressBar"><div class="progress"></div></div>
    </div>
    
</div>
<div class="completeHistoric">
<h1>Histórico completo</h1>
    <div class="cardHistoric">
        <h4>Descarte 21</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 20</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 19</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 18</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 17</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 16</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 15</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 14</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 13</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 12</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 11</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 10</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 9</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 8</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 7</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 6</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 5</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 4</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 3</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 2</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 1</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    
</div>
<div class="espacamento"></div>`;
    margin.innerHTML = contentMainPerfil;
    perfil.classList.add('active')
    home.classList.remove('active')
    agendamento.classList.remove('active')
    logout.classList.remove('active')
})
home.addEventListener('click', function alterarHome(){
    const contentMainHome = ` <div class="organize">
    <div class="point">
        <h3>Pontuação</h3>
        <div><h2>2745</h2></div>
    </div>
    <div class="meta">
        <h2>Voucher Spotify</h2>
        <h3>Progresso</h3>
        <h4>2745/3000</h4>
        <div class="progressBar"><div class="progress"></div></div>
    </div>
</div>
<div class="historico">
    <article class="card" id="card1">
        <h4>Descarte 21</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$36,65</p>
            <p>Data: 25/04/2024</p>
        </div>
        <span class="undone">Em andamento</span>
    </article>
    <article class="card" id="card2"><h4>Descarte 20</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$24,50</p>
            <p>Data: 05/04/2024</p>
        </div>
        <span class="done">Concluído</span>
    </article>
    <article class="card" id="card3"><h4>Descarte 19</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$10,25</p>
            <p>Data: 15/03/2024</p>
        </div>
        <span class="done">Concluído</span>
    </article>
    <article class="card" id="card4"><h4>Descarte 18</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$32,45</p>
            <p>Data: 28/02/2024</p>
        </div>
        <span class="done">concluído</span>
    </article>
</div>`;

    margin.innerHTML = contentMainHome;
    perfil.classList.remove('active')
    home.classList.add('active')
    agendamento.classList.remove('active')
    logout.classList.remove('active')
})

agendamento.addEventListener('click', function alterarAgendamento(){
    const contentMainAgendamento = `<div class="container-calendar">
    <div class="calendarInterface">
      <div class="front">
        <div class="current-date">
          <h1>Dia 15, Terça-Feira</h1>
          <h1>Janeiro 2024</h1>	
        </div>

        <div class="current-month">
          <ul class="week-days">
            <li>SEG</li>
            <li>TER</li>
            <li>QUA</li>
            <li>QUI</li>
            <li>SEX</li>
            <li>SAB</li>
            <li>DOM</li>
          </ul>

          <div class="weeks">
            <div class="first">
              <span class="last-month">28</span>
              <span class="last-month">29</span>
              <span class="last-month">30</span>
              <span class="last-month">31</span>
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>

            <div class="second">
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
              <span>08</span>
              <span>09</span>
              <span>10</span>
            </div>

            <div class="third">
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span class="active-calendar">15</span>
              <span>16</span>
              <span>17</span>
            </div>

            <div class="fourth">
              <span>18</span>
              <span>19</span>
              <span>20</span>
              <span class="event">21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
            </div>

            <div class="fifth">
              <span>25</span>
              <span>26</span>
              <span>27</span>
              <span>28</span>
              <span>29</span>
              <span>30</span>
              <span>31</span>
            </div>
          </div>
        </div>
      </div>

      <div class="back">
        <input placeholder="Anotação">
        <div class="info">
          <div class="date">
            <p class="info-date">
            Data: <span>Jan 21, 2024</span>
            </p>
            <p class="info-time">
              Hora: <span>18:35</span>
            </p>
          </div>
          <div class="address">
            <p>
              Endereço: <span>Rua Rosas do lago, 28, São Paulo, Brasil.</span>
            </p>
          </div>
          <div class="observations">
            <p>
              Observações: <span>Uma geladeira e aproximadamente 5kg de latinha</span>
            </p>
          </div>
        </div>

        <div class="actions">
          <button class="save">
            Desmarcar <i class="ion-checkmark"></i>
          </button>
          <button class="dismiss">
            Sair <i class="ion-android-close"></i>
          </button>
        </div>
      </div>

    </div>
  </div>`;
    margin.innerHTML = contentMainAgendamento;
    perfil.classList.remove('active')
    home.classList.remove('active')
    agendamento.classList.add('active')
    logout.classList.remove('active')
    var app = {
        settings: {
            container: $('.calendarInterface'),
            calendar: $('.front'),
            days: $('.weeks span'),
            form: $('.back'),
            input: $('.back input'),
            buttons: $('.back button')
        },
    
        init: function() {
            instance = this;
            settings = this.settings;
            this.bindUIActions();
        },
    
        swap: function(currentSide, desiredSide) {
            settings.container.toggleClass('flip');
    
        currentSide.fadeOut(900);
        currentSide.hide();
        desiredSide.show();
    
        },
    
        bindUIActions: function() {
            settings.days.on('click', function(){
                instance.swap(settings.calendar, settings.form);
                settings.input.focus();
            });
    
            settings.buttons.on('click', function(){
                instance.swap(settings.form, settings.calendar);
            });
        }
    }
    
    app.init();
})

trocar.addEventListener('click', function alterarTrocar(){
    const contentMainTrocar = ``;
    margin.innerHTML = contentMainTrocar;
    perfil.classList.remove('active')
    home.classList.remove('active')
    agendamento.classList.remove('active')
    logout.classList.remove('active')
})
logout.addEventListener('click', function alterarLogout(){
    const contentMainLogout = `<div class="container-logout">
    <div class="box-logout">
        <h2>Tem certeza que deseja sair?</h2>                    
        <a href="../index.html"><span>Sim</span></a>
    </div>
</div>`;
    margin.innerHTML = contentMainLogout;
    perfil.classList.remove('active')
    home.classList.remove('active')
    agendamento.classList.remove('active')
    logout.classList.add('active')
})



const bottomNav = document.querySelector('.nav-mobile');

const contentNav = `<ul class="bottom-nav">
<div class="slider"></div>
<li>
    <a href="#" id="perfil2">
        <i class="bi bi-person"></i>
        <span>Perfil</span>
    </a>
</li>
<li>
    <a href="#" id="agendamento2">
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
        bottomNav.classList.remove('text-logo-close');
        bottomNav.innerHTML = contentNav;

        $(document).ready(function () {
            $('.bottom-nav li a').click(function(){
                var position = $(this).position();
                var margin = 37;
                if(largura<400){
                    margin = 24.8;
                }
                
                $('.slider').css({"left": position.left + margin, "transform": "translateX(-50%)"});
                $('.bottom-nav li a').removeClass('active-icon');
                $(this).addClass('active-icon');
            });
        });

        const perfil2 = document.getElementById('perfil2');
        const home2 = document.getElementById('home2');
        const agendamento2 = document.getElementById('agendamento2');
        const logout2 = document.getElementById('logout2');

perfil2.addEventListener('click', function alterarPerfil2() {
    const contentMainPerfil2 = `<div class="organize" id="wrap">
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
    <div class="meta" id="meta2">
        <h2>Voucher Spotify</h2>
        <h3>Progresso</h3>
        <h4>2745/3000</h4>
        <div class="progressBar"><div class="progress"></div></div>
    </div>
    
</div>
<div class="completeHistoric">
<h1>Histórico completo</h1>
    <div class="cardHistoric">
        <h4>Descarte 21</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 20</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 19</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 18</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 17</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 16</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 15</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 14</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 13</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 12</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 11</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 10</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 9</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 8</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 7</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 6</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 5</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 4</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 3</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 2</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    <div class="cardHistoric">
        <h4>Descarte 1</h4>
        <div class="elementHistoric">
            <div>
                <p>Endereço: Rua dias freire, 263</p>
                <p>Valor: R$36,65</p>
                <p>Data: 25/04/2024</p>
            </div>
            <span class="undone">Em andamento</span>
        </div>
    </div>
    
</div>
<div class="espacamento"></div>`;
    margin.innerHTML = contentMainPerfil2;
    perfil2.classList.add('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.remove('active-icon')
    logout2.classList.remove('active-icon')
})
home2.addEventListener('click', function alterarHome2(){
    const contentMainHome2 = ` <div class="organize">
    <div class="point">
        <h3>Pontuação</h3>
        <div><h2>2745</h2></div>
    </div>
    <div class="meta">
        <h2>Voucher Spotify</h2>
        <h3>Progresso</h3>
        <h4>2745/3000</h4>
        <div class="progressBar"><div class="progress"></div></div>
    </div>
</div>
<div class="historico">
    <article class="card" id="card1">
        <h4>Descarte 21</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$36,65</p>
            <p>Data: 25/04/2024</p>
        </div>
        <span class="undone">Em andamento</span>
    </article>
    <article class="card" id="card2"><h4>Descarte 20</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$24,50</p>
            <p>Data: 05/04/2024</p>
        </div>
        <span class="done">Concluído</span>
    </article>
    <article class="card" id="card3"><h4>Descarte 19</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$10,25</p>
            <p>Data: 15/03/2024</p>
        </div>
        <span class="done">Concluído</span>
    </article>
    <article class="card" id="card4"><h4>Descarte 18</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$32,45</p>
            <p>Data: 28/02/2024</p>
        </div>
        <span class="done">concluído</span>
    </article>
</div>`;

    margin.innerHTML = contentMainHome2;
    perfil2.classList.remove('active-icon')
    home2.classList.add('active-icon')
    agendamento2.classList.remove('active-icon')
    logout2.classList.remove('active-icon')
})

agendamento2.addEventListener('click', function alterarAgendamento2(){
    const contentMainAgendamento2 = `<div class="container-calendar">
    <div class="calendarInterface">
      <div class="front">
        <div class="current-date">
          <h1>Dia 15, Terça-Feira</h1>
          <h1>Janeiro 2024</h1>	
        </div>

        <div class="current-month">
          <ul class="week-days">
            <li>SEG</li>
            <li>TER</li>
            <li>QUA</li>
            <li>QUI</li>
            <li>SEX</li>
            <li>SAB</li>
            <li>DOM</li>
          </ul>

          <div class="weeks">
            <div class="first">
              <span class="last-month">28</span>
              <span class="last-month">29</span>
              <span class="last-month">30</span>
              <span class="last-month">31</span>
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>

            <div class="second">
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
              <span>08</span>
              <span>09</span>
              <span>10</span>
            </div>

            <div class="third">
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span class="active-calendar">15</span>
              <span>16</span>
              <span>17</span>
            </div>

            <div class="fourth">
              <span>18</span>
              <span>19</span>
              <span>20</span>
              <span class="event">21</span>
              <span>22</span>
              <span>23</span>
              <span>24</span>
            </div>

            <div class="fifth">
              <span>25</span>
              <span>26</span>
              <span>27</span>
              <span>28</span>
              <span>29</span>
              <span>30</span>
              <span>31</span>
            </div>
          </div>
        </div>
      </div>

      <div class="back">
        <input placeholder="Anotação">
        <div class="info">
          <div class="date">
            <p class="info-date">
            Data: <span>Jan 21, 2024</span>
            </p>
            <p class="info-time">
              Hora: <span>18:35</span>
            </p>
          </div>
          <div class="address">
            <p>
              Endereço: <span>Rua Rosas do lago, 28, São Paulo, Brasil.</span>
            </p>
          </div>
          <div class="observations">
            <p>
              Observações: <span>Uma geladeira e aproximadamente 5kg de latinha</span>
            </p>
          </div>
        </div>

        <div class="actions">
          <button class="save">
            Desmarcar <i class="ion-checkmark"></i>
          </button>
          <button class="dismiss">
            Sair <i class="ion-android-close"></i>
          </button>
        </div>
      </div>

    </div>
  </div>`;
    margin.innerHTML = contentMainAgendamento2;
    perfil2.classList.remove('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.add('active-icon')
    logout2.classList.remove('active-icon')


})

trocar2.addEventListener('click', function alterarTrocar2(){
    const contentMainTrocar2 = ``;
    margin.innerHTML = contentMainTrocar2;
    perfil2.classList.remove('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.remove('active-icon')
    logout2.classList.remove('active-icon')
})
logout2.addEventListener('click', function alterarLogout2(){
    const contentMainLogout2 = `<div class="container-logout">
    <div class="box-logout">
        <h2>Tem certeza que deseja sair?</h2>                    
        <a href="../index.html"><span>Sim</span></a>
    </div>
</div>`;
    margin.innerHTML = contentMainLogout2;
    perfil2.classList.remove('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.remove('active-icon')
    logout2.classList.add('active-icon')
})



    } else {
        bottomNav.classList.add('text-logo-close');
    }
}

document.addEventListener('DOMContentLoaded', updateContent);

window.addEventListener('resize', updateContent);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        home2.click();
    }, 100);
});