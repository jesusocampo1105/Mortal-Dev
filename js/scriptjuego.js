

/* Guardar en localStorage array de nombres */

function obtenerStorage(){

    final = JSON.parse(localStorage.getItem('list'));
}
obtenerStorage()

let finalplayers = final;

        /* Agregando los jugadores a la barra */
        let prueba = [1,2,3,4,5,6];
        let test = document.querySelector("#namePlayers");
        function viewName() {
            
        let nameRandom = finalplayers[Math.floor(Math.random() * finalplayers.length)]
        test.innerHTML = nameRandom
        };
        viewName()