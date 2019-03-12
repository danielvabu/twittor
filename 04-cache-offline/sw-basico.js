
//cache respuesta erronea cuando no se conecta
self.addEventListener('fetch', event => {
    const offlineResp = new Response(`
Bienvenido a la pagina web, para usarla debes tener internet
`);
    const resp = fetch(event.request).
            catch(() => {
                return offlineResp;


            });
    // console.log(event.request.url);
    event.respondWith(resp);

});


