import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import MaterialUISwitch from "./MaterialUISwitch.js";
import MainNavigation from "./MainNavigation.js";

import resumePDF from "../img/Samuel Grunebaum Resume 2024.pdf";
import { ReactComponent as ExternalLink } from "../img/external-link.svg"

export default function Header(props) {

    let navigate = useNavigate();

    /* routePaths are defined in App.js */
    const redirectRoute = async routePath => {
        navigate(routePath);
    };

    return (
      <div className="header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3vh', marginLeft: '5vw', marginRight: '5vw', marginBottom: '5vw' }}>
        <Typography variant="h5" style={{ cursor: "pointer" }} button onClick={() => redirectRoute("/")}>samuel z grunebaum</Typography>
        <Box classname="menuDesktop" sx={{ display: {xs:"none", sm: "flex" }, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
          <Typography variant="h6" style={{ cursor: "pointer", marginRight: "3vw" }} button onClick={() => redirectRoute("/about")}>about</Typography>
          <Typography variant="h6" style={{ cursor: "pointer", marginRight: "3vw" }} button onClick={() => redirectRoute("/contact")}>contact</Typography>
          <Typography variant="h6" style={{ cursor: "pointer", marginRight: "3vw" }}>
            <a style={{color: "inherit", textDecoration: "none" }} href={resumePDF} target="_blank" rel="noreferrer">
              cv <ExternalLink style={{display: "inline", width: "1em", height: "0.7em", position: "relative", top: "0.06em"}} />
            </a>
          </Typography>
          <MaterialUISwitch checked={props.checked} onChange={props.onChange} />
        </Box>
        <MainNavigation checked={props.checked} onChange={props.onChange} />
      </div>
    )
}