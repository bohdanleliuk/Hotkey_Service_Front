import {createContext, useState} from "react";

const AppContext = createContext();

export function AppProvider({children}) {

    const [isEditable, setEditable] = useState(false);


    const changeEditable = () => {
        if (isEditable === false) {
            setEditable(true);
        } else {
            setEditable(false);
        }
    }
    return (
        <AppContext.Provider value={{isEditable, changeEditable}}>{children}</AppContext.Provider>
    )
}

export default AppContext;