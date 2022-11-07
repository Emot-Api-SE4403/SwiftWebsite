import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from 'react-router-dom'
//import React from 'react';

function Tugas (){
    return (
      <div class="container">
        <Navbar bg="danger" expand="lg">
          <Container fluid>
            <button type="button" class="btn-close" aria-label="Close"></button>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <h2><i>Tugas Mata Pelajaran</i></h2>
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
        <p>1. 20 + 30 =</p>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
          <label class="form-check-label" for="flexRadioDefault1">
            A. 50
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
          <label class="form-check-label" for="flexRadioDefault2">
            B. 20
          </label>
        </div>
        <p><u>Essay</u></p>
        <form>
          <div class="row mb-3">
            <label for="soal1" class="col-sm-2 col-form-label">1+1=</label>
            <div class="col-sm-10">
              <input class="form-control" id="soal1"></input>
            </div>
          </div>
          <div class="row mb-3">
            <label for="soal2" class="col-sm-2 col-form-label">5+5=</label>
            <div class="col-sm-10">
              <input class="form-control" id="soal2"></input>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      );
}
export default Tugas