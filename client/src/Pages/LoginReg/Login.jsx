import React, { useState } from 'react';
import './Login.css'
import { FaInstagram, FaGoogle, FaFacebook, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <div className='LoignDiv'>
            <div className="login">
                <div className="image">
                    <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696405394-plant-pot-stand-651d1780a4081.png?crop=1.00xw:0.856xh;0,0.0792xh&resize=980:*  " alt="" />
                </div>
                <div className="details">
                    <h1 className="title">Log in</h1>
                    <div className="input">
                        <label htmlFor="">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input">
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button disabled={isFetching} className="login-button" onClick={handleClick}>Log in</button>
                    {error && <span>Something went wrong...</span>}
                    <span className="between-button">Or</span>
                    <div className="logOption">
                        <button className="facebook-button">
                            <i><FaFacebook /></i>
                        </button>
                        <button className="google-button">
                            <i><FaGoogle /></i>
                        </button>
                        <button className="instagram-button">
                            <i><FaInstagram /></i>
                        </button>
                    </div>
                    <Link to={'/Register'}>
                        <span className="signup">Can’t log in? Sign Up</span>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Login;
