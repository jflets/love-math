document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        })
    }
})
function runGame() {
    
}
function checkAnswers() {
    
}
function calculateCorrectAnswers() {
    
}
function incrementScore() {
    
}
function incrementWrongAnswers() {
    
}
function displayAdditionQuestions() {
    
}
function displaySubtractQuestions() {
    
}
function displayMultiplyQuestions() {
    
}