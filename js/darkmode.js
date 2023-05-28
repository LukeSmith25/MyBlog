/* ALWAYS TEST WHEN DOING JS DEV */

// let darkMode is only enabled when page is refreshed -> localStorage is changing and not variable
// update darkMode in event listener
let darkMode = localStorage.getItem("darkMode"); // localStorage is similar to cookies; never sent to server
const darkModeToggle = document.querySelector('#dark-mode-toggle');


// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

// make function global and not locked to click scope
const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add("darkmode");
    // 2. update darkMode in the localStorage
    // 'darkMode' can be any local variable name
    // [MAP] darkMode and enabled are key value pairs
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    // 1. remove the class darkmode to the body
    document.body.classList.remove("darkmode");
    // 2. update darkMode in the localStorage
    localStorage.setItem("darkMode", null); // [MAP] darkMode and null are key value pairs; use null for type safety
}

// did they have darkMode on with previous visit to website?
if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    // used for testing button click
    // console.log("test");
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        // use to debug darkMode status
        //console.log(darkMode);
    } else {
        disableDarkMode();
        // use to debug darkMode status
        //console.log(darkMode);
    }
});