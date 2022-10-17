function divisores(numero){
    let total = 0;
    
    for(let i=1; i < numero; i ++){
        if(numero % 1 == 0){
            total++;
        }
    }
    return total;
}

console.log("Total de  divisores", divisores(32));