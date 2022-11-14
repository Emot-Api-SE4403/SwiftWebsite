import { Col, Container, Row, Button } from "react-bootstrap"
import logo from '../images/image-1.png'

const Intro = () => {
  var data = {
    nama: "Wawan Sutajo",
  }

  return (
    <div className="Intro">
      <Container className="Introcon">
        <Row>
          <Col md = {6} className="Intromd" id="intro1">
            <div style={{color:'white'}} className="title">Selamat Datang,</div>
            <div style={{color:'white'}} className="title">{data.nama}</div>
            <div style={{color:'white'}} className="desc">Swift E-Learning hadir sebagai pembantu seorang pelajar untuk memasuki perguruan tinggi yang diinginkannya. Website kami berfokus untuk membantu pelajar dalam salah satu standar penting untuk mendaftar ke perguruan tinggi. Website kami membantu para pelajar dalam mempersiapkan dirinya untuk mengerjakan utbk. Dengan bantuan dari para kakak kelas yang handal dan juga para guru yang siap membantu, kami harap website kami dapat membantu untuk menunjang persiapan adik adik pelajar dalam menghadapi utbk. </div>
            <div style={{color:'white'}} className="introButton ">
            <a href="/login"><Button variant="dark" >Lets Go, Mate</Button></a>
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