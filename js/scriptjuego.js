/* Guardar en localStorage array de nombres */

function obtenerStorage(){

    final = JSON.parse(localStorage.getItem('list'));
}
obtenerStorage()

let finalplayers = final;

        /* Agregando los jugadores a la barra de vida*/
        let test = document.getElementById("namePlayers");

        function viewName() {
        let nameRandom = finalplayers[0]
        test.innerHTML = nameRandom
        };
        viewName()