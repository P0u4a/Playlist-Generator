import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginBtn from './LoginBtn';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigate() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='warning' sticky='top'>
        <Container>
          <Navbar.Brand>
            <Image
              src='/vinyl.svg'
              width={50}
              height={50}
              alt='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
            <Nav className='me-auto' defaultActiveKey='/'>
              <Nav.Item>
                <Link href='/' passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
              </Nav.Item>
              
              <Nav.Item>
                <Link href='/playlistRequest' passHref>
                  <Nav.Link>Create</Nav.Link>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href='/privacyPolicy' passHref>
                  <Nav.Link>Privacy Policy</Nav.Link>
                </Link>
              </Nav.Item>

            </Nav>

            <Nav>
              <LoginBtn />
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}