const bem_vindo = document.getElementById('bem_vindo')
const nossa_estrutura = document.getElementById('nossa_estrutura')
const consulta_acervo = document.getElementById('consulta_acervo')
const login_bt = document.getElementById('login')

const fardamento = document.getElementById('fardamento')
const ebooks = document.getElementById('ebooks')
const material = document.getElementById('material')
const esportes = document.getElementById('esportes')
const cursos = document.getElementById('cursos')
const aulas_particulares = document.getElementById('aulas_particulares')
const emprestimos = document.getElementById('emprestimos')

function goToPage(page){
    window.location.href = page;
}

bem_vindo.onclick = () => {
    goToPage('src/html/index.html');
}

nossa_estrutura.onclick = () => {
    goToPage('src/html/nossa_estrutura.html')
}

consulta_acervo.onclick = () => {
    goToPage('src/html/consulta_acervo.html')
}

login_bt.onclick = () => {
    goToPage('src/html/login.html')
}

fardamento.onclick = () => {
    goToPage('src/html/fardamento.html')
}

ebooks.onclick = () => {
    goToPage('src/html/ebooks.html')
}

material.onclick = () => {
    goToPage('src/html/material.html')
}

esportes.onclick = () => {
    goToPage('src/html/esportes.html')
}

cursos.onclick = () => {
    goToPage('src/html/cursos.html')
}

aulas_particulares.onclick = () => {
    goToPage('src/html/aulas_particulares.html')
}

emprestimos.onclick = () => {
    goToPage('src/html/emprestimos.html')
}