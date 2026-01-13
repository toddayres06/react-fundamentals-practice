function Button( {onClick, children, isActive, type = "button"} ) {

    const style = {backgroundColor: isActive ? "green" : "white", color: isActive ? "white" : "black"}

    return (
        <button onClick={onClick} style={style} type={type}>{children}</button>
    )
}

export default Button