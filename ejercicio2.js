var mult =function (){
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