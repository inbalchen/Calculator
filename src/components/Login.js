import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Grid, Card, TextField, Button, Typography} from '@mui/material';

export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    useEffect(() => {
        const isAuth = localStorage.getItem('token');
        if(JSON.parse(isAuth)) {
            navigate('/'); // redirect user if logged in already
        }
    });

    const onSubmit = data => {
        localStorage.setItem("token", JSON.stringify(data.userName));
        navigate('/'); // redirect user if login - succeeded
    };

    return (
        <Card sx={{ maxWidth: 380, margin: '50px auto', padding: '20px' }}>
            <Typography variant="subtitle1" mb={2}>USER LOGIN</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} textAlign="center" justifyContent="space-around">
                <Grid item xs={12}>
                    <TextField fullWidth placeholder="Enter User Name" label="User Name" {...register("userName", { required: true })} 
                    aria-invalid={errors.userName ? "true" : "false"}
                    error={errors.userName?.type ? true : false} />
                    {errors.userName?.type === 'required' && 
                    <p role="alert" className="error">User name is required</p>}
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth placeholder="Enter Email address" label="Email" {...register("mail", { required: "Email Address is required", pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                        } })} 
                    aria-invalid={errors.mail ? "true" : "false"} 
                    error={errors.mail ? true : false}  />
                    {errors.mail && 
                    <p role="alert" className="error">{errors.mail?.message}</p>}
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined">Login</Button>
                </Grid>
                </Grid>
            </form>
        </Card>
    )
}