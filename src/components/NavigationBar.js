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
        <Navbar.Brand href="/">ADMIN SWIFT E-LEARNING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/PTugas">Tugas</Nav.Link>
            <Nav.Link href="/DataMember">Data Member</Nav.Link>
            <Nav.Link href="/DataMentor">Data Mentor</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/loginadmin">
                Login Admin
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">
                Register Admin
              </NavDropdown.Item>
              <NavDropdown.Item href="/loginmentor">
                Login Mentor
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">
                Register Mentor
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <DashboardButton/>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

const DashboardButton = () => {
  var jwt = sessionStorage.getItem('session_token')

  if (jwt !== null) {
    return (
      <>
        <NavDropdown.Item href="/dashboard">
            Dashboard
        </NavDropdown.Item>
        <NavDropdown.Item onClick={useLogOut}>
            Log Out
        </NavDropdown.Item>
      </> 
    )
  }

  return (<></>)
}

const useLogOut = () => {
  sessionStorage.removeItem('session_token')
  window.location.href = '/'
}

export default NavigationBar