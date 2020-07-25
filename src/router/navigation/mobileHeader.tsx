import React, { useState } from 'react'
import './mobile.scss'
export const MobileHeader = props => {
    const [ isOpen, setIsOpen] = useState(false)
    return (
        <div className="mobileHeader">
            <p className="userName">Park Tae Wook</p>
            <div className="openBtn" onClick = {()=>setIsOpen(isOpen => !isOpen)} />
            { isOpen ? <Menu { ...props }/> : null}            
        </div>
    )
}

const Menu = props => {
    return (
        <div></div>
    )
}