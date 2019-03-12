//const CACHE_NAME = "caches-1";
const CACHE_STATIC_NAME = "static-v2";
const CACHE_DYNAMIC_NAME = "dynamic-v1";
const CACHE_INMUTABLE_NAME = "inmutable-v1";
const CACHE_DYNAMIC_LIMIT = 50;

function limpiarCache(cacheName, NumeroItems) {

    caches.open(cacheName).then(cache => {

        return cache.keys().then(keys => {
            if (keys.length > NumeroItems) {
                cache.delete(keys[0])
                        .then(limpiarCache(cacheName, NumeroItems));

            }

        });

    });

}
self.addEventListener('install', e => {

    const cacheProm = caches.open(CACHE_STATIC_NAME).then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/css/style.css',
            '/img/main.jpg',
            'js/app.js',
            '/img/no-img.jpg'

        ]);

    });
    const cacheInmutableProm = caches.open(CACHE_INMUTABLE_NAME).then(cache => {

        return cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');

    });
    e.waitUntil(Promise.all([cacheProm, cacheInmutableProm]));

});

self.addEventListener('fetch', e => {

//5-cache & network race
    const respuesta = new Promise((resolve, reject) => {
        let rechazada = false;
        const falloUnaVez = () => {
            if (rechazada) {
                if (/\.(png|jpg)$/i.test(e.request.url)) {
                    resolve(caches.match('/img/no-img.jpg'));
                } else {

                    reject('no se encontro respuesta');
                }

            } else {

                rechazada = true;
            }

        };
        fetch(e.request)
                .then(res => {

                    res.ok ? resolve(res) : falloUnaVez();

                }).catch(falloUnaVez);



        caches.match(e.request).then(res => {

            res ? resolve(res) : falloUnaVez();
        }).catch(falloUnaVez);
    });
    e.respondWith(respuesta);
//----------------------------------------------------------------------------------------

//4-cache with network update

//rendimiento es critico
//siempre estará un paso atras
    /*
     if (e.request.url.includes("boostrap")) {
     return e.respondWith(caches.match(e.request));

     }
     const respuesta = caches.open(CACHE_STATIC_NAME).then(cache => {

     fetch(e.request).then(newRes => cache.put(e.request, newRes));

     return cache.match(e.request);
     });
     e.respondWith(respuesta);
     */

//-----------------------------------------------------------------------------------------

    //3= network with cache fallback
    /*  const respuesta = fetch(e.request).then(res => {
     if (!res) {
     return caches.match(e.request);

     }
     caches.open(CACHE_DYNAMIC_NAME)
     .then(cache => {

     cache.put(e.request, res);
     limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);
     });
     return res.clone();

     }).catch(err => {
     return caches.match(e.request);

     });
     e.respondWith(respuesta);
     */
//2=cache with Network callback: si no encuentra el archvo en el cache intenta la red
    //--------------------------------------------------------------------------------------------------
    /*  const respuesta = caches.match(e.request).then(res => {

     //si existe el archivo en cache pues retorna el archivo en cache
     if (res)
     return res;

     //si no existe el archivo en cache tengo q ir a la web
     console.log('No existe', e.request.url);
     return fetch(e.request).then(newresp => {
     caches.open(CACHE_DYNAMIC_NAME)
     .then(cache => {
     cache.put(e.request, newresp);
     limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);


     });

     return newresp.clone();

     });
     });
     e.respondWith(respuesta);

     */

//----------------------------------------------------------------------------------------------------
//1=cache only: matiene el cache sin necesidad de acceso a intenet pero no se actualiza con la web
    //e.respondWith(caches.match(e.request));

})
        ;

