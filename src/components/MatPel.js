import { Card, Container, Row, Col, Image, Modal } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import image10 from "../images/image-10.jpg"
import image11 from "../images/image-11.jpg"
import image12 from "../images/image-12.jpg"
import image13 from "../images/image-13.jpg"
import image14 from "../images/image-14.jpg"
import image15 from "../images/image-15.jpg"
import image16 from "../images/image-16.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import imagemtk from "../images/matematika.jpg";
const MatPel = () => {
    return (
      <div>
        <Container>
          <br />
          <h1 style={{color:'black', fontStyle:'oblique'}}></h1>
          <br />
          <Row>
            <Col md={4} className="matPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image10} alt="BIOLOGI" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">KUANTITATIF</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <div class="btn-group">
                      <a href="/explore/biologi" class="btn btn-primary active" aria-current="page">Mulai</a>
                      <a href="#" class="btn btn-primary active" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
                      <a href="#" class="btn btn-primary active">Edit</a>
                    </div>
                    
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image12} alt="KIMIA" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">LITERASI B. INGGRIS</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <div class="btn-group">
                      <a href="/explore/kimia" class="btn btn-primary active" aria-current="page">Mulai</a>
                      <a href="#" class="btn btn-primary active" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
                      <a href="#" class="btn btn-primary active">Edit</a>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image11} alt="FISIKA" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">LITERASI B. INDONESIA</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <div class="btn-group">
                      <a href="/explore/fisika" class="btn btn-primary active" aria-current="page">Mulai</a>
                      <a href="#" class="btn btn-primary active" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
                      <a href="#" class="btn btn-primary active">Edit</a>
                    </div>         
                  </div>
                </div>
              </Card>
            </Col>

           
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={imagemtk} alt="MATEMATIKA" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">PENALARAN MATEMATIKA</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <div class="btn-group">
                      <a href="/explore/matematika" class="btn btn-primary active" aria-current="page">Mulai</a>
                      <a href="#" class="btn btn-primary active" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
                      <a href="#" class="btn btn-primary active">Edit</a>
                    </div>      
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image14} alt="SEJARAH" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">PENALARAN UMUM</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <div class="btn-group">
                      <a href="/explore/sejarah" class="btn btn-primary active" aria-current="page">Mulai</a>
                      <a href="#" class="btn btn-primary active" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
                      <a href="#" class="btn btn-primary active">Edit</a>
                    </div>          
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image13} alt="SOSIOLOGI" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">KEMAMPUAN MEMAHAMI BACAAN DAN MENULIS</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <div class="btn-group">
                      <a href="/explore/sosiologi" class="btn btn-primary active" aria-current="page">Mulai</a>
                      <a href="#" class="btn btn-primary active" data-bs-toggle="modal" data-bs-target="#exampleModal">Hapus</a>
                      <a href="#" class="btn btn-primary active">Edit</a>
                    </div>             
                  </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Hapus</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <p>Hapus</p>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" class="btn btn-primary">Delete</button>
                                </div> 
                           </div>
                        </div>
                      </div>
              </Card>
            </Col>

            <a href="#" type="submit" class="btn btn-primary">Tambah Materi</a>

            
          </Row>
        </Container>
      </div>
    )
  }
  
  export default MatPel;
  