import { Grid, Box, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import { ThemeRed } from '../components/Theme';
import LowerNavbar from '../components/LowerNavbar';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import {styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight:0,
    width: '100%',
    display: 'flex', 
    flexDirection:'row',
    alignItems:'center',
    
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    padding: theme.spacing(1, 1, 1, 0),
    width:'100%',
  }));

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
                                <Paper sx={{border: '20px', }}>
                                <Search>
                                    <div style={{padding: '0 10px'}}>
                                        <SearchIcon />
                                    </div>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
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