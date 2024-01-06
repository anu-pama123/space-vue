import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// style
import "../../Pages/Login/login.css";

const Login = () => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    let [userData, setUserData] = useState({
        userName : null,
        password : null
    })
    const userName = 'fincraft';
    const password = 'fincraft123';

    const login = (event,userData) => {
        event.preventDefault();
        if(userData.userName !== null && userData.password !== null) {
            if(userData.userName === userName && userData.password === password) {
                navigate('/dashboard');
            } else {
                setShowError('Please enter correct user name or password');
            }
        } else {
            setShowError('Please enter the username & password');
        }
    }
    return (
        <div className="login-page">
            <div className="form">
                <div className="login">
                    <div className="login-header">
                        <h3 className='login-title'>LOGIN</h3>
                        <p>Please enter your credentials to login.</p>
                    </div>
                </div>
                <form className="login-form">
                    <input type="text" placeholder="username" onChange={(e) => {
                        setUserData({...userData, 'userName' : e.target.value}); 
                        setShowError(false);
                    }}/>
                    <input type="text" placeholder="password" onChange={(e) => {
                        setUserData({...userData, 'password' : e.target.value}); 
                        setShowError(false);
                    }}/>
                    <button onClick={(e) => login(e, userData)}>login</button>
                </form>
                {showError !== false ? (
                    <div>
                        <h2 className='error-text'>{showError}</h2>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Login;