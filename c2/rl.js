const buyButton = document.querySelector(".buy-button");
const body = document.body;

buyButton.addEventListener("click", () => {
    body.style.backgroundColor = "green";
    setTimeout(() => {
        body.style.backgroundColor = ""; 
    }, 5000);
});
