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
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();

    const registerapicall = (data) => {
      fetch(process.env.REACT_APP_BACKEND_URi+'/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      }).then(json => {
        alert('Registration successful! Please login to continue.');
        navigate('/login');
      }).catch(error => {
        alert(error.message);
      });
    };
    
  

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let data = Object.fromEntries(formData);
        
        if (data.password.length < 8) {
          alert('Panjang pasword harus lebih dari 8!');
        } else if (data.email === 'admin@admin.test') {
          alert('Email sudah pernah digunakan!');
        } else if (data.password === data.confirmpassword) {
          registerapicall({
            fullName: data.nama,
            email: data.email,
            password: data.password,
          });
        } else {
          alert('Confirmasi password tidak sesuai');
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
                        {"maxWidth": "80%", 
                        "height": "auto", 
                        "padding": "0", 
                        "margin": "0"}
                    }/>
                    
                    <Typography variant="h4" color="text.secondary" align="center">
                        Register Account
                    </Typography>
                            
                    <Box component="form" noValidate onSubmit={handleSubmit} id="regform">
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