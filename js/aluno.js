let provas = JSON.parse('[{"prova1" : "10/06/2022","prova2": "12/06/2022","prova3" : "10/06/2022","prova4": "12/06/2022", "prova5": "14/06/2022", "prova6": "16/06/2022"}]');
let diciplina = JSON.parse('[{"nota1": "8.5", "nota2" : "10.0","nota3": "8.9", "nota4" : "6.0","nota5": "7.2", "nota6" : "10.0","falta1": "4", "falta2" : "2","falta3": "6", "falta4" : "3","falta5": "4", "falta6" : "2"}]');
let atividades = JSON.parse('[{"atividade1": "Natação","atividade2": "Logica", "atividade3": "Pintura", "data1": "13:30", "data2": "14:20","data3": "15:20"}]');
let btnProva = document.getElementById('btnProva');
let btnDiciplina = document.getElementById('btnDiciplina');
let btnAtividade = document.getElementById('btnAtividade');

btnProva.onclick = ()=>{
    provas.forEach(function(prova) {
        table.innerHTML='';
        table.innerHTML += "<h5>Portugues: "+prova.prova1+"</h5"+"<br>"+"<h5>Historia: "+prova.prova2+"</h5>"+"<h5>Fisica: "+prova.prova3+"</h5"+"<br>"+"<h5>Ingles: "+prova.prova4+"</h5>"+"<h5>Geografia: "+prova.prova5+"</h5"+"<br>"+"<h5>Biologia: "+prova.prova6;
        });
    }

btnDiciplina.onclick = ()=>{
    diciplina.forEach(function(materia){
        table.innerHTML='';
        table.innerHTML += "<h6>Portugues<br>Faltas: " + materia.falta1 + "<br>Notas: " + materia.nota1 + "</h6>"+"<h6>Historia<br>Faltas: " + materia.falta2 + "<br>Notas: " + materia.nota2 + "</h6>"+"<h6>Geografia<br>Faltas: " + materia.falta3 + "<br>Notas: " + materia.nota3 + "</h6>"+"<h6>Ingles<br>Faltas: " + materia.falta4 + "<br>Notas: " + materia.nota4 + "</h6>"+"<h6>Fisica<br>Faltas: " + materia.falta5 + "<br>Notas: " + materia.nota5 + "</h6>"+"<h6>Biologia<br>Faltas: " + materia.falta6 + "<br>Notas: " + materia.nota6 + "</h6>";
        });
    }

btnAtividade.onclick = ()=>{
    atividades.forEach(function(atividade){
        table.innerHTML='';
        table.innerHTML += "<h5>"+atividade.atividade1+"<br>"+"Segunda: "+atividade.data1+"</h5>"+"<h5>"+atividade.atividade2+"<br>"+"Terça: "+atividade.data2+"</h5>"+"<h5>"+atividade.atividade3+"<br>"+"Quarta: "+atividade.data3+"</h5>";
        });
    }
