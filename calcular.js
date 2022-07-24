function main() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.querySelector("#num3").value);

    /*
    var resp1 = document.getElementById("resposta1")
    var resp2 = document.getElementById("resposta2")
    */

    var sum = num1+num2+num3;
    var media = sum/3

    document.getElementById("resposta1").innerHTML = sum;
    document.getElementById("resposta2").innerHTML = media;

}


/*
function soma(x,y,z) {
    return(x+y+z);
}

function media(x,y,z) {
    return soma(x,y,z)/3
}
*/



