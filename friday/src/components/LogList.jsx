import Button from './Button'

function LogList( {logs, removeLog} ) {
    if (logs.length === 0) return (
        <div className="history-container">
            <p>Please submit an item</p>
        </div>
    )
    return (
        <div className="history-container">
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}
                        <Button onClick={() => removeLog(index)}>Delete</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LogList