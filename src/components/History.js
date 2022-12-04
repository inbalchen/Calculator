import {Fragment, useState} from 'react'
import {Button, Card, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

export default function History() {
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history') || []));

    const handleClearHistory = () => {
        localStorage.setItem('history', JSON.stringify([])) // clear history from local storage 
        setHistory([]);
    }

    return (
        <Fragment>
            <Card sx={{ maxWidth: 350, margin: '50px auto', padding: '20px' }}>
                {history?.length ? history.reverse().map((input, i) => {
                    return <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary" key={input.toString() + i.toString()}>
                    {i + 1 + '. ' + input}
                  </Typography>
                    }) : 
                    <div>
                        <Typography mb={3}>No history yet...</Typography>
                        <NavLink to="/" className="page-link">
                            Go make some history!
                        </NavLink>
                    </div>
                }
               {history?.length ? <Button variant="outlined" onClick={handleClearHistory}>Clear History</Button> : ''}
            </Card>
        </Fragment>
    )
}