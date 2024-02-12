document.getElementById('box1').addEventListener('mouseover', function() {
    this.innerHTML = "<p class='overlay-text'>Three White Cottages in Saintes-Maries Vicent Van Gogh</p>";
});

document.getElementById('box2').addEventListener('mouseover', function() {
    this.innerHTML = "<p class='overlay-text'>Autoretrato</p>";
});

document.getElementById('box3').addEventListener('mouseover', function() {
    this.innerHTML = "<p class='overlay-text'>Lirios</p>";
});

document.getElementById('box4').addEventListener('click', function() {
    this.innerHTML = "<p class='overlay-text'>Cafe Terrace at Nigth</p>";
});

document.getElementById('box5').addEventListener('click', function() {
    this.innerHTML = "<p class='overlay-text'>Passeio ao Crepúsculo</p>";
});

document.getElementById('box6').addEventListener('click', function() {
    this.innerHTML = "<p class='overlay-text'>Casa blanca por la noche</p>";
});

document.getElementById('box7').addEventListener('focus', function() {
    this.innerHTML = "<p class='overlay-text'>Estás interactuando</p>";
});

document.getElementById('box8').addEventListener('focus', function() {
    this.innerHTML = "<p class='overlay-text'>Con el evento</p>";
});

document.getElementById('box9').addEventListener('focus', function() {
    this.innerHTML = "<p class='overlay-text'>Focus</p>";
});
