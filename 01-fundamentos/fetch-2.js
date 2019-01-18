

fetch('https://reqres.in/api/users').then(resp => resp.json())
        .then(respOBJ => {
            console.log(respOBJ);
            console.log(respOBJ.page);
            console.log(respOBJ.per_page);

            //  console.log(respOBJ);


        }


        );

//console.log(resp);
