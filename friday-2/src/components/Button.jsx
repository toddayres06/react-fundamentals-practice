import React from 'react'

function Button( {children, disabled = false, type = "button", onClick,} ) {
    return (
            <button disabled={disabled} type={type} onClick={onClick}>{children}</button>
    )
}

export default Button