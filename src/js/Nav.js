const bem_vindo = document.getElementById('bem_vindo')
const nossa_estrutura = document.getElementById('nossa_estrutura')
const consulta_acervo = document.getElementById('consulta_acervo')
const login_bt = document.getElementById('login')

function goToPage(page){
    window.location.href = page;
}

bem_vindo.onclick = () => {
    goToPage('../../index.html');
}

nossa_estrutura.onclick = () => {
    goToPage('nossa_estrutura.html')
}

consulta_acervo.onclick = () => {
    goToPage('consulta_acervo.html')
}

login_bt.onclick = () => {
    goToPage('login.html')
}