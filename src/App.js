import React, {useContext} from "react";
import NavBar from "./components/navbar/NavBar";
import HotkeyList from "./components/hotkeylist/HotkeyList";
import "./App.css"
import Header from "./components/header/Header";
import AppContext, {AppProvider} from "./AppContext";

function App() {

    return (

        <div className="App">
            <AppProvider>
            <NavBar/>
            <div className="space-left"/>
            <div className="main">
                <Header/>
                <HotkeyList/>
            </div>
            <div className="space-right"/>
            </AppProvider>
        </div>

    )
}

export default App;
