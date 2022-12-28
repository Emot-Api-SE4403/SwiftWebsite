import { Alert, Collapse, IconButton,Button, TextField, Grid, Box, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { ThemeRed } from '../components/Theme';
import { Buffer } from 'buffer';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export default function ProfilePicture(...props){
    const userData = JSON.parse(Buffer.from(sessionStorage.getItem('user'), 'base64').toString('utf8'));
    const [pp, setPP] = useState(userData.profilePicture)
    const [open, setOpen] = useState(false);
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
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
        //console.log(JSON.stringify(data))
        fetch(process.env.REACT_APP_BACKEND_URi+'/auth/upload', options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.message);
        })
        .then(json => {

            // Save the encoded user data and the JWT token in session storage
            sessionStorage.setItem('user', json.user);
            navigate('/profil')            
            
        })
        .catch(error => {
            alert(error);
        });
    };
          
      


    return(
        <ThemeProvider theme={ThemeRed}>
            <NavigationBar />
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{pt: 3}}>
                <Box component="form" noValidate onSubmit={handleSubmit} id="ppform">
                    <Grid container spacing={2} justifyContent="center" > 
                        <Grid item xs={12}>
                            <Typography variants='h3' sx={{textAlign: 'center'}}>
                                Ganti Foto Profile
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{textAlign: 'center'}}>
                            <img src={pp} alt={userData.fullName+"'s profile picture"} 
                            style={{maxWidth: '50vh'}}/>
                            
                        </Grid>
                        <Grid item xs={12} sx={{textAlign: 'center', }}>
                            <TextField
                                required
                                id="profilePicture"
                                type='url'
                                label="URL Profile Picture Baru"
                                name="profilePicture"
                                variant="outlined"
                                sx={{width: '40vh', height: '100%'}}
                            />  
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mt:2, 
                                    borderRadius: 2,
                                    backgroundColor: 'primary.light',
                                    width: '10vh', 
                                    height: '100%',
                                    margin: 0
                                }}
                                form="ppform"
                            >Simpan</Button>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Collapse in={open}>
                                <Alert
                                    severity="error"
                                    action={
                                        <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                    >
                                    {err}
                                    </Alert>
                                </Collapse>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}