import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginBtn from './login-btn';
import Link from 'next/link';

//TODO: Add gradient to navbar background
export default function Navigate() {
  return (
    <>
    <Navbar expand='lg' bg='danger' variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href='/'>Wizard</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Item>
              <Link href='/' passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href='playlistRequest' passHref>
                <Nav.Link>Create Playlist</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <LoginBtn/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}