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
        <Navbar.Brand href="#home">SWIFT E-LEARNING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">TUGAS</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pengaturan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Profile
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