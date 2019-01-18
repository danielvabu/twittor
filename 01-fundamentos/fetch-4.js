let img = document.querySelector('img');
fetch('miel.jpg').then(resp => resp.blob())
        .then(imagen => {

            var imgPath = URL.createObjectURL(imagen);
            img.src = imgPath;

        });