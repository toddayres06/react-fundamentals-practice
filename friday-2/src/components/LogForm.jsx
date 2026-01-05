import React, { useState } from 'react'
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
        console.log(`${trimmedValue} logged`)
        setInputValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                placeholder="type here..." 
                onChange={(e) => {
                    console.log(e.target.value)
                    setInputValue(e.target.value)
                }}/>
            <Button disabled={isDisabled} type="submit">Submit</Button>
        </form>
    )
}

export default LogForm