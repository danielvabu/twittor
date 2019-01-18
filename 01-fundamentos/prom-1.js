//console.log("hola mundo");
function SumarUno(numero, callback1) {
    if (numero >= 7) {
        console.log("Numero muy alto");
        return;

    }
    setTimeout(function() {

        callback1(numero + 1);

    }, 800);

}
SumarUno(5, function(nuevoValor) {

    SumarUno(nuevoValor, function(nuevovalor2) {
        SumarUno(nuevovalor2, function(nuevovalor3) {

            console.log(nuevovalor3);

        });

    });

    //console.log(nuevoValor);
}


);
