import Button from './Button'

function LogList( {logs, removeLog}) {
    if (logs.length === 0) return (
        <p>Nothing Logged</p>
    )

    return (
        <ul>
            {logs.map((log, index) => (
                <li key={index}>{log}
                    <Button onClick={() => removeLog(index)}>Remove</Button>
                </li>
            ))}
        </ul>
    )
}

export default LogList