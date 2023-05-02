// import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function TugasTambah (){
    // const navigate = useNavigate();
    // const soalapicall = (content) => {
    //     fetch(process.env.REACT_APP_BACKEND_URi+'/soal/tambah', {
    //         method: 'POST',
    //         body: JSON.stringify(content),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': 'Bearer ' + sessionStorage.getItem('jwt')
    //         }
    //     }).then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         throw new Error(response.statusText);
    //     }).then(json => {
    //         alert('Update soal berhasil')
    //         navigate('/LihatTugas/'+json.id);
    //     }).catch(error => {
    //         alert(error.message);
    //     });
    // };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     soalapicall({
    //         content: [document.getElementById("soal1").value, document.getElementById("soal2").value, document.getElementById("soal3").value]
    //     });
    // };
    return (
        <div class="container">
          <NavigationBar />
          <p></p>
          <p><u>Tambah Soal</u></p>
          <form id="formtugas">
            <div class="row mb-3">
              <label for="soal1" class="col-sm-2 col-form-label">1. </label>
              <div class="col-sm-10">
                <input class="form-control" id="soal1"></input>
              </div>
            </div>
            <div class="row mb-3">
              <label for="soal2" class="col-sm-2 col-form-label">2. </label>
              <div class="col-sm-10">
                <input class="form-control" id="soal2"></input>
              </div>
            </div>
            <div class="row mb-3">
              <label for="soal3" class="col-sm-2 col-form-label">3. </label>
              <div class="col-sm-10">
                <input class="form-control" id="soal3"></input>
              </div>
            </div>
          <div class="col-12">
              <button type="submit" class="btn btn-primary">Tambahkan</button>
          </div>
          </form>
        </div>
    );
}
export default TugasTambah