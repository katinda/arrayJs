var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var arrays = ["orange", "tableau","jardin","pull"];
    
    var array= arrays[Math.floor(Math.random()*arrays.length)];

    for(var i=0 ; i< arrays.length ; i++){
        if(array !== "e"){
            array[i];
            console.log(array);
        }
    }
    
    



 });