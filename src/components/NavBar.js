import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    const userName = localStorage.getItem('token');

    const handleLogout = () => { // log out
        localStorage.clear(); // clear local storage
        window.location.reload(); // refresh page
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-link' : 'link'} 
                        to="/">
                            Calculator
                        </NavLink>
                        <NavLink
                        className={({ isActive }) => isActive ? 'active-link' : 'link'} 
                        to="/history">
                            History
                        </NavLink>
                </Typography>
                <Button color="inherit" onClick={handleLogout}>Log Out</Button>
                <Typography variant="h7">
                    {'Hello ' + JSON.parse(userName)}
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}