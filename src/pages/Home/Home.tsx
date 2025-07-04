import './Home.css';
import {Typography} from "@mui/material";
import ProjectGallery from "../../components/ProjectsGallery/ProjectsGallery.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import {useEffect, useState} from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function useScrollProgress() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}

function Home() {
    const scrollY = useScrollProgress();
    const fadeThreshold = 2000; // pixels before video fully fades
    const opacity = Math.max(1 - scrollY / fadeThreshold, 0);

    return (
        <div className="home">
            <div className="video-wrapper">
                <video
                    className="video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{opacity}}
                >
                    <source src={`${import.meta.env.BASE_URL}background.mp4`} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="video-fade-bottom"/>
            </div>
            <Navbar/>
            <div className="title-section">
                <div className="floating-elements">
                    <div className="sparkle sparkle-1"/>
                    <div className="sparkle sparkle-2"/>
                </div>
                <Typography variant="h1" className="fade-in-text">
                    Hi, I'm Leah
                </Typography>
                <div className="typewriter-wrapper">
                    <Typography variant="body2" className="typewriter"
                                sx={{fontFamily: 'monospace'}}>
                        Full-stack developer and designer blending logic with aesthetics.
                    </Typography>
                </div>
                <div className="scroll-indicator">
                    <KeyboardArrowDownIcon fontSize="large"/>
                </div>
            </div>
            <ProjectGallery/>
            <Footer/>
        </div>
    )
}

export default Home;