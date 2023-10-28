//App.js

import React, { useState } from "react";
import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

import Header from "./components/Header.js";
import Home from './pages/Home.js';
import About from './pages/About.js';
import OpenLib from './pages/OpenLibrary.js';
import NoraNormile from './pages/NoraNormile.js';
import UrbanCowboy from './pages/UrbanCowboy.js';
import Kimino from './pages/Kimino.js';
import Meanwhile from './pages/Meanwhile.js';
import WCMA from './pages/WCMA.js';

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
      <Router>
        <Header checked={toggleDarkMode} onChange={toggleDarkTheme} />
        <Inner />
      </Router>
    </ThemeProvider>
  )
}

function Inner() {
  const location = useLocation();
  console.log(location);

  

  return (
    
      <div className="App">
        
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/openlibrary" element={<OpenLib />} />
                <Route path="/noranormile" element={<NoraNormile />} />
                <Route path="/urbancowboy" element={<UrbanCowboy />} />
                <Route path="/kimino" element={<Kimino />} />
                <Route path="/meanwhile" element={<Meanwhile />} />
                <Route path="/wcma" element={<WCMA />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          
      </div>
  )
}