import { useState } from "react"
import Clock from "./Clock"



export default function SideBar({ onTabChange }) {
    var user_type = sessionStorage.getItem('user_type')
    if (user_type === 'admin') {
        return <AdminSideBar onTabChange = {onTabChange}/>
    } else {
        return <MentorSideBar onTabChange = {onTabChange}/>
    }
}

function AdminSideBar({ onTabChange }) {
    var [activeTab, setActiveTab] = useState(0)
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        onTabChange(tabIndex);
    };
    var tabNames = [
        'Profile',
        'Analytics',
        'Database',
    ]

    return (
        <>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '180px', minHeight: '90vh'}}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className={"nav-link link-dark " + (activeTab===0? 'active':'')} onClick={() => handleTabClick(0)}>{tabNames[0]}</li>
                <li className={"nav-link link-dark " + (activeTab===1? 'active':'')} onClick={() => handleTabClick(1)}>{tabNames[1]}</li>
                <li className={"nav-link link-dark " + (activeTab===2? 'active':'')} onClick={() => handleTabClick(2)}>{tabNames[2]}</li>
            </ul>
            <hr />
            <Clock/>
        </div>
        </>
    )
}

function MentorSideBar({ onTabChange }) {
    var [activeTab, setActiveTab] = useState(0)
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        onTabChange(tabIndex);
    };

    return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '180px', minHeight: '90vh'}}>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className={"nav-link link-dark " + (activeTab===0? 'active':'')} onClick={() => handleTabClick(0)}>Tab 1</li>
                <li className={"nav-link link-dark " + (activeTab===1? 'active':'')} onClick={() => handleTabClick(1)}>Tab 2</li>
                <li className={"nav-link link-dark " + (activeTab===2? 'active':'')} onClick={() => handleTabClick(2)}>Tab 3</li>
            </ul>
            <hr />
            <Clock/>
        </div>
    </>
}