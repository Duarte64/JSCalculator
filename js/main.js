//Sets a boolean value that defines a reset value, that's a logical function to reset the screen when this behavior makes sense, like:
    // - If you evaluate a expression and the screen show a result, if your next action is click in a number button, the screen should be reseted
    //   but if you press a operator, the number in the screen must stay and compose the new expression.
var reset = false;

function calculate(value) {
    
    if (getScreen() == '') {
        if (value == '.') {
            setScreen(0);
        } else if (typeof value != 'number' || value == 0) {
            return;
        }
    }
    try {
        switch (value) {
            case 'invert':
                setScreen(-1 * getEvaluatedScreen());
                break;
            case '%':
                showAuxScreen(getScreen(), normalizeNumber(getEvaluatedScreen()) / 100);
                setScreen(normalizeNumber(getEvaluatedScreen() / 100));
                reset = true;
                break;
            case 'elevate':
                reset = true;
                showAuxScreen(getScreen(), normalizeNumber(getEvaluatedScreen() * getEvaluatedScreen()));
                setScreen(normalizeNumber(getEvaluatedScreen() * getEvaluatedScreen()));
                break;
            case 'root':
                reset = true;
                showAuxScreen(getScreen(), normalizeNumber(Math.sqrt(getEvaluatedScreen())));
                setScreen(normalizeNumber(Math.sqrt(getEvaluatedScreen())));
                break;
            case '=':
                reset = true;
                showAuxScreen(getScreen(), normalizeNumber(getEvaluatedScreen()));
                setScreen(normalizeNumber(getEvaluatedScreen()));
                break;
            default:
                // Here is where the screen reset occurers if it's necessary. If not, the numbers are just appended in the expression;
                if ((reset == true && Number.isInteger(value)) || (getScreen() == 'error ಠ_ಠ')) {
                    setScreen('');
                    appendScreen(value); 
                    reset = false;   
                } else {
                    reset = false;
                    appendScreen(value);
                }
        }
    } catch (error) {
        errorScreen();
        reset = true;
    }

}

// Normalize decimal places, avoid long terms.
function normalizeNumber(value) {
    if (!Number.isInteger(value)) {
        return value.toFixed(3);
    } else {
        return value;
    }
}