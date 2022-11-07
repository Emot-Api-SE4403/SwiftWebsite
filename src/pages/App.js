import logo from '../images/logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div class="container-fluid text-center" style={{"background-color": "#282c34"}}>
      <div class="row py-2">
        <div class="col-md-12">
          <h2 style={{"color":"white"}}>10:00 AM Group Presents</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img src={logo} class="App-logo img" alt="logo" style={{maxWidth:"40vw", height:"auto"}}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1 style={{"color":"white"}}>Daftar isi halaman</h1>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-md-4">
          <a href="/contact">Open contact</a>
        </div>
        <div class="col-md-4">
          <a href="/login">Open login page</a>
        </div>
        <div class="col-md-4">
          <a href="/404NotFound">Open error page</a>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-md-4">
          <a href="/registertest">Open example register page</a>
        </div>
        <div class="col-md-4">
          <a href="/register">Open real register page</a>
        </div>
        <div class="col-md-4">
          <a href="/riwayat/materi">Halaman riwayat materi</a>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-md-4">
          <a href="/riwayat/soal">halaman riwayat soal</a>
        </div>
        <div class="col-md-4">
          <a href="/tugas">Halaman tugas</a>
        </div>  
        <div class="col-md-4">
          <a href="/404NotFound">TODO</a>
        </div>
      </div>
    </div>
  );
}

export default App;
