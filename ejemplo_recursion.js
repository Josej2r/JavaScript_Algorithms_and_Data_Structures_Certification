function conteoRegresivo(a){

    if(a<0) return
    else{
        console.log(a);
        return conteoRegresivo(a-1);
    }
}

conteoRegresivo(3)
