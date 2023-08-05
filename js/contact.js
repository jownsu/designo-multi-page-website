document.addEventListener("DOMContentLoaded", () => {

    const contact_form = document.getElementById("contact_form");
    const name_field = contact_form.querySelector("[name='name']");
    const email_field = contact_form.querySelector("[name='email']");
    const phone_field = contact_form.querySelector("[name='phone']");
    const message_field = contact_form.querySelector("[name='message']");

    /* Submitting of contact form */
    contact_form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateField(name_field);
        validateField(email_field);
        validateField(phone_field);
        validateField(message_field);
    })
})

/* To validate the selected input element */
const validateField = (element) => {
    if(element.value.trim() === ""){
        element.closest(".input_group").classList.add("error");
    }
    else{
        element.closest(".input_group").classList.remove("error");
    }
}