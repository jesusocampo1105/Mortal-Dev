let players = JSON.parse(localStorage.getItem("list"))


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
var home = document.querySelector(".button-playagain");
var eliminados = document.querySelector(".eliminados-list");


function detener(){
    detenidog.style.display = 'none';
    detenidov.style.display = 'none';    
}
function darleplay(){
    detenidog.style.display = 'block';
    detenidov.style.display = 'block';    
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
function changeAnimationsnum7(){
    victimagol.classList.add("victima")
}
function lanzar(){
  
    if(this.value == 'KILL'){
        
        detener()
        let etiquetaaudio=document.createElement("audio")
        etiquetaaudio.setAttribute("src", "src/sounds/Golpe.mp3")
        etiquetaaudio.playbackRate = 1.2;
        etiquetaaudio.play()
        pelea.style.display = 'block';
        victimagol.style.display = 'block';
        punos.classList.add('pause');
        setTimeout(changeAnimations, 1000)
        this.value = 'FINISH HIM';   
             
    }else if(this.value == 'FINISH HIM'){
            //this.value = 'NEXT';   
            next.style.display = 'block';
            const finishHimAudio = new Audio('./src/sounds/mortal-kombat-finish-her.mp3'); 
            finishHimAudio.play(); 
            function  audiono(){
            const noooAudio = new Audio('./src/sounds/Nooooo.mp3');
            noooAudio.volume= 0.5
            noooAudio.play()} 
            setTimeout(audiono, 1500); 
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
            boton.style.display = 'none';
            
           
        /*punos.classList.remove('pause');
        this.value = 'Kill';*/
    }

}


if(punos.classList && punos && boton){
    boton.addEventListener("click", lanzar);  
}

const mostrarSiguienteNombre = () => {
    if(localStorage.list.length > 0){
        let index = 0; 

        
        test.innerHTML = finalplayers[index]; 
        finalplayers.shift();

        function guardarStorage(){
            localStorage.setItem('list', JSON.stringify(finalplayers));
        }
        guardarStorage();
        // finalplayers.splice(index,1);
        console.log(localStorage.list)
    }else{
        location.href = "./final.html";
    }
}


// const mostrarSiguienteNombre = () => {
//     if(finalplayers.length > 0){
//         let index = 0; 
//         test.innerHTML =finalplayers[index]; 
        
//         // finalplayers.splice(index,1);
//         console.log(finalplayers)
        

//     }else{
//         location.href = "./final.html";
//     }
// }

next.addEventListener('click', (e) => {
    location.reload()
    mostrarSiguienteNombre();
})

home.addEventListener('click', () => {
    //location.href="./index.html"
    mostrarPopUp("./popUp.html", 400, 400, 100, 100)
}) 
