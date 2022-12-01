var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");
var punos = document.getElementById("pelea");
var detenidog = document.getElementById("detenido");

function detener(){
    detenidog.style.display = 'none';
}

function lanzar(){
    if(this.value == 'Kill'){
        punos.classList.add('pause');
        this.value = 'Finish Him';
        detener();
        //personaje.style.display = 'none';
    }else{
        punos.classList.remove('pause');
        this.value = 'Kill';
    }
}

if(punos.classList && punos && boton){
    boton.addEventListener("click", lanzar);  
}
