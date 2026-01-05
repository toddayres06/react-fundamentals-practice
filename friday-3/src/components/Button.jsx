function Button( {children, style={}, type = "button", disabled = false, onClick}) {

    const buttonStyle = {backgroundColor: disabled ? "red" : "blue"}
    return (
        <button onClick={onClick} style={buttonStyle} disabled={disabled}>{children}</button>
    )
}

export default Button