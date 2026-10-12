let user = document.getElementById("user");
let pass = document.getElementById("pass");
let form = document.getElementById("form");
let productsSection = document.getElementById("products-section");
let bannerSection = document.getElementById("banner-section");


function showProducts() {
    form.style.display = "none";
    productsSection.style.display = "flex";
    bannerSection.style.display = "block";
}


window.onload = function () {
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (savedUser === "sri" && savedPass === "1234") {
        showProducts();
    }
};


form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    if (user.value === "sri" && pass.value === "1234") {

        localStorage.setItem("username", user.value);
        localStorage.setItem("password", pass.value);

        alert("Login success");
        showProducts();
    } else {
        form.reset(); 
        alert("Please enter valid credentials");
    }
});