


// respostas corretas
let correct1 = "B";
let correct2 = "A";
let correct3 = "C";

// pontos iniciais = 0
let point1 = 0;
let point2 = 0;
let point3 = 0;


// ref: https://www.w3schools.com/tags/ev_onclick.asp
// quando se carrega no botão para confirmar respostas...
function myFunction() {
	
	// ir buscar respostas escritas pelo jogador
	let answer1 = document.getElementById("answer1").value;
	let answer2 = document.getElementById("answer2").value;
	let answer3 = document.getElementById("answer3").value;
	

// se resposta do jogador for igual à resposta correta, atribuir 1 ponto
if(answer1 == correct1) {
	point1 = 1;
}else {
	point1 = 0;
}	
	
if(answer2 == correct2) {
	point2 = 1;
}else {
	point2 = 0;
}	
	
if(answer3 == correct3) {
	point3 = 1;
}else {
	point3 = 0;
}		



// variavel para somar os pontos de todas as perguntas
let correctanswers = point1 + point2 + point3;
	
	
// apresentar na página o total de pontos e criar um alerta correspondente
if(correctanswers == 1) {
	document.querySelector("h3").innerText = "Correct Answers: 1";
	alert("Better luck next time...");
}
else if(correctanswers == 2) {
	document.querySelector("h3").innerText = "Correct Answers: 2";
	alert("Not bad!");
}
else if(correctanswers == 3) {
	document.querySelector("h3").innerText = "Correct Answers: 3";
	alert("You're a movie pro!");
}
else {
	document.querySelector("h3").innerText = "Correct Answers: 0";
	alert("You should watch more movies...");
}



}
