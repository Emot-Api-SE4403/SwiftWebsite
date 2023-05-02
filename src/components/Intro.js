import { Col, Container, Row, Button } from "react-bootstrap"
import logo from '../images/image-1.png'

const Intro = () => {
  var data = {
    nama: "Mentor dan Admin",
  }

  return (
    <div className="Intro">
      <Container className="Introcon">
        <Row>
          <Col md = {6} className="Intromd" id="intro1">
            <div style={{color:'white'}} className="title">Selamat Datang,</div>
            <div style={{color:'white'}} className="title">{data.nama}</div>
            <div style={{color:'white'}} className="introButton ">
            
            </div>
          </Col>
          <Col md = {6} className="intromd" id="intro2">
            <Container>
              <img src={logo} className="logoIntro" alt = "logo"/>
            </Container>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Intro