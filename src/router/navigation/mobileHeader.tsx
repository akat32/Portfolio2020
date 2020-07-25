import React, { useState } from 'react'
import './mobile.scss'
import { NavLink } from 'react-router-dom'
export const MobileHeader = props => {
    const [ isOpen, setIsOpen] = useState(false)
    return (
        <div className="mobileHeader">
            <p className="userName">Park Tae Wook</p>
            <div className="dump"/>
            <div className="openBtn" onClick = {()=> setIsOpen(isOpen => !isOpen)} />
            { isOpen ? <div className="headerBack" onClick = {() => setIsOpen(false) } /> : null}
            <Menu lang = { props.lang } setLang = {props.setLang} isOpen = {isOpen}/>
        </div>
    )
}

const Menu = props => {
    return (
        <div className="mobileHeaderMenu" style = {{ right: props.isOpen ? 0 : '-100vw'}}>
            <div className="innerMenu">    
                <li className="innerLink">
                    <NavLink exact to = '/'>Home</NavLink>
                </li>    
                <li className="innerLink">
                    <NavLink exact to = '/'>Resume</NavLink>
                </li>    
                <li className="innerLink">
                    <NavLink exact to = '/'>Github</NavLink>
                </li>    
                <li className="innerLink">
                    <NavLink exact to = '/'>Blog</NavLink>
                </li>    
                <li className="innerLink">
                    <NavLink exact to = '/'>Portfolio</NavLink>
                </li>
            </div>
        </div>
    )
}