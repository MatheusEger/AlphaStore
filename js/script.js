if(typeof(Storage) !== "undefined"){
      initialize();
    } else {
      alert('Atualize seu navegador....');
    }

    function initialize(){
      if(localStorage.getItem("nome") !== null){
        alert("Ola, " + localStorage.nome + ", Seja bem-vindo(a) de volta :)");
      }else{
        alert('Olá, Essa é sua primeira visita no nosso site :)');
        localStorage.nome = "Alpha"; 
      }
    }