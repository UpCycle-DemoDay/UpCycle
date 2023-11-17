const toggleClose = document.querySelector('.toggle-icon')
const sidebar = document.querySelector('.sidebar')
const textLogo = document.querySelector('.text-logo')

toggleClose.addEventListener('click', () => (
    sidebar.classList.toggle('close')
))
toggleClose.addEventListener('click', () => (
    toggleClose.classList.toggle('close')
))
toggleClose.addEventListener('click', () => (
    textLogo.classList.toggle('text-logo-close')
))

const navbarItem = document.getElementById('navbar-item')
const navLink = navbarItem.getElementsByClassName('nav-link')
for(let i=0; i<navLink.length; i++){
    navLink[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active')
        current[0].className = current[0].className.replace('active', '')
        this.className += 'active'
    })
}

const bottomNav = document.querySelector('.nav-mobile')

const contentNav = `<ul class="bottom-nav">
<div class="slider"></div>
<li>
    <a href="#">
        <i class="bi bi-person"></i>
        <span>Perfil</span>
    </a>
</li>
<li>
    <a href="#">
        <i class="bi bi-calendar"></i>
        <span>Agendamento</span>
    </a>
</li>
<li>
    <a href="#" class="active-icon">
        <i class="bi bi-house"></i>
        <span>Home</span>
    </a>
</li>
<li >
    <a href="#">
        <i class="bi bi-wallet2"></i>
        <span>trocar pontos</span>
    </a>
</li>
<li>
    <a href="#">
        <i class="bi bi-door-open"></i>
        <span>Sair</span>
    </a>
</li>

</ul>`;

window.addEventListener('resize', function() {
    var largura = this.window.innerWidth
    if (largura<767){
        sidebar.classList.add('text-logo-close')
        bottomNav.classList.remove('text-logo-close')
        bottomNav.innerHTML = contentNav
        $(document).ready(function () {
            $('.bottom-nav li a').click(function(){
                var position = $(this).position();
                var margin = 37;
                $('.slider').css({"left": position.left + margin, "transform": "translateX(-50%)"});
                $('.bottom-nav li a').removeClass('active-icon');
                $(this).addClass('active-icon');
            });
        });
        
    }else{
        sidebar.classList.remove('text-logo-close')
        bottomNav.classList.add('text-logo-close')
    }

})

