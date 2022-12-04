import TextField from '@mui/material/TextField';
import {Fragment} from 'react';

export default function InputText({inputText, setInputText, inputError}) {
    return <Fragment>
        <TextField variant="outlined" onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            fullWidth
            onKeyDown={(e) => e.preventDefault()}
            error={inputError}
            />
            {inputError && <p className='error'>Cannot evaluate expression</p>}
    </Fragment>
    
}
