var scoreSpan = document.querySelector("#scoreText");
var gameOverDiv = document.querySelector("#gameOver");
var pseudoSpan = document.querySelector("#pseudoText");

function recommencer() {
    ajouterScoreTableau();

    gameOverDiv.style.display = "none";

    resetGame();
    startGame();
}

function ajouterScoreTableau() {
    var tableScore = document.querySelector('#scores tbody');

    //Set at 1 to avoid header (Pseudo, score)
    var rowIndex = 1;

    for(rowIndex ; rowIndex < tableScore.rows.length ; rowIndex++) {
        var score = tableScore.rows[rowIndex].children[1].textContent;
        if(score < scoreSpan.textContent)
            break;
    }

    var newRow   = tableScore.insertRow(rowIndex);
    var cellPseudo  = newRow.insertCell(0);
    var cellScore  = newRow.insertCell(1);
    cellPseudo.appendChild(document.createTextNode(pseudoSpan.textContent));
    cellScore.appendChild(document.createTextNode(scoreSpan.textContent));
}
