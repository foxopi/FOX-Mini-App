let fox = Number(localStorage.getItem("fox")) || 0;


// Tap Function

function tapFox(){

    fox = fox + 1;

    saveData();

    updateBalance();

}



// Dollar Calculation

function calculateDollar(){

    return (fox / 300000) * 20;

}



// Save

function saveData(){

    localStorage.setItem("fox", fox);

}



// Update Screen

function updateBalance(){

    let dollar = calculateDollar();

    document.getElementById("foxBalance").innerHTML = fox;

    document.getElementById("dollarBalance").innerHTML =
    dollar.toFixed(2);

}



// Page Navigation

function showPage(page){

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(item){

        item.classList.remove("active");

    });


    document.getElementById(page)
    .classList.add("active");

}



// Start

updateBalance();
