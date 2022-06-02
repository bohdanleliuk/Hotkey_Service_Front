
import React, {useEffect, useState} from "react";
import "./Application.css"

function Application(props) {


    return (
        <div>
        <div className="Application">
            <div className="point"/>
            <div className="app-icon">
                <img src={props.img} className="img"/>
            </div>
        </div>
            <div className="app-title">{props.name}</div>
        </div>
    )
}

export default Application;