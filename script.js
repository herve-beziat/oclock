function myFunction() {
    var x = document.getElementById("clock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function horloge(){

const d = new Date();
let heure = d.getHours();
let minute = d.getMinutes();
let seconde = d.getSeconds();

heure = (heure < 10) ? '0' + heure : heure;
minute = (minute < 10) ? '0' + minute : minute;
seconde = (seconde < 10) ? '0' + seconde : seconde;


document.getElementById("horloge").innerHTML = heure + ':' + minute + ':' + seconde;


}
setInterval(horloge, 1000);
