import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo-img" src="./images/logo.png" alt="" />
            </Link>
            <nav>
                <div>
                    <Link to="/fruits">Fruits</Link>
                    <a href="#">Search</a>
                </div>

                <div className="user">
                    <a href="#">Add Fruit</a>
                    <a href="#">Logout</a>
                </div>

                <div className="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;