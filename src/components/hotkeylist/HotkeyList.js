import React, {useContext, useEffect, useState} from "react";
import Hotkey from "./hotkey/Hotkey";
import "./HotkeyList.css"
import AppContext from "../../AppContext";
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "../header/Header";

function HotkeyList() {

    const PATH = "http://localhost:8080/";

    const {isEditable} = useContext(AppContext);

    const [hotkeys, setHotkeys] = useState([]);

    const listOses = getListOses(hotkeys);

    const listTransformHotkeys = transformHotkeys(hotkeys, listOses);

    const {id} = useParams();

    const [appName, setAppName] = useState([]);


    const getHotkeyData = async () => {
        try {
            return await axios.get(`${PATH}/app/${id}/hotkeys/`);
        } catch (err) {
            console.log(err.toString())
        }
    }

    useEffect( () => {
        (async () => {
            const hotkeyData = await getHotkeyData();
            setHotkeys(hotkeyData.data.hotkeys);
            setAppName(hotkeyData.data.name)
        })()
    },[id])


    const listHotkeys = listTransformHotkeys.map((hotkey) =>
        <Hotkey key={hotkey.id} id={hotkey.id} description={hotkey.description} combination={hotkey.combination} combination2={hotkey.combination2}/>
    )

    return (
        <div className="HotkeyList">
            <Header appName={appName}/>
            <div className="column-titles">
                <div className="column-title-item title-action">Action</div>
                <div className="column-title-item title-os1">{listOses[0]}</div>
                {listOses[1] != null && <div className="column-title-item title-os2">{listOses[1]}</div>}
                {isEditable && <div className="space"></div>}
                {isEditable && <div className="space"></div>}
            </div>
            {listHotkeys}
        </div>
    )
}

function getListOses(hotkeys) {
    let list = [];

    hotkeys.forEach((hotkey) => {
        if (!list.includes(hotkey.os.name))
           list.push(hotkey.os.name);
    })
    return list;
}

function transformHotkeys(hotkeys, listOses) {
    const result = [];

    if (listOses.length === 1) {
        return hotkeys;
    }

    hotkeys.forEach((hotkey) => {
        if (hotkey.os.name === listOses[0]) {
            result.push({
                description: hotkey.description,
                combination: hotkey.combination
            })
        }
    })

    hotkeys.forEach((hotkey) => {
        if (hotkey.os.name === listOses[1]) {
            for (let i = 0; i < result.length; i++) {
                if (hotkey.description === result[i].description) {
                    result[i].combination2 = hotkey.combination;
                }
            }
        }
    })

    return result;
}

export default HotkeyList;