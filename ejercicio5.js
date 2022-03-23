const izquierda=(j,l)=>{
    let arre=[];
    console.log("Arreglo inicial: ["+l+"]")
    for (let i=0;i<l.length;i++){
        if(i+j<l.length){
            arre.push(l[i+j]);
        }else{
            console.log([{i,arr:l.length}]);
            console.log(i-(l.length-j));
            arre.push(l[i-(arreglo.length-j)])
        }

    }
    return arre;
};

console.log(izquierda(2,[1,2,3,4,5]))


