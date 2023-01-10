import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/NavigationBar";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function LihatTugas (){
    let { tugas } = useParams();

    const [soal, setsoal] = useState([]);
    fetch(process.env.REACT_APP_BACKEND_URi+'/soal/dapat1/' + tugas, {
        method: 'GET',
        //body: JSON.stringify({id: tugas}),
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + sessionStorage.getItem('jwt')
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    }).then(json => {
        setsoal(json.data.content)
    }).catch(error => {
        alert(error.message);
    });
    return (
        <div class="container">
            <NavigationBar />
            <p><u>Tugas Baru</u></p>
            <ul>{soal.map(name => <li key={name}> {name} </li>)}</ul>
            <p>Jawaban dikirim via WA ya..</p>
        </div>
    );
}
export default LihatTugas