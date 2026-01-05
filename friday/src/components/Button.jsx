function Button( {children, type = "button", onClick, disabled = false} ) {
    return (
        <div>
            <button onClick={onClick} type={type}>{children}</button>
        </div>
    )
}

export default Button