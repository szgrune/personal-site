import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

import MaterialUISwitch from "./MaterialUISwitch.js";

import resumePDF from "../img/Samuel Grunebaum Resume June 2024.pdf";
import { ReactComponent as ExternalLink } from "../img/external-link.svg"

export default function MainNavigation(props) {

    /*
    react useState hook to save the current open/close state of the drawer,
    normally variables dissapear afte the function was executed
    */
    const [open, setState] = useState(false);

    
    /*
    function that is being called every time the drawer should open or close,
    the keys tab and shift are excluded so the user can focus between
    the elements with the keys
    */
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        //changes the function state according to the value of open
        setState(open);
    };

    let navigate = useNavigate();

    /* routePaths are defined in App.js */
    const redirectRoute = async routePath => {
        navigate(routePath);
    };

    return (
        <>
            <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="open drawer" 
                onClick={toggleDrawer(true)}
                sx={{ 
                display: {
                    xs: 'flex',
                    sm: 'none',
                },
                marginTop: {
                    xs: '2px',
                    sm: '0'
                }
                }}
            >
                <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
                //from which side the drawer slides in
                anchor="right"
                //if open is true --> drawer is shown
                open={open}
                //function that is called when the drawer should close
                onClose={toggleDrawer(false)}
                //function that is called when the drawer should open
                onOpen={toggleDrawer(true)}
            >
                {/* The inside of the drawer */}
                <Box sx={{
                    p: 2,
                    height: 1,
                    width: "60vw"
                }}>

                    {/* 
                    when clicking the icon it calls the function toggleDrawer 
                    and closes the drawer by setting the variable open to false
                    */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <IconButton>
                        <CloseIcon onClick={toggleDrawer(false)} />
                        </IconButton>
                        <MaterialUISwitch checked={props.checked} onChange={props.onChange} />
                    </Box>
                    
                    <Divider sx={{mb: 2}} />

                    <Box sx={{mb: 2}}>
                        <Box onClick={toggleDrawer(false)}>
                            <Typography variant="h6" sx={{ cursor: "pointer", textAlign: "center", p: 2 }} onClick={() => redirectRoute("/about")}>about</Typography>
                            <Typography variant="h6" sx={{ cursor: "pointer", textAlign: "center", p: 2 }} onClick={() => redirectRoute("/contact")}>contact</Typography>
                        </Box>
                        <Typography variant="h6" sx={{ cursor: "pointer", textAlign: "center", p: 2 }}>
                            <a style={{color: "inherit", textDecoration: "none"}} href={resumePDF} target="_blank" rel="noreferrer">
                                cv <ExternalLink style={{display: "inline", width: "1em", height: "0.7em", position: "relative", top: "0.05em"}} />
                            </a>
                        </Typography>
                    </Box>
                </Box>
                
            </Drawer>
        </>

    );
}