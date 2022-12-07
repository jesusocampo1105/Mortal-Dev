<<<<<<< HEAD

        /* Agregando los jugadores a la barra */
    
    /* let prueba = [1,2,3,4,5,6];
    let test = document.querySelector("#namePlayers");
    function viewName() {
        
    let nameRandom = prueba[Math.floor(Math.random() * prueba.length)]
    test.innerHTML = nameRandom
    nameRandom -= nameRandom
    } */


  /*   let prueba = [1,2,3,4,5,6];
    let test = document.querySelector("#namePlayers");
    function viewName() {
    test.innerHTML = prueba[0]
    console.log(prueba)
    }
    prueba.shift(0)
    viewName() */



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
    if (text !== ""){
    const li = document.createElement("li");
    li.appendChild(deleteButon());
    const p = document.createElement("p");
    li.setAttribute('id', cont)
    p.textContent = text;
    li.appendChild(p);
    nombres.appendChild(li);

    playersBeta.push(nombre.value);
    cont += 1
    nombre.value = "";
}
});


document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        const text = nombre.value;
        if (text !== ""){
            const li = document.createElement("li");
            li.appendChild(deleteButon());
            const p = document.createElement("p");
            li.setAttribute('id', cont)
            p.textContent = text;
            li.appendChild(p);
            nombres.appendChild(li);
        
            playersBeta.push(nombre.value);
            cont += 1
            nombre.value = "";
        }
    }
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

        function guardarStorage(){
            localStorage.setItem('list', JSON.stringify(playersBeta ));
        }
        guardarStorage();


    players = playersBeta.filter(function(x) {
            return x !== null;
        });
    });


    function goToJuegoHtml(){
        if(playersBeta.length >= 1){
            playButton.setAttribute("href", "../juego.html");
        }
    }


    
    let gameAduio = new Audio('../src/sounds/mortal-kombat-round-one.mp3');
    const playGameSoung = () =>{
        gameAduio.Play();
    }



=======
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
        if (text !== ""){
        const li = document.createElement("li");
        li.appendChild(deleteButon());
        const p = document.createElement("p");
        li.setAttribute('id', cont)
        p.textContent = text;
        li.appendChild(p);
        nombres.appendChild(li);
        playersBeta.push(nombre.value);
        cont += 1
        nombre.value = "";
        }
    });
    
    
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            const text = nombre.value;
            if (text !== ""){
                const li = document.createElement("li");
                li.appendChild(deleteButon());
                const p = document.createElement("p");
                li.setAttribute('id', cont)
                p.textContent = text;
                li.appendChild(p);
                nombres.appendChild(li);
            
                playersBeta.push(nombre.value);
                cont += 1
                nombre.value = "";
            }
        }
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
    
            function guardarStorage(){
                localStorage.setItem('list', JSON.stringify(playersBeta ));
            }
            guardarStorage();
    
    
        players = playersBeta.filter(function(x) {
                return x !== null;
            });
        });
    
    
        function goToJuegoHtml(){
            if(playersBeta.length >= 1){
                playButton.setAttribute("href", "../juego.html");
            }
        }
    
        /* Agregamos audio en el juego con un autoplay */
        let gameAduio = new Audio('../src/sounds/mortal-kombat-round-one.mp3');
        const playGameSoung = () =>{
            gameAduio.Play();
        }
>>>>>>> fbc15adfaf860903b0d1de0ca9e74b70bedbab0b
