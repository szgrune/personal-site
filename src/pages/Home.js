//Home.js

import React from "react";
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../App.css";

import mybooksImage from "../img/mybooks-mobile.png";
import noraImage from "../img/nora_icon.png";
import cowboyCreative from "../img/cowboycreative.png";
import kiminoLanding from "../img/kimino-landing.png";

export default function Home() {

    let navigate = useNavigate();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    /* routePaths are defined in App.js */
    const redirectRoute = async routePath => {
        await delay(300);
        navigate(routePath);
    };

    return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'left' , margin: '5vw'}}>
        {/* rendering the card component with card content */}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
            
                <CardActionArea sx={{ borderRadius: 3 }} button onClick={() => redirectRoute("/openlibrary")}>
                <Card sx={{ borderRadius: 3, padding: 1 }}>
                    <CardContent>
                        <CardMedia sx={{ height: 180, borderRadius: 3 }} image={mybooksImage} />
                        <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
                        Open Library
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        In conjunction with Internet Archive
                        </Typography>
                        <Typography variant="body1">
                        Since June 2022, I have contributed new page designs and code as a fellow with Open Library, a project from Internet Archive. 
                        </Typography>
                    </CardContent>
                </Card>
                </CardActionArea>
           
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ borderRadius: 3, padding: 1 }}>
                <CardContent>
                <CardMedia sx={{ height: 180, borderRadius: 3 }} image={noraImage} />
                <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
                    Nora Normile
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Custom artist website
                </Typography>
                <Typography variant="body1">
                    Designed and built custom portfolio site for artist Nora Normile. Created Figma mockups and implemented bespoke Squarespace theme.
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ borderRadius: 3, padding: 1 }}>
                <CardContent>
                <CardMedia sx={{ height: 180, borderRadius: 3 }} image={cowboyCreative} />
                <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
                    Urban Cowboy
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Boutique hotel chain and creative studio
                </Typography>
                <Typography variant="body1">
                    Ongoing project with luxury hotel brand Urban Cowboy + Cowboy Creative Studio. Designing and launching sites across multiple platforms.
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ borderRadius: 3, padding: 1 }}>
                <CardContent>
                <CardMedia sx={{ height: 180, borderRadius: 3 }} image={kiminoLanding} />
                <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
                    Kimino Drinks
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Global natural juice brand based in Japan
                </Typography>
                <Typography variant="body1">
                    UX design lead and solo developer for overhaul redesign of Kimino Drinks website. Optimized site for e-commerce with modular Shopify sections.
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ borderRadius: 3, padding: 1 }}>
                <CardContent>
                <CardMedia sx={{ height: 180, borderRadius: 3 }} image={mybooksImage} />
                <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
                    Open Library
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    in conjunction with Internet Archive
                </Typography>
                <Typography variant="body1">
                    Since June 2022, I have been contributed new page designs and code as a fellow with Open Library, a project from Internet Archive. 
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ borderRadius: 3, padding: 1 }}>
                <CardContent>
                <CardMedia sx={{ height: 180, borderRadius: 3 }} image={mybooksImage} />
                <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
                    Open Library
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    in conjunction with Internet Archive
                </Typography>
                <Typography variant="body1">
                    Since June 2022, I have been contributed new page designs and code as a fellow with Open Library, a project from Internet Archive. 
                </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </div>
    )
}
