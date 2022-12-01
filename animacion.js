var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");
var punos = document.getElementById("pelea");
var detenidog = document.getElementById("detenido");

function detener(){
    detenidog.style.display = 'none';
    personaje.style.display = 'none';
}



function lanzar(){
    if(this.value == 'Kill'){
        detener();
        pelea.style.display = 'block';
        punos.classList.add('pause');
        this.value = 'Finish Him';
    }else{
        punos.classList.remove('pause');
        this.value = 'Kill';
    }
}

if(punos.classList && punos && boton){
    boton.addEventListener("click", lanzar);  
}
