

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}
/*
 if (window.caches) {
 //CREA EL CACHE SE PUEDEN CREAR MUCHOS CACHES
 caches.open("prueba-1");
 caches.open("prueba-2");

 //VERIFIO SI EXISTE UN CACHE ESPECIFICO ME RETORNA TRUE O FALSE
 caches.has("prueba-wS").then(existe => console.log(existe));

 //borrar cache
 caches.delete("prueba-3").then(console.log);


 //agregar el index a el cache v1.1
 caches.open("cache-v1.1").then(cache => {
 //si quiero agregar 1 por 1
 // cache.add('/index.html');
 //aagregar varios recursos:
 cache.addAll([
 '/index.html',
 '/css/style.css',
 '/img/main.jpg'
 ]).then(() => {
 //despues q se graba el cache deseamos elminiar el estilo
 //cache.delete('/css/style.css');

 //cambiar un recurso por otro
 cache.put('index.html', new Response('Hola Mundo'));

 //verificar si existe un recurso

 cache.match('/index.html').then(res => {

 res.text().then(console.log);
 });

 });

 
 });
 caches.keys().then(keys => {

 console.log(keys);
 });
 }
 */