import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import { login } from '../services/authService';

function LoginPage() {
    const { userLogin } = useContext(UserContext);

    function onSubmit(e) {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        login(email, password)
            .then(userData => {
                userLogin(userData);
            });
    };

    return (
        <section id="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default LoginPage;