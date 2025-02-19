// CALCULATOR PROGRAM

const display = document.getElementById("display");

let currentInput = "";  // Stores the current input string

// Append input to display
function appendToDisplay(input) {
    currentInput += input;
    display.value = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = "";
    display.value = "";
}

// Delete the last character from display
function deleteLast() {
    currentInput = currentInput.slice(0, -1);  // Remove the last character from the string
    display.value = currentInput;  // Update the display with the new string
}

// Evaluate the expression and display the result
function calculate() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluate the expression and convert to string
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";  // Show error if invalid input
        currentInput = "";
    }
}

