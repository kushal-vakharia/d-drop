// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Register() {
// //   const [userName, setUserName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleRegister = async (e) => {
// //     e.preventDefault();  // Prevent the default form submission
// //     const userData = {
// //       AppUserName: userName,
// //       AppPassword: password,
// //     };

// //     try {
// //       // Make POST request to the backend to register the user
// //      // const response = await axios.post('http://localhost:5000/api/auth/register', userData);

// //       const response = await axios.post('https://localhost:44310/api/auth/register', userData);
      
// //       if (response.data) {
// //         setMessage(response.data.message);
// //       } else {
// //         setMessage('Unexpected error occurred!');
// //       }
// //     } catch (error) {
// //       // Handle errors from the backend
// //       if (error.response && error.response.data) {
// //         setMessage(error.response.data.message);
// //       } else {
// //         setMessage('Error occurred during registration!');
// //       }
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       <form onSubmit={handleRegister}>
// //         <div>
// //           <label>Username</label>
// //           <input
// //             type="text"
// //             value={userName}
// //             onChange={(e) => setUserName(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Register</button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // }


//--------------------------

// // export default Register;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css'; // Importing the CSS file

// function Register() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     const userData = {
//       AppUserName: userName,
//       AppPassword: password,
//     };

//     try {
//       // Make POST request to the backend to register the user
//       const response = await axios.post('https://localhost:44310/api/auth/register', userData);
      
//       if (response.data) {
//         setMessage(response.data.message);
//       } else {
//         setMessage('Unexpected error occurred!');
//       }
//     } catch (error) {
//       // Handle errors from the backend
//       if (error.response && error.response.data) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('Error occurred during registration!');
//       }
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-form">
//         <h2 className="register-title">Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="form-group">
//             <label htmlFor="userName">Username</label>
//             <input
//               type="text"
//               id="userName"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="form-input"
//             />
//           </div>
//           <button type="submit" className="submit-btn">Register</button>
//         </form>
//         {message && <p className="message">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Importing the CSS file

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');  // New state for email
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const userData = {
      AppUserName: userName,
      AppPassword: password,
      AppEmail: email,  // Include email in the registration request
    };

    try {
      // Make POST request to the backend to register the user
      const response = await axios.post('https://localhost:44310/api/auth/register', userData);
      
      if (response.data) {
        setMessage(response.data.message);
      } else {
        setMessage('Unexpected error occurred!');
      }
    } catch (error) {
      // Handle errors from the backend
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Error occurred during registration!');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Register;
