import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import serachP from '../../asset/search.webp'
import bigLogo from "../../asset/sawadika_500_250.png"
import smallLogo from "../../asset/sawadika_300_80.png"
import "./NavBar.css"

function NavBar() {
    const navWords = [`หนังฝรั่ง`, `หนังไทย`, `หนังเกาหลี`, `หนังญี่ปุ่น`, `หนังจีน`]

    return (
        <>
            <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark opacity-75" >
                <Container className='d-inline-flex'>
                    <Navbar.Brand href="#home"><img className='bigLogo' src={bigLogo}></img></Navbar.Brand>
                    <Nav className="me-auto">
                        {Array.from(navWords)?.map((navWord) => (
                            <Nav.Link className='me-2' href='#'>{navWord}</Nav.Link>)
                        )}
                        <Navbar.Brand className='justify-content-star' href="#home"><img className='smallLogo' src={smallLogo}></img></Navbar.Brand>

                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link><img src={`${serachP}`} alt='serach' className='serchP'></img></Nav.Link>
                        <Nav.Link className='login'>สมัคร</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;