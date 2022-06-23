
// LANÇAR NOTAS
function lancarNotas() {
    document.getElementById('modal-notas').style.top = "0";
}
function fecharNotas() {
    document.getElementById('modal-notas').style.top = "-200%"
}
// PROVAS
function lancarProvas() {
    document.getElementById('modal-provas').style.top = "0";
}
function fecharProvas() {
    document.getElementById('modal-provas').style.top = "-200%"
}
// CONTEÚDOS
function lancarConteudo() {
    document.getElementById('modal-conteudo').style.top = "0";
}
function fecharConteudo() {
    document.getElementById('modal-conteudo').style.top = "-200%"
}

function alertConfim() {
    document.getElementById('modal-notas').style.top = "-200%"
    alert ("Nota lançada com sucesso!!")
}

function alertProvas() {
    document.getElementById('modal-provas').style.top = "-200%"
    alert ("Prova adicionada com sucesso!!")

}

function alertCont() {
    document.getElementById('modal-conteudo').style.top = "-200%"
    alert ("Conteúdo adicionado com sucesso!!")

}