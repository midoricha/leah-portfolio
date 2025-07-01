import './Navbar.css';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

const navItems = ['Home', 'About Me', 'Projects', 'Résumé', 'Contact'];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item}>
                        <ListItemButton>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <Toolbar className="navbar-toolbar">
                {isMobile ? (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{mr: 'auto', ml: '1px'}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{keepMounted: true}} // better mobile performance
                        >
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    <Box className="navbar-links">
                        {navItems.map((item) => (
                            <Button key={item} className="navbar-button">
                                {item}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;