var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");
var punos = document.getElementById("pelea");
var detenidog = document.getElementById("detenido");
var detenidov = document.getElementById("detenidov");
var victimagol = document.getElementById("victimagol");


function detener(){
    detenidog.style.display = 'none';
    detenidov.style.display = 'none';    
}

function noqueado(){
    victimagol.style.display = 'none';
}

function lanzar(){
    if(this.value == 'Kill'){
        detener();
        pelea.style.display = 'block';
        victimagol.style.display = 'block';
        punos.classList.add('pause');
        this.value = 'Finish Him';        
    }else if(this.value == 'Finish Him'){
            noqueado();
            pelea.style.display = 'none';
            personaje.style.display = 'block';
            personaje.classList.add('pause');
            boton.style.display = 'none';
        
        /*punos.classList.remove('pause');
        this.value = 'Kill';*/
    }
}

if(punos.classList && punos && boton){
    boton.addEventListener("click", lanzar);  
}
