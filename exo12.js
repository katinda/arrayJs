var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var array = new Set(["orange", "banane","fraise","pomme"]);
    
    console.log(array.delete("banane"));
    console.log(array.add("kiwi"));

    console.log(array);
 });