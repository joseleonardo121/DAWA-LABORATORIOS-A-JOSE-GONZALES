/* ///////////////////////////////////////EJERCICIO 1

var max = function(a,b,c){
    if(a>b && a>c){
        return a;
    }
    if (b>a && b>c){
        return b;
    }
    return c;
}

document.write(max(9,3,17))
*/
////////////////////////////////////////////////////////////////////////////////////////

/*const izquierda=(j,l)=>{
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
console.log(izquierda(2,[1,2,3,4,5]))*/
   /* var sh = function(j,l){
        l3=[]
        for(var i=0;i<l.length;i++){
        //document.write(l[i])
        var eliminado=l.shift();
            if(l[i]!=j){
                //eliminado
                document.write(l),
                eliminado;
                l3.push(eliminado)
                //document.write(l3)
            }else{
                //document.write(l)
                
            }
        }
        //return l
      } */ /*          //document.write (l[i])}
        while(j!=l[j])
        var eliminado=l.shift();
        return l;
    }*/
 //   document.write(sh(7,[10,44,7,95,19]))
//////////////////////////////////////  EJERCICIIO 2/////////////////////////////////////////////////////////////////////////
/*    var mult =function (){
        l=[]
        final=[]
        for(var i=1;i<=50;i++){   //contador
        l.push(i*7)
    }
        for (var j=0;j<=l.length;j++){
            if (l[j]%2!=0 && l[j]%3!=0 && l[j]%5!=0){
                final.push(l[j])
            }
        }
        document.write(l, "\n"); 
        document.write(final) 
    
    }        
    document.write(mult())
*/
////////////////////////////////////////EJERCICIO 3/////////////////////////////////////////////////////////

/*var com=function(a){
    if (a<=150){
        document.write("no recibes comision")
    }
    else if(a>150 && a<=400){
        document.write("su comision es de :", a*0.1)
    }else{
        document.write("su comision es de :",(a*0.09)+50)
    }


}
document.write(com(900))*/
///////////////////////////////////////////EJERCICIO 4//////////////////////////////////////////////////////
/*let arrPelis = [
    {
        nombre: "SHERK",
        idioma: "español",
    },
    {
        nombre: "IRON MAN",
        idioma: "español",
    },
    {
        nombre: "ERA DE HIELO",
        idioma: "ingles",
    },
    {
        nombre: "RAPIDOS Y FURIOSOS",
        idioma: "español",
    },
    {
        nombre: "PIRATAS DEL CARIBE",
        idioma: "español",
    },
    {
        nombre: "HARRY POTTER",
        idioma: "ingles",
    },
];
let peliculas = [];

let search = prompt("Ingresa el idioma");
for (let i = 0; i < arrPelis.length; i++) {
    if (search == arrPelis[i].idioma) {
        peliculas.push(arrPelis[i].nombre,arrPelis[i].idioma);    
    }   
}
document.write(peliculas);
*/