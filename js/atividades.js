let btnNatacao = document.getElementById("btnNatacao");
let btnMusica = document.getElementById("btnMusica");
let btnXadrez = document.getElementById("btnXadrez");
let btnLogica = document.getElementById("btnLogica");
let btnFutebol = document.getElementById("btnFutebol");
let btnPintura = document.getElementById("btnPintura");
let btnTeatro = document.getElementById("btnTeatro");
let btnBale = document.getElementById("btnBale");
let btnVolei = document.getElementById("btnVolei");


function cadastrar(materia){
    let confirmar = confirm('Deseja se inscrever em Aulas de ' + materia + '?')
    if(confirmar == true){
        alert('Inscrição para Aulas de '+ materia + ' concluida com sucesso');
    }else{
        alert('Escolha uma atividade e confime pelo botão OK!')
    }
}

btnNatacao.onclick = ()=>{
    let materia = 'Natação';
    cadastrar(materia);
}
btnMusica.onclick = ()=>{
    let materia = 'Musica';
    cadastrar(materia);
}
btnXadrez.onclick = ()=>{
    let materia = 'Xadrez';
    cadastrar(materia);
}
btnLogica.onclick = ()=>{
    let materia = 'Logica';
    cadastrar(materia);
}
btnFutebol.onclick = ()=>{
    let materia = 'Futebol';
    cadastrar(materia);
}
btnPintura.onclick = ()=>{
    let materia = 'Pintura';
    cadastrar(materia);
}
btnTeatro.onclick = ()=>{
    let materia = 'Teatro';
    cadastrar(materia);
}
btnBale.onclick = ()=>{
    let materia = 'Bale';
    cadastrar(materia);
}
btnVolei.onclick = ()=>{
    let materia = 'Volei';
    cadastrar(materia);
}