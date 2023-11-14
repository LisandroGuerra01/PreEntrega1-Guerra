import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import { NavDropdown } from 'react-bootstrap';



function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className='p-5'>
                <Navbar.Brand href="#home" className='col-4 justify-content-start'><Logo></Logo></Navbar.Brand>
                    <Nav className="me-auto col-8 justify-content-end">
                        <NavDropdown title="PRODUCTOS" id="navbarscrollingproductos" className='text-white my-auto'>
                        <NavDropdown.Item href='#Sabores' className='text-white'>
                        SABORES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Tentaciones' className='text-white'>
                        TENTACIONES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Preenvasados'className='text-white'>
                        PRE ENVASADOS
                        </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="DÓNDE ESTAMOS" id="navbarscrollingdondeestamos" className='text-white my-auto'>
                        <NavDropdown.Item href='#Locales' className='text-white'>
                        LOCALES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#PuntosDeVenta' className='text-white'>
                        PUNTOS DE VENTA
                        </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="NOSOTROS" id="navbarscrollingproductos" className='text-white my-auto'>
                        <NavDropdown.Item href='#QuienesSomos' className='text-white'>
                        QUIENES SOMOS
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Novedades' className='text-white'>
                        NOVEDADES
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#AbriTuFranquicia'className='text-white'>
                        ABRÍ TU FRANQUICIA
                        </NavDropdown.Item>
                        <NavDropdown.Item href='#Contacto'className='text-white'>
                        CONTACTO
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#Carrito' className='text-white my-auto'><CartWidget items={3} /></Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;