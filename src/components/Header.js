import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import MaterialUISwitch from "./MaterialUISwitch.js";

export default function Header(props) {
    
    let navigate = useNavigate();

    /* routePaths are defined in App.js */
    const redirectRoute = async routePath => {
        navigate(routePath);
    };

    return (
        <div className= "header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3vh', marginLeft: '5vw', marginRight: '5vw' }}>
        <Typography variant="h4" style={{ cursor: "pointer" }} button onClick={() => redirectRoute("/")}>samuel z grunebaum</Typography>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
          <MaterialUISwitch checked={props.checked} onChange={props.onChange} />
        </div>
      </div>
    )
}