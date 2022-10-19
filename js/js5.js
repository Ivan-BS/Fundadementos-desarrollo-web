
function calcular(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value; 
    let resultado = document.getElementById("resultado");

    if(operacion == '+'){
        resultado.value = numero1+numero2;
    }else if(operacion == "-"){
        resultado.value = numero1-numero2;
    }else if(operacion == "/"){
        resultado.value = numero1/numero2;
    }else if(operacion == "*"){
        resultado.value = numero1*numero2;
    }

}


function tablamultiplicar(){
    let tabla = parseInt(document.getElementById("tabla").value)
    let d = document.getElementById("tabla2")
    let almacen="";
    let lista = []
    d.innerText = "";
    console.log(d.textContent)
    for(let p = 1;p<=10;p++){
        almacen = `${p} * ${tabla} = ${p*tabla}`;
        lista.push(almacen)
    }
    console.log(lista)
    for (let p = 0; p<lista.length;p++){
        d.innerHTML = d.innerHTML + lista[p]
        d.innerHTML = d.innerHTML + "</br>"
    }
}