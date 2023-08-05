import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Validation from './Validation';
// import './style.css'


function SignupForm() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        confirm_password: ''
    })

    const [errors, setErrors] = useState(null)
    
    // const handleInput = (e) => {
    //     // setValues({...values, [e.target.name]:[e.target.value]})
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // }

    function handleValidation(e){
        e.preventDefault()
        setErrors(Validation(values))
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                {/* <div className='text-danger'>
                    {error && error}
                </div> */}
                <h2>Signup Form</h2>
                <form onSubmit={handleValidation}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' 
                          onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0' autoComplete='off'/>
                          {errors && errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                           onChange={e => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
                          {errors && errors.password && <p style={{color:"red"}}>{errors.password}</p>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="confirm_password"><strong>Confirm Password</strong></label>
                        <input type="password" placeholder='Enter Confirm Password' name='confirm_password'
                          onChange={e => setValues({...values, confirm_password: e.target.value})} className='form-control rounded-0' />
                          {errors && errors.confirm_password && <p style={{color:"red"}}>{errors.confirm_password}</p>}
                    </div>
                    <button className='btn btn-success w-50 rounded-0 '> Cancel</button>
                    <button  className='btn btn-success w-50 rounded-0 ' > SignUp</button>
                    <p>You are agree to our terms and policies</p>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;


