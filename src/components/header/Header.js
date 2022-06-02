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
                {isEditable && <Button className="yellow" text="End editing" onClick={changeEditable}/>}
                {isEditable && <Button className="red" text="Delete App"/>}
                {isEditable && <Button text="Add shortcut"/>}
                {!isEditable && <Button text="Edit" onClick={changeEditable}/>}
            </div>
        </div>
    )
}

export default Header;