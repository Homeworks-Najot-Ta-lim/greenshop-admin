import { createContext, ReactNode, useEffect, useState } from "react";
import { TokenContextType } from "../types/TokenContextType";

export const Context = createContext<TokenContextType>({
    token: null,
    setToken: ()=>null
})

export const AuthContext = ({children}: {children: ReactNode})=>{
    const [token, setToken] = useState(localStorage.getItem("token") || null)

    useEffect(()=>{
        if(token){
            localStorage.setItem("token",token)
        }
    },[token])
    return (
        <Context.Provider value={{token,setToken}}>{children}</Context.Provider>
    )
}