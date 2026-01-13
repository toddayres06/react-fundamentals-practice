function Button( {onClick, isActive, type = "button", children} ) {

    const style = {backgroundColor: isActive ? "green" : "white", color: isActive ? "white" : "black"}

    return (
        <button onClick={onClick} style={style}>{children}</button>
    )
}

export default Button