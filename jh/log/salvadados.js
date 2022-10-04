// Armazenando dados do formulário em LocalStorage
function Salvadados(){

    var Email = document.getElementById('Email');
    var password = document.getElementById('password');

    var dados = JSON.parse(localStorage.getItem("dadosEmail"));

    if(dados == null){
        localStorage.setItem("dadosEmail","[]");
        dados = [];
    }

    var auxRegistro = {
        nome: Email.value,
        quantidade: password.value,
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosEmail", JSON.stringify(dados));

    Email.value = "";
    password.value = "";
}