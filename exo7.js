var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var array = [1,25,16,18,31,21,15,19,26];

    var resultat= array.filter(e=>e >18);

    console.log(resultat);
    
    
 });