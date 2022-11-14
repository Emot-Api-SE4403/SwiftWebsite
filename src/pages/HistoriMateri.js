import { Grid, Box, Container, CssBaseline, ThemeProvider, Typography, Link } from '@mui/material';
import * as React from 'react';
import { ThemeRed } from '../components/Theme';
import LowerNavbar from '../components/LowerNavbar';
import Paper from '@mui/material/Paper';
import { Mapel } from '../components/MapelEnum';


export default function HIstoriMateri() {
    
    var data = [
        {
            namaItem: "Trigonometri",
            jenis: "Matematika"
        },
        {
            namaItem: "Hewan",
            jenis: "Biologi"
        },
        {
            namaItem: "Hewan (forum)",
            jenis: "Biologi"
        },
        {
            namaItem: "Hukum Newton 17",
            jenis: "Fisika"
        },
        {
            namaItem: "Klimat Pendukung",
            jenis: "Bahasa Indonesia"
        },
        {
            namaItem: "Jenis Atom",
            jenis: "Kimia"
        },
        {
            namaItem: "Hewan",
            jenis: "Biologi"
        },
        {
            namaItem: "Hewan (forum)",
            jenis: "Biologi"
        },
        {
            namaItem: "Hukum Newton 17",
            jenis: "Fisika"
        },
        {
            namaItem: "Klimat Pendukung",
            jenis: "Bahasa Indonesia"
        },
        {
            namaItem: "Jenis Atom",
            jenis: "Kimia"
        },
        {
            namaItem: "Hukum Newton 17",
            jenis: "Fisika"
        },
        {
            namaItem: "Klimat Pendukung",
            jenis: "Bahasa Indonesia"
        },
        {
            namaItem: "Jenis Atom",
            jenis: "Kimia"
        },
        {
            namaItem: "Hewan",
            jenis: "Biologi"
        },
        {
            namaItem: "Hewan (forum)",
            jenis: "Biologi"
        },
        {
            namaItem: "Hukum Newton 17",
            jenis: "Fisika"
        },
        {
            namaItem: "Klimat Pendukung",
            jenis: "Bahasa Indonesia"
        },
        {
            namaItem: "Test Items",
            jenis: "Other"
        },
        
    ].map(({namaItem, jenis}) => {
        
        return(
            <Grid item xs={12}>
                <Paper sx={{border: '20px', padding: '0 10px'}}>
                    <Box sx={{
                    borderRadius: '10px',
                    marginLeft: 0,
                    marginRight:0,
                    width: '100%',
                    display: 'flex', 
                    flexDirection:'row',
                    alignItems:'center',}}>
                        {Mapel(jenis)}
                        <Box sx={{paddingLeft: '10px' }}>
                            <Typography variants='h6'>
                                {namaItem}
                            </Typography>
                            <Typography variants='p'>
                                {jenis}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        )
    })



    return(
        <ThemeProvider theme={ThemeRed}>
            <CssBaseline />
            <Container  component="main" maxWidth="xs" sx={{padding:'0',}}>
                <div style={{height:'100vh', backgroundColor:'#FADBD8'}}>
                <Box justifyContent="center" sx={{flexDirection:'column'}}>
                    <Box sx={{ flexGrow: 1, backgroundColor:'red', padding:'10px' }} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{display: 'flex', alignItems:"center", justifyContent:"center",}}>
                                <Typography variants='h3'>Riwayat</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{display: 'flex', alignItems:"center", justifyContent:"center",}}>
                                <Link href='/histori/materi' sx={{color:'black'}}>Materi</Link>
                            </Grid>
                            <Grid item xs={6} sx={{display: 'flex', alignItems:"center", justifyContent:"center",}}>
                            <Link href='/histori/tugas' sx={{color:'black'}}>Tugas</Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ 
                        flexGrow: 1,
                        Heigth:'72vh',
                        maxHeight: 'calc(100vh - 140px)',
                        backgroundColor:'#FADBD8', 
                        padding:'10px', 
                        overflowY:'scroll'}}>
                        <Grid container spacing={2}>
                            {data}    
                        </Grid>
                    </Box>  
                </Box>
                </div>
            </Container>
            <LowerNavbar />
        </ThemeProvider>
    )
}