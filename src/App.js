//App.js

import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";

import MaterialUISwitch from "./components/MaterialUISwitch.js";

import Home from './pages/Home.js';
import OpenLib from './pages/OpenLibrary.js';

export default function App() {

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  let darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  darkTheme = responsiveFontSizes(darkTheme);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className= "header" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3vh', marginLeft: '5vw', marginRight: '5vw' }}>
        <Typography variant="h4">samuel z grunebaum</Typography>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
          <MaterialUISwitch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        </div>
      </div>

      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/openlibrary" element={<OpenLib />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Router>  
      </div>
    </ThemeProvider>
  )
}
