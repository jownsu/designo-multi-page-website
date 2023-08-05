document.addEventListener("DOMContentLoaded", () => {

    const menu_btn = document.querySelector("nav .menu");

    /* Toggling of navigation on mobile */
    menu_btn.addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("active");
        menu_btn.classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    });
})