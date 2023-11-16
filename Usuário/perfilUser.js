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

const bottomNav = document.querySelector('.bottom-nav')

const contentNav = `<p class="circle"></p>
<span id="home" onclick="homeIcon()">
    <i class="bi bi-house" id="home" onclick="homeIcon()"></i>
</span>
<span id="calendar" onclick="calendarIcon()">
    <i class="bi bi-calendar"></i>
</span>
<span id="wallet" onclick="walletIcon()"> 
    <i class="bi bi-wallet2"></i>
</span>
<span id="reception" onclick="receptionIcon()">
    <i class="bi bi-reception-4"></i>
</span>
<span id="logout" onclick="logoutIcon()">
    <i class="bi bi-door-open"></i>
</span>
<p></p>`;

window.addEventListener('resize', function() {
    var largura = this.window.innerWidth
    if (largura<767){
        sidebar.classList.add('text-logo-close')
        bottomNav.innerHTML = contentNav
    }else{
        sidebar.classList.remove('text-logo-close')
    }
})