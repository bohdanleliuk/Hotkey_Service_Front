import "./Modal.css";
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Modal({active, setActive, reset, title, children}) {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#9FFFD1',
                darker: '#54ffad',
            }
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
        <div className={active ? "modal active" : "modal"}>
            <div className="modal_body">
                <div className="icon_close" onClick={() => {
                    setActive(false);
                    reset();
                }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75 2.25L2.24999 9.75001" stroke="#9FFFD1" stroke-width="3" stroke-linecap="round"/>
                        <path d="M9.75 9.75L2.24999 2.24999" stroke="#9FFFD1" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className="form_title">{title}</div>
                {children}
            </div>
        </div>
        </ThemeProvider>
    )
}

export default Modal;