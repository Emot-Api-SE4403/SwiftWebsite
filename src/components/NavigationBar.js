import { Navbar, Container, Nav, NavDropdown  } from "react-bootstrap"
import { icons } from "react-icons"
import {IoMdPaperPlane} from "react-icons/io"
const NavigationBar = () => {
  return (
    <div>
    <Navbar className = "Navbar">
      <Container>
        <div className="icon">
        <IoMdPaperPlane/>
        </div>
        <Navbar.Brand href="/">SWIFT E-LEARNING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/PTugas">TUGAS</Nav.Link>
            <NavDropdown title="Riwayat" id="basic-nav-dropdown">
              <NavDropdown.Item href="/riwayat/materi">
                Riwayat Materi
              </NavDropdown.Item>
              <NavDropdown.Item href="/riwayat/soal">
                Riwayat Soal
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/account">
                Manage Account
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar