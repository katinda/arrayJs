var boutton = document.getElementById("run");


 boutton.addEventListener("click",function(){
    var array = ["orange", "banane","fraise","pomme"];
     //console.log(array[3]);

    var first = array.shift();
    var last = array.pop();
    var firstA = array.unshift("pamplemousse");
    var lastA= array.push("kiwi");

    console.log(lastA);
    console.log(firstA);
    console.log(last);
    console.log(first);
    console.log(array);

 });