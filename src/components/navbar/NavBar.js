
import React, {useEffect, useState, useContext} from "react";
import Application from "./application/Application";
import "./NavBar.css";
import AppContext from "../../AppContext";
import {Link, NavLink} from "react-router-dom";
import Modal from "../modal/Modal";
import axios from "axios";
import Button from "../button/Button";

function NavBar() {

    const PATH = "http://localhost:8080/";

    const [activeForm, setActiveForm] = useState(false);

    const [newAppName, setNewAppName] = useState('');

    const [url, setUrl] = useState('');

    const [os1, setOs1] = useState({});

    const [os1Name, setOs1Name] = useState('none');

    const [os2, setOs2] = useState({});

    const [checkedOs2, setCheckedOs2] = useState(false);

    const [checkedHotkeyFirst, setCheckedHotkeyFirst] = useState(false);

    const [applications, setApplications] = useState([]);

    const [oses, setOses] = useState([]);

    const {deletedApp} = useContext(AppContext);

    const resetFormData = () => {
        setNewAppName('');
        setUrl('');
        setOs1({});
        setOs1Name('none');
        setOs2({});
        setCheckedOs2(false);
        setCheckedHotkeyFirst(false);
    }

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
    },[deletedApp])

    const getOsData = async () => {
        try {
            return await axios.get(`${PATH}os`);
        } catch (err) {
            console.log(err.toString())
        }
    }

    useEffect( () => {
        (async () => {
            const osData = await getOsData();
            setOses(osData.data);
        })()
    },[])

    const changeOs = (osName) => {
        setOs1Name(osName);
        oses.forEach((os) => {
            if (os.name === osName) {
                setOs1(os);
            } else {
                setOs2(os);
            }
        })
    }

    const parseHotkeys = () => {
        axios.post(`${PATH}app`, {
            name: newAppName
        }).then()
    }

    const listApplications = applications.map((app) =>
        <NavLink to={`/app/${app.id}/hotkeys`} className={({ isActive }) => (isActive ? "link-active" : "link")}>
        <Application key={app.id} app={app} img="https://icon-library.com/images/icon-for-iphone-app/icon-for-iphone-app-10.jpg"/>
        </NavLink>
    )

    return (
        <div className="NavBar">
            <Link to="/">
            <svg className="logo" width="119" height="40" viewBox="0 0 119 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.703125 13.8789C0.714844 17.3359 3.60938 19.293 7.99219 19.293C12.6562 19.293 15.375 17.0781 15.375 13.5977C15.375 10.8555 13.6641 9.36719 10.0312 8.71094L8.33203 8.40625C6.64453 8.10156 5.91797 7.73828 5.91797 6.97656C5.91797 6.21484 6.62109 5.60547 8.00391 5.60547C9.36328 5.60547 10.418 6.20312 10.4531 7.23438H15.0234C15 3.89453 12.4688 1.79688 7.94531 1.79688C3.92578 1.79688 0.996094 3.94141 0.996094 7.33984C0.996094 9.96484 2.83594 11.6641 6.19922 12.2617L7.89844 12.5664C9.79688 12.9062 10.4531 13.2461 10.4531 14.043C10.4531 14.875 9.53906 15.4844 8.05078 15.4844C6.64453 15.4844 5.46094 14.8984 5.27344 13.8789H0.703125ZM17.0156 19H21.8203V11.7695C21.8203 10.5625 22.4648 9.68359 23.6602 9.68359C24.8672 9.68359 25.5 10.4805 25.5 11.7812V19H30.3047V10.7148C30.3047 7.60938 28.7344 5.80469 25.8281 5.80469C23.8594 5.80469 22.4414 6.78906 21.7969 8.60547H21.7031V2.08984H17.0156V19ZM38.543 19.3281C42.7734 19.3281 45.3516 16.9023 45.3516 12.5195C45.3516 8.24219 42.7148 5.73438 38.543 5.73438C34.3945 5.73438 31.7461 8.26562 31.7461 12.5195C31.7461 16.8906 34.3242 19.3281 38.543 19.3281ZM38.543 15.8945C37.3359 15.8945 36.6211 14.6992 36.6211 12.5312C36.6211 10.4219 37.3711 9.16797 38.543 9.16797C39.7266 9.16797 40.4766 10.4219 40.4766 12.5312C40.4766 14.6992 39.7383 15.8945 38.543 15.8945ZM46.8398 19H51.6445V12.5547C51.6445 10.75 52.5703 9.82422 54.375 9.82422C54.8672 9.82422 55.3594 9.91797 55.7695 10.0938V6.0625C55.4531 5.94531 55.0781 5.875 54.6445 5.875C53.1094 5.875 52.1133 6.76562 51.6211 8.60547H51.5273V6.0625H46.8398V19ZM58.4297 3.22656V6.0625H56.7188V9.54297H58.4297V15.3906C58.4297 17.9453 59.8711 19 63.5273 19C64.4414 19 65.0508 18.918 65.5078 18.8242V15.4961C65.2266 15.543 65.0508 15.5547 64.6875 15.5547C63.7031 15.5547 63.2344 15.1328 63.2344 14.3242V9.54297H65.5078V6.0625H63.2344V3.22656H58.4297ZM79.793 11.418C79.7344 7.91406 77.25 5.73438 73.4883 5.73438C69.3281 5.73438 66.7617 8.30078 66.7617 12.5195C66.7617 16.7852 69.3164 19.3281 73.5117 19.3281C77.3555 19.3281 79.7461 17.2305 79.793 13.7266H75.4219C75.3398 15.0039 74.6484 15.7539 73.5703 15.7539C72.293 15.7539 71.625 14.6289 71.625 12.5195C71.625 10.4336 72.3047 9.30859 73.5703 9.30859C74.6016 9.30859 75.3281 10.1055 75.4219 11.418H79.793ZM94.418 6.0625H89.6133V13.293C89.6133 14.5469 88.9102 15.3789 87.832 15.3789C86.707 15.3789 85.9688 14.6523 85.9688 13.2812V6.0625H81.1641V14.3594C81.1641 17.4414 83.2031 19.2578 85.9805 19.2578C87.9141 19.2578 89.1211 18.2148 89.6367 16.457H89.7305V19H94.418V6.0625ZM97.3828 3.22656V6.0625H95.6719V9.54297H97.3828V15.3906C97.3828 17.9453 98.8242 19 102.48 19C103.395 19 104.004 18.918 104.461 18.8242V15.4961C104.18 15.543 104.004 15.5547 103.641 15.5547C102.656 15.5547 102.188 15.1328 102.188 14.3242V9.54297H104.461V6.0625H102.188V3.22656H97.3828ZM105.82 10.082C105.82 12.0859 107.168 13.4805 109.734 13.9492L112.078 14.3828C113.168 14.582 113.543 14.8398 113.543 15.3086C113.543 15.8477 112.969 16.1875 112.043 16.1875C110.965 16.1875 110.332 15.6953 110.168 14.8867H105.527C105.75 17.5352 107.965 19.3281 112.043 19.3281C115.793 19.3281 118.301 17.5703 118.301 14.7578C118.301 12.8008 117.047 11.7227 114.246 11.207L111.902 10.7734C110.73 10.5508 110.414 10.2695 110.414 9.8125C110.414 9.22656 111 8.875 111.867 8.875C112.898 8.875 113.496 9.46094 113.555 10.2461H117.914C117.855 7.48047 115.641 5.73438 111.867 5.73438C108.105 5.73438 105.82 7.38672 105.82 10.082Z" fill="white"/>
                <path d="M5.85938 39V30.0938H5.95312L12.5273 39H16.3359V22.0898H11.6484V30.8555H11.5547L5.02734 22.0898H1.17188V39H5.85938ZM24.8789 39.3281C29.1094 39.3281 31.6875 36.9023 31.6875 32.5195C31.6875 28.2422 29.0508 25.7344 24.8789 25.7344C20.7305 25.7344 18.082 28.2656 18.082 32.5195C18.082 36.8906 20.6602 39.3281 24.8789 39.3281ZM24.8789 35.8945C23.6719 35.8945 22.957 34.6992 22.957 32.5312C22.957 30.4219 23.707 29.168 24.8789 29.168C26.0625 29.168 26.8125 30.4219 26.8125 32.5312C26.8125 34.6992 26.0742 35.8945 24.8789 35.8945ZM34.3359 23.2266V26.0625H32.625V29.543H34.3359V35.3906C34.3359 37.9453 35.7773 39 39.4336 39C40.3477 39 40.957 38.918 41.4141 38.8242V35.4961C41.1328 35.543 40.957 35.5547 40.5938 35.5547C39.6094 35.5547 39.1406 35.1328 39.1406 34.3242V29.543H41.4141V26.0625H39.1406V23.2266H34.3359ZM51.5391 34.8047C51.2578 35.5781 50.4727 36.0352 49.5 36.0352C48.2109 36.0352 47.2969 35.1211 47.2969 33.8555V33.5508H55.875V32.25C55.875 28.2891 53.2852 25.7344 49.2773 25.7344C45.2109 25.7344 42.668 28.3711 42.668 32.6016C42.668 36.8086 45.1875 39.3281 49.4297 39.3281C52.9805 39.3281 55.418 37.5938 55.8164 34.8047H51.5391ZM49.3828 29.0391C50.5078 29.0391 51.3164 29.7891 51.3984 30.9492H47.3672C47.4609 29.8359 48.293 29.0391 49.3828 29.0391Z" fill="#78FFCE"/>
            </svg>
            </Link>
            {listApplications}
            <div className="button-plus" onClick={() => setActiveForm(true)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.071 9H1.92889" stroke="#9FFFD1" stroke-width="3" stroke-linecap="round"/>
                    <path d="M9 16.0712L9 1.92901" stroke="#9FFFD1" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>

            <Modal active={activeForm} setActive={setActiveForm} reset={resetFormData} title="Add app">
                <label className="label">Name for new application</label>
                <input title="new application name" value={newAppName} onChange={(e) => setNewAppName(e.target.value)}/>
                <label className="label">Fill url to parse</label>
                <input title="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
                <label className="label">Select first OS</label>
                <select value={os1Name} onChange={(e) => {e.target.value !== 'none' && changeOs(e.target.value)}}>
                    <option value='none'>Select first OS</option>
                    {oses.map((os) => (
                        <option value={os.name}>{os.name}</option>
                    ))}
                </select>
                {os1Name !== 'none' && <p className="checkbox_title">
                    <input type="checkbox" checked={checkedOs2} onChange={() => setCheckedOs2(!checkedOs2)}/>
                    Select second OS {os2.name}
                </p>}
                <p className="checkbox_title">
                    <input type="checkbox" checked={checkedHotkeyFirst} onChange={() => setCheckedHotkeyFirst(!checkedHotkeyFirst)}/>
                    Set fields order: Combinations -> Action (default: Action -> Combination)
                </p>}
                <Button text="Add app" onClick={parseHotkeys}/>

            </Modal>
        </div>
    )
}

export default NavBar;