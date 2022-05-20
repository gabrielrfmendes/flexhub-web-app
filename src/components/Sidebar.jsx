import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Nav = styled.nav({
    backgroundColor: '#fff',
    color: '#000',
    padding: '0.3rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
});

const NavLink = styled(Link)({
    backgroundColor: 'royalblue',
    color: '#fff',
    display: 'flex',
    width: '200px',
    margin: '0.3rem',
    padding: '0.5rem 0.3rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none'
});

function Sidebar() {
    return (
        <Nav>
            <img src={Logo} height='50' alt="Logo" />
            <NavLink to='/view-1'>Link 1</NavLink>
            <NavLink to='/view-2'>Link 2</NavLink>
            <NavLink to='/view-3'>Link 3</NavLink>
        </Nav>
    )
}

export default Sidebar;