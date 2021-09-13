import React from 'react'
import Button from './Button'

const Header = ({title,onAdd,showForm}) => {
    
    return (
        <header className="header">
            <h1>{title}</h1>
             <Button colour={showForm? "red" : "green"} text={showForm ? "Close" : "Add"} onAdd={onAdd} /> 
          
        </header>
    )
}

export default Header
