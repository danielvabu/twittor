

// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
            .then(reg => {
                //      setTimeout(() => {

                //        reg.sync.register('posteo-gatitos');
                //      console.log("se enviaron fotos de gatos al server!!");
                // }, 3000);
                Notification.requestPermission().then(result => {

                    console.log(result);
                    reg.showNotification("hola mundo");
                });


            });

}


