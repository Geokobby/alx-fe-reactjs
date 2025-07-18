import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: 'blue', justifyContent:'center'}}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
    );
}

export default Navbar;