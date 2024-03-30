const display = document.querySelector('input[name="display"]');
function clearDisplay() {
    display.value = '';
}


function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}


function addDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}


function calculateResult() {
    try {        
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function appendToDisplay(value) {
    display.value += value;
}
