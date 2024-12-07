let display = document.getElementById('display');
let historyList = document.getElementById('historyList');

// Append values to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculateResult() {
    try {
        const result = eval(display.value);
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Calculate scientific functions
function calculateFunction(func) {
    try {
        const value = parseFloat(display.value);
        let result;
        switch (func) {
            case 'sin':
                result = Math.sin((value * Math.PI) / 180); // Converts to radians
                break;
            case 'cos':
                result = Math.cos((value * Math.PI) / 180); // Converts to radians
                break;
            case 'tan':
                result = Math.tan((value * Math.PI) / 180); // Converts to radians
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            default:
                result = 'Error';
        }
        addToHistory($,{func}($,{value}) = $,{result});
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Add to history
function addToHistory(entry) {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.prepend(li); // Add to the top of the list
}