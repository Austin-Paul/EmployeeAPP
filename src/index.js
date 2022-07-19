import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateEmployee from './CreateEmployee';
import Login from './Login';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/Counter';
import Employee from './EmployeePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/create" element={<CreateEmployee/>}/>
      <Route path="/edit/:id" element={<CreateEmployee/>}/>
      {/* <Route path="/employee" element={<App/>}/> */}
      {/* <Route path="/counter" element={<Counter />}/> */}
      {/* <Route path="/employee" element={<Employee />}/> */}
{/* <App/> */}
{/* <Login/> */}
    {/* <CreateEmployee /> */}
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
