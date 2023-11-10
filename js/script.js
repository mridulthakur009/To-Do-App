function val(num){
    document.getElementById("inputBox").value += num;
}

function clearRec(){
    document.getElementById("inputBox").value = "";
}

function calc() {
    let value = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = eval(value)
}