var x="z"
var y="z"
var v="z"
var L="z"
var O="z"
var num=0




document.querySelector('#A1').addEventListener("click", function(){
   
    x="A"


    document.querySelector("#selected1").textContent= x


})


document.querySelector('#B1').addEventListener("click", function(){
   
    x="B"


    document.querySelector("#selected1").textContent= x


})


document.querySelector('#C1').addEventListener("click", function(){
   
    x="C"
    document.querySelector("#selected1").textContent= x


})


document.querySelector('#D1').addEventListener("click", function(){
   
    x="D"
 
    document.querySelector("#selected1").textContent= x


})




document.querySelector('#A2').addEventListener("click", function(){
   
    y="A"


    document.querySelector("#selected2").textContent= y


})


document.querySelector('#B2').addEventListener("click", function(){
   
    y="B"


    document.querySelector("#selected2").textContent= y


})


document.querySelector('#C2').addEventListener("click", function(){
   
    y="C"
    document.querySelector("#selected2").textContent= y


})


document.querySelector('#D2').addEventListener("click", function(){
   
    y="D"
 
    document.querySelector("#selected2").textContent= y


})








document.querySelector('#submit').addEventListener("click", function(){
   


    if (x=="C") {
        document.querySelector('#results1').textContent="you got it right!!!!"
        num = num + 1
       
    } else {
        document.querySelector('#results1').textContent="you got it wrong!!!!"


    }
    if (y=="B") {
        document.querySelector('#results2').textContent="you got it right!!!!"
        num = num + 1
    } else {
        document.querySelector('#results2').textContent="you got it wrong!!!!"


    }
    document.querySelector("#numright").textContent = num + "out of two"
})
