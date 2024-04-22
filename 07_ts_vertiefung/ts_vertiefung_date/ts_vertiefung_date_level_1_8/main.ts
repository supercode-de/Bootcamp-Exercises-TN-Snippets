//Zeit zeigen
let myInterval = setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  console.log(time);
}, 1000);
