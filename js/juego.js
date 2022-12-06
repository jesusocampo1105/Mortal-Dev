//Contador de juego

const numero = document.querySelector(".counter");
let cantidad = 0;


let tiempo = setInterval(() => {
    cantidad += 1;
    numero.textContent = cantidad;

    if (cantidad === 100) {
        alert("Se te acabo el tiempo");
        clearInterval(tiempo)
    }

}, 1000);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9be67ddf1fd626c3e7cd7fb772d811256884ad8f
const launchPopUp = () => {

}

<<<<<<< HEAD
const mkSong = new Audio("../src/sounds/Musica M.K.mp3");
//mkSong.Play(); 
=======
const mkSong = new Audio("../src/sounds/Musica M.K.mp3"); ;
mkSong.Play(); 
=======
>>>>>>> jesus
>>>>>>> 9be67ddf1fd626c3e7cd7fb772d811256884ad8f
