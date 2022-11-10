import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, 
  Route, Navigate, BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import signup from './signup';
import login from './login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigate to="/App" />
    <Routes>
      <Route exact path="/App" component={App} />
      <Route path="/login" component={login} />
      <Route path="/signup" component={signup} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
