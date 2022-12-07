//Contador de juego

const numero = document.querySelector(".counter");
let cantidad = 0;


let tiempo = setInterval(() =>{
    cantidad += 1;
    numero.textContent = cantidad;
    if (cantidad === 100){
        alert("Se te acabo el tiempo");
        clearInterval(tiempo)
    }
}, 1000);

const playGameSong = () => {
    const mkSong = new Audio("../src/sounds/Musica M.K.mp3"); 
    mkSong.play(); 
    mkSong.volume = 0.2; 
}
