function sumarLento(numero) {

    var promesa = new Promise(
            function(resolve, reject) {

                setTimeout(function() {
                    resolve(numero + 1);

                }, 800);

            });
    return promesa;
}


//misma funcion soloncamba el tiempo para ejecutar esta esta en EJS6
let  sumarRapido = (numero) => {

    return new Promise(
            function(resolve, reject) {

                setTimeout(() => resolve(numero + 1), 300);

            });

}

//ejecutar normal promesas
//sumarRapido(5).then(console.log);
//sumarLento(10).then(console.log);

//ejecutar todas las promesas simultaneamente con all
//puedo mandar lo q sea en el arreglo
let arreglo = [sumarLento(5), sumarRapido(6), 3, true];
//Promise.all(arreglo).then(console.log);
//o funcion flecha con el retorno
Promise.all(arreglo).then(respuestas => {

    console.log(respuestas);

}).catch(console.log);
//catch a todas las promesas si alugna falla fallan todas con el reject