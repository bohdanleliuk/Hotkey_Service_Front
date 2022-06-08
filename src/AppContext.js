import {createContext, useState} from "react";

const AppContext = createContext();

export function AppProvider({children}) {

    const [isEditable, setEditable] = useState(false);

    const [deletedApp, setDeletedApp] = useState(false);

    const [deletedHotkey, setDeletedHotkey] = useState(false);

    const changeEditable = () => {
        setEditable(!isEditable);
    }

    const changeDeletedApp = () => {
        setDeletedApp(!deletedApp);
    }

    const changeDeletedHotkey = () => {
        setDeletedHotkey(!deletedHotkey);
    }

    return (
        <AppContext.Provider value={{isEditable, changeEditable, deletedApp, changeDeletedApp, deletedHotkey, changeDeletedHotkey}}>{children}</AppContext.Provider>
    )
}

export default AppContext;