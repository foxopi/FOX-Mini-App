let fox = 0;
let dollar = 0;

const coin = document.querySelector(".coin-btn");

coin.addEventListener("click", function () {

    fox += 1;
    dollar = fox * 0.01;

    document.querySelector(".fox-count").innerHTML = fox;
    document.querySelector(".dollar-count").innerHTML = "$" + dollar.toFixed(2);

});
