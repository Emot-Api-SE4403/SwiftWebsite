//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import { Link } from 'react-router-dom'

function PTugas (){
    return (
        <div class="container-fluid" style={{ backgroundColor: "#fbeeeb" }}>
   <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
  <nav className="navbar bg-danger rounded-bottom h5">
    <div
      className=" mx-auto text-center font-weight-bold"
      style={{ width: 200 }}
    >
      <u>Tugas</u>
      <div className="row">
        <div className="col">
        </div>
        <div className="col">
        </div>
      </div>
    </div>
  </nav>
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
  </button></a>
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
  <br />
  <br />
</div>
    );
}
export default PTugas