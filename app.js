var joke = document.getElementById('joke');

fetch('http://api.tronalddump.io/random/quote')
    .then((response) => {
        return response.json();
    })
    .then(data=>{
        console.log(data.value);
        joke.innerHTML = data.value;
    });
    