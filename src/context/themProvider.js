"use client"

import { createContext,useState } from "react"

//  declear context api 
 export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'dark' ? "light" : 'dark'))
    }
    return (
        <ThemeContext.Provider value={{ toggleMode, mode }}>

            <div className={` theme ${mode}`}> {children}  </div>

        </ThemeContext.Provider>

    )
}
