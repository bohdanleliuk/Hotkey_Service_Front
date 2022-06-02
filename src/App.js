import React, {useContext, useEffect, useState} from "react";
import NavBar from "./components/navbar/NavBar";
import HotkeyList from "./components/hotkeylist/HotkeyList";
import "./App.css"
import Header from "./components/header/Header";
import AppContext, {AppProvider} from "./AppContext";
import axios from "axios";

function App() {

    const [applications, setApplications] = useState([]);

    const [hotkeys, setHotkeys] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/app')
            .then(response =>  {
                setApplications(response.data)
            })
    },[])

    useEffect(() => {
        axios.get('http://localhost:8080/app/fedf67ec-dc4a-43cf-a28b-ccb6742ef1c9/hotkeys/')
            .then(response =>  {
                setHotkeys(response.data.hotkeys)
            })
    },[])

    return (

        <div className="App">
            <AppProvider>
            <NavBar applications={applications}/>
            <div className="space-left"/>
            <div className="main">
                <Header/>
                <HotkeyList hotkeys={hotkeys}/>
            </div>
            <div className="space-right"/>
            </AppProvider>
        </div>

    )
}

export default App;
