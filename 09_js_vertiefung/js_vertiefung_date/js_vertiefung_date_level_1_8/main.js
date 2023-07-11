//Zeit zeigen
setInterval(function () {
    var date = new Date();
    var zeit = date.toLocaleTimeString();
    console.log(zeit);
}, 1000); 