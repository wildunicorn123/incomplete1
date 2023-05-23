let screen = document.getElementById("result");
function del(){
    screen.innerHTML = screen.innerHTML.substring(
        0,
        screen.innerHTML.length -1
    );
};

function allClear() {
        document.getElementById("result").value = "";
    }

function display(value) {
        document.getElementById("result").value += value;
    }
//took motivation from https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/
function calV() {
        let x = document.getElementById("result").value;
        let y = eval(x);
        document.getElementById("result").value = y;
        return y;
    }