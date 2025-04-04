// ****** toggle style switcher *************

const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ****** Theme colors *************

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(colors) {
    alternateStyles.forEach((style) => {
        if (colors === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}



// ****** Theme light and dark mood *************
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("I").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    document.getElementById('propic').style.display = 'block'
    document.body.classList.toggle("propic");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } else{
        dayNight.querySelector("I").classList.add("fa-moon");
    }
})




