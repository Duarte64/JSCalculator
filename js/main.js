const screen = document.querySelector(".main__screen");
var reset = false;
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
        reset = true;
        if (screen.value != '') {
            try {
                if (value.includes('.') || !Number.isInteger(eval(screen.value))) {
                    showAuxScreen(screen.value, eval(screen.value).toFixed(3));
                    screen.value = eval(screen.value).toFixed(3);
                } else {
                    showAuxScreen(screen.value, eval(screen.value));
                    screen.value = eval(screen.value);
                }
            } catch (error) {
                screen.value = "error ಠ_ಠ";
                reset = true;
            }
        }
    } else if (value == '%') {
        screen.value = eval(screen.value) / 100;
        reset = true;
    } else if (value == 'elevate') {
        reset = true;
        try {
            screen.value = eval(screen.value) * eval(screen.value);
        } catch (error) {
            screen.value = "error ಠ_ಠ";
        }
    } else if (value == 'root') {
        reset = true;
        try {
            screen.value = Math.sqrt(eval(screen.value));
        } catch (error) {
            screen.value = "error ಠ_ಠ";
        }
    } else {
        if (reset == true && Number.isInteger(value)) {
            screen.value = '';
            screen.value += value; 
            reset = false;   
        } else {
            reset = false;
            screen.value += value;
        }
    }
}

// Clear the Screen.

const clear = document.querySelector(".c-btn");

clear.addEventListener('click', function() {
    screen.value = '';
});