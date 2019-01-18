fetch('https://reqres.in/api/users/1000').then(res => {
    console.log(res);
    if (res.ok) {
        res.json().then(console.log);
    } else {
        console.log("error no se encuentra e usuario 1000");
    }
}).catch(error => {
    console.log("error en la peticion");
    console.log(error);


});



