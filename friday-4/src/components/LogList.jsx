import Button from './Button'

function LogList( {logs, removeLog} ) {
    return (
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {log}
                        <Button onClick={() => removeLog(index)}>Remove Item</Button>
                    </li>
                ))}
            </ul>
    )
}


export default LogList