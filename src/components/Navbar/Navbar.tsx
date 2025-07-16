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
import {Link} from 'react-router-dom';

const navItems = [
    {label: 'Home', path: '/home'},
    {label: 'About Me', path: '/about'},
    {label: 'Résumé', path: '/resume', isExternal: true},
    {label: 'Contact', path: '/contact'},
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleResumeClick = () => {
        window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank');
    };

    const handleNavClick = (item: typeof navItems[0]) => {
        if (item.isExternal) {
            handleResumeClick();
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.label}
                    >
                        <ListItemButton
                            {...(item.isExternal 
                                ? { onClick: () => handleNavClick(item) }
                                : { component: Link, to: item.path }
                            )}
                        >
                            <ListItemText primary={item.label}/>
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
                            <Button
                                key={item.label}
                                className="navbar-button"
                                {...(item.isExternal 
                                    ? { onClick: () => handleNavClick(item) }
                                    : { component: Link, to: item.path }
                                )}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
