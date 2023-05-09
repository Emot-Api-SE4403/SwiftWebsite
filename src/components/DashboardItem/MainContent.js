import AdminPage1 from "./AdminPage1";
import AdminPage2 from "./AdminPage2";
import AdminPage3 from "./AdminPage3";

export default function MainContent({activeTab}) {
    // Create an array of widgets
    const AdminPages = [
        <AdminPage1 />,
        <AdminPage2 />,
        <AdminPage3 />,

    ];

    const MentorPages = [
        <h1>TODO</h1>,
        <></>,
        <></>,
    ]

    if (sessionStorage.getItem('user_type') == 'mentor') {
        if( activeTab < MentorPages.length ){
            return MentorPages[activeTab]
        }
    } else if (sessionStorage.getItem('user_type') == 'admin') {
        if( activeTab < AdminPages.length ){
            return AdminPages[activeTab]
        }
    }

    return <></>
}