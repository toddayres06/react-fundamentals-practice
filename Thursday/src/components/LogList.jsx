import React from 'react'
import Button from './Button'

function LogList( {logs, removeLog} ) {
    if(logs.length === 0) return (
        <div className="history-container">
            <p>No Logs to display yet, submit one above</p>
        </div>
    )
    return (
        <div className="history-container">
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}
                    <Button onClick={() => removeLog(index)}>Remove</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LogList