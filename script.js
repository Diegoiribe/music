const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
var posicion = 0;
toggle.onclick = function () {
	if (posicion == 0) {
		toggle.classList.toggle("active");
		body.classList.toggle("active");
		posicion = posicion + 0.5;
		console.log(posicion);
	} else if (posicion == 0.5) {
		toggle.classList.toggle("activem");
		body.classList.toggle("activem");
		posicion = posicion + 0.5;
		console.log(posicion);
	} else if (posicion == 1) {
		toggle.classList.toggle("activem");
		body.classList.toggle("activem");
		posicion++;
		console.log(posicion);
	} else if (posicion == 2) {
		toggle.classList.toggle("active");
		body.classList.toggle("active");
		posicion = posicion - 2;
		console.log(posicion);
	}
};

const playp = document.getElementById("marleny");
let musicap = false;
let audiop = new Audio("cancion.mp3");
function pausemusicp() {
	audiop;
	audiop.pause();
}

function playmusicp() {
	if (musicap == false) {
		audiop;
		audiop.play();
		musicap = true;
	} else if (musicap == true) {
		pausemusicp();
		musicap = false;
	}
}
playp.addEventListener("click", playmusicp);
