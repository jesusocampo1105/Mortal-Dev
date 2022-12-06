var personaje = document.getElementById("poder");
var boton = document.getElementById("pausa");
var punos = document.getElementById("pelea");
var detenidog = document.getElementById("detenido");
var detenidov = document.getElementById("detenidov");
var victimagol = document.getElementById("victimagol");
var rayos = document.getElementById("rayos");
var electrocutado = document.getElementById("electrocutado");
var next = document.getElementById("next-button");
var victima3 = document.getElementById("desa");

function detener(){
    detenidog.style.display = 'none';
    detenidov.style.display = 'none';    
}

/*Change animation Function */

function changeAnimations(){
victimagol.classList.add("victima3")
}
function changeAnimationsnum2(){
    victimagol.classList.remove("victima3")
    victimagol.classList.remove("victima")
    victimagol.classList.add("victima2")
    }
function changeAnimationsnum3(){
        punos.classList.add("poder")
    }
function changeAnimationsnum4(){
        victimagol.classList.add("victima4")
}
function changeAnimationsnum5(){
    victimagol.classList.add("victima5")
}
function changeAnimationsnum6(){
    victimagol.classList.add("victima6")
}

function lanzar(){
    if(this.value == 'KILL'){
        detener();
        pelea.style.display = 'block';
        victimagol.style.display = 'block';
        punos.classList.add('pause');
        setTimeout(changeAnimations, 1000)
        this.value = 'FINISH HIM';   
             
    }else if(this.value == 'FINISH HIM'){
            const finishHimAudio = new Audio('./src/sounds/mortal-kombat-finish-her.mp3'); 
            finishHimAudio.play(); 
            boton.style.display = 'none';
            next.style.display = 'block';
            changeAnimationsnum3()
            setInterval( changeAnimationsnum2, 1000)
            setInterval( changeAnimationsnum4, 2000)
            setInterval( changeAnimationsnum5, 3000)
            setInterval( changeAnimationsnum6, 3900)
            pelea.style.display = 'block';
            personaje.style.display = 'block';
            rayos.style.display = 'block';
            electrocutado.style.display = 'block';
            personaje.classList.add('pause');
            
        /*punos.classList.remove('pause');
        this.value = 'Kill';*/
    }
}

if(punos.classList && punos && boton){
    boton.addEventListener("click", lanzar);  
}

const mostrarSiguienteNombre = () => {
    if(finalplayers.length > 0){
        let index = 0; 
        test.innerHTML = finalplayers[index];
        finalplayers.shift(index,1);

    }else{
        location.href = "./final.html";
    }
}

next.addEventListener('click', (e) => {
    location.reload()
    mostrarSiguienteNombre(); 
})

/*function(){
    
        
    }
}*/