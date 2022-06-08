import React, {useContext} from "react";
import Button from "../button/Button";
import AppContext from "../../AppContext";
import "./Header.css";
import axios from "axios";
import {Link} from "react-router-dom";


function Header({app}) {

    const PATH = "http://localhost:8080/";

    const {changeDeletedApp} = useContext(AppContext);

    const DeleteApplication = (id) => {
        axios.delete(`${PATH}app/${id}`)
            .then(() => {changeDeletedApp()});
    }

    const {isEditable, changeEditable} = useContext(AppContext);

    return (
        <div className="Header">
            <div className="title">{`Shortcuts for ${app.name}`}</div>
            <div className="button-container">
                {isEditable && <Button className="yellow" text="End editing" onClick={changeEditable}/>}
                {isEditable && <Link to="/"><Button className="red" text="Delete App" onClick={() => DeleteApplication(app.id)}/></Link>}
                {isEditable && <Button text="Add shortcut"/>}
                {!isEditable && <Button text="Edit" onClick={changeEditable}/>}
            </div>
        </div>
    )
}

export default Header;