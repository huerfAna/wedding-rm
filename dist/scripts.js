var countDownDate = new Date("Dec 10, 2022 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in an element with id="demo"
// document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
// + minutes + "Minutes " + seconds + "Seconds ";

// Display the result in an element with id="demo"
document.getElementById("days").innerHTML = days +" <small>días</small>";
document.getElementById("hours").innerHTML = hours + " <small>horas</small> ";
document.getElementById("minutes").innerHTML = minutes + " <small>minutos</small> ";
document.getElementById("seconds").innerHTML = seconds + " <small>segundos</small> ";

// If the count down is finished, write some text 
if (distance < 0) {
 clearInterval(x);
 document.getElementById("demo").innerHTML = "The Wedding Ceremony is Over";
}
}, 1000);

