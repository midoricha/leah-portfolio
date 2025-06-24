import './Navbar.css';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';

const navItems = ['Home', 'About Me', 'Projects', 'Resumé', 'Contact'];

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar className="navbar-toolbar">
                <Typography variant="h6" className="navbar-logo">
                    <img src="/logo.png" alt="Logo" width={48}
                         style={{verticalAlign: 'middle', marginRight: 8}}/>

                </Typography>
                <Box className="navbar-links">
                    {navItems.map((item) => (
                        <Button key={item} className="navbar-button">
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;