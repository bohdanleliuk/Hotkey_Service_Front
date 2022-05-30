import React from "react";
import Hotkey from "./hotkey/Hotkey";
import "./HotkeyList.css"

function HotkeyList() {


    return (
        <div className="HotkeyList">
            <div className="column-titles">
                <div className="column-title-item title-action">
                    Action
                </div>
                <div className="column-title-item title-os1">
                    macOS
                </div>
                <div className="column-title-item title-os2">
                    Windows
                </div>
            </div>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
            <Hotkey/>
        </div>
    )
}

export default HotkeyList;