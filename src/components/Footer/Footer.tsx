import {Link, Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

function Footer() {
    const urlLinkedIn = "https://www.linkedin.com/in/danyu-w-565850192/";
    const urlGithub = "https://github.com/midoricha";
    const urlInstagram = "https://www.instagram.com/ryokux/";

    return (
        <div className="footer">
            <div className="socials">
                <Link variant="button" href={urlLinkedIn} target="_blank" rel="noopener">
                    <LinkedInIcon/>
                </Link>
                <Link variant="button" href={urlGithub} target="_blank" rel="noopener">
                    <GitHubIcon/>
                </Link>
                <Link variant="button" href={urlInstagram} target="_blank" rel="noopener">
                    <InstagramIcon/>
                </Link>
            </div>
            <Typography variant="body2" sx={{marginTop: '20px', fontSize: '1rem'}}>
                © 2025 Leah Wan. All rights reserved.
            </Typography>
        </div>
    )
}

export default Footer;