var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");

function lanzar(){
    if(this.value == 'Kill'){
        personaje.classList.add('pause');
        this.value = 'Finish Him';
    }else{
        personaje.classList.remove('pause');
        this.value = 'Kill';
    }
}

if(personaje.classList && personaje && boton){
    boton.addEventListener("click", lanzar);  
}
