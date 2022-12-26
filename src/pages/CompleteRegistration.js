import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeRed } from '../components/Theme';
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar"
import InputLabel from '@mui/material/InputLabel';


export default function ProfileEdit() {
    const navigate = useNavigate();
    const [jurusan, setJurusan] = React.useState('');
    const userData = JSON.parse(sessionStorage.getItem('user'));

    const handleSubmit = (event) => {

    }
      

    return (
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <NavigationBar />
            <Container component="main" maxWidth="xs"> 
                
                <Box fullHeight sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    height: '90vh'
                }}>
                    
                            
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
                                    value={userData.fullName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={userData.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Nomer HP"
                                    name="phoneNumber"
                                    autoComplete="tel"
                                    value={userData.phoneNumber || ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                value={jurusan || userData.jurusan}
                                fullWidth
                                onChange={(e) => setJurusan(e.target.value)}
                                select // tell TextField to render select
                                label="Jurusan"
                                >
                                    <MenuItem value="IPA">IPA</MenuItem>
                                    <MenuItem value="IPS">IPS</MenuItem>
                                    <MenuItem value="BAHASA">BAHASA</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="asalSekolah"
                                    label="Sekolah Asal"
                                    name="asalSekolah"
                                    value={userData.asalSekolah || ""}
                                />
                            </Grid>                 
                        </Grid>
                    </Box>
                    <Button
                        type="submit"
                        variant="filled"
                        xs = {12}
                        fullWidth
                        sx={{mb: 3, mt:2, borderRadius: 5}}
                        form="regform"
                    >
                    Perbaharui  
                    </Button> 
                </Box>
            </Container>
        </ThemeProvider>
    )
}