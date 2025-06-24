import './App.css';
import './style/variables.css';
import Navbar from "./components/Navbar/Navbar";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
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
                    backgroundColor: 'var(--brown-medium)',
                    boxShadow: 'none',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'var(--cream)',
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
