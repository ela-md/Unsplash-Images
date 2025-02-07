context.jsx

import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider ({children}) {

     return (
        <AppContext.Provider value={{}}>
           {children}
        </AppContext.Provider>
     )
}

export const useGlobalContext = () => useContext(AppContext)



export default AppProvider
