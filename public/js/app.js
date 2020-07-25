console.log("Client side javascript is loaded!");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch(`https://104ad336dbab40fb8a0be08180087a0f.vfs.cloud9.us-east-2.amazonaws.com/weather?address=${location}`).then((response) => {
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
});
