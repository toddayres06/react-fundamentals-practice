import React from 'react'
import Button from './Button'

function LogList( {logs, onDelete} ) {

    return (
        <div>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}
                        <Button onClick={() => onDelete(index)}>Delete</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
                    

export default LogList