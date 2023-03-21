import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavigationBar from "../components/NavigationBar";

export default function DataMentor(){
    return(
        <>
        <NavigationBar />
        <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama Mentor</th>
      <th scope="col">Akun</th>
      <th scope="col">Ahli</th>
      <th scope="col">Status</th>
      <th scope="col">Aktif</th>
      <th scope="col">Hapus Akun</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jahfal</td>
      <td>jalfalramadhan4@gmail.com</td>
      <td>Saintek</td>
      <td>Kartap</td>
      <td>Ya</td>
      <a type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Sulthan</td>
      <td>fahrein@gmail.com</td>
      <td>-</td>
      <td>Kontrak</td>
      <td>Tidak</td>
      <a type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Aditya</td>
      <td>mardi@gmail.com</td>
      <td>Soshum</td>
      <td>Kartap</td>
      <td>Ya</td>
      <a type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
    </tr>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Hapus</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hapus Mentor
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
  </tbody>
</table>
</>
    )
}