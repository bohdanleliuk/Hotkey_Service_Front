
import React from "react";
import "./Application.css";

function Application({app, changeApp, img}) {


    return (
        <div onClick={() => changeApp(app)}>
        <div className="Application">
            <div className="point"/>
            <div className="app-icon">
                <img src={img} className="img"/>
            </div>
        </div>
            <div className="app-title">{app.name}</div>
        </div>
    )
}

export default Application;