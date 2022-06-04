import React, {useEffect, useState} from "react";
import NavBar from "./components/navbar/NavBar";
import HotkeyList from "./components/hotkeylist/HotkeyList";
import "./App.css"
import Header from "./components/header/Header";
import {AppProvider} from "./AppContext";
import axios from "axios";

function App() {

    const PATH = "http://localhost:8080/";

    const [applications, setApplications] = useState([]);

    const [hotkeys, setHotkeys] = useState([]);

    const [currentApp, setCurrentApp] = useState({});

    const getApplicationData = async () => {
        try {
            return await axios.get(`${PATH}app`);
        } catch (err) {
            console.log(err.toString())
        }
    }

    const getHotkeyData = async () => {
        try {
            return await axios.get(`${PATH}/app/${currentApp.id}/hotkeys/`);
        } catch (err) {
            console.log(err.toString())
        }
    }

    useEffect( () => {
        (async () => {
            const applicationData = await getApplicationData();
            setApplications(applicationData.data);
        })()
    },[])

    useEffect( () => {
        (async () => {
            const hotkeyData = await getHotkeyData();
            setHotkeys(hotkeyData.data.hotkeys);
        })()
    },[currentApp])

    useEffect(() => {
        setCurrentApp(applications[0]);
    }, [applications])

    const changeApp = (app) => setCurrentApp(app);

    return (

        <div className="App">
            <AppProvider>
            <NavBar applications={applications} changeApp={changeApp} currentApp={currentApp}/>
            <div className="space-left"/>
            <div className="main">
                <Header currentApp={currentApp}/>
                <HotkeyList hotkeys={hotkeys}/>
            </div>
            <div className="space-right"/>
            </AppProvider>
        </div>

    )
}

export default App;

export class setCurrentApp {
}