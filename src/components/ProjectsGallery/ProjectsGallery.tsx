import "./ProjectsGallery.css";
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Link,
    Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
    {
        title: "Karate History Tool",
        link: "https://lemon-dune-0296b6f0f.6.azurestaticapps.net/",
        image: "/kht-home.png",
        description:
            "An interactive family tree app built with React and Spring Boot. Features role-based authentication, Azure deployment, and a graph-based UI.",
    },
    {
        title: "Home OS",
        link: "https://ourhomehub.vercel.app/",
        image: "/homeos.png",
        description:
            "An all-in-one household management app built with React, TypeScript, and Material-UI. Features include a recipe book, meal planner, smart grocery list, and pantry inventory. The app intelligently suggests meals based on available ingredients and automatically adds missing items to your grocery list.",
    },
    {
        title: "Event Scheduling System + Angular Component Library (Internship)",
        description:
            "Internal event scheduling web application built with Angular and Spring Boot. Features include interactive forms, large dynamic tables with lazy loading, Google Maps integration, Azure AD authentication, etc. Also created a reusable UI component library with Storybook and PrimeNG (tables, forms, calendars, map widgets) for use across multiple applications.",
    },
    {
        title: "Arkanoid Block Breaker Game",
        image: "/arkanoid_demo.gif",
        description:
            "Replicated the classic arcade game Arkanoid using Unreal Engine 5 and C++.",
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
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card className="glass-card">
                            <CardContent>
                                <div className="card-title">
                                    <Typography variant="h6" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    {project.link && (
                                        <Link
                                            variant="body1"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <LaunchIcon />
                                        </Link>
                                    )}
                                </div>
                                <Divider />
                                <div className="card-description">
                                    <Typography variant="body2">
                                        {project.description}
                                    </Typography>
                                    {project.image && (
                                        <img
                                            src={`${import.meta.env.BASE_URL}${
                                                project.image
                                            }`}
                                            alt="Project image"
                                            className="project-image"
                                        />
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProjectGallery;
