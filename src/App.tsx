import './App.css';
import './style/variables.css';
import {createTheme, ThemeProvider} from "@mui/material";
import Home from "./pages/Home/Home.tsx";
import {HashRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import About from "./pages/About/About.tsx";
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from "./components/Footer/Footer.tsx";
import Contact from './pages/Contact/Contact.tsx';

function App() {

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </ThemeProvider>
        </Router>
    )
}

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    position: 'fixed',
                    zIndex: '100'
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h6: {
                    color: 'var(--berry)',
                },
                h1: {
                    fontFamily: "'Great Vibes', cursive",
                    color: 'var(--background-beige)', // Soft pink
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.6)', // subtle glow
                    textAlign: 'center',
                },
                h4: {
                    fontFamily: "'Italiana', sans-serif",
                    marginBottom: '48px',
                    color: 'var(--berry)',
                    fontSize: '3rem',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
                },
                body2: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'var(--eggplant)',
                    fontSize: '1.2rem',
                },
                body1: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'var(--eggplant)',
                    fontSize: '1.2rem',
                    transition: 'all 0.1s',
                    '&:hover': {
                        color: 'var(--butter-yellow)',
                    },
                },
                button: {
                    fontFamily: "'DM Sans', sans-serif",
                    color: 'var(--eggplant)',
                    fontSize: '1.2rem',
                    transition: 'all 0.1s',
                    '&:hover': {
                        color: 'var(--peach)',
                    },
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'var(--eggplant)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '1rem',
                    textTransform: 'none',
                    letterSpacing: 0,
                    transition: 'all 0.1s',
                    '&:hover': {
                        color: 'var(--cream)',
                        textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                    },
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '20px',
                    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    height: '500px'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    textAlign: 'left',
                    height: '85%'
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: '10px',
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                colorInherit: {
                    color: 'var(--rose)',
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                }
            }
        },
    },
});

export default App;
