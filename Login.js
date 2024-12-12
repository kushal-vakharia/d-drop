// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // function Login() {
// // // //   const [userName, setUserName] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [message, setMessage] = useState('');

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();  // Prevent the default form submission
// // // //     const userData = {
// // // //       AppUserName: userName,
// // // //       AppPassword: password,
// // // //     };

// // // //     try {
// // // //       // Make POST request to the backend to login the user
// // // //       const response = await axios.post('https://localhost:44310/api/auth/login', userData);
      
// // // //       if (response.data) {
// // // //         setMessage(response.data.message);
// // // //       } else {
// // // //         setMessage('Unexpected error occurred!');
// // // //       }
// // // //     } catch (error) {
// // // //       // Handle errors from the backend
// // // //       if (error.response && error.response.data) {
// // // //         setMessage(error.response.data.message);
// // // //       } else {
// // // //         setMessage('Error occurred during login!');
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Login</h2>
// // // //       <form onSubmit={handleLogin}>
// // // //         <div>
// // // //           <label>Username</label>
// // // //           <input
// // // //             type="text"
// // // //             value={userName}
// // // //             onChange={(e) => setUserName(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <label>Password</label>
// // // //           <input
// // // //             type="password"
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <button type="submit">Login</button>
// // // //       </form>
// // // //       {message && <p>{message}</p>}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;
// // // //-------1

// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import './Login.css'; // Importing the CSS file

// // // // function Login() {
// // // //   const [userName, setUserName] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [message, setMessage] = useState('');

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault(); // Prevent the default form submission
// // // //     const userData = {
// // // //       AppUserName: userName,
// // // //       AppPassword: password,
// // // //     };

// // // //     try {
// // // //       // Make POST request to the backend to login the user
// // // //       const response = await axios.post('https://localhost:44310/api/auth/login', userData);
      
// // // //       if (response.data) {
// // // //         setMessage(response.data.message);
// // // //       } else {
// // // //         setMessage('Unexpected error occurred!');
// // // //       }
// // // //     } catch (error) {
// // // //       // Handle errors from the backend
// // // //       if (error.response && error.response.data) {
// // // //         setMessage(error.response.data.message);
// // // //       } else {
// // // //         setMessage('Error occurred during login!');
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="login-container">
// // // //       <div className="login-form">
// // // //         <h2 className="login-title">Login</h2>
// // // //         <form onSubmit={handleLogin}>
// // // //           <div className="form-group">
// // // //             <label htmlFor="userName">Username</label>
// // // //             <input
// // // //               type="text"
// // // //               id="userName"
// // // //               value={userName}
// // // //               onChange={(e) => setUserName(e.target.value)}
// // // //               required
// // // //               className="form-input"
// // // //             />
// // // //           </div>
// // // //           <div className="form-group">
// // // //             <label htmlFor="password">Password</label>
// // // //             <input
// // // //               type="password"
// // // //               id="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               required
// // // //               className="form-input"
// // // //             />
// // // //           </div>
// // // //           <button type="submit" className="submit-btn">Login</button>
// // // //         </form>
// // // //         {message && <p className="message">{message}</p>}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;

// // // //2

// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // // // import './Login.css'; // Assuming you have the login styles already

