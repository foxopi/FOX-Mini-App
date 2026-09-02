let fox = localStorage.getItem("fox") || 0;


let dollar = localStorage.getItem("dollar") || 0;



document.getElementById("foxBalance").innerHTML = fox;

document.getElementById("dollarBalance").innerHTML = dollar;


document.getElementById("profileCoin").innerHTML = fox;



function tapFox(){

fox++;

dollar = (fox/10000).toFixed(2);



localStorage.setItem("fox",fox);

localStorage.setItem("dollar",dollar);



document.getElementById("foxBalance").innerHTML = fox;

document.getElementById("dollarBalance").innerHTML = dollar;

document.getElementById("profileCoin").innerHTML = fox;


}




function showPage(page){


let pages=document.querySelectorAll(".page");


pages.forEach(function(p){

p.classList.remove("active");

});


document.getElementById(page).classList.add("active");


}
