let coin = 0;
let dollar = 0;

let invite = 0;


/* TAP COIN */

function tapCoin(){

    coin += 1;

    updateBalance();

}



/* COIN TO DOLLAR */

function updateBalance(){

    dollar = (coin / 100000) * 20;


    document.getElementById("coinBalance").innerHTML = coin;


    document.getElementById("dollarBalance").innerHTML =
    "$" + dollar.toFixed(2);


}





/* PAGE CHANGE */


function openPage(page){


    let pages = document.querySelectorAll(".page");


    pages.forEach(function(item){

        item.classList.remove("active");

    });


    document.getElementById(page)
    .classList.add("active");


}





/* INVITE SYSTEM */


function inviteFriend(){


    if(invite < 10){

        invite++;

    }


    let percent = invite * 10;


    document.getElementById("progressBar")
    .style.width = percent + "%";


    document.getElementById("progressText")
    .innerHTML = percent + "%";


}






/* RANK TIMER */


let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 50;



setInterval(function(){


    seconds--;


    if(seconds <=0){

        seconds = 60;
        minutes--;

    }


    if(minutes <=0){

        minutes =60;
        hours--;

    }


    if(hours <=0){

        hours=24;
        days--;

    }



    let timer =
    days+" : "+
    hours+" : "+
    minutes+" : "+
    seconds;



    let timerBox=document.querySelector(".timer");


    if(timerBox){

        timerBox.innerHTML=timer;

    }



},1000);
