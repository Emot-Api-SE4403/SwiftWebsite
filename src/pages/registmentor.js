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


export default function Registmentor() {
    const navigate = useNavigate();

    function checkPassword(pw, cpw) {
        if (pw.length < 8) {
            alert("Panjang password minimal 8 karakter")
            return false
        }
        if (pw !== cpw) {
            alert("Konfirmasi password tidak sesuai dengan password")
            return false
        }
        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        
        const formData = new FormData(event.target);
        let data = Object.fromEntries(formData);
        if (!checkPassword(data.password, data.confirmpassword)) {
            return;
        }

        var settings = {
            method: 'POST',
            body: JSON.stringify({
                'email':data.email,
                'raw_password':data.password,
                'nama_lengkap':data.nama,
                'keahlian':data.keahlian,
                'asal':data.asal
            }),
            headers: {
                'Content-Type':'application/json'
            }
        }
        fetch(process.env.REACT_APP_BACKEND_API_URL+'/mentor/register', settings)
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw response;
        })
        .then(json => {
            alert('berhasil!')
            navigate('/loginmentor')
        })
        .catch(error => {
            error.json().then(data => {
            alert(data.detail);
            }).catch(() => {
            alert(error.message);
            });
        });


    }

    return (
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <Container component="main" maxWidth="xs"> 
                <Box sx={{
                    minHeight: '100vh',
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
                            
                    <Box component="form" noValidate id="regform" onSubmit={handleSubmit}>
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
                                    label="Email"
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
                                    helperText="Panjang password minimal 8 karakter"
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
                                    helperText='Isi harus sama dengan password'
                                />
                                
                            </Grid> 
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="keahlian"
                                    label="Masukan keahlian anda"
                                    type="text"
                                    id="keahlian"
                                    variant="filled"
                                    helperText='Contoh: Literasi Bahasa Indonesia, Literasi Bahasa Inggris'
                                />
                                
                            </Grid>   
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="asal"
                                    label="Masukan asal anda"
                                    type="text"
                                    id="asal"
                                    variant="filled"
                                    helperText='Contoh: Universitas Telkom, Prosus Inten, SMK Telkom Bandung, Umum'
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