// // // // function Login() {
// // // //   const [userName, setUserName] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [message, setMessage] = useState('');
// // // //   const navigate = useNavigate(); // Use navigate hook

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     const userData = {
// // // //       AppUserName: userName,
// // // //       AppPassword: password,
// // // //     };

// // // //     try {
// // // //       const response = await axios.post('https://localhost:44310/api/auth/login', userData);

// // // //       if (response.data) {
// // // //         // Assuming the response contains the user data (adjust as necessary)
// // // //         localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in localStorage

// // // //         // Redirect to dashboard using navigate
// // // //         navigate('/dashboard');
// // // //       } else {
// // // //         setMessage('Unexpected error occurred!');
// // // //       }
// // // //     } catch (error) {
// // // //       if (error.response && error.response.data) {
// // // //         setMessage(error.response.data.message);
// // // //       } else {
// // // //         setMessage('Error occurred during login!');
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="login-container">
// // // //       <div className="login-form">
// // // //         <h2 className="login-title">Login</h2>
// // // //         <form onSubmit={handleLogin}>
// // // //           <div className="form-group">
// // // //             <label htmlFor="userName">Username</label>
// // // //             <input
// // // //               type="text"
// // // //               id="userName"
// // // //               value={userName}
// // // //               onChange={(e) => setUserName(e.target.value)}
// // // //               required
// // // //               className="form-input"
// // // //             />
// // // //           </div>
// // // //           <div className="form-group">
// // // //             <label htmlFor="password">Password</label>
// // // //             <input
// // // //               type="password"
// // // //               id="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               required
// // // //               className="form-input"
// // // //             />
// // // //           </div>
// // // //           <button type="submit" className="submit-btn">Login</button>
// // // //         </form>
// // // //         {message && <p className="message">{message}</p>}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;

// // // //-----------------------------
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import './Login.css'; // Assuming you have the login styles already

// // // // function Login() {
// // // //   const [userNameOrEmail, setUserNameOrEmail] = useState('');  // Allow either username or email
// // // //   const [password, setPassword] = useState('');
// // // //   const [message, setMessage] = useState('');

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     const userData = {
// // // //       AppUserName: userNameOrEmail,  // Send the input as AppUserName for both username and email
// // // //       AppPassword: password,
// // // //     };

// // // //     try {
// // // //       // Send the POST request to the backend
// // // //       const response = await axios.post('https://localhost:44310/api/auth/login', userData);

// // // //       if (response.data) {
// // // //         localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in localStorage
// // // //         // Redirect to dashboard using navigate
// // // //       } else {
// // // //         setMessage('Unexpected error occurred!');
// // // //       }
// // // //     } catch (error) {
// // // //       if (error.response && error.response.data) {
// // // //         setMessage(error.response.data.message);
// // // //       } else {
// // // //         setMessage('Error occurred during login!');
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="login-container">
// // // //       <div className="login-form">
// // // //         <h2 className="login-title">Login</h2>
// // // //         <form onSubmit={handleLogin}>
// // // //           <div className="form-group">
// // // //             <label htmlFor="userNameOrEmail">Username or Email</label>
// // // //             <input
// // // //               type="text"
// // // //               id="userNameOrEmail"
// // // //               value={userNameOrEmail}
// // // //               onChange={(e) => setUserNameOrEmail(e.target.value)}
// // // //               required
// // // //               className="form-input"
// // // //             />
// // // //           </div>
// // // //           <div className="form-group">
// // // //             <label htmlFor="password">Password</label>
// // // //             <input
// // // //               type="password"
// // // //               id="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               required
// // // //               className="form-input"
// // // //             />
// // // //           </div>
// // // //           <button type="submit" className="submit-btn">Login</button>
// // // //         </form>
// // // //         {message && <p className="message">{message}</p>}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;

// // // /////


// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import './Login.css'; // Assuming you have the login styles already

// // // function Login() {
// // //   const [userNameOrEmail, setUserNameOrEmail] = useState('');  // Allow either username or email
// // //   const [password, setPassword] = useState('');
// // //   const [message, setMessage] = useState('');  // To display error/success messages

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();  // Prevent default form submission
// // //     const userData = {
// // //       AppUserName: userNameOrEmail,  // Pass the username or email
// // //       AppPassword: password,
// // //     };

// // //     try {
// // //       const response = await axios.post('https://localhost:44310/api/Auth/login', userData);
      
// // //       // Check if the response contains user data
// // //       if (response.data) {
// // //         // Store user data in localStorage
// // //         localStorage.setItem('user', JSON.stringify(response.data.user));

// // //         // You can redirect or perform other actions here
// // //         setMessage('Login successful!'); // Success message
// // //       }
// // //     } catch (error) {
// // //       if (error.response && error.response.data) {
// // //         // Show error message from the backend
// // //         setMessage(error.response.data.message || 'Error occurred during login!');
// // //       } else {
// // //         setMessage('Error occurred during login!');
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="login-container">
// // //       <div className="login-form">
// // //         <h2 className="login-title">Login</h2>
// // //         <form onSubmit={handleLogin}>
// // //           <div className="form-group">
// // //             <label htmlFor="userNameOrEmail">Username or Email</label>
// // //             <input
// // //               type="text"
// // //               id="userNameOrEmail"
// // //               value={userNameOrEmail}
// // //               onChange={(e) => setUserNameOrEmail(e.target.value)}
// // //               required
// // //               className="form-input"
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <label htmlFor="password">Password</label>
// // //             <input
// // //               type="password"
// // //               id="password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //               className="form-input"
// // //             />
// // //           </div>
// // //           <button type="submit" className="submit-btn">Login</button>
// // //         </form>
// // //         {message && <p className="message">{message}</p>}  {/* Display the message */}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
// // import './Login.css';

// // function Login() {
// //   const [userNameOrEmail, setUserNameOrEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [message, setMessage] = useState('');
// //   const navigate = useNavigate();  // Initialize navigate hook

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     const userData = {
// //       AppUserName: userNameOrEmail,
// //       AppPassword: password,
// //     };
   

// //     try {
// //      // axios.post('https://localhost:44310/api/auth/login', userData);

// //       const response = await axios.post('https://localhost:44310/api/auth/login', userData);

// //       if (response.data) {
// //         localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user to localStorage

// //         // Redirect to dashboard after login
// //         navigate('/dashboard');  // Replace '/dashboard' with your actual route
// //       }
// //     } catch (error) {
// //       if (error.response && error.response.data) {
// //         setMessage(error.response.data.message || 'Error occurred during login!');
// //       } else {
// //         setMessage('Error occurred during login!');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <div className="login-form">
// //         <h2 className="login-title">Login</h2>
// //         <form onSubmit={handleLogin}>
// //           <div className="form-group">
// //             <label htmlFor="userNameOrEmail">Username or Email</label>
// //             <input
// //               type="text"
// //               id="userNameOrEmail"
// //               value={userNameOrEmail}
// //               onChange={(e) => setUserNameOrEmail(e.target.value)}
// //               required
// //               className="form-input"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="form-input"
// //             />
// //           </div>
// //           <button type="submit" className="submit-btn">Login</button>
// //         </form>
// //         {message && <p className="message">{message}</p>}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css'; // Assuming you have the login styles already

// function Login() {
//   const [userNameOrEmail, setUserNameOrEmail] = useState('');  // Allow either username or email
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');  // To display error/success messages

//   const handleLogin = async (e) => {
//     e.preventDefault();  // Prevent default form submission

//     // Prepare the user data
//     const userData = {
//       AppUserName: userNameOrEmail,  // Pass the username or email
//       AppPassword: password,
//     };

//     try {
//       // Ensure the request is sent to the correct backend URL
//       const response = await axios.post('https://localhost:44310/api/auth/login', userData, {
//         headers: {
//           'Content-Type': 'application/json',  // Ensure correct content type
//         },
//       });

//       // Check if the response contains user data
//       if (response.data) {
//         // Store user data in localStorage
//         localStorage.setItem('user', JSON.stringify(response.data.user));

//         // You can redirect or perform other actions here
//         setMessage('Login successful!'); // Success message
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         // Show error message from the backend
//         setMessage(error.response.data.message || 'Error occurred during login!');
//       } else {
//         setMessage('Error occurred during login!');
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="userNameOrEmail">Username or Email</label>
//             <input
//               type="text"
//               id="userNameOrEmail"
//               value={userNameOrEmail}
//               onChange={(e) => setUserNameOrEmail(e.target.value)}
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
//           <button type="submit" className="submit-btn">Login</button>
//         </form>
//         {message && <p className="message">{message}</p>}  {/* Display the message */}
//       </div>
//     </div>
//   );
// }

// export default Login;


// final 
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css'; // Assuming you have login styles in this file

// function Login() {
//   const [username, setUsername] = useState('');  // Store the username for login
//   const [password, setPassword] = useState('');  // Store the password
//   const [message, setMessage] = useState('');  // Display success/error messages

//   // Handle login form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();  // Prevent default form submission

//     const userData = {
//       AppUserName: username,  // Send the username in AppUserName field
//       AppPassword: password,  // Send the password
//     };

//     try {
//       // Send POST request to the backend API
//       const response = await axios.post('https://localhost:44310/api/auth/login', userData, {
//         headers: {
//           'Content-Type': 'application/json',  // Ensure the correct content type
//         },
//       });

//       // On success, save the user data (optional)
//       if (response.data) {
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//         setMessage('Login successful!');
        
//         // You can optionally redirect the user after successful login
//         // window.location.href = '/dashboard'; // Redirect to another page
//       }
//     } catch (error) {
//       // Handle error responses from the backend
//       if (error.response && error.response.data) {
//         setMessage(error.response.data.message || 'Error occurred during login!');
//       } else {
//         setMessage('Error occurred during login!');
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}  // Update the username value
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
//               onChange={(e) => setPassword(e.target.value)}  // Update the password value
//               required
//               className="form-input"
//             />
//           </div>
//           <button type="submit" className="submit-btn">Login</button>
//         </form>

//         {message && <p className="message">{message}</p>} {/* Display error or success message */}
//       </div>
//     </div>
//   );
// }

// export default Login;
//-------------------------------------------------------------------------------------

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './Login.css'; // Assuming you have login styles in this file

function Login() {
  const [username, setUsername] = useState('');  // Store the username for login
  const [password, setPassword] = useState('');  // Store the password
  const [message, setMessage] = useState('');  // Display success/error messages
  
  const navigate = useNavigate();  // Initialize the navigate function

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission

    const userData = {
      AppUserName: username,  // Send the username in AppUserName field
      AppPassword: password,  // Send the password
    };

    try {
      // Send POST request to the backend API
      const response = await axios.post('https://localhost:44310/api/auth/login', userData, {
        headers: {
          'Content-Type': 'application/json',  // Ensure the correct content type
        },
      });

      // Log the entire response for debugging
      console.log('API Response:', response.data.user.appUserId);

      // Ensure the response has user data
      if (response.data && response.data.user) {
        console.log('User ID:', response.data.user.AppUserId);
        // Save the userId in localStorage
        localStorage.setItem('userId', response.data.user.appUserId);  // Save userId
        setMessage('Login successful!');

        // Redirect to the dashboard after successful login
        navigate('/dashboard');  // Redirect to the dashboard route
      } else {
        setMessage('Unexpected response structure!');
      }
    } catch (error) {
      // Handle error responses from the backend
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'Error occurred during login!');
      } else {
        setMessage('Error occurred during login!');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  // Update the username value
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
              onChange={(e) => setPassword(e.target.value)}  // Update the password value
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>

        {message && <p className="message">{message}</p>} {/* Display error or success message */}
      </div>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Assuming you have login styles in this file

// function Login() {
//   const [username, setUsername] = useState('');  // Store the username for login
//   const [password, setPassword] = useState('');  // Store the password
//   const [message, setMessage] = useState('');  // Display success/error messages
//   const navigate = useNavigate(); // useNavigate hook for navigation

//   // Handle login form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();  // Prevent default form submission
  
//     const userData = {
//       AppUserName: username,  // Send the username
//       AppPassword: password,  // Send the password
//     };
  
//     try {
//       // Send POST request to the backend API to authenticate the user
//       const response = await axios.post('https://localhost:44310/api/auth/login', userData, {
//         headers: {
//           'Content-Type': 'application/json',  // Ensure the correct content type
//         },
//       });
  
//       // Check if the response contains user data and save the userId in localStorage
//       if (response.data && response.data.user) {
//         if (response.data.user.AppUserId) {
//           localStorage.setItem('userId', response.data.user.AppUserId);  // Store just the userId
//           setMessage('Login successful!');
//           console.log('Login successful, user ID:', response.data.user.AppUserId);
//           navigate('/dashboard');  // Redirect to the dashboard
//         } else {
//           setMessage('No user ID in response!');
//           console.log('No user ID found in response:', response.data);
//         }
//       }
//     } catch (error) {
//       // Handle error responses from the backend
//       if (error.response && error.response.data) {
//         setMessage(error.response.data.message || 'Error occurred during login!');
//       } else {
//         setMessage('Error occurred during login!');
//       }
//     }
//   };
  
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}  // Update the username value
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
//               onChange={(e) => setPassword(e.target.value)}  // Update the password value
//               required
//               className="form-input"
//             />
//           </div>
//           <button type="submit" className="submit-btn">Login</button>
//         </form>

//         {message && <p className="message">{message}</p>} {/* Display error or success message */}
//       </div>
//     </div>
//   );
// }

// export default Login;
