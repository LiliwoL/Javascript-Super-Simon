/**
 * Initialisation des variables
 */
let sequence = [];      // La séquence jouée par l'ordi
let saisie = null;      // Ce qu'a saisi l'utilisateur
let etape = 0;          // Etape de la séquence
const nbEtapes = 4;     // Nombre d'étapes de la séquence
const nbCouleurs = 4;   // Nombre de couleurs

function genererSequence(){

    // Génération de nbEtapes
    for ( let i=0; i < nbEtapes; i++ ){
        // Génération d'un nombre entier aléatoire avec un maximum de nbCouleurs (entre 0 et 3 ici)
        sequence[i] = Math.floor(Math.random() * nbCouleurs);
    }

    // [ 0, 3, 0, 2] par exemple
    return sequence;
}


let boutonStart = document.getElementById('start');

boutonStart.addEventListener('click', demarrerJeu);

function demarrerJeu(){
    alert("Tu as cliqué sur le bouton");

    setInterval(allumeJaune, 1000);
    setInterval(allumeRouge, 2000);

    genererSequence();
    console.log( sequence );
}


function allumeJaune(){
    /* ... */
}
function allumeRouge(){}


function etientJaune(){}

