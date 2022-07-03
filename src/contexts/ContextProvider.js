import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext()

const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode, setcurrentMode] = useState('Light')
    const [themeSettings, setthemeSettings] = useState(false)

    const handleClick = (clicked)=>{
        console.log(isClicked[clicked])
        setisClicked({...initialState, [clicked]:!isClicked[clicked]})
    }
    const cancelClick = (clicked)=>{
        setisClicked({...initialState, [clicked]:false})
    }


    const setMode =(e) => {
        setcurrentMode(e.target.value)

        setthemeSettings(false)
        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor =(color) => {
        setcurrentColor(color)

        setthemeSettings(false)
        localStorage.setItem('colorMode', color)
    }

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setisClicked, 
        handleClick, cancelClick, screenSize, setscreenSize, currentColor, setcurrentColor, currentMode, setcurrentMode,
        setMode, setColor, themeSettings, setthemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)