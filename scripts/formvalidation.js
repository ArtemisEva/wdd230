const ps1 = document.querySelector("#password");
const ps2 = document.querySelector("#password2");
const fb = document.querySelector("#feedback");

ps2.addEventListener("focusout", controlar)

function controlar() {
    if (ps1.value !== ps2.value) {
        ps2.style.backgroundColor = "#fff0f3"
        ps1.value = ""
        ps2.value = ""
        ps1.focus()
        fb.textContent = "Passwords do not match! Please try again."
    } else {
        fb.textContent = ""
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener("change", displayRatingValue)
range.addEventListener("input", displayRatingValue)

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
