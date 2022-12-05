let playersBeta = [];
let playersDelete = [];

let players = [];

let cont = 0;
//  Add player
let nombre = document.getElementById('nombre');
//  Player list
let nombres = document.getElementById('nombres');
// Add boton
let addB = document.getElementById('addBoton');

let play = document.getElementById('play');
let playButton = document.getElementById('playButton');


addB.addEventListener("click", (e) => {
    e.preventDefault();
    const text = nombre.value;

    const li = document.createElement("li");
    li.appendChild(deleteButon());
    const p = document.createElement("p");
    li.setAttribute('id', cont)
    p.textContent = text;
    li.appendChild(p);
    nombres.appendChild(li);

    playersBeta.push(  
        {    id: cont,
        playerName: nombre.value});
    cont += 1
    nombre.value = "";
    
});


function deleteButon(){
    const botonDelete = document.createElement('button');

    botonDelete.textContent = 'X';
    botonDelete.className = 'botonDelete';

    botonDelete.addEventListener('click', (e) => {
        const par = e.target.parentElement;
        playersDelete.push(parseInt(par.id))  ;
        nombres.removeChild(par);

    });
    return botonDelete;
}

    play.addEventListener('click', (e) => {
        for(i=0 ; i<playersDelete.length; i++ ){
            let a = playersDelete[i];
            playersBeta[a] = null
        }
    players = playersBeta.filter(function(x) {
            return x !== null;
        });
    });

    function goToJuegoHtml(){
        if(playersBeta.length >= 1){
            playButton.setAttribute("href", "../juego.html");
        }
    }