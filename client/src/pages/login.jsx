import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../api';
import './login.css';

function Login() {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState ('');
    const navigate = useNavigate ();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('./auth/login', {email, password});
            localStorage.setItem('token', res.data.token);
            navigate('/tickets');
        } catch (err){
            setError ('Login failed');
        }
    };

    return (
        <div className="login-page">
            <div className= "login-card">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {error && <p>{error}</p>}
                    <input value={email} onChange={(e) => setEmail (e.target.value)} placeholder="Email"/>
                    <input value={password} onChange={(e) => setPassword (e.target.value)} type="password" placeholder="Password"/>
                    <button type='submit'>Login</button>
                </form>
            </div>  
        </div>      
    );
}

export default Login;