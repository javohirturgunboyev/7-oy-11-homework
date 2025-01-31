// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// function Register() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   function handleSubmit(e) {
//     e.preventDefault()

//     const user = {
//       username,
//       password
//     }
//     console.log("User Data:", user);
//     axios.post("https://json-api.uz/api/project/muhsinjon/auth/register", user, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     .then((res) => {
//       if (res.status === 200) {
//         navigate('/login')
//       }
//     })
//     .catch((err) => {
//       console.log("Error:", err.response ? err.response.data : err);
//       alert('Registration failed! Please check your input.');
//     })
//   }
//   function handleClick(){
//     navigate('/login')
//   }

//   return (
//     <div>
//       <form className='flex flex-col border w-[450px] rounded-md mx-auto mt-[100px] p-5 bg-yellow-300' onSubmit={handleSubmit}>
//         <h1 className='text-4xl mb-5 text-white text-center'>Register Forma</h1>
//         <input
//           type="text"
//           className='w-[400px] border bg-gray-300 p-3 rounded-md mb-2 text-white text-xl'
//           placeholder='Enter username'
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className='w-[400px] border bg-gray-300 p-3 rounded-md mb-2 text-white text-xl'
//           placeholder='Enter password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className='w-[400px] p-3 bg-green-400 rounded-md text-white text-xl'
//         >
//           Register
//         </button>
//         <button
//           type='submit'
//           onClick={handleClick}
//           className='w-[400px] p-3 mt-5 bg-green-400 rounded-md text-white text-xl'
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const user = {
      username,
      password
    };
    axios.post("https://json-api.uz/api/project/muhsinjon/auth/register", user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      if (res.status === 200) {
        navigate('/');
        const accessToken = res.data.access_token;
        localStorage.setItem('access_token', accessToken);
      }
    })
    .catch(err => {
      console.error(err);
      alert('Login failed. Please check your credentials.');
    });
  }
  function handleRegister(){
    navigate('/register')
  }

  return (
    <div>
      <form className='flex flex-col border w-[650px] rounded-md mx-auto mt-[100px] p-5 bg-gray-500'>
        <h1 className='text-4xl mb-5 text-white text-center'>Register Sahifasi</h1>
        <input
          type="text"
          className='w-[500px] mx-auto border bg-gray-300 p-3 rounded-md mb-10 mt-10 text-white text-xl '
          placeholder='Enter username'
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
        />
        <input
          type="password"
          className='w-[500px] mx-auto border bg-gray-300 p-3 rounded-md mb-10 text-white text-xl'
          placeholder='Enter password'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <button
          type='submit'
          onClick={handleClick}
          className='w-[500px] mx-auto p-3 bg-white rounded-md mb-10 text-black text-xl'
        >
          Register qilib utish
        </button>
        <p
          type='submit'
          onClick={handleRegister}
          className='text-white text-2xl mx-auto mb-10 cursor-pointer'
        >
          Login sahifasiga utish uchun bosing
        </p>
      </form>
    </div>
  );
}

export default Register;