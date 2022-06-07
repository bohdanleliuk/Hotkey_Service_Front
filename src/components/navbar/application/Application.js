
import React, {useEffect, useState} from "react";
import "./Application.css";
import {useParams} from "react-router-dom";

function Application({app, img, active}) {

    const [pointClass, setPointClass] = useState("off");

    const {id} = useParams();

    useEffect(() => {
        if (active) {
            setPointClass("on")
        } else {
            setPointClass("off")
        }
    },[id])

    return (
        <div>
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