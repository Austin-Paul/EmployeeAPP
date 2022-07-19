import logo from './logo.svg';
import './App.css';
 import InputField from './components/InputField'
 import Button from './components/Button'
import { useEffect, useState } from 'react';

function App() {
  // const onClick = () => {
  //   const val=prompt("Enter your name");
  //   console.log(val);
  // }
  const [userName,setUserName]=useState('');
  const [displayName,setDisplayName]=useState('');

  useEffect(()=>{
    
      setDisplayName("SampleName");
    
  },[]);

  useEffect(()=>{
    if(userName){
      setDisplayName(userName);
    }
  },[userName]);

  const onChange=(value) => {
    setUserName(value);
  };

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



      <InputField label='User Name' onChange={onChange}/>
      {/* <InputField label='Password'/>

      <Button label='Login' handleClick={()=>{}}/> */}
      {displayName && <h1>Hello{displayName}</h1>}
      </div>
    
  );
}

export default App;
