function Button( {type = "button", children, isActive, onClick}) {

    const style = {backgroundColor: isActive ? "green" : "white",
                    color: isActive ? "white" : "black"
                    }

    return (
        <button type={type} style={style} onClick={onClick}>{children}</button>
    )
}

export default Button