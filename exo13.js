var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var array = new Set(["orange", "banane","fraise","pomme"]);
    
    

    console.log( array.size);
    console.log(array.has("Alexandre"));

 });