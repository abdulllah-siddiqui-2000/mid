{
    var n = prompt("Enter a Number","0")
    var num= parseInt(n)

    if(n==0){
        document.write("Neither ODD nor EVEN")
    }
    if(num%2 == 0 ){
        document.write("Number is EVEN")

    }
    else{
        document.write("Number is ODD")
    }

}