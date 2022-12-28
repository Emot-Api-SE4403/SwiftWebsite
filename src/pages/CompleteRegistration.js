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
import {Buffer} from 'buffer';

export default function ProfileEdit() {
    const userData = JSON.parse(Buffer.from(sessionStorage.getItem('user'), 'base64').toString('utf8'));
    const [fullName, setFullName] = React.useState(userData.fullName);
    const [email, setEmail] = React.useState(userData.email);
    const [phoneNumber, setPhoneNumber] = React.useState(userData.phoneNumber);
    const [sekolahAsal, setSekolahAsal] = React.useState(userData.sekolahAsal);
    const [jurusan, setJurusan] = React.useState(userData.jurusan);
    const navigate = useNavigate();
 

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        let data = Object.fromEntries(formData);

        const token = sessionStorage.getItem('jwt');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };
        console.log(JSON.stringify(data))
        fetch(process.env.REACT_APP_BACKEND_URi+'/auth/updateregistration', options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.message);
        })
        .then(data => {
            sessionStorage.setItem('user', JSON.stringify(data.user));
            //navigate('/profil')
            
        })
        .catch(error => {
            alert(error);
        });
    }
      

    return (
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <NavigationBar />
            <Container component="main" maxWidth="xs"> 
                
                <Box sx={{
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
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Nama"
                                    autoFocus
                                    value={fullName}
                                    onChange={(event) => setFullName(event.target.value)}
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
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
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
                                    value={phoneNumber}
                                    onChange={(event) => setPhoneNumber(event.target.value)}

                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                value={jurusan || userData.jurusan}
                                fullWidth
                                onChange={(e) => setJurusan(e.target.value)}
                                select // tell TextField to render select
                                label="Jurusan"
                                id="jurusan"
                                name="jurusan"
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
                                    id="sekolahAsal"
                                    label="Sekolah Asal"
                                    name="sekolahAsal"
                                    value={sekolahAsal}
                                    onChange={(event) => setSekolahAsal(event.target.value)}
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