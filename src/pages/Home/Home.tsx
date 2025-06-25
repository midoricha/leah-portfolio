import './Home.css';
import {Typography} from "@mui/material";
import ProjectGallery from "../../components/ProjectsGallery/ProjectsGallery.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import {useEffect, useState} from 'react';
import Footer from "../../components/Footer/Footer.tsx";

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
            <img src={`${import.meta.env.BASE_URL}sparkles.gif`} alt="" className="sparkles"/>
            <Navbar/>
            <div className="title-section">
                <Typography variant="h1">
                    Hi, I'm Leah
                </Typography>
                <Typography variant="body2" sx={{lineHeight: 2}}>
                    I'm a programmer/graphic designer based in📍Ottawa, Canada. <br/>
                    I 🩵coffee and bubble tea.
                </Typography>
            </div>
            <ProjectGallery/>
            <Footer/>
        </div>
    )
}

export default Home;