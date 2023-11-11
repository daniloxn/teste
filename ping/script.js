const email = document.getElementById("email");
const btnSubmit = document.getElementById("submit");
const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(input) {
    const formInput = input.parentElement;
    const errorMessage = formInput.querySelector(".error-text");

    if (input.value === "" || input.value === undefined) {
        formInput.classList.add("error");
        errorMessage.textContent =
            "Whoops! It looks like you forgot to add your email";
        errorMessage.style.display = "block";
    } else if (!input.value.match(regexEmail)) {
        formInput.classList.add("error");
        errorMessage.textContent = "Please provide a valid email address";
        errorMessage.style.display = "block";
    } else {
        formInput.classList.remove("error");
        errorMessage.style.display = "none";
    }
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    validateEmail(email);
});
