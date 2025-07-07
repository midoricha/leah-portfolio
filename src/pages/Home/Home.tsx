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
            <div className="hero-section">
                <div className="title-section">
                    <div className="floating-elements">
                        <div className="sparkle sparkle-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256"
                                 enable-background="new 0 0 256 256" xmlSpace="preserve">
                                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
                                <g>
                                    <g>
                                        <path fill="var(--light-yellow)"
                                              d="M163.5,82.8c-27.2-27.5-35.5-82-35.5-82S126,55,95.9,85.3C67.1,114.1,10,119.2,10,119.2s60.1,2.6,87.4,30.1C128.8,181,128,255.3,128,255.3s10.8-74.3,42.2-105.9c27.2-27.5,75.8-30.1,75.8-30.1S194.9,114.4,163.5,82.8z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="sparkle sparkle-2">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256"
                                 enable-background="new 0 0 256 256" xmlSpace="preserve">
                                <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
                                <g>
                                    <g>
                                        <path fill="var(--light-yellow)"
                                              d="M163.5,82.8c-27.2-27.5-35.5-82-35.5-82S126,55,95.9,85.3C67.1,114.1,10,119.2,10,119.2s60.1,2.6,87.4,30.1C128.8,181,128,255.3,128,255.3s10.8-74.3,42.2-105.9c27.2-27.5,75.8-30.1,75.8-30.1S194.9,114.4,163.5,82.8z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <Typography variant="h1" className="fade-in-text">
                        Hi, I'm Leah
                    </Typography>
                    <div className="typewriter-wrapper">
                        <Typography variant="body2" className="typewriter"
                        >
                            Full-stack developer and designer blending logic with aesthetics.
                        </Typography>
                    </div>
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