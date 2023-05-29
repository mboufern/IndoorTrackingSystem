import { createContext, useContext, useState } from "react";


const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
})



export const StateProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Youssef"
    })
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))//localStorage.getItem('ACCESS_TOKEN')

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)