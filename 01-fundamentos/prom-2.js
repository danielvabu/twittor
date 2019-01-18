//console.log("hola mundo");
function SumarUno(numero) {
    console.log(numero);
    var promesa = new Promise(function(resolve, reject) {
        if (numero >= 7) {
            reject("numero es muy alto");

        }
        setTimeout(function() {

            resolve(numero + 1);

        }, 800);

    });
    return promesa;



}
//tomamos el mismo valor y lo vamos incrementando
/*
 SumarUno(5).then(
 nuevoNumero => {
 console.log(nuevoNumero);
 return SumarUno(nuevoNumero);

 }
 ).then(nuevoNumero => {
 console.log(nuevoNumero);
 return SumarUno(nuevoNumero);
 }).then(nuevoNumero => {
 console.log(nuevoNumero);
 // return SumarUno(nuevoNumero);
 });

 */

//mas facil
SumarUno(5).then(SumarUno).then(SumarUno).then(nuevoNumero => {
    console.log(nuevoNumero);
    // return SumarUno(nuevoNumero);
}).catch(function(error) {

    console.log("error de promesa");
    console.log(error);
});
