//App.js

import React, { useState } from "react";
import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import FolioBook from './fonts/Folio-Book-BT.woff2';
import NotoSans from './fonts/Noto-Sans-regular.woff2';
import Coolvetica from './fonts/CoolveticaEl-Regular.woff2';

import Header from "./components/Header.js";
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
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
    typography: {
      h6: {
        fontFamily: 'Noto Sans, Folio, Helvetica, Arial, sans-serif',
      },
      h5: {
        fontFamily: 'DeAetna, sans-serif',
        fontSize: '1.5rem !important',
        letterSpacing: '0.05em !important',
      },
      h4: {
        fontFamily: 'Coolvetica, sans-serif',
      },
      h3: {
        fontFamily: 'Coolvetica, sans-serif'
      },
      subtitle1: {
        fontFamily: 'Noto Sans, sans-serif',
      },
      body1: {
        fontFamily: 'Folio, sans-serif',
        fontWeight: '300',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Coolvetica';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Coolvetica'), url(${Coolvetica}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          },
          @font-face {
            font-family: 'Folio Book';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Folio'), url(${FolioBook}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          },
          @font-face {
            font-family: 'Noto Sans';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Noto Sans Book'), url(${NotoSans}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          },
        `,
      },
    },
  });

  darkTheme = responsiveFontSizes(darkTheme);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Header checked={toggleDarkMode} onChange={toggleDarkTheme} />
        <ScrollToTop />
        <Inner />
      </Router>
    </ThemeProvider>
  )
}

function Inner() {
  const location = useLocation();  

  return (
    
      <div className="App">
        
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
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