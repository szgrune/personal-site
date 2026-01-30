//Home.js

import React, { useState, useRef, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../App.css";

import biobuoyImage from "../img/biobuoy_card.png";
import infotopiaVideo from "../img/Infotopia_demo.mov";
import mybooksImage from "../img/openlibrary.png";
import noraImage from "../img/nora_platform.png";
import cowboyCreative from "../img/UClogo.png";
import kiminoLanding from "../img/kimino-landing.png";
import meanwhileImage from "../img/meanwhile_partners.png";
import wcmaImage from "../img/wcma_illustration.png";
import willaGif from "../img/willa_gif.gif";

function InfotopiaVideo({ videoSrc, isHovering }) {
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [posterUrl, setPosterUrl] = useState(null);
    const frameExtracted = useRef(false);

    // Check if device is mobile/touch
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Extract first frame as poster
    useEffect(() => {
        if (videoRef.current && !frameExtracted.current) {
            const video = videoRef.current;
            
            const extractFrame = () => {
                try {
                    video.currentTime = 0.1;
                } catch (e) {
                    // If seeking fails, try without seeking
                }
            };

            const captureFrame = () => {
                if (frameExtracted.current) return;
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth || 800;
                    canvas.height = video.videoHeight || 600;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0);
                    const dataUrl = canvas.toDataURL('image/png');
                    setPosterUrl(dataUrl);
                    frameExtracted.current = true;
                } catch (e) {
                    // If extraction fails, video will use its default poster behavior
                }
            };

            video.addEventListener('loadedmetadata', extractFrame);
            video.addEventListener('seeked', captureFrame);
            video.addEventListener('loadeddata', captureFrame);

            return () => {
                video.removeEventListener('loadedmetadata', extractFrame);
                video.removeEventListener('seeked', captureFrame);
                video.removeEventListener('loadeddata', captureFrame);
            };
        }
    }, []);

    // Control video playback
    useEffect(() => {
        if (videoRef.current && !isMobile) {
            if (isHovering) {
                videoRef.current.play().catch(e => {
                    // Video play failed, likely autoplay restrictions
                });
            } else {
                videoRef.current.pause();
                if (videoRef.current.readyState >= 2) {
                    videoRef.current.currentTime = 0; // Reset to first frame
                }
            }
        } else if (videoRef.current && isMobile) {
            // On mobile, always pause and show first frame
            videoRef.current.pause();
            if (videoRef.current.readyState >= 2) {
                videoRef.current.currentTime = 0;
            }
        }
    }, [isHovering, isMobile]);

    return (
        <video
            ref={videoRef}
            src={videoSrc}
            poster={posterUrl || undefined}
            style={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                display: 'block',
                borderRadius: 0
            }}
            muted
            loop
            playsInline
            preload="metadata"
        />
    );
}

function WillaGifImage({ willaGif, isHovering }) {
    const imgRef = useRef(null);
    const staticFrameRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            if (isHovering) {
                // Show animated GIF and restart animation on hover
                imgRef.current.src = `${willaGif}?t=${Date.now()}`;
            } else {
                // When not hovering, show static first frame if available
                if (staticFrameRef.current) {
                    imgRef.current.src = staticFrameRef.current;
                } else {
                    // Extract first frame on first load
                    const img = new Image();
                    img.onload = function() {
                        try {
                            const canvas = document.createElement('canvas');
                            canvas.width = this.naturalWidth || this.width;
                            canvas.height = this.naturalHeight || this.height;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(this, 0, 0);
                            const dataUrl = canvas.toDataURL('image/png');
                            staticFrameRef.current = dataUrl;
                            if (imgRef.current && !isHovering) {
                                imgRef.current.src = dataUrl;
                            }
                        } catch (e) {
                            // If extraction fails, just use the GIF
                            staticFrameRef.current = willaGif;
                        }
                    };
                    img.src = willaGif;
                }
            }
        }
    }, [isHovering, willaGif]);

    return (
        <img 
            ref={imgRef}
            src={willaGif}
            alt="Willa Cosinuke"
            style={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                display: 'block'
            }}
        />
    );
}

