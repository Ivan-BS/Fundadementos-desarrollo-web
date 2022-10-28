function divisores(numero){
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}

const divisoresV2 = function(numero){
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}

const divisoresV3 = numero =>{
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}

console.log("Total de  divisores", divisores(32));
console.log("Total de  divisores", divisoresV2(32));
console.log("Total de  divisores", divisoresV3(32));


function calcular() {
    let numero = parseInt(document.getElementById("numero").value);    
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
}


function cambiarimg() {
    let opcion = parseInt(document.getElementById("opcion").value);   
    let base = document.getElementById("imagen"); 
    switch (opcion) {
        case 1:
            base.src = "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg";
            break;
        case 2:
            base.src = "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/tailandia_krabi_gettyrf_465966551_copyright_anek_getty_images.jpg?itok=DG0Ry5B5";
            break;
        case 3:
            base.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg";
            break;
    }
    
}