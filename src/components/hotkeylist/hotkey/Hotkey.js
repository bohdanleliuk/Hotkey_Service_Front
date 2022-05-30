
import React, { useContext } from "react";
import "./Hotkey.css";
import AppContext from "../../../AppContext";

function Hotkey() {

    const {isEditable} = useContext(AppContext);

    return (
        <div className="Hotkey">
            <div className="action">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
            <div className="line"></div>
            <div className="combination_1">CMD+C</div>
            <div className="line"></div>
            <div className="combination_2">CTRL+C</div>
            {isEditable && <div className="icon"></div>}
            {isEditable && <div className="icon2"></div>}
        </div>
    )
}

export default Hotkey;