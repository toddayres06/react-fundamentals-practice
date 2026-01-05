// handleButtonClick
// renderHistory
// handleSubmit
const buttons = document.querySelectorAll(".container-main button")
const form = document.querySelector("form")
const inputEl = document.getElementById("form-input")
const historyContainer = document.querySelector(".container-history")

let submitHistory = []

const renderHistory = () => {
    const filteredHistory = submitHistory.filter(item => item.length > 0)

    historyContainer.innerHTML = filteredHistory.map(item => `<p>${item}</p>`)
    .join("")
}

const handleSubmit = (e) => {
    e.preventDefault()

    const { value } = inputEl
    const trimmedValue = value.trim()

    if(!trimmedValue) return 

    submitHistory = [...submitHistory, trimmedValue]

    renderHistory()
    inputEl.value = ""
    inputEl.focus()
}

const getTotalCharacterCounter = () => {
    return submitHistory.reduce((total, item) => total + item.length, 0)
}

const handleButtonClick = (button) => {
    console.log(`Clicked ${button.textContent}`)
}

buttons.forEach((button) => {
    button.addEventListener("click", () => (handleButtonClick(button)))
})

form.addEventListener("submit", handleSubmit)