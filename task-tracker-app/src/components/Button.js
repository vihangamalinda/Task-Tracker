import React from 'react'

function Button({text,colour,onAdd}) {
    return (
        <button className="btn" style={{backgroundColor:colour}} onClick={onAdd}>{text}</button>
    )
}

export default Button
