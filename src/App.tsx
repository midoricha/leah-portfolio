import './App.css';
import './style/variables.css';
import Navbar from "./components/Navbar/Navbar";
import {createTheme, ThemeProvider} from "@mui/material";
import Home from "./pages/Home/Home.tsx";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Home/>
        </ThemeProvider>
    )
}

const theme = createTheme({
    components: {
        // Name of the component
        MuiAppBar: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h6: {
                    color: 'var(--cream)',
                },
                h1: {
                    fontFamily: "'Italiana', serif",
                    color: '#f8c8dc', // Soft pink
                    textShadow: '0 1px 6px rgba(255, 255, 255, 0.4)', // subtle glow
                    fontSize: '10rem',
                    textAlign: 'center'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'var(--cream)',
                }
            }
        }
    },
});

export default App;
