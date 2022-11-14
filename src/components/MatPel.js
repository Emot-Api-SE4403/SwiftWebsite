import { Card, Container, Row, Col, Image } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import image10 from "../images/image-10.jpg"
import image11 from "../images/image-11.jpg"
import image12 from "../images/image-12.jpg"
import image13 from "../images/image-13.jpg"
import image14 from "../images/image-14.jpg"
import image15 from "../images/image-15.jpg"
const MatPel = () => {
    return (
      <div>
        <Container>
          <br />
          <h1 style={{color:'black', fontStyle:'oblique'}}>MATA PELAJARAN</h1>
          <br />
          <Row>
            <Col md={4} className="matPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image10} alt="BIOLOGI" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">BIOLOGI</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                      <a href="/explore/biologi">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>
                    <Col >
                        <Card.Text className="text-left">
                            Dibuka terakhir kali 2 jam yang lalu
                        </Card.Text>
                    </Col>
                    
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image12} alt="KIMIA" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">KIMIA</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/kimia">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>
                    <Col>
                        <Card.Text className="text-left">
                            Baru saja dibuka
                        </Card.Text>
                    </Col>
                    
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image11} alt="FISIKA" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">FISIKA</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/fisika">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>  
                    <Col>
                        <Card.Text className="text-left">
                            Dibuka terakhir kali 20 menit yang lalu
                        </Card.Text>
                    </Col>                   
                  </div>
                </div>
              </Card>
            </Col>

           
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image13} alt="SOSIOLOGI" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">SOSIOLOGI</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/sosiologi">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>
                    <Col>
                        <Card.Text className="text-left">
                            Dibuka terakhir kali 3 hari yang lalu
                        </Card.Text>
                    </Col>                   
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image14} alt="SEJARAH" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">SEJARAH</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/sejarah">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>
                    <Col>
                        <Card.Text className="text-left">
                            Dibuka terakhir kali 2 hari yang lalu
                        </Card.Text>
                    </Col>                   
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image15} alt="GEOGRAFI" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">GEOGRAFI</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/geografi">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>
                    <Col>
                        <Card.Text className="text-left">
                            Dibuka terakhir kali 2 hari yang lalu
                        </Card.Text>
                    </Col>                   
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image12} alt="KIMIA" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">KIMIA</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/kimia">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>
                    <Col>
                        <Card.Text className="text-left">
                            Baru saja dibuka
                        </Card.Text>
                    </Col>
                    
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image11} alt="FISIKA" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">FISIKA</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/fisika">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>  
                    <Col>
                        <Card.Text className="text-left">
                            Dibuka terakhir kali 20 menit yang lalu
                        </Card.Text>
                    </Col>                   
                  </div>
                </div>
              </Card>
            </Col>

           
            <Col md={4} className="MatPelWrapper" id="MatPel">
              <Card className="MatPelImage">
                <Image src={image13} alt="SOSIOLOGI" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">SOSIOLOGI</Card.Title>
                    <Card.Text className="text-left">
                      deskripsi mata pelajaran
                    </Card.Text>
                    <Col md = {6}>
                    <a href="/explore/sosiologi">
                        <Button variant="primary">Mulai</Button>{''}
                      </a>
                    </Col>
                    <Col>
                        <Card.Text className="text-left">
                            Dibuka terakhir kali 3 hari yang lalu
                        </Card.Text>
                    </Col>                   
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
  
  export default MatPel;