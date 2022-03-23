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