const black = 'rgb(40, 37, 37)';

const iframe = document.getElementById('iframe')
const list_items = document.getElementById('func').getElementsByTagName('li');

let select = list_items[0]

for(let i = 0; i < list_items.length; i++)
{
    list_items[i].addEventListener('mouseenter', function(e){
        list_items[i].style.backgroundColor = "white";
        list_items[i].style.color = black;
    })

    list_items[i].addEventListener('mouseleave', function(e){
        if(select != list_items[i])
        {
            list_items[i].style.backgroundColor = black;
            list_items[i].style.color = 'white';
        }
    })

    list_items[i].addEventListener('mousedown', function(e){
        if(select != list_items[i])
        {
            select.style.backgroundColor = black;
            select.style.color = 'white';
            select = list_items[i];
        }
    })
}

const report = document.getElementById('reportar')
const emprestimo = document.getElementById('_emprestimos')

report.onclick = () => {
    iframe.src = '../AR/reportar.html';
}

emprestimo.onclick = () => {
    iframe.src = '../AR/emprestimo.html';
}