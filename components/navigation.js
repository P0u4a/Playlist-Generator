import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import LoginBtn from './login-btn';
import Image from 'next/image';
import Link from 'next/link';
import Notification from './notification';
//TODO: Add gradient to navbar background
export default function Navigate() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand>
            <Image
              src='/vinyl.svg'
              width={50}
              height={50}
              alt='Vecteezy.com'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Item>
                <Link href='/' passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href='/playlistRequest' passHref>
                  <Nav.Link>Create Playlist</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href='https://github.com/P0u4a' passHref>
                  <Nav.Link>Github Page</Nav.Link>
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