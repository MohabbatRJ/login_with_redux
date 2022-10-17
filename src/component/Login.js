import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogin } from '../redux/action/action';

export default function Login() {

    
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch();
    const state = useSelector((state) => state.AuthReducer.user);
    console.log('Data in Login', state.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(getLogin(true))
            if (state.email === email && state.pass === password) {
                console.log('Success');
                navigate("/Home")
          } 
          else {
            alert("Credentials did not match");
          }
        } else {
          alert("Wrong Credentials");
        }
      };

    return (
        // <div className='d-flex justify-content-center align-content-center'>
            <div className='d-flex justify-content-center align-items-center'
                style={
                    {
                        height: '100vh',
                        background: '#251f1f'
                    }
                }>
                <form style={
                    {
                        width: '25%',
                        background: '#f4ae1a'
                    }
                }
                    className='p-3 rounded'
                    action='' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className='my-2 fw-bold'
                            style={
                                {
                                    color: '#251f1f',
                                    fontSize: '25px'
                                }
                            }>
                            Email</label>
                        <input type="email" className="form-control my-2 fw-bold" name='email' id="email" placeholder="Enter email" autoComplete='off'
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='my-2 fw-bold'
                            style={
                                {
                                    color: '#251f1f',
                                    fontSize: '25px'
                                }
                            }>Password</label>
                        <input type="password" className="form-control my-2 fw-bold outline-0" id="password" name='password' placeholder="Password" autoComplete='off'
                            value={password}
                            onChange={
                                (e) => setPassword(e.target.value)
                            } />
                    </div>
                    <button type="submit" className="btn btn-warning my-2 fw-bold">Submit</button>

                </form>
            </div>
        // </div>
    )
}
