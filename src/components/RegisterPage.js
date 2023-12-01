import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { register } from '../services/authService';
import { UserContext } from '../contexts/UserContext';

function RegisterPage() {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    function onRegisterSubmit(e) {
        e.preventDefault();

        // const form = e.currentTarget;
        // const formData = new FormData(form);

        // const email = formData.get('email');
        // const password = formData.get('password');
        // const rePass = formData.get('re-password');


        const { email, password, 're-password': rePass } = Object.fromEntries(new FormData(e.target));

        if (email === '' || password === '') {
            return alert('Please fill all fields!');
        }

        if (password !== rePass) {
            return alert('Password and Confirm Password must match!');
        }

        register(email, password)
            .then((userData) => {
                userLogin(userData);
                navigate('/');
            })
            .catch(() => {
                navigate('/register');
            });
    };

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="register-form" onSubmit={onRegisterSubmit}>
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                    />
                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                    />
                    <button type="submit">register</button>
                    <p className="message">
                        Already registered? <Link to='/login'>Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;