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
const carteira = document.getElementById('carteira');
const trocar = document.getElementById('trocar');
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
</div>`;
    margin.innerHTML = contentMainPerfil;
    perfil.classList.add('active')
    home.classList.remove('active')
    agendamento.classList.remove('active')
    carteira.classList.remove('active')
    trocar.classList.remove('active')
    logout.classList.remove('active')
})
home.addEventListener('click', function alterarHome(){
    const contentMainHome = `<div class="organize">
    <div class="point">
        <h3>Pontuação</h3>
        <div><h2>275</h2></div>
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
        <span>Em andamento</span>
    </article>
    <article class="card" id="card2"></article>
    <article class="card" id="card3"></article>
    <article class="card" id="card4"></article>
</div>`;

    margin.innerHTML = contentMainHome;
    perfil.classList.remove('active')
    home.classList.add('active')
    agendamento.classList.remove('active')
    carteira.classList.remove('active')
    trocar.classList.remove('active')
    logout.classList.remove('active')
})

agendamento.addEventListener('click', function alterarAgendamento(){
    const contentMainAgendamento = ``;
    margin.innerHTML = contentMainAgendamento;
    perfil.classList.remove('active')
    home.classList.remove('active')
    agendamento.classList.add('active')
    carteira.classList.remove('active')
    trocar.classList.remove('active')
    logout.classList.remove('active')
})
carteira.addEventListener('click', function alterarCarteira(){
    const contentMainCarteira = ``;
    margin.innerHTML = contentMainCarteira;
    perfil.classList.remove('active')
    home.classList.remove('active')
    agendamento.classList.remove('active')
    carteira.classList.add('active')
    trocar.classList.remove('active')
    logout.classList.remove('active')
})
trocar.addEventListener('click', function alterarTrocar(){
    const contentMainTrocar = ``;
    margin.innerHTML = contentMainTrocar;
    perfil.classList.remove('active')
    home.classList.remove('active')
    agendamento.classList.remove('active')
    carteira.classList.remove('active')
    trocar.classList.add('active')
    logout.classList.remove('active')
})
logout.addEventListener('click', function alterarLogout(){
    const contentMainLogout = ``;
    margin.innerHTML = contentMainLogout;
    perfil.classList.remove('active')
    home.classList.remove('active')
    agendamento.classList.remove('active')
    carteira.classList.remove('active')
    trocar.classList.remove('active')
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
<li >
    <a href="#" id="carteira2">
        <i class="bi bi-wallet2"></i>
        <span>trocar pontos</span>
    </a>
</li>
<li>
    <a href="#" id="trocar2">
        <i class="bi bi-reception-4"></i>
        <span>Sair</span>
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
                    margin = 25.5;
                }
                
                $('.slider').css({"left": position.left + margin, "transform": "translateX(-50%)"});
                $('.bottom-nav li a').removeClass('active-icon');
                $(this).addClass('active-icon');
            });
        });

        const perfil2 = document.getElementById('perfil2');
const home2 = document.getElementById('home2');
const agendamento2 = document.getElementById('agendamento2');
const carteira2 = document.getElementById('carteira2');
const trocar2 = document.getElementById('trocar2');
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
</div>`;
    margin.innerHTML = contentMainPerfil2;
    perfil2.classList.add('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.remove('active-icon')
    carteira2.classList.remove('active-icon')
    trocar2.classList.remove('active-icon')
    logout2.classList.remove('active-icon')
})
home2.addEventListener('click', function alterarHome2(){
    const contentMainHome2 = `<div class="organize">
    <div class="point">
        <h3>Pontuação</h3>
        <div><h2>275</h2></div>
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
        <h4>Descarte 62</h4>
        <div>
            <p>Endereço: Rua dias freire, 263</p>
            <p>Valor: R$36,65</p>
            <p>Data: 25/04/2024</p>
        </div>
        <span>Em andamento</span>
    </article>
    <article class="card" id="card2"></article>
    <article class="card" id="card3"></article>
    <article class="card" id="card4"></article>
</div>`;

    margin.innerHTML = contentMainHome2;
    perfil2.classList.remove('active-icon')
    home2.classList.add('active-icon')
    agendamento2.classList.remove('active-icon')
    carteira2.classList.remove('active-icon')
    trocar2.classList.remove('active-icon')
    logout2.classList.remove('active-icon')
})

agendamento2.addEventListener('click', function alterarAgendamento2(){
    const contentMainAgendamento2 = ``;
    margin.innerHTML = contentMainAgendamento2;
    perfil2.classList.remove('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.add('active-icon')
    carteira2.classList.remove('active-icon')
    trocar2.classList.remove('active-icon')
    logout2.classList.remove('active-icon')
})
carteira2.addEventListener('click', function alterarCarteira2(){
    const contentMainCarteira2 = ``;
    margin.innerHTML = contentMainCarteira2;
    perfil2.classList.remove('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.remove('active-icon')
    carteira2.classList.add('active-icon')
    trocar2.classList.remove('active-icon')
    logout2.classList.remove('active-icon')
})
trocar2.addEventListener('click', function alterarTrocar2(){
    const contentMainTrocar2 = ``;
    margin.innerHTML = contentMainTrocar2;
    perfil2.classList.remove('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.remove('active-icon')
    carteira2.classList.remove('active-icon')
    trocar2.classList.add('active-icon')
    logout2.classList.remove('active-icon')
})
logout2.addEventListener('click', function alterarLogout2(){
    const contentMainLogout2 = ``;
    margin.innerHTML = contentMainLogout2;
    perfil2.classList.remove('active-icon')
    home2.classList.remove('active-icon')
    agendamento2.classList.remove('active-icon')
    carteira2.classList.remove('active-icon')
    trocar2.classList.remove('active-icon')
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
    }, 100); // Aguarda 100 milissegundos (ou ajuste conforme necessário)
});



// function responsiveTest(){
//     if(window.innerWidth<767) {
//         sidebar.classList.add('text-logo-close')
//         bottomNav.classList.remove('text-logo-close')
//         bottomNav.innerHTML = contentNav
//         $(document).ready(function () {
//             $('.bottom-nav li a').click(function(){
//                 var position = $(this).position();
//                 var margin = 37;
//                 $('.slider').css({"left": position.left + margin, "transform": "translateX(-50%)"});
//                 $('.bottom-nav li a').removeClass('active-icon');
//                 $(this).addClass('active-icon');
//             });
//         });
//     }else{
//         sidebar.classList.remove('text-logo-close')
//         bottomNav.classList.add('text-logo-close')
//     }
// }

// responsiveTest();