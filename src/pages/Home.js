import { Grid, Box, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { ThemeRed } from '../components/Theme';
import LowerNavbar from '../components/LowerNavbar';
import TuneIcon from '@mui/icons-material/Tune';

import Paper from '@mui/material/Paper';



export default function Home() {
    const name = "John Doe";
    return(
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <Container  component="main" maxWidth="xs" sx={{padding:'0'}}>
                <Box display="flex" justifyContent="center" sx={{flexDirection:'column',}}>
                    <Box sx={{ flexGrow: 1, backgroundColor:'red', padding:'10px' }} >
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <Typography variants='p' sx={{
                                    padding: ThemeRed.spacing(1),
                                }}>Hello {name}</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{display: 'flex', alignItems:"center", justifyContent:"center",}}>
                                    <TuneIcon />
                            </Grid>
                            <Grid item xs={12}>
                                <Paper sx={{border: '20px'}}>
                                    <Typography variants='h3' >Something in here</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>  
                </Box>
            </Container>
            <LowerNavbar />
        </ThemeProvider>
    )
}