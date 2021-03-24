var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var names = ['John', 'Paul', 'George', 'Ringo', 'John'];

var x = (names) => names.filter((v,i) => names.indexOf(v) === i)
x(names); // 'John', 'Paul', 'George', 'Ringo'
    
    console.log(names)
    
    
     
    

    
    
    
 });