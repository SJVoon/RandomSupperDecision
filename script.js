var btn = document.getElementById("btn");

btn.onclick = function(){
    var num = Math.floor(Math.random()*8);
    var arr = ["Murni","KFC","MCD","Ren-Ren","Riang-Riang","Pica","Bumbung","Ali"];
    var line = "<br><h1>"+arr[num]+"</h1>";
    document.getElementById("result").innerHTML = arr[num];
}