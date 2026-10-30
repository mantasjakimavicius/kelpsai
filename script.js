const themeButton = document.getElementById("changeTheme");

let isDarkTheme = false;

themeButton.addEventListener("click" , changeTheme);

function changeTheme() {
    if (isDarkTheme === false) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";

        themeButton.textContent = "Šviesi tema";
        themeButton.setAttribute("aria-pressed" , "true");
        
        isDarkTheme = true;
    } else {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";

        themeButton.textContent = "Tamsi tema";
        themeButton.setAttribute("aria-pressed" , "false");

        isDarkTheme = false;
    }
}