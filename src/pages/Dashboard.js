import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import SideBar from '../components/DashboardItem/SideBar';
import { Container } from 'react-bootstrap';

export default function Dashboard () {
    const navigator = useNavigate()
    var [activeTab, setActiveTab] = React.useState(0)

    var jwt = sessionStorage.getItem('session_token')
    if (jwt === null) {
        navigator('/');
    }

    function handleTabChange(index) {
        setActiveTab(index)
    }

    return(
        <>
        <NavigationBar />
        <div className='d-flex flex-direction-row'>
            <SideBar onTabChange={handleTabChange}/>    
            <Container>
                <h1>And the number is {activeTab}</h1>
            </Container>
        </div>
        </>
    )
};