var menubtn = document.getElementById("menubtn")
var menubtn = document.getElementById("sidenav")
var menubtn = document.getElementById("menu")

sidenav.style.right = "-250px";

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
