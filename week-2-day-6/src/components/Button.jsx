function Button( {children, onClick, isActive} ) {
    const style = {backgroundColor: isActive ? "green" : "white", color: isActive ? "white" : "black"}
    return (
        <button style={style} onClick={onClick}>{children}</button>
    )
}

export default Button