import React from "react";
import NavBar from "./components/navbar/NavBar";
import HotkeyList from "./components/hotkeylist/HotkeyList";
import "./App.css"
import Button from "./components/button/Button";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div className="space-left"/>
            <div className="main">
                <div className="header">
                    <div className="title">Shortcuts for WebStorm</div>
                    <div className="button-container">
                        <Button type="end" text="End editing"/>
                        <Button type="delete" text="Delete App"/>
                        <Button text="Add shortcut"/>
                    </div>
                </div>

                <HotkeyList/>
            </div>
            <div className="space-right"/>
        </div>
    )
}

export default App;
