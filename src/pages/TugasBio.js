import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from 'react-router-dom'
//import React from 'react';
import NavigationBar from "../components/NavigationBar";

function TugasBio (){
    return (
      <div class="container">
        <NavigationBar />
        <p></p>
        <p><u>Pilihan Ganda</u></p>
        <p>1. Perbedaan antara sel hewan dan tumbuhan yang paling utama adalah </p>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
          <label class="form-check-label" for="flexRadioDefault1">
            A. Dinding Sel
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            B. Inti Sel
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            C. Ribosom
          </label>
        </div>
        <p><u>Essay</u></p>
        <form>
          <div class="row mb-3">
            <label for="soal1" class="col-sm-2 col-form-label">Enzim Ptialin berfungsi untuk:</label>
            <div class="col-sm-10">
              <input class="form-control" id="soal1"></input>
            </div>
          </div>
          <div class="col-12">
            <a href="/PTugas" type="submit" class="btn btn-primary">Submit</a>
          </div>
        </form>
      </div>
      );
}
export default TugasBio