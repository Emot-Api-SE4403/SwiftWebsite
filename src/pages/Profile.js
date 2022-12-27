import { Grid, Box, Container, CssBaseline, ThemeProvider, Typography, Link, IconButton} from '@mui/material';
import * as React from 'react';
import { ThemeRed } from '../components/Theme';
import NavigationBar from '../components/NavigationBar';
import BagIcon from '@mui/icons-material/ShoppingBagOutlined';
import SettingIcon from '@mui/icons-material/SettingsOutlined';


export default function Profile() {
    const userData = JSON.parse(sessionStorage.getItem('user'));

    var name = userData.fullName
    var jurusan = userData.jurusan
    var sekolah = userData.sekolahAsal
    var email = userData.email
    var phone = userData.phoneNumber
    var profile = userData.profilePicture

    return(
        <ThemeProvider theme={ThemeRed}>
            <NavigationBar />
            <CssBaseline />
            <br />
            <br />
            <Container  component="main" maxWidth="md" sx={{padding:'0'}}>
                <Box sx={{flexDirection:'column' , backgroundColor:'red', borderRadius: '10px'}}>
                    <Grid container sx={{padding:'25px 10px 10px 10px'}}>
                        <Grid item xs={2}>
                            <img src={profile} style={{width:"100%", height:"auto", padding: '10px'}}/>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variants='p' fontWeight='bold'>{name}</Typography>
                            <Typography variants='p'>{jurusan}</Typography>
                            <Typography variants='p'>{sekolah}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton  href="/profil/edit">
                                <SettingIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container  sx={{textAlign:'center', borderTop: 1, padding:'5px'}} >
                        <Grid item xs={6}>
                            <Typography variants='p'>Email</Typography>
                            <Typography variants='p'>{email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variants='p'>No. HP</Typography>
                            <Typography variants='p'>{phone}</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{flexDirection:'column'}}>
                    
                    <Grid container sx={{backgroundColor:'lightgrey', borderRadius: 2, padding:'15px 5px', marginTop:'10px'}}>
                        <Grid item xs={11}>
                            <Link href = "/riwayat/materi"><Typography variants='p' fontWeight='bold'>Riwayat Materi</Typography></Link>
                        

                    
                        </Grid>

                        <Grid item xs={1} sx={{textAlign:'center'}}>
                            <BagIcon />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
        </ThemeProvider>
    )
}