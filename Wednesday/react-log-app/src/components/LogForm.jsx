import React, { useState } from 'react'
import Button from './Button'

function LogForm( {onAddLog} ) {

    const [inputValue, setInputValue] = useState("")

    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!inputValue.trim()) return
        onAddLog(inputValue)
        setInputValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={inputValue} 
                placeholder="type here..." 
                type="text" 
                onChange={(e) => {
                setInputValue(e.target.value)
                console.log(e.target.value)
                }}
                 />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default LogForm