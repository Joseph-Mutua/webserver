console.log("Client side javascript is loaded!");

fetch('https://104ad336dbab40fb8a0be08180087a0f.vfs.cloud9.us-east-2.amazonaws.com/weather?address=!').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        }
        else {
            console.log(data.location);
            console.log(data.forecast);
        }
    });
});
