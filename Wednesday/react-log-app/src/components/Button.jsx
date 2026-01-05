import React from 'react'

function Button( {children, type="button", onClick} ) {


    return (
        <div>
            <button type={type} onClick={onClick}>{children}</button>
        </div>
    )
}


export default Button