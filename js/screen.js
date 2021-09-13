const screen = document.querySelector(".main__screen");

// Set screen result, mostly used after equals button or some variations as square root, that when pressed only shows the final result.
function setScreen(value) {
    screen.value = value;
}

// Update screen constantly, when the expression still being formed, the buttons value are appended and shows in the screen;
function appendScreen(value) {
    screen.value += value;
}

// Get the screen value and returns;
function getScreen() {
    return screen.value;
}

// If the screen value still an expression, then the function evaluate the text and return a number;
function getEvaluatedScreen() {
    return eval(screen.value);
}

// Set screen to an error message, used when the expression has semantic errors;
function errorScreen() {
    screen.value = "error ಠ_ಠ";
}

// Clear the Screen.
function clearScreen() {
    screen.value = ''
}

// Add an event listener to the Clear button, when pressed the screen turns to none value;
const clear = document.querySelector(".c-btn");

clear.addEventListener('click', function() {
    clearScreen();
    clearAuxScreen();
});
