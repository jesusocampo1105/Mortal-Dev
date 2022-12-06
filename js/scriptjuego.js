

/* Guardar en localStorage array de nombres */

function obtenerStorage(){

    final = JSON.parse(localStorage.getItem('list'));
}
obtenerStorage()

let finalplayers = final;

        /* Agregando los jugadores a la barra */
        let test = document.querySelector("#namePlayers");

        function viewName() {
        /* let nameRandom = finalplayers[Math.floor(Math.random() * finalplayers.length)] */
        let nameRandom = finalplayers[0]
        test.innerHTML = nameRandom
        };
        viewName()