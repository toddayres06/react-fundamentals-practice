import { useState } from 'react'
import Button from './Button'

function LogForm( {addLog} ) {
    const [inputValue, setInputValue] = useState("")
    const trimmedValue = inputValue.trim()
    const isDisabled = trimmedValue === ""

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!trimmedValue) {
            return
        }

        addLog(trimmedValue)
        setInputValue("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="type here..." 
                onChange={(e) => { 
                    setInputValue(e.target.value)
                    console.log(e.target.value)}
                }
                value={inputValue}
            />
            <Button disabled={isDisabled} type="submit">Submit</Button>
        </form>
    )
}

export default LogForm