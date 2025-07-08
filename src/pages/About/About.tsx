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
import {timelineOppositeContentClasses} from "@mui/lab";

import {
    SiReact, SiAngular, SiSpringboot, SiJavascript,
    SiFigma, SiGit, SiAdobephotoshop, SiUnrealengine,
    SiTypescript
} from 'react-icons/si';


import MicrosoftIcon from '@mui/icons-material/Microsoft';

function About() {
    const timelineItems = [
        {time: '1999', label: 'Born 🐣'},
        {time: '2017', label: 'Went to Australia to start undergraduate study in Digital Media 👩‍🎨'},
        {time: '2022', label: 'Moved to to Canada & dived into coding  💻'},
        {time: '2023-2024', label: 'Internship @ Canadian Blood Services 💼'},
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
            <Typography variant="h4" className="about-title" gutterBottom>
                About Me
            </Typography>

            {/* Interactive Timeline (placeholder) */}
            <Box className="about-section">
                <Timeline className="about-timeline" sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}>
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

                <Box className="about-right">
                    {/* Intro */}
                    <Typography variant="body2" className="about-intro">
                        Hey there! I’m Leah — a full-stack web developer and visual designer. I build polished,
                        performant apps
                        with playful interfaces and aesthetics. Based in Ottawa, I blend creativity and logic
                        with every line of code.
                    </Typography>


                    {/* Skills */}
                    <Box className="about-section">
                        <Typography variant="h6" className="about-subtitle">Toolbox</Typography>
                        <Box className="about-skills">
                            {skills.map((skill, index) => (
                                <Tooltip title={skill.name} key={index}>
                                    <IconButton
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

                    {/* Hobbies */}
                    <Box className="about-section">
                        <Typography variant="h6" className="about-subtitle">Fun Facts</Typography>
                        <Typography variant="body2" className="about-hobbies">
                            🎧 Remixing music & collecting cute UI inspiration. <br/>
                            🐾 Cat mom to a very spoiled feline. <br/>
                            🎮 Loves old-school games and boba tea. <br/>
                            💡 Dreaming in pixels and pastels.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default About;