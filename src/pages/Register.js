import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/material/styles";
import logo from "../images/logo 512 256.svg";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeRed } from '../components/Theme';

export default function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(false){

        }else if(false){

        }else if(data.get('password').length < 8){
            alert('密码长度不能小于8位');
        } else if(data.get('email') === "admin@admin.test"){
            alert("Email sudah pernah digunakan!");
        } else if(data.get('password') === data.get('confirmpassword')){
            console.log({
                nama: data.get('nama'),
                email: data.get('email'),
                password: data.get('password'),
                confirm: data.get('confirmpassword'),
            });
        } else {
            alert("Confirmasi password tidak sesuai");
        }
      };

    return (
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <Container component="main" maxWidth="xs"> 
                <Box sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}>
                    <img src={logo} alt="logo swift" style={
                        {"max-width": "80%", 
                        "height": "auto", 
                        "padding": "0", 
                        "margin": "0"}
                    }/>
                    
                    <Typography variant="h4" color="text.secondary" align="center">
                        Register Account
                    </Typography>
                            
                    <Box component="form" noValidate onSubmit={handleSubmit} if="regform">
                        <Grid container spacing={2} justifyContent="center"> 
                            
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="nama"
                                    required
                                    fullWidth
                                    id="nama"
                                    label="Nama"
                                    autoFocus
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmpassword"
                                    label="Konfirmasi Password"
                                    type="password"
                                    id="confirmpassword"
                                    autoComplete="new-password"
                                    variant="filled"
                                />
                                
                            </Grid>                    
                        </Grid>
                    </Box>
                    <Button
                        type="submit"
                        variant="outlined"
                        xs = {12}
                        fullWidth
                        sx={{mb: 3, mt:2, borderRadius: 5}}
                        form="regform"
                    >
                    Daftar  
                    </Button> 
                </Box>
            </Container>
        </ThemeProvider>
    )
}