const input = document.getElementById("pass");
const div = document.querySelector(".message");
const password = "user";
const message = "masz dzisiaj dobry dzień :)";

input.addEventListener('input', (e) => {
    // console.log(e.target.value); //(event.na czym jest wykonywane. ma value czyli wartość wpisaną w środku)
    if (password === e.target.value) {
        div.textContent = message;

    }
})