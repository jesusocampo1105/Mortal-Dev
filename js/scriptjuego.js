<<<<<<< HEAD
=======
/* Guardar en localStorage array de nombres */
>>>>>>> fbc15adfaf860903b0d1de0ca9e74b70bedbab0b

function obtenerStorage(){

    final = JSON.parse(localStorage.getItem('list'));
}
obtenerStorage()

<<<<<<< HEAD
let finalplayers = final
=======
let finalplayers = final;

        /* Agregando los jugadores a la barra de vida*/
        let test = document.getElementById("namePlayers");

        function viewName() {
        let nameRandom = finalplayers[0];
        test.innerHTML = nameRandom;
        };
        viewName();
>>>>>>> fbc15adfaf860903b0d1de0ca9e74b70bedbab0b
