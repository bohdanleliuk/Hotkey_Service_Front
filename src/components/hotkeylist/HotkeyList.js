import React, { useContext } from "react";
import Hotkey from "./hotkey/Hotkey";
import "./HotkeyList.css"
import AppContext from "../../AppContext";
import Application from "../navbar/application/Application";

function HotkeyList({hotkeys}) {

    const {isEditable} = useContext(AppContext);

    const listOses = getListOses(hotkeys);

    const listTransformHotkeys = transformHotkeys(hotkeys, listOses);


    const listHotkeys = listTransformHotkeys.map((hotkey) =>
        <Hotkey id={hotkey.id} description={hotkey.description} combination={hotkey.combination} combination2={hotkey.combination2}/>
    )

    return (
        <div className="HotkeyList">
            <div className="column-titles">
                <div className="column-title-item title-action">Action</div>
                <div className="column-title-item title-os1">{listOses[0]}</div>
                {listOses[1] != null && <div className="column-title-item title-os2">{listOses[1]}</div>}
                {isEditable && <div className="space"></div>}
                {isEditable && <div className="space"></div>}
            </div>
            {listHotkeys}
        </div>
    )
}

function getListOses(hotkeys) {
    let list = [];

    hotkeys.forEach((h) => {
        if (!list.includes(h.os.name))
           list.push(h.os.name);
    })
    return list;
}

function transformHotkeys(hotkeys, listOses) {
    let result = [];

    if (listOses.length === 1) {
        return hotkeys;
    }

    hotkeys.forEach((h) => {
        if (h.os.name === listOses[0]) {
            result.push({
                description: h.description,
                combination: h.combination
            })
        }
    })

    hotkeys.forEach((h) => {
        if (h.os.name === listOses[1]) {
            for (let i = 0; i < result.length; i++) {
                if (h.description === result[i].description) {
                    result[i].combination2 = h.combination;
                }
            }
        }
    })

    return result;
}

export default HotkeyList;