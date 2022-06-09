function pyramid(){

    var rows=7
    //var ar= new Array()
    for(var i=1; i <= rows; i++){
        for(var j=1; j<=i; j++){
            //ar.push(j)
            document.write("*")
        }
        document.write("<br>")
    }
}