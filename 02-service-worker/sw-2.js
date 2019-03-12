/*
 self.addEventListener('fetch', event => {

 //veo si en el request hay una imagen
 if (event.request.url.includes('.jpg')) {
 //la rut de la imagen
 console.log(event.request.url);

 //event.respondWith(null);  //bloqueo el envio de la imagen
 //pedo envar la imagen con cualquiera de las sigientes
 let fotoreq = fetch('img/main.jpg');
 //let fotoreq=fetch(event.request.url);
 //let fotoreq=fetch(event.request);
 //retorno la misma imagen pero desde el services worker
 event.respondWith(fotoreq);
 }

 });




 self.addEventListener('fetch', event => {

 if (event.request.url.includes("style.css")) {

 let respuesta = new Response(`

 body {
 background-color: red !important;
 color: pink;
 }`,
 {
 headers: {
 'Content-Type': 'text/css'
 }

 }
 );
 event.respondWith(respuesta);

 }
 });
 */
self.addEventListener('fetch', event => {

    event.respondWith(fetch(event.request));

});
