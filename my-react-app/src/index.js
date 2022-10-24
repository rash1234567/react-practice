import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import './component/data.js'
import Counter from './counter folder/counter';
import UserInputForm from './userinput/userinput';
import Parent from './userinput/userinput';
import Navbar from './component/navbar';
import NewNavbar from './Navbar component/navbar';
import Game from './tic tac toe component/ticTac';
import Contact from './scrimba contact/scrimbaConatct';
import Main from './Navbar component/main';
import Calculator from './calculator component/calculator';
import ColorFlipper from './background color/backgroundcolor';
import Form from './form component/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);

