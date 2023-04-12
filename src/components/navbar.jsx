import { Link } from 'react-router-dom';
import logo from '../constants/donyorbek.png'

const Navbar = () => {
  return (
    <div>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-3">
        <Link to={'./'}>
        <img src={logo} alt="" width={100}/>
        </Link>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link to={'/login'} className='me-3 py-2 text-dark text-decoration-none'>Login</Link>
          <Link to={'/register'} className='me-3 py-2 text-dark text-decoration-none'>Register</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
