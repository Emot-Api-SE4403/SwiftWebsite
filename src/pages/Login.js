import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import logo from "../images/logo 512 256.svg";
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
    palette: {
      primary: {
        main: '#A53B29',
      },
      secondary: {
        main: '#7C554D',
      },
      tertiary: {
        main: '#725C22',
      },
      error: {
        main: '#BA1A1A',
      },
      background: {
        main: '#201A19',
      },
      outline: {
        main: '#A08C89',
      },
    },
  });

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get('email') !== "admin@admin.test"){
            alert("Email/Password Salah!");
        } else {
            if(data.get('password') !== "password") {
                alert("Email/Password Salah!");
            } else {
                window.location.href = "/contact";
            }
        }
      };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs" direction="column" justifyContent="center">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '50px 0px'
                }}>
                    <img src={logo} alt="logo swift" 
                    style={{
                        "max-width": "80%", 
                        "height": "auto", 
                    }}/>
                </Box>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
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
                            />
                            <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                Lupa password?
                                </Link>
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} align="center">
                            <Button
                                type="submit"
                                variant="contained"
                                xs = {12}
                                fullWidth
                                
                                sx={{ mt:2, borderRadius: 2}}
                            >
                            Log In
                            </Button> 
                            <Typography variant="body2">baru disini? <Link variant="body2" href="/register">Daftar sekarang!</Link></Typography>
                        </Grid>
                    
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}