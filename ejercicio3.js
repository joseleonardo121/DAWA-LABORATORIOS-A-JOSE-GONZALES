var com=function(a){
    if (a<=150){
        document.write("no recibes comision")
    }
    else if(a>150 && a<=400){
        document.write("su comision es de :", a*0.1)
    }else{
        document.write("su comision es de :",(a*0.09)+50)
    }


}
document.write(com(900))