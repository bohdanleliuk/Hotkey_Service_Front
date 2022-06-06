
import React, { useContext } from "react";
import "./Hotkey.css";
import AppContext from "../../../AppContext";

function Hotkey(props) {

    const {isEditable} = useContext(AppContext);

    return (
        <div className="Hotkey">
            <div className="action">{props.description}</div>
            <div className="line"></div>
            <div className="combination_1">{props.combination}</div>
            {(props.combination2 != null) && <div className="line"></div>}
            {(props.combination2 != null) && <div className="combination_2">{props.combination2}</div>}
            {isEditable && <div className="icon-border">
                <svg className="icon-svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 2.25L2.24999 9.75001" stroke="#FF6A6A" stroke-width="3" stroke-linecap="round"/>
                <path d="M9.75 9.75L2.24999 2.24999" stroke="#FF6A6A" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>}
            {isEditable && <div className="icon2-border">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 11.25L4.25 4.25" stroke="#9FFFD1" stroke-width="5" stroke-linecap="square"/>
                <path d="M16.5302 12.7467L17.8236 17.5736L12.9967 16.2802L16.5302 12.7467Z" fill="#9FFFD1"/>
                </svg>
            </div>}
        </div>
    )
}



export default Hotkey;