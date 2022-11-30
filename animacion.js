var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");

if(personaje.classList && personaje && boton){
    boton.onclick = function(){
        if(this.value == 'Kill'){
            personaje.classList.add('pause');
            this.value = 'Finish Him';
        }else{
            personaje.classList.remove('pause');
            this.value = 'Kill';
        }
    }
}


