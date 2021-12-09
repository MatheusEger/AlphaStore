
function logar(){
    var email = document.getElementeById("email");
    var senha = document.getElementeById("senha");

    console.log(email.valeu+senha.value);

    if(email.value == "admin@admin.com" && senha.value == "admin" ){
        localStorage.setItem('acesso', true);
        
        window.location.href = "./html/login.html"; 
    }else{
        alert("Ususario ou senha ivalidos! ");

    }
}