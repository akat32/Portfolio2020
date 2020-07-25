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
                <li className="langBox">
                    <div className="globalImg"/>
                    <div className="nowLang">{ props.lang }</div>
                </li>
                <li className="innerLink">
                    <NavLink exact to = '/' activeClassName = "activeMenu">Home</NavLink>
                </li>    
                <li className="innerLink">
                    <NavLink exact to = '/resume' activeClassName = "activeMenu">Resume</NavLink>
                </li>    
                <li className="innerLink">
                    Github
                </li>    
                <li className="innerLink">
                    Blog
                </li>    
                <li className="innerLink">
                    <NavLink exact to = '/portfolio' activeClassName = "activeMenu">Portfolio</NavLink>
                </li>
            </div>
        </div>
    )
}