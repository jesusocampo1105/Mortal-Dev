var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");

if(personaje.classList && personaje && boton){
    boton.onclick = function(){
        if(this.value == 'pause'){
            personaje.classList.add('pause');
            this.value = 'play';
        }else{
            personaje.classList.remove('pause');
            this.value = 'pause';
        }
    }
}


