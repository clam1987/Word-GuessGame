// *Javascript Doc
// *Variables and Arrays
//=======================================================================
var marvelMovies = ["ironman", "theincrediblehulk", "thor", "captainamerica", "theavengers", "guardiansofthegalaxy", "antman", "doctorstrange", "spiderman", "blackpanther", "captainmarvel"];
var cpuInput = "";
var emptyArray = [];
var numBlanks = 0;
var blanksAndSuccesses = []; //i_ _ _ _ _ _ _
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0; 
var guesses = 10;





// *Functions and Loops
function startGame () {
    cpuInput = marvelMovies[Math.floor(Math.random() * marvelMovies.length)];
    emptyArray = cpuInput.split("");
    numBlanks = emptyArray.length;

    //Reset game
    guesses = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Looping using For Loop to populate blanks and successes
    for (var i=0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
}    
    // Changing counters
    document.getElementById("blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guesses;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("loseCounter").innerHTML = lossCount;

    
    //Console logs
    console.log(numBlanks);
    console.log(emptyArray);
    console.log(cpuInput);
    console.log(blanksAndSuccesses);


    // Compare and Check the Letters in marvelMovies
function checkLetters(letter) {
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (cpuInput[i] == letter) {
            isLetterInWord = true;        
        }
    }
    // Check Location of the word
    if(isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {
        if (cpuInput[i] == letter) {
            blanksAndSuccesses[i] = letter;
            } 
        
        
        } 
    } else {
        wrongLetters.push(letter);
        guesses--;
        
    }

    console.log(blanksAndSuccesses);
// roundComplete(isLetterInWord);
}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guesses);

    //update HTML
    document.getElementById("numGuesses").innerHTML = guesses;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;
    document.getElementById("blanks").innerHTML = blanksAndSuccesses.join(" ");
    
    //check if user won
    if (emptyArray.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");

        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    } 
        else if (guesses == 0) {
            lossCount++;
            alert("You Lost!")
            document.getElementById("loseCounter").innerHTML = lossCount;

            startGame();
        }

}




//* Main Process
startGame();



// *Register Key Inputs
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    console.log(letterGuessed);
    roundComplete();
}















