import {useState, Fragment, useEffect} from 'react';
import {Typography, CardContent, Grid, Card, Button} from '@mui/material';
import CalculatorLists from './CalculatorLists';
import InputText from './InputText';

export default function Calculator() {
    const [inputText, setInputText] = useState('');
    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        const lastInput = JSON.parse(localStorage.getItem('lastInput'));
        if(lastInput) {
            setInputText(lastInput);
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = '';
        try { // try to evaluate result
            result = eval(inputText);
            result = result.toString();
            setHistory(result);
            setInputText(result);
            localStorage.setItem('lastInput', JSON.stringify(result));
        }catch(e) { // display error if cannot evaluate
            console.log(e);
            setInputError(true);
        }
        
    }

    const handleClick = (value) => {
        setHistory(value);
        setInputError(false);
        let result = '';
        if (value === '=') { // evaluate the expression and set the new state
          return;
        }else if(/0+/.test(value)) { // check for 0+
            result='0';
        } else if (value === 'clear') { // clear input
          result='';
          localStorage.setItem('lastInput', null);
        } else if (value === '<' && inputText !== '') { // delete last char entered
          let val = inputText;
          result = val.substring(0, val.length - 1);
        } else if (value !== '=' && value !== '<') { // add last char entered
          result = inputText+value;
        }
        setInputText(result);
        localStorage.setItem('lastInput', JSON.stringify(result));
    };

    const setHistory = (value) => {
        const historyStorage = JSON.parse(localStorage.getItem('history'));
        let tmp = [];
        if(historyStorage) {
            tmp = [...historyStorage];
        }
        tmp.push(value); // push value to end of temporary array
        localStorage.setItem('history', JSON.stringify(tmp));
         if(tmp.length >= 21) { // save only 20 last entered characters
            tmp.shift()
            localStorage.setItem('history', JSON.stringify(tmp));
        }
    }

    return (
        <Fragment>
            <Typography variant="h4" textAlign="center" mt={2}>Calculator</Typography>
            <Card sx={{ maxWidth: 350, margin: '50px auto' }}>
                <form onSubmit={handleSubmit}>
                <CardContent>
                    <InputText inputText={inputText} setInputText={setInputText} inputError={inputError} />
                    <Grid container rowSpacing={2} textAlign="center" columnSpacing={2} marginTop={3}>
                        <CalculatorLists arr={['7', '8', '9', '*']} handleClick={handleClick} />
                        <CalculatorLists arr={['4', '5', '6', '/']} handleClick={handleClick} />
                        <CalculatorLists arr={['1', '2', '3', '+']} handleClick={handleClick} />
                        <CalculatorLists arr={['0', '<', '=', '-']} handleClick={handleClick} />
                        <Grid item xs={12}>
                            <Button fullWidth variant="outlined" value="clear" type="button" onClick={(e) => handleClick(e.target.value)}>Clear</Button>                                        
                        </Grid>
                    </Grid>
                </CardContent>
                </form>
            </Card>
        </Fragment>
    )
}