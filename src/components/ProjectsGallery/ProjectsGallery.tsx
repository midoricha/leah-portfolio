import './ProjectsGallery.css';
import {Box, Card, CardContent, Divider, Grid, Link, Typography} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
    {
        title: 'Karate History Tool',
        link: 'https://lemon-dune-0296b6f0f.6.azurestaticapps.net/',
        image: '/kht-home.png',
        description:
            'An interactive family tree app built with React and Spring Boot. Features role-based authentication, Azure deployment, and a graph-based UI.',
    },
    {
        title: 'Event Scheduling System + Angular Component Library (Internship)',
        description:
            'Internal web application to manage recurring events built with Angular and Spring Boot. Also built a component library by translating UI design into Angular PrimeNG components.',
    },
    {
        title: 'Arkanoid Block Breaker Game',
        description:
            'Replicated the classic arcade game Arkanoid using Unreal Engine 5 and C++.',
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
                                <div className="card-title">
                                    <Typography variant="h6" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    {project.link && (
                                        <Link variant="body1" href={project.link} target="_blank" rel="noopener">
                                            <LaunchIcon/>
                                        </Link>
                                    )}
                                </div>
                                <Divider/>
                                <Typography variant="body2">{project.description}</Typography>
                                {project.image && (
                                    <img src={`${import.meta.env.BASE_URL}${project.image}`} alt="Project image"
                                         className="project-image"/>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProjectGallery;
