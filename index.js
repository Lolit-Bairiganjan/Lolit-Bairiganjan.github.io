const textbox = document.getElementById("temp_input");
const toFahrenheit = document.getElementById("cel2far");
const toCelcius = document.getElementById("far2cel");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = (temp*1.8)+32;
        document.getElementById("display_final").textContent = `${Number(textbox.value)}C' is ${temp}F'`;
    }
    else if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = (temp-32)/1.8;
        document.getElementById("display_final").textContent = `${Number(textbox.value)}F' is ${temp}C'`;;
    }
    else{
        document.getElementById("display_final").textContent = "Choose either of the options!";
    }
}