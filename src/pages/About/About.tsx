import './About.css';
import {Box, Typography} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';

function About() {
    const timelineItems = [
        {time: '1999', label: 'Born'},
        {time: '2017', label: '✈️ to Australia, start undergraduate study in Digital Media'},
        {time: '2022', label: '✈️ to Canada, start computer study'},
        {time: '2023 - 2024', label: '💼 Internship at Canadian Blood Services'},
        {time: '2025', label: '🎓 Graduated'},
        {time: 'now', label: 'To be continued...'},
    ]
    return (
        <Box className="about-container">
            <Typography variant="h4" className="about-title" gutterBottom>
                About Me
            </Typography>

            {/* Intro */}
            <Typography variant="body2" className="about-intro">
                Hey there! I’m Leah — a full‑stack developer & graphic designer blended into one. I craft dreamy,
                performant web
                apps with an eye for colour harmony and pixel‑perfect detail.
            </Typography>

            {/* Interactive Timeline (placeholder) */}
            <Box className="about-section">
                <Typography variant="h6" className="about-subtitle">Journey Snapshot ✨</Typography>
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
            </Box>

            {/* Skills */}
            <Box className="about-section">
                <Typography variant="h6" className="about-subtitle">Skills</Typography>
                <Box className="about-skills">
                    <span>React</span>
                    <span>Angular</span>
                    <span>Spring Boot</span>
                    <span>JavaScript</span>
                    <span>Java</span>
                    <span>Azure</span>
                    <span>Figma</span>
                    <span>Git</span>
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
    )
}

export default About;