//Zeit zeigen
let myInterval = setInterval(() => {
    let date = new Date();
    let zeit = date.toLocaleTimeString();
    console.log(zeit);
}, 1000);