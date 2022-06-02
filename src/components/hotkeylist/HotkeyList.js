import React, { useContext } from "react";
import Hotkey from "./hotkey/Hotkey";
import "./HotkeyList.css"
import AppContext from "../../AppContext";
import Application from "../navbar/application/Application";

function HotkeyList({hotkeys}) {

    const {isEditable} = useContext(AppContext);

    const listRefactorHotkeys = RefactorHotkeys(hotkeys);

    const listHotkeys = listRefactorHotkeys.map((hotkey) =>
        <Hotkey id={hotkey.id} description={hotkey.description} combination={hotkey.combination} combination2={hotkey.combination2}/>
    )

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
            {listHotkeys}
        </div>
    )
}

function RefactorHotkeys(hotkeys) {
    let result = [];

    for (let i = 0, l = hotkeys.length; i < l; i++) {
        for (let j = 0, l = hotkeys.length; j < l; j++) {
            if (hotkeys[i].description === hotkeys[j].description) {
                if (hotkeys[i].os.name === "macOS" && hotkeys[j].os.name === "Windows") {
                    result.push({
                        description: hotkeys[i].description,
                        combination: hotkeys[i].combination,
                        combination2: hotkeys[j].combination
                    })
                }
            }
        }
    }
    return result;
}

export default HotkeyList;