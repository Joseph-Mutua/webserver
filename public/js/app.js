console.log("Client side javascript is loaded!");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = "Loading...";
    messageTwo.textContent = '';
    const locationName = search.value;
    fetch(`https://104ad336dbab40fb8a0be08180087a0f.vfs.cloud9.us-east-2.amazonaws.com/weather?address=${locationName}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            }
            else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});
