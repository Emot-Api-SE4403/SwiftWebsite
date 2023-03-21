//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { Link } from 'react-router-dom'
import NavigationBar from "../components/NavigationBar";
//import { useParams } from  "react-router-dom";

function PTugas (){
  //let { id } =  useParams()
      return (
        <div class="container-fluid" style={{ backgroundColor: "#fbeeeb" }}>
   <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<NavigationBar />
  
  {/* body */}
  
  <a href="/tugasmtk"><button
    type="button"
    className="btn btn-light btn-lg btn-block rounded text-left"
    style={{ width: "100%", textAlign: "Left" , marginTop: "10px"}}
  >
    <div className="h5">
      <i className="fa fa-pie-chart" aria-hidden="true" />
      Matematika
      <p className="h6" style={{ marginLeft: 26 }}>
        Matematika
      </p>
    </div>
    <div mx-auto text-center className="left-btn">
          <a type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus Tugas</a>
        </div>
  </button></a>
  <br />
  <a href="/tugasbio"><button
    type="button"
    className="btn btn-light btn-lg btn-block rounded text-left"
    style={{ width: "100%", textAlign: "Left", marginTop: "10px" }}
  >
    <div className="h5">
      <i className="fa fa-clock-o" aria-hidden="true" />
      Hewan
      <p className="h6" style={{ marginLeft: 26 }}>
        Biologi
      </p>
    </div>
    <div mx-auto text-center className="left-btn">
          <a type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus Tugas</a>
        </div>
  </button></a>
  <br />
  <a href="/tugasbio"><button
    type="button"
    className="btn btn-light btn-lg btn-block rounded text-left"
    style={{ width: "100%", textAlign: "Left", marginTop: "10px" }}
  >
    <div className="h5">
      <i className="fa fa-clock-o" aria-hidden="true" />
      Enzim
      <p className="h6" style={{ marginLeft: 26 }}>
        Biologi
      </p>
    </div>
    <div mx-auto text-center className="left-btn">
          <a type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus Tugas</a>
        </div>
  </button></a>
  <br />
  <br/>
  <div className='mx-auto text-center'>
        <div mx-auto text-center>
          <a href="/TugasTambah" type="submit" class="btn btn-primary">Tambah Tugas</a>
        </div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Hapus</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hapus Soal
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
    );
}
export default PTugas