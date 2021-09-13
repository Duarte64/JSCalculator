const auxScreen = document.querySelector(".main__auxiliar-screen");

function showAuxScreen(value, evaluated) {
    auxScreen.placeholder = '';
    auxScreen.placeholder = value + " = " + evaluated;
}