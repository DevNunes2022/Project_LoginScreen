// Função de login
function logar() {
    var login = document.getElementById('login').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('pass').value;

    if(login == "admin" && senha == "admin"){
    location.href="home.html";
    }else{
        alert('Usuário ou senha incorretos'); 
    }
}

function cadastro(){

    var login = document.getElementById('login').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('pass').value;
    
    if(login !== true) {
        location.href="verify.html";
    }else{
        alert("Informe seu nome de usuário")
    }

    if(email !== true) {
        location.href="verify.html";
    }else{
        alert("Informe um email válido")
    }

    if(senha !== true) {
        location.href="verify.html";
    }else{
        alert("Informe uma senha")
    }

}