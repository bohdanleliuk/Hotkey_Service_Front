
import React, {useEffect, useState} from "react";
import "./Application.css";

function Application({app, changeApp, currentApp, img}) {

    const [pointClass, setPointClass] = useState("off");

    useEffect(() => {
        if (currentApp && currentApp.id === app.id) {
            setPointClass("on")
        } else {
            setPointClass("off")
        }
    },[currentApp])

    return (
        <div onClick={() => changeApp(app)}>
        <div className="Application">
            <div className={`point ${pointClass}`}/>
            <div className="app-icon">
                <img src={img} className="img"/>
            </div>
        </div>
            <div className="app-title">{app.name}</div>
        </div>
    )
}

export default Application;