var dados = JSON.parse(' [ {"msg2": "Gostaria de receber o valor da mensalidade do meu filho...", "msg3": "Qual é o nome completo do seu filho?", "msg4": "Julio Cesar Jubel Lopes" , "msg5": "Valor mensalidade de Julio Cesar Jubel Lopes : R$550" }]')
var btnChat = document.getElementById('btnChat');
var teste = document.getElementById('teste');

console.log(dados)

btnChat.onclick = ()=>{
    dados.forEach(function(chat){
    teste.innerHTML +="<h5 class=h5b >"+chat.msg2+"</h5>" +  "<h5>"+ '<i class="fa-solid fa-robot"></i>' +chat.msg3+"</h5>" +  "<h5 class=h5b>"+chat.msg4+"</h5>"+  "<h5>" + '<i class="fa-solid fa-robot"></i>' +chat.msg5+"</h5>";
});
}

