import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo 512 256.svg";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeRed } from '../components/Theme';


export default function loginmentor() {
    // const navigate = useNavigate();
      
    return (
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <Container component="main" maxWidth="xs" >
                <Box sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    
                }}>
                    <img src={logo} alt="logo swift" 
                    style={{
                        "maxWidth": "80%", 
                        "height": "auto", 
                    }}/>
                    <Box component="form" noValidate id="loginform">
                        <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
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
                                    autoComplete="password"
                                />
                                <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="mailto:<kucingmeong@student.telkomuniversity.ac.id?subject=Tolong%20jangan%20spam!" variant="body2">
                                    Lupa password?
                                    </Link>
                                </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            xs = {12}
                            fullWidth
                            sx={{ mt:2, 
                                borderRadius: 2,
                                backgroundColor: 'primary.light'
                            }}
                            form="loginform"
                            href="/"
                        >
                        Log In
                        </Button> 
                        <Typography variant="body2">baru disini? <Link variant="body2" href="/registmentor">Buat Sekarang!</Link></Typography>
                    </Box>
                </Box>
                
            </Container>
        </ThemeProvider>
    )
}