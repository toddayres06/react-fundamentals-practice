import { useState } from 'react'
import Button from './Button'

function LogForm( {addLog} ) {
    const [inputValue, setInputValue] = useState("")
    const trimmedValue = inputValue.trim()
    const isDisabled = trimmedValue === ""

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!trimmedValue) {
            return
        }

        addLog(trimmedValue)
        setInputValue("")

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => {
                    console.log(e.target.value)
                    setInputValue(e.target.value)
                }}
                placeholder="Type here..." />
            <Button 
                type="submit"
                disabled={isDisabled}>Submit
            </Button>
        </form>
    )
}

export default LogForm