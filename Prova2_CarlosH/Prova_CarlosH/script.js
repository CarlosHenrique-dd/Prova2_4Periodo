function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin" && senha == "abc123"){
        window.location.href = 'page.html';
    }
    
    else if(login != '' || senha != ''){
            document.getElementById("alert").innerHTML = 'Usuário/Senha incorretos'
    }
}