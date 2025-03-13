function darkMode() {
    var main = document.body;
    var buttonDiv = document.getElementsByName("MyDIV");
    main.classList.toggle("dark-mode");
    if (buttonDiv.innerHTML === "Dark Mode") {
        buttonDiv.innerHTML = "Light Mode";
    }
    else {
        buttonDiv.innerHTML = "Dark Mode";
    }
}