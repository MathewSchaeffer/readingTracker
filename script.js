const focus = document.getElementById("inputBox");

function focusInput() {
    focus.focus()
}

setInterval(focusInput, 2);

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter Key was Pressed!")
        console.log(focus.value);
        focus.value = "";
    }
})