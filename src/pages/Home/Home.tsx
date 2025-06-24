import './Home.css';
import {Typography} from "@mui/material";
import ProjectGallery from "../../components/ProjectsGallery/ProjectsGallery.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";

function Home() {
    return (
        <div className="home">
            <video
                className="video-bg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/1795913-hd_1920_1080_30fps.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <Navbar/>
            <div className="title-section">
                <Typography variant="h1">
                    Hi, I'm Leah
                </Typography>
            </div>
            <ProjectGallery/>
        </div>
    )
}

export default Home;