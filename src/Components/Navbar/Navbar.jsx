import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import { NavDropdown } from 'react-bootstrap';
import "./Header.css";



function NavBar() {
    return (
        <div className='header'>
            <Navbar data-bs-theme="dark" className='p-5'>
                <Navbar.Brand href="#home" className='col-4'><Logo></Logo></Navbar.Brand>
                    <Nav className="col-8 justify-content-end px-5 fs-5">
                        <NavDropdown title="PRODUCTOS" id="navbarscrollingproductos" className='my-auto'>
                        <NavDropdown.Item href='#Sabores' className='fw-semibold'>
                        SABORES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Tentaciones' className='fw-semibold'>
                        TENTACIONES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Preenvasados'className='fw-semibold'>
                        PRE ENVASADOS
                        </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="DÓNDE ESTAMOS" id="navbarscrollingdondeestamos" className='my-auto'>
                        <NavDropdown.Item href='#Locales' className='fw-semibold'>
                        LOCALES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#PuntosDeVenta' className='fw-semibold'>
                        PUNTOS DE VENTA
                        </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="NOSOTROS" id="navbarscrollingproductos" className='my-auto'>
                        <NavDropdown.Item href='#QuienesSomos' className='fw-semibold'>
                        QUIENES SOMOS
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Novedades' className='fw-semibold'>
                        NOVEDADES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#AbriTuFranquicia'className='fw-semibold'>
                        ABRÍ TU FRANQUICIA
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Contacto'className='fw-semibold'>
                        CONTACTO
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#Carrito' className='my-auto'><CartWidget items={3} /></Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;