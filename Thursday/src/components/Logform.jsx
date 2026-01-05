import React, { useState } from 'react'
import Button from './Button'

function LogForm({ addLog }) {
  const [inputValue, setInputValue] = useState("")
  const trimmedValue = inputValue.trim()
  const isDisabled = trimmedValue === ""

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!trimmedValue) {
      console.log("Nothing to submit—input is empty")
      return
    }

    console.log(`Submitting "${inputValue}"`)
    addLog(trimmedValue)
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit" disabled={isDisabled}>
        Submit
      </Button>
    </form>
  )
}

export default LogForm
