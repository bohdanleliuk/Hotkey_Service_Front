
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
            {isEditable && <div className="icon"></div>}
            {isEditable && <div className="icon2"></div>}
        </div>
    )
}



export default Hotkey;