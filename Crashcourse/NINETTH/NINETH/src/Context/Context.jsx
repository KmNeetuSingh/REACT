import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [token,setToken]=useState(null);
    const [isAuth,setIsAuth]=useState(false);

    const Logout=()=>{
        setIsAuth(false)
        setToken(null)
    }

    return(
<AuthContext.Provider value={{setIsAuth,setToken,Logout,isAuth,token}}>
    {children}
</AuthContext.Provider>
    )
}