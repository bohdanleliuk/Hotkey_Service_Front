import React, {useEffect, useState} from "react";
import NavBar from "./components/navbar/NavBar";
import HotkeyList from "./components/hotkeylist/HotkeyList";
import "./App.css"
import {AppProvider} from "./AppContext";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";

function App() {

    const PATH = "http://localhost:8080/";

    const [applications, setApplications] = useState([]);


    const getApplicationData = async () => {
        try {
            return await axios.get(`${PATH}app`);
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

    return (
        <Router>
        <div className="App">
            <AppProvider>
            <NavBar applications={applications}/>
            <div className="space-left"/>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/app/:id/hotkeys" element={<HotkeyList/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
            <div className="space-right"/>
            </AppProvider>
        </div>
        </Router>
    )
}

export default App;

export class setCurrentApp {
}