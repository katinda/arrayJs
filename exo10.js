var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var array = [1,25,16,18,31,21,15,19,26,10];
    var reducer = (acculamtor, currentValue) => acculamtor + currentValue;

    console.log(array.reduce(reducer));
    
    
    
    
     
    

    
    
    
 });