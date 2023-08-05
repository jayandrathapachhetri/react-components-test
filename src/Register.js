import React, { useState} from 'react';
// import { useNavigate  } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const navigate = useNavigate();
  
  // async function signUp() {
  //   let data = { name, email, password };

  //   let result = await fetch('http://localhost:3000/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify(data)
  //     });
  //     result=await result.json();
  //     console.warn("result",result)
  //     localStorage.setItem('user-info',JSON.stringify(result));
  //     // navigate('/login')
  //     // navigate('/header');
  // }


  return (
    // <div className="SignUp">
    //   <h1>SignIn Page</h1>
    //   <input type="text" name="name" placeholder =" name" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
    //   <input type="text" name="email" placeholder =" email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
    //   <input type="text" name="password" placeholder =" password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
    //   <button type="button" onClick={saveData}>Submit</button>
    // </div>

<div className='d-flex justify-content-center align-items-center vh-100 signupPage'>
<div className='p-3 rounded w-25 border signupForm'>
    <h2><strong>SignUP</strong></h2>
    <form>
        <div className='mb-3'>
            {/* <label htmlFor="email"><strong>Name</strong></label> */}
            < input type="text" name="name" placeholder ="Name" value={name} onChange={(e) => setName(e.target.value)} className='form-control rounded-0' autoComplete='off'/>
        </div>
        <div className='mb-3'>
            {/* <label htmlFor="email"><strong>Email</strong></label> */}
            <input type="text" name="email" placeholder ="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0' autoComplete='off'/>
        </div>
        <div className='mb-3'>
            {/* <label htmlFor="password"><strong>Password</strong></label> */}
            <input type="text" name="password" placeholder =" Password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0' />
        </div>
        <button type="button" onClick={signUp} className='btn btn-success w-100 rounded-0'> Sign Up</button>

    </form>
</div>
</div>
  );
}

export default Register;

