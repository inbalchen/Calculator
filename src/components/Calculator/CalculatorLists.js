import {Grid, Button} from '@mui/material';
import {Fragment} from 'react';

export default function CalculatorLists({arr, handleClick}) {
    return (
        <Fragment>
            {arr.map((value) => (
                <Grid item xs={3} key={value}>
                    <Button fullWidth className={value !== '=' ? 'btn' : ''}
                    variant="contained" value={value} 
                    type={value === '=' ? "submit" : "button"} 
                    onClick={(e) => handleClick(e.target.value)}>{value}</Button>
                </Grid>
            ))}
        </Fragment>
    )
}