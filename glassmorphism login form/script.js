let username = document.querySelector("#username");
let password = document.querySelector("#password");
let modal = document.querySelector(".modal");

function clickfunc() {
    let usernameValue = username.value;
    let passwordValue = password.value;

    if (usernameValue.length >= 5 && passwordValue.length >= 8) {
        console.log("dorost ast");
        modal.style.display = "flex";
        modal.style.backgroundColor = "green";
        modal.innerHTML = "your information is correct";
    } else {
        console.log("etelaat eshtebah ast");
        modal.style.display = "flex";
        modal.style.backgroundColor = "red";
        modal.innerHTML = "wrong information";
    }
    setTimeout(function () {
        modal.style.display = "none";
    }, 3000);
}
