// handleButtonClick
// renderHistory
// handleSubmit
console.log("JS loaded")
const buttons = document.querySelectorAll("button")
const form = document.querySelector("form")
const inputEl = document.getElementById("form-input")
const historyContainer = document.querySelector(".container-history")

const handleButtonClick = (button) => {
    console.log(`Clicked ${button.textContent}`)
}

buttons.forEach((button) => {
    button.addEventListener("click", () => (handleButtonClick(button)))
})