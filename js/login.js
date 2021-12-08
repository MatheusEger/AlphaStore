
function logar(){
    var email = document.getElementeById("email");
    var senha = document.getElementeById("senha");

    if(email.value == "admin@admin.com" && senha.value == "admin" ){
        localStorage.setItem('acesso', true);
        
        window.location.href = "./index.html"; 
    }else{
        alert("Ususario ou senha ivalidos! ");

    }
}