
let usuario = {
    nombre: 'fernando',
    edad: 32

};
fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario), //data
    header: {
        'Content-Type': 'application/json'


    }

}).then(resp => resp.json())
        .then(console.log)
        .catch(error => {

            console.log("Error en la pagina");
            console.log(error);

        });

//console.log(resp);
