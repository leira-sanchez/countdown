// COUNTDOWN

var days; var hours; var minutes; var seconds; var difference;
// Set the date we're counting down to
var countDownDate;

// Update the count down every 1 second
var countdownPuertoRico = setInterval(function () {
    countDownDate = new Date("Dec 16, 2019");
    distance();
    // Display the result in the element with id="demo"
    document.getElementById("countdown-puertorico").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (difference <= 0) {
        clearInterval(countdownPuertoRico);
        document.getElementById("countdown-puertorico").innerHTML = "¡Nos vamos pa' casa!";
    }
}, 1000);

var countdownEspana = setInterval(function () {
    countDownDate = new Date("Feb 14, 2020");
    distance();
    // Display the result in the element with id="demo"
    document.getElementById("countdown-espana").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (difference <= 0) {
        clearInterval(countdownEspana);
        document.getElementById("countdown-espana").innerHTML = "¡Patas y amigas, vamos pa' España!";
    }
}, 1000);

var countdownFrancia = setInterval(function () {
    countDownDate = new Date("Apr 21, 2020");
    distance();
    // Display the result in the element with id="demo"
    document.getElementById("countdown-francia").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (difference <= 0) {
        clearInterval(countdownFrancia);
        document.getElementById("countdown-francia").innerHTML = "Allons-y !";
    }
}, 1000);


var distance = () => {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    difference = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((difference % (1000 * 60)) / 1000);
};
