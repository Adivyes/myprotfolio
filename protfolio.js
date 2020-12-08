var menubtn = document.getElementById("menubtn")
var menubtn = document.getElementById("sidenav")
var menubtn = document.getElementById("menu")
var timeDate = document.getElementById("dateTime")

 
sidenav.style.right = "-250px";

function printTime() {
    let showtime = new Date();
    var year = showtime.getFullYear();
    var month = showtime.getMonth();
    var day = showtime.getDate();
    var hours = showtime.getHours();
    var mins = showtime.getMinutes();
    var secs = showtime.getSeconds();
  
    timeDate.innerHTML = day+'/'+ month +'/'+year+' <br> '+ hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

menubtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
        menu.src="imges/icons-x.png";
    }
    else{
        sidenav.style.right = "-250px"; 
        menu.src="imges/icons8-menu-100.png"
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});

