import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Nav() {
    const [mode, setMode] = useState("light")

    function modeSwap() {
        if (mode === "light") {
            setMode("dark")
        } else {
            setMode("light")
        }
    }
    
    return (
        <>
            <ul className="main-nav">
                <NavLink to="/"><li className="main-nav-item">Home</li></NavLink>
                <NavLink to="/about"><li className="main-nav-item">About</li></NavLink>
                <NavLink to="/shop"><li className="main-nav-item">Shop</li></NavLink>
                <NavLink to="/contact"><li className="main-nav-item">Contact</li></NavLink>
                <li><button onClick={modeSwap}>Switch Mode: {mode}</button></li>
            </ul>
        </>
    )
}