export default function Home() {

    let navigate = useNavigate();
    const [biobuoyHover, setBiobuoyHover] = useState(false);
    const [willaHover, setWillaHover] = useState(false);
    const [infotopiaHover, setInfotopiaHover] = useState(false);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    /* routePaths are defined in App.js */
    const redirectRoute = async routePath => {
        await delay(300);
        navigate(routePath);
    };

    return (
    <div>
        <Typography variant="h5" component="h5" sx={{ textAlign: 'center', marginBottom: '5vh' }}>
            Designing and building experiences <br/>
            at the meeting point of technology + culture + the humanities
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'left' , marginLeft: '5vw', marginRight: '5vw'}}>
            {/* rendering the card component with card content */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <CardActionArea sx={{ borderRadius: 0 }} button onClick={() => redirectRoute("/kimino")}>
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent sx={{ padding: 0 }}>
                                <CardMedia sx={{ height: 200, borderRadius: 0 }} image={kiminoLanding} />
                                <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                    <Typography variant="h4" component="div">
                                        Kimino Drinks
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Global natural juice brand based in Japan
                                    </Typography>
                                    <Typography variant="body1">
                                        UX design lead and solo developer for overhaul of Kimino Drinks website. Optimized site for DTC e-commerce with modular Shopify sections.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardActionArea sx={{ borderRadius: 0 }} button onClick={() => redirectRoute("/openlibrary")}>
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent sx={{ padding: 0 }}>
                                <CardMedia sx={{ height: 200, borderRadius: 0 }} image={mybooksImage} />
                                <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                    <Typography variant="h4" component="div">
                                        Open Library
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        In conjunction with Internet Archive
                                    </Typography>
                                    <Typography variant="body1">
                                        Since June 2022, I have contributed new page designs and code as a fellow with Open Library, a project from Internet Archive. 
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardActionArea 
                        sx={{ borderRadius: 0 }} 
                        button 
                        onClick={() => redirectRoute("/infotopia")}
                        onMouseEnter={() => setInfotopiaHover(true)}
                        onMouseLeave={() => setInfotopiaHover(false)}
                    >
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent sx={{ padding: 0 }}>
                                <div style={{ height: 200, borderRadius: 0, overflow: 'hidden' }}>
                                    <InfotopiaVideo videoSrc={infotopiaVideo} isHovering={infotopiaHover} />
                                </div>
                                <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                    <Typography variant="h4" component="div">
                                        Infotopia
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Collaborative project at Harvard Graduate School of Design
                                    </Typography>
                                    <Typography variant="body1">
                                        Fall Design Engineering Studio project, in collaboration with Awassada Ariyaphuttarat
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card 
                        sx={{ 
                            borderRadius: 0,
                            position: 'relative'
                        }}
                        onMouseEnter={() => setBiobuoyHover(true)}
                        onMouseLeave={() => setBiobuoyHover(false)}
                    >
                        <CardContent sx={{ padding: 0 }}>
                            <CardMedia sx={{ height: 200, borderRadius: 0 }} image={biobuoyImage} />
                            <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                <Typography variant="h4" component="div">
                                    BioBuoy
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Mycelium and metal-reducing microbes for waterway bioremediation
                                </Typography>
                                <Typography variant="body1">
                                    Speculative design project in collaboration with Avantika Velho and Jake Tan
                                </Typography>
                            </Box>
                            {biobuoyHover && (
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        position: 'absolute',
                                        bottom: 16,
                                        right: 16,
                                        backgroundColor: (theme) => theme.palette.background.default,
                                        padding: '8px 12px',
                                        borderRadius: 0,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                    }}
                                >
                                    Coming soon
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardActionArea sx={{ borderRadius: 0 }} button onClick={() => redirectRoute("/urbancowboy")}>
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent sx={{ padding: 0 }}>
                                <CardMedia sx={{ objectFit: 'contain', height: 200, borderRadius: 0, backgroundColor: 'black' }} image={cowboyCreative} />
                                <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                    <Typography variant="h4" component="div">
                                        Urban Cowboy
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Boutique hotel chain and creative studio
                                    </Typography>
                                    <Typography variant="body1">
                                        Ongoing project with luxury hotel brand Urban Cowboy + Cowboy Creative Studio. Creating user facing sites across multiple platforms.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Card 
                        sx={{ 
                            borderRadius: 0,
                            position: 'relative'
                        }}
                        onMouseEnter={() => setWillaHover(true)}
                        onMouseLeave={() => setWillaHover(false)}
                    >
                        <CardContent sx={{ padding: 0 }}>
                            <div style={{ height: 200, borderRadius: 0, overflow: 'hidden' }}>
                                <WillaGifImage willaGif={willaGif} isHovering={willaHover} />
                            </div>
                            <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                <Typography variant="h4" component="div">
                                    Willa Cosinuke
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Custom artist website and motion graphics
                                </Typography>
                                <Typography variant="body1">
                                    Designed and built custom WordPress site for painter Willa Cosinuke
                                </Typography>
                            </Box>
                            {willaHover && (
                                <Typography 
                                    variant="body1" 
                                    sx={{ 
                                        position: 'absolute',
                                        bottom: 16,
                                        right: 16,
                                        backgroundColor: (theme) => theme.palette.background.default,
                                        padding: '8px 12px',
                                        borderRadius: 0,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                    }}
                                >
                                    Coming soon
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardActionArea sx={{ borderRadius: 0 }} button onClick={() => redirectRoute("/noranormile")}>
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent sx={{ padding: 0 }}>
                                <CardMedia sx={{ height: 200, borderRadius: 0 }} image={noraImage} />
                                <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                    <Typography variant="h4" component="div">
                                        Nora Normile
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Custom artist website
                                    </Typography>
                                    <Typography variant="body1">
                                        Designed and built custom portfolio site for artist Nora Normile. Created Figma mockups and implemented bespoke Squarespace theme.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardActionArea sx={{ borderRadius: 0 }} button onClick={() => redirectRoute("/meanwhile")}>
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent sx={{ padding: 0 }}>
                                <CardMedia sx={{ height: 200, borderRadius: 0 }} image={meanwhileImage} />
                                <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                    <Typography variant="h4" component="div">
                                        Meanwhile Partners
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        UX web design collaboration
                                    </Typography>
                                    <Typography variant="body1">
                                        UX designer for restaurant group's DTC website redesign and new internal POS interfaces, in collaboration with Meanwhile Partners.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CardActionArea sx={{ borderRadius: 0 }} button onClick={() => redirectRoute("/wcma")}>
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent sx={{ padding: 0 }}>
                                <CardMedia sx={{ height: 200, borderRadius: 0, backgroundPositionY: "-10px" }} image={wcmaImage} />
                                <Box sx={{ padding: '16px 24px 24px 24px' }}>
                                    <Typography variant="h4" component="div">
                                        WCMA
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        UX design at Williams College Museum of Art
                                    </Typography>
                                    <Typography variant="body1">
                                        Undergraduate design research and prototyping project for wayfinding solutions; Agent for Creative action with visitor engagement office
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    </div>
    )
}
