import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, Container, Paper } from '@mui/material';


export default function LowerNavbar() {
    const [value, setValue] = React.useState(0);

    return (
        <React.Fragment>
            <Container maxWidth='xs' sx={{position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                
                >
                    <BottomNavigationAction label="Home" href="/" icon={<HomeOutlinedIcon />} />
                    <BottomNavigationAction label="Histori" href="/riwayat/materi" icon={<HistoryOutlinedIcon />} />
                    <BottomNavigationAction label="Tugas" href="/tugas" icon={<ArticleOutlinedIcon />} />
                    <BottomNavigationAction label="Akun" href="/login" icon={<PersonOutlineOutlinedIcon />} />
                </BottomNavigation>
            </Container>
        </React.Fragment>
    );
  }