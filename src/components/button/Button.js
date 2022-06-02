import React, {useEffect, useState} from "react";
import "./Button.css"
import {hover} from "@testing-library/user-event/dist/hover";

function Button({className, text, onClick}) {

    return(
        <button className={`Button ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;