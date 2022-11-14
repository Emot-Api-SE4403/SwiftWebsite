import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Container } from '@mui/material';
import { matchPath, useLocation,} from 'react-router-dom';

function useRouteMatch(patterns) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }

export default function LowerNavbar() {
    const routeMatch = useRouteMatch(['/', '/histori/materi', '/histori/tugas', '/tugas', '/akun']);
    var currentTab = routeMatch?.pattern?.path;
    if(currentTab === '/histori/materi' || currentTab === '/histori/tugas'){
        currentTab = '/histori/'
    }

    return (
        <React.Fragment>
            <Container maxWidth='xs' sx={{position: 'fixed', bottom: 0, left: 0, right: 0, padding: 0 }}>
                <BottomNavigation
                showLabels
                value={currentTab}
                
                >
                    <BottomNavigationAction label="Home" value='/' href="/" icon={<HomeOutlinedIcon />} />
                    <BottomNavigationAction label="Histori" value='/histori/' href="/histori/materi" icon={<HistoryOutlinedIcon />} />
                    <BottomNavigationAction label="Tugas" value='/tugas' href="/tugas" icon={<ArticleOutlinedIcon />} />
                    <BottomNavigationAction label="Akun" value='/akun' href="/login" icon={<PersonOutlineOutlinedIcon />} />
                </BottomNavigation>
            </Container>
        </React.Fragment>
    );
  }