//TODO 2 joueurs

function eteindreBouton(bouton) {
	bouton.id = bouton.id.split("-")[0]+"-off";
}

function allumerBouton(bouton, index) {
	sounds[index].load();
	sounds[index].play();
	bouton.id = bouton.id.split("-")[0]+"-on";

	setTimeout(function(){
		eteindreBouton(bouton);
		}, tempsAllume);
}

function clickBouton(bouton, index) {
	allumerBouton(bouton, index);

	if(sequenceOrdi[tour] != index) {
		gameOver();
	} else {
		tour++;
	}

	if(tour >= sequenceOrdi.length) {
		sequenceJoueur.push(index);
		tourSuivant();
		tour = 0;
	}
}

function gameOver() {
	gameOverDiv.style.display = "block";
	scoreSpan.innerHTML = sequenceOrdi.length-nombreSequenceDepart;
}

function creerListener() {
	boutons.forEach(function(element, index) {
		element.addEventListener("click", function(){
			clickBouton(element, index);
		});
	});
}

function tourSuivant() {
	ajouterSequence();
	setTimeout(presenterSequence, tempsAllume*1.5);
}

function ajouterSequence() {
	sequenceOrdi.push(Math.floor(Math.random()*boutons.length));
}

function presenterSequence() {
	sequenceOrdi.forEach(function(element, i){
		setTimeout(function(){
			allumerBouton(boutons[parseInt(element)], element);
		}, tempsAllume*i+(tempsAllume/2)*i);
	});
}

function resetGame() {
	gameOverDiv.style.display = "none";

	sequenceOrdi = [];
	sequenceJoueur = [];
	tour = 0;
	nombreSequenceDepart = 4;

	tempsAllume = 400;

	for(var i = 0 ; i < nombreSequenceDepart ; i++){
		ajouterSequence();
	}
}

function startGame() {
	var pseudo = prompt ("Entrez votre pseudo");
	pseudoSpan.innerHTML = pseudo;
	presenterSequence();
}

var sequenceOrdi = [];
var sequenceJoueur = [];
var tour = 0;
var nombreSequenceDepart = 4;

var tempsAllume = 400;

var boutons = document.querySelectorAll(".boutonJeux");
var gameOverDiv = document.querySelector("#gameOver");
var scoreSpan = document.querySelector("#scoreText");
var pseudoSpan = document.querySelector("#pseudoText");

var sounds = new Array();
for(var i = 0 ; i < boutons.length ; i++) {
	sounds[i] = new Audio("sound/"+i+".ogg");
}

creerListener();

resetGame();
startGame();
