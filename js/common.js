
document.getElementById('myCarousel').addEventListener('click', closeNav);

document.getElementById('shiksha').addEventListener('click', closeNav);
document.getElementById('services').addEventListener('click', closeNav);
document.getElementById('work').addEventListener('click', closeNav);
document.getElementById('partnerSec').addEventListener('click', closeNav);
document.getElementById('contact').addEventListener('click', closeNav);



function openNav() {

  document.getElementById("mySidenav").style.right = "0px";
}

function closeNav() {
 document.getElementById("mySidenav").style.right = "-200px";
}



