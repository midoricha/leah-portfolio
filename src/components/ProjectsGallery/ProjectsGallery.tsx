import './ProjectsGallery.css';
import {Box, Card, CardContent, Grid, Typography} from '@mui/material';

const projects = [
    {
        title: 'Karate History Tool',
        link: 'https://lemon-dune-0296b6f0f.6.azurestaticapps.net/',
        description:
            'An interactive family tree app built with React and Spring Boot. Features role-based authentication, Azure deployment, and a graph-based UI.',
    },
    {
        title: 'Event Scheduler (Internship)',
        description:
            'Internal web tool to manage recurring events. Built with Angular, Java, and Jenkins CI/CD.',
    },
    {
        title: 'Arkanoid Block Breaker Game',
        description:
            'Replicated the classic arcade game Arkanoid using Unreal Engine 5 and c++.',
    },
];

function ProjectGallery() {
    return (
        <Box className="gallery-container">
            <Typography variant="h4" className="gallery-heading">
                My Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
                        <Card className="glass-card">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {
                                        project.link ? (
                                            <a href={project.link}>{project.title}</a>
                                        ) : (
                                            project.title
                                        )
                                    }
                                </Typography>
                                <Typography variant="body2">{project.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProjectGallery;
