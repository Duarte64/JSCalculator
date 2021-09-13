const auxScreen = document.querySelector(".main__auxiliar-screen");

function showAuxScreen(value, evaluated) {
    clearAuxScreen();
    auxScreen.placeholder = value + " = " + evaluated;
}

function clearAuxScreen() {
    auxScreen.placeholder = '';
}