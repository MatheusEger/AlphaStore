let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
        
  if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
  }else{
      inputSenha.setAttribute('type', 'password') 
     }
  })

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError2 = document.querySelector("#msgError2")
  let listaUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) =>{
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
    }
  }) 

  console.log(userValid)

  if(usuario.value == userValid.user && senha.value == userValid.senha){
  
    alert('Login efetuado com secuesso!'
    )
   
    setTimeout(()=>{
          window.location.href = '../index.html'
        }, 300)
    

  }else{
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError2.setAttribute('style', 'display: block')
    msgError2.setAttribute('style', 'color: red ')
    msgError2.innerHTML = 'Usuario ou senha incorretos'
    usuario.focus()
  }
}

