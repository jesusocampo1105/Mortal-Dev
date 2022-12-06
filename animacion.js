var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");
var punos = document.getElementById("pelea");
var detenidog = document.getElementById("detenido");
var detenidov = document.getElementById("detenidov");
var victimagol = document.getElementById("victimagol");
var rayos = document.getElementById("rayos");
var electrocutado = document.getElementById("electrocutado");
var next = document.getElementById("next-button");
var bar = document.getElementById("xd");

function detener(){
    detenidog.style.display = 'none';
    detenidov.style.display = 'none';    
}

function lanzar(){
    if(this.value == 'KILL'){
        detener();
        pelea.style.display = 'block';
        victimagol.style.display = 'block';
        punos.classList.add('pause');
        this.value = 'FINISH HIM';        
    }else if(this.value == 'FINISH HIM'){
            pelea.style.display = 'none';
            victimagol.style.display = 'none';
            personaje.style.display = 'block';
            rayos.style.display = 'block';
            electrocutado.style.display = 'block';
            personaje.classList.add('pause');
            boton.style.display = 'none';
            next.style.display = 'block';
        /*punos.classList.remove('pause');
        this.value = 'Kill';*/
    }
}

if(punos.classList && punos && boton){
    boton.addEventListener("click", lanzar);  
}

const mostrarSiguienteNombre = ()  =>{ 
    if(finalplayers.length > 0){
        let index = 0; 
        test.innerHTML = finalplayers[index]; 
        finalplayers.splice(index, 1);
    }else{
        location.href = "./final.html"
    }
}

next.addEventListener('click', (e) => {
    location.reload()
    mostrarSiguienteNombre(); 
})