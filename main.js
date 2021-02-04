

function getp1(){
    var i1 = [];
    for (var i = 1 ; i<=6 ; i++){
        i1.push(document.getElementById("p1in" + i).value);
    }
    
    document.getElementById("sp1").innerHTML=i1.join(". ");
}
var i2 = [];

function getp2(){
    for (var i = 1 ; i<=6 ; i++){
        i2.push(document.getElementById("p2in" + i).value);
    }
    
   
    document.getElementById("sp2").innerHTML=i2.join(". ");;
}