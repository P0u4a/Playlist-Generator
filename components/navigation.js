import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import LoginBtn from './login-btn';
import Link from 'next/link';
import Notification from './notification';
//TODO: Add gradient to navbar background
export default function Navigate() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='danger' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='/'>Wizard</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Item>
                <Link href='/' passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href='#form' passHref>
                  <Nav.Link>Create Playlist</Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>

            <Nav>
              <ButtonGroup aria-label='buttons'>
                <Notification />
                <LoginBtn />
              </ButtonGroup>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}