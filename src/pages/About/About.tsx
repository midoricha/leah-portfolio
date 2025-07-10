import './About.css';
import {Box, IconButton, Tooltip, Typography} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';

import {
    SiReact, SiAngular, SiSpringboot, SiJavascript,
    SiFigma, SiGit, SiAdobephotoshop, SiUnrealengine,
    SiTypescript
} from 'react-icons/si';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

function About() {
    const timelineItems = [
        {time: '1999', label: 'Hello, World 🐣'},
        {time: '2017', label: 'Moved to Australia to study Digital Media @ University of Queensland 👩‍🎨'},
        {time: '2022', label: 'Started a new chapter in Canada — Computer Science 💻'},
        {time: '2023-24', label: 'Internship @ Canadian Blood Services 💼'},
        {time: '2025', label: 'Graduated with a Computer Science diploma 🎓'},
        {time: 'Now', label: 'To be continued...'},
    ]

    const skills = [
        {name: 'React', icon: <SiReact/>, url: 'https://react.dev'},
        {name: 'Angular', icon: <SiAngular/>, url: 'https://angular.dev'},
        {name: 'Spring Boot', icon: <SiSpringboot/>, url: 'https://spring.io/projects/spring-boot'},
        {name: 'JavaScript', icon: <SiJavascript/>, url: 'https://developer.mozilla.org/docs/Web/JavaScript'},
        {name: 'TypeScript', icon: <SiTypescript/>, url: 'https://www.typescriptlang.org/'},
        {name: 'Azure', icon: <MicrosoftIcon/>, url: 'https://azure.microsoft.com'},
        {name: 'Figma', icon: <SiFigma/>, url: 'https://www.figma.com'},
        {name: 'Git', icon: <SiGit/>, url: 'https://git-scm.com'},
        {name: 'Unreal Engine', icon: <SiUnrealengine/>, url: 'https://unrealengine.com'},
        {name: 'Adobe Photoshop', icon: <SiAdobephotoshop/>, url: 'https://www.adobe.com/ca/products/photoshop.html'},
    ];

    return (
        <Box className="about-container">
            <img src={`${import.meta.env.BASE_URL}wave.svg`} alt="wave" className="hero-wave"/>
            <Box className="about-hero">
                <Typography variant="h1" className="about-title" sx={{color: 'var(--butter-yellow)'}} gutterBottom>
                    About Me
                </Typography>
                <Box className="intro-section">
                    <Box>
                        <img src={`${import.meta.env.BASE_URL}remote-worker.svg`} alt="My icon" width="400px"/>
                    </Box>
                    <Box className="about-intro-wrapper">
                        <Typography variant="body2" className="about-intro">
                            Hi, I'm Leah — a full-stack developer and visual designer who loves crafting delightful
                            digital
                            experiences. With a background in digital media and computer science, I merge creative
                            intuition
                            with technical precision to build interfaces that are as functional as they are
                            beautiful.
                        </Typography>
                        <br/>
                        <Typography variant="body2" className="about-intro">
                            From turning design mockups into living, breathing apps to optimizing back-end logic, I
                            enjoy
                            working across the stack. I've studied and worked across continents, and every project I
                            take on
                            reflects my curiosity and care for design detail.
                        </Typography>
                        <br/>
                        <Typography variant="body2" className="about-intro">
                            When I’m not building web apps, you’ll find me brewing coffee, being a cat mom, or
                            baking.
                        </Typography>
                    </Box>
                </Box>
            </Box>


            <Box className="about-section timeline-section">
                <Typography variant="h4">My Journey</Typography>
                <Timeline position="alternate" className="about-timeline">
                    {timelineItems.map((item, idx) => (
                        <TimelineItem key={idx}>
                            <TimelineOppositeContent>
                                {item.time}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot/>
                                {idx < timelineItems.length - 1 && <TimelineConnector/>}
                            </TimelineSeparator>
                            <TimelineContent>{item.label}</TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>

                {/* Skills */}
                <Box className="about-section">
                    <Typography variant="h4">Toolbox</Typography>
                    <Box className="about-skills">
                        {skills.map((skill, index) => (
                            <Tooltip title={skill.name} key={index}>
                                <IconButton color="inherit"
                                            className="skill-icon"
                                            href={skill.url}
                                            target="_blank"
                                            rel="noopener"
                                            size="large"
                                >
                                    {skill.icon}
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default About;