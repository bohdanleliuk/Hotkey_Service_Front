import React, {useContext} from "react";
import Button from "../button/Button";
import AppContext from "../../AppContext";
import "./Header.css";


function Header() {

    const {isEditable, changeEditable} = useContext(AppContext);

    return (
        <div className="Header">
            <div className="title">Shortcuts for WebStorm</div>
            <div className="button-container">
                {isEditable && <Button type="end" text="End editing" click={changeEditable}/>}
                {isEditable && <Button type="delete" text="Delete App"/>}
                {isEditable && <Button text="Add shortcut"/>}
                {!isEditable && <Button text="Edit" click={changeEditable}/>}
            </div>
        </div>
    )
}

export default Header;