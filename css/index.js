var Icons = document.querySelector('#icons');
function humbBurger(){
    
var showHide = document.getElementById("navbar-menu2");
showHide.classList.toggle("show");

if(Icons.classList == "fas fa-bars"){
    Icons.classList = "fas fa-times";
}
else{
    Icons.classList ="fas fa-bars";
}

}

document.getElementById("amab-burger").onclick =  humbBurger;