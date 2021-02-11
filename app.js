// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var person = document.getElementById("person");
var vidmodal= document.getElementById("vidmodal");
var gamebtn = document.getElementById("startgame");
var gamemodal=document.getElementById("gamemodal");

window.onclick = function(event) {
    if (event.target == vidmodal) {
      vidmodal.style.display = "none";
    }
  }

  window.onclick = function(event) {
    if (event.target == gamemodal) {
      gamemodal.style.display = "none";
    }
}

gamebtn.onclick = function(){
    gamemodal.style.display="block";
}


  person.onclick = function() {
    vidmodal.style.display = "block";
  }  


function dragoncave(){
    let inpval= document.getElementById('inp');
    if (inpval = 1) {
        window.location.href = '/drachenhoehle.html';
    } else {
        alert('Das ist leider falsch...versuch es noch einmal!')
    }
}