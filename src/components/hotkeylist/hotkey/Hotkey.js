
import React, {useContext, useState} from "react";
import "./Hotkey.css";
import AppContext from "../../../AppContext";
import axios from "axios";

function Hotkey({description, combination, combination2, id, id2}) {

    const PATH = "http://localhost:8080/";

    const {isEditable} = useContext(AppContext);

    const {changeDeletedHotkey} = useContext(AppContext);


    const DeleteHotkey = (id, id2) => {
        if (id) {
            axios.delete(`${PATH}hotkey/${id}`)
                .then(() => {changeDeletedHotkey()});
        }
        if (id2) {
            axios.delete(`${PATH}hotkey/${id2}`)
                .then(() => {changeDeletedHotkey()});
        }
    }

    return (
        <div className="Hotkey">
            <div className="action">{description}</div>
            <div className="line"></div>
            <div className="combination_1">{combination}</div>
            {(combination2 != null) && <div className="line"></div>}
            {(combination2 != null) && <div className="combination_2">{combination2}</div>}
            {isEditable && <div className="icon_delete" onClick={() => DeleteHotkey(id, id2)}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 2.25L2.24999 9.75001" stroke="#FF6A6A" stroke-width="3" stroke-linecap="round"/>
                    <path d="M9.75 9.75L2.24999 2.24999" stroke="#FF6A6A" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>}
            {isEditable && <div className="icon_update">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 11.25L4.25 4.25" stroke="#9FFFD1" stroke-width="5" stroke-linecap="square"/>
                    <path d="M16.5302 12.7467L17.8236 17.5736L12.9967 16.2802L16.5302 12.7467Z" fill="#9FFFD1"/>
                </svg>

            </div>}
        </div>
    )
}



export default Hotkey;