//  Calculator
const display = document.querySelector("#display");

alert("Welcome, Shobhit Singh")
function append(x){
    display.value += x
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try {
        // Replace % used as percentage: convert "50%" to "(50/100)"
        const expr = display.value.replace(/(\d+)%/g, '($1/100)');
        // eslint-disable-next-line no-eval
        const result = eval(expr);
        display.value = result;
    } catch (e) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
    }
}