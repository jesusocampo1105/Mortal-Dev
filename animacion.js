var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");
var punos = document.getElementById("pelea");
var detenidog = document.getElementById("detenido");

function detener(){
    detenidog.style.display = 'none';
}

function lanzar(){
    if(this.value == 'Kill'){
        personaje.classList.add('pause');
        this.value = 'Finish Him';
        detener();
        //personaje.style.display = 'none';
    }else{
        personaje.classList.remove('pause');
        this.value = 'Kill';
    }
}

if(personaje.classList && personaje && boton){
    boton.addEventListener("click", lanzar);  
}
