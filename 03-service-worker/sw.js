
// Ciclo de vida del SW

//instalando el sw
self.addEventListener('install', event => {

    //descargar assets
    //crear cache

    console.log("instalando sw");
    //controlar la palicacion sin esperar a cambiar el sw
    //self.skipWaiting();


    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("instalacion terminada");
            self.skipWaiting();
            resolve();
        }, 100);

    });

    event.waitUntil(instalacion);
});





//cuando el sw toma el control de la aplicacion
self.addEventListener('activate', event => {

    //borrar cache viejo!

    console.log("SW activo y listo para controlar la aplicacion!!");

});







//fetch manejo de peticiones
self.addEventListener('fetch', event => {
    // console.log(event.request.url);
    // event.respondWith(fetch(event.request.url));

});


//SYNC recuperamos conexion a internet

self.addEventListener('sync', event => {

    console.log("Tenemos conexion!!!!");
    console.log(event);
    console.log(event.tag);

});

//PUSH manejar las push notificacion
self.addEventListener('push', event => {

    console.log("notificacion recibida!!!!");


});