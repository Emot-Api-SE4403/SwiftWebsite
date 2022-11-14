import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from 'react-router-dom'
//import React from 'react';

function TugasBio (){
    return (
      <div class="container">
        <Navbar bg="danger" expand="lg">
          <Container fluid>
            <a href="/"><button type="button" class="btn-close" aria-label="Close">
            </button></a>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <h2><i>Tugas Biologi</i></h2>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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