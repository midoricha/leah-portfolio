import './Navbar.css';
import {AppBar, Box, Button, Toolbar} from '@mui/material';

const navItems = ['Home', 'About Me', 'Projects', 'Resumé', 'Contact'];

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar className="navbar-toolbar">
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