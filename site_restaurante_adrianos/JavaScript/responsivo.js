 function mudarTam(){
    if(window.innerWidth >= 768){
        ite.style.display = 'block'
    }else{
        ite.style.display = 'none'
        }
    }
    function clickMenu(){    // Fazendo o botão menu funcionar
        if(ite.style.display == 'block'){
            ite.style.display = 'none'
        }else{
            ite.style.display = 'block'
        }
    }
    