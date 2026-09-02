let coin = 0;


function tapCoin(){

    coin++;

    document.getElementById("coinBalance").innerHTML = coin;


    let dollar = (coin / 100000) * 20;

    document.getElementById("dollarBalance").innerHTML =
    "$" + dollar.toFixed(2);

}




function openPage(pageID){


    let pages = document.querySelectorAll(".page");


    pages.forEach(function(page){

        page.classList.remove("active");

    });


    document.getElementById(pageID).classList.add("active");


}
