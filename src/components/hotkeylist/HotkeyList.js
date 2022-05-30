import React, { useContext } from "react";
import Hotkey from "./hotkey/Hotkey";
import "./HotkeyList.css"
import AppContext from "../../AppContext";

function HotkeyList() {

    const {isEditable} = useContext(AppContext);

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
                {isEditable && <div className="space"></div>}
                {isEditable && <div className="space"></div>}
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