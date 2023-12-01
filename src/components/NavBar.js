import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

function NavBar() {
    const { user } = useContext(UserContext);

    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo-img" src="./images/logo.png" alt="" />
            </Link>
            <nav>
                <div>
                    <Link to="/fruits">Fruits</Link>
                    <Link to='/search'>Search</Link>
                </div>
                {user.accessToken
                    ? <div className="user">
                        <Link to='/create'>Add Fruit</Link>
                        <Link to='/logout'>Logout</Link>
                    </div>
                    : <div className="guest">
                        <Link to="/login">Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>}
            </nav>
        </header>
    );
};

export default NavBar;