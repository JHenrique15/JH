function Logar(){

    var Email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    
    if(Email == "adm@gmail.com" && password == "adm"){

        location.href = "index.html";

    }else{

        alert('Usuario ou senha incorretos');

    }

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
