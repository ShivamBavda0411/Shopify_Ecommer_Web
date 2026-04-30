import React, { useState } from 'react'
import "../CSS/LoginSignup.css"

const LoginSignup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agree) {
      alert("Please agree to the terms!");
      return;
    }

    // Step 1: show message
    setMessage("Signup successful!");

    // Step 2: clear form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        password: ""
      });
      setAgree(false);
    }, 2000);

    // Step 3: remove message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <form className='loginsignup-fields' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Your Name'
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button type="submit">Continue</button>
        </form>

        {message && <p className="success-msg">{message}</p>}

        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>

        <div className='loginsignup-agree'>
          <input
            type='checkbox'
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
// import React from 'react'
// import "../CSS/LoginSignup.css"
// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className='loginsignup-fields'>
//           <input type='text' placeholder='Your Name'/>
//           <input type='email' placeholder='Email Address'/>
//           <input type='password' placeholder='Password'/>
//           <button>Continue</button>
//         </div>
        
//         <p className="loginsignup-login">
//           Already have an account ? <span>Login here</span>
//         </p>
//         <div className='loginsignup-agree'>
//           <input type='checkbox' name='' id=''/>
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup