import logo from './logo.svg';
// import './App.css';
 import InputField from './components/InputField'
 import Button from './components/Button'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 import "./styles/loginPage.css"

// function App() {
//   // const onClick = () => {
//   //   const val=prompt("Enter your name");
//   //   console.log(val);
//   // }
//   const [userName,setUserName]=useState('');
//   const [displayName,setDisplayName]=useState('');

//   useEffect(()=>{
    
//       setDisplayName("SampleName");
    
//   },[]);

//   useEffect(()=>{
//     if(userName){
//       setDisplayName(userName);
//     }
//   },[userName]);

//   const onChange=(value) => {
//     setUserName(value);
//   };

  const Login =()=>{
    const navigate = useNavigate();
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* // <div>
      
      // <h2>Home</h2>
      // <button onClick={onClick}>open</button>
      // </div> */}

      {/* return() */}
      <>
      <img className='logo' src="kv logo.png" alt='kv logo' />
      <InputField labelName="username-label" inputName="username-input" label='Username' />
      {/* <InputField label='Name' onChange={onChange}/> */}
      <InputField inputName="password-input" placeholder="Password" />

      <Button className="Login" label='Login'  handleClick={()=>navigate("/create")}/>
      {/* {displayName && <h1>Hello{displayName}</h1>} */}
     
      
      </>
       </div>
  );
}

export default Login;
