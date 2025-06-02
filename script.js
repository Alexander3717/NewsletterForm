const form = document.querySelector(".newsletter-card__form");
const email = document.getElementById("email");
const errorText = document.getElementById("email-error");
const submitButton = document.querySelector("button[type='submit']");
const dismissButton = document.getElementById("dismiss-btn");

// using novalidate on the form in HTML
// and constraint API methods here
// will allow me to use the built in browser validation 
// while also giving me the ability to style the error states

let typingTimer;

email.addEventListener("input", (e) => {
    // everytime the email input box changes
    clearTimeout(typingTimer);

    // reset input box to default state
    email.classList.remove("error");
    errorText.classList.add("hidden");

    // when user stops typing
    // wait a bit
    typingTimer = setTimeout(() => {
    // check if the email is valid
    // if yes, glow up the button
    if (email.validity.valid) {
        submitButton.classList.add("ready");
    } else { // if not, keep it in default state
        submitButton.classList.remove("ready");
    }
  }, 500);
});

// when user clicks the submit button (when the form is submitted)
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents page reload

    if (!email.validity.valid) { // if the email is not valid
        email.classList.add("error"); // shows error
        errorText.classList.remove("hidden");
        email.focus(); // focuses user on the input box
        return;
    }

    // else
    // to display the registered email in the successs message
    const successEmail = document.querySelector(".subscribe-success__email");
    successEmail.textContent = email.value;

    // hide the newsletter sign-up card
    document.querySelector(".newsletter-card").classList.add("hidden");
    // display the subscribe success message
    document.querySelector(".subscribe-success").classList.remove("hidden");
});

dismissButton.addEventListener("click", () => {
    // hide the subscribe success message
    document.querySelector(".subscribe-success").classList.add("hidden");

    form.reset(); // reset the form
    submitButton.classList.remove('ready');

    // display the newsletter sign-up card 
    document.querySelector(".newsletter-card").classList.remove("hidden");
});
   