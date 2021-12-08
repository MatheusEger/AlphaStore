if(typeof(Storage) !== "undefined"){
      alert('O navegador é compativel com o storage');
      initialize();
    } else {
      alert('Atualize seu navegador....');
    }

    function initialize(){
      if(localStorage.getItem("nome") !== null){
        alert("Ola, " + localStorage.nome + ", Seja bem-vindo(a) de volta :)");
      }else{
        alert('Olá, Essa é sua primeira visita no nosso site :)');
        localStorage.nome = "Mathues"; 
      }
    }