var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var array = [1,25,16,18,31,21,15,19,26,10];

    var  max= array[0];
    var min= array[0];
    var somme=0;
    
    
    
    for(var i=0;i<array.length;i++ ){
        if(array[i]< min){
             min = array[i];
        }
        else if(array[i]> max){
             max = array[i];
        }
        else if(array[i]){
            somme += array[i];
        }
        else if(array[i]){
          var moyenne = (somme += array[i])/array.length;
            
        }
        
    
    }
     console.log(min);
     console.log(max);
     console.log(somme);
     console.log(moyenne);
    

    
    
    
 });