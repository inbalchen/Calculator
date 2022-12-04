import {NavLink} from 'react-router-dom';
import {Card} from '@mui/material';

export default function NotFound() {
    return (
        <Card sx={{ maxWidth: 350, margin: '50px auto', padding: '20px' }}>
            <div>NotFound</div>
            <NavLink to="/" className="page-link">Return to home page</NavLink>
        </Card>
    )
}