const button = document.querySelector(".auxiliar__arrow-img");
const areaHidden = document.querySelector(".calculadora__auxiliar-hidden");

button.addEventListener("click", function() {
    
    if (areaHidden.classList.contains("addHidden")) {
        areaHidden.classList.remove("addHidden");
    } else {
        areaHidden.classList.add("addHidden");
    }
    
});

const screen = document.querySelector(".main__screen");
const auxScreen = document.querySelector(".main__auxiliar-screen");
const clear = document.querySelector(".c-btn");

clear.addEventListener('click', function() {
    screen.value = '';
});

function calculate(value) {

    if ((value == 0 || (typeof value != 'number')) && screen.value == '') {
        if (value == '.') {
            screen.value = '0' + value;
        }
        return
    }

    if (value=='invert') {
        screen.value = -1 * (eval(screen.value));
        return
    }

    // ARRUMAR PRA DPS DO IGUAL ZERAR A TELA
    if (value === '=') {
        auxScreen.placeholder += screen.value + value + eval(screen.value) + " | ";
        if (screen.value != '') {
            try {
                if (value.includes('.') || !Number.isInteger(eval(screen.value))) {
                    screen.value = eval(screen.value).toFixed(2);
                } else {
                    screen.value = eval(screen.value);
                }
            } catch (error) {
                screen.value = "error ಠ_ಠ";
                reset = true;
            }
        }
    } else if (value == '%') {
        screen.value = eval(screen.value) / 100;
    } else {
        screen.value += value;
    }
}