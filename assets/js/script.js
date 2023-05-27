document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})
/**
 * The main game "loop", called when rhw script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestions(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
function checkAnswers() {
    
}
function calculateCorrectAnswers() {
    
}
function incrementScore() {
    
}
function incrementWrongAnswers() {
    
}
function displayAdditionQuestions(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function displaySubtractQuestions() {
    
}
function displayMultiplyQuestions() {
    
}