import React, {useEffect, useState} from "react";
import "./Button.css"

function Button(props) {

    const [text, setText] = useState(props.text);

    const [type, setType] = useState(props.type);

    const [style, setStyle] = useState({});

    useEffect(() => {
        if (type === "delete") {
            setStyle({
                color: "#FF6A6A",
                border: "2px solid #FF6A6A"
            })
        }
        if (type === "end") {
            setStyle({
                color: "#FFD99F",
                border: "2px solid #FFD99F"
            })
        }
    }, [])

    return(
        <button className="Button" style={style}>
            {text}
        </button>
    )
}

export default Button;