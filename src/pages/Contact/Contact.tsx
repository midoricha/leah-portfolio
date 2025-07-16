import "../About/About.css";
import { Box, Typography, Link, Button } from "@mui/material";

function Contact() {
    return (
        <Box className="about-container">
            <img
                src={`${import.meta.env.BASE_URL}wave.svg`}
                alt="wave"
                className="hero-wave"
            />
            <Box className="about-hero">
                <Typography
                    variant="h1"
                    className="about-title"
                    sx={{ color: "var(--butter-yellow)" }}
                    gutterBottom
                >
                    Let's Connect{" "}
                </Typography>
                <Typography
                    variant="body2"
                    className="contact-message"
                    sx={{ marginTop: 2 }}
                >
                    Whether it’s a collaboration, a question, or just to say hi
                    — I’d love to hear from you!
                </Typography>

                <Typography
                    variant="body2"
                    className="contact-email"
                    sx={{ marginTop: 2 }}
                >
                    Reach me at{" "}
                    <Link
                        variant="body1"
                        href="mailto:leahwan7@icloud.com"
                        underline="always"
                    >
                        leahwan7@icloud.com
                    </Link>
                </Typography>
                <Button
                    variant="outlined"
                    href="mailto:leahwan7@icloud.com"
                    sx={{
                        mt: 4,
                        color: "var(--eggplant)",
                        borderColor: "var(--gray-lavender)",
                        borderRadius: "10px",
                        fontFamily: "Inter, sans-serif",
                        "&:hover": {
                            borderColor: "var(--berry)",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                    }}
                >
                    📩 Send Me a Message
                </Button>
            </Box>
            <img
                src={`${import.meta.env.BASE_URL}cat-divider.png`}
                alt="cat-divider"
                className="cat-divider"
            />
        </Box>
    );
}

export default Contact